"use client"

import React, { useEffect, useRef, useState, useMemo } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import TipTapMenubar from './TipTapMenubar'
import { Button } from './ui/button'
import { useDebounce } from '@/lib/useDebounce'
import { useMutation } from '@tanstack/react-query'
import Text from '@tiptap/extension-text'
import { NoteType } from '@/lib/db/schema'
import axios from 'axios'
import {useCompletion} from 'ai/react'


type Props = {
    note: NoteType
}

const TipTapEditor = ({ note }: Props) => {

    const [editorState, setEditorState] = useState(note.editorState || `<h1>${note.name}</h1>`);
    const {complete, completion} = useCompletion({
        api: '/api/completion'
    })
    const saveNote = useMutation({
        mutationFn: async () => {
            const response = await axios.post("/api/saveNote", {
                noteId: note.id,
                editorState,
            });

            return response.data
        }
    })

    const customText = Text.extend({
        addKeyboardShortcuts(){
            return{
                'Shift-a' : ()=>{

                    //last 30 words
                    const prompt = this.editor.getText().split(" ").slice(-30).join(" ")

                    complete(prompt)

                    return true;
                }
            }
        }
    })


    const editor = useEditor({
        autofocus: true,
        extensions: [StarterKit, customText],
        content: editorState,
        onUpdate: ({ editor }) => {
            setEditorState(editor.getHTML())
        }
    })

    const debounceEditorState = useDebounce(editorState, 500)

    const lastCompletion = useRef('')
    
    useEffect(()=>{

        if(!completion || !editor) return
        // diff represents the individual token
        const diff = completion.slice(lastCompletion.current.length)
        //updating last completion
        lastCompletion.current = completion;
        //inserting in the editor
        editor?.commands.insertContent(diff)

    }, [completion, editor])


    useEffect(() => {
        //save to db
        if (debounceEditorState === '') {
            return
        }

        saveNote.mutate(undefined, {
            onSuccess: data => {
                console.log("Success", data)
            },
            onError: error => {
                console.log("Error", error)
            }
        })

    }, [debounceEditorState])

    return (
        <>
            <div className='flex mb-10'>
                {editor &&
                    <TipTapMenubar editor={editor} />
                }
                <Button disabled variant={"outline"}>
                    {
                        saveNote.isPending ? 'Saving..' : 'Saved'
                    }
                </Button>
            </div>
            <div className='prose prose-sm w-full mt-4' >
                <EditorContent editor={editor} />
                <div className="h-4"></div>
                <span className='text-sm'>
                    Tip: Press {" "}
                    <kbd className='px-4 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-500 rounded-lg'>
                        Shift + A
                    </kbd>
                    {" "}
                    for AI autocomplete
                </span>
            </div>
        </>
    )
}

export default TipTapEditor