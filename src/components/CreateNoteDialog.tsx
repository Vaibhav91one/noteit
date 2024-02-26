'use client'

import { Loader2, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from 'axios'
import { useRouter } from "next/navigation"

type Props = {}

const CreateNoteDialog = (props: Props) => {

    const router = useRouter(); 
    const [input , setInput]  = useState<string>('');
    
    const uploadToFirebase = useMutation({
        mutationFn: async(noteId: string)=>{
            const response = await axios.post('/api/uploadToFirebase', {
                noteId,
            })

            return response.data
        }
    })
    
    const createNoteBook = useMutation({
        mutationFn: async() =>{
            const response = await axios.post('/api/createNoteBook', {name: input})
            return response.data
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(input === ''){
            window.alert("Please add a notebook name!")
          return
        }

        createNoteBook.mutate(undefined, {
            onSuccess: ({note_id}) => {
                console.log({note_id})
               
                // hit firebase endpoint to store image
                uploadToFirebase.mutate(note_id)

                
                router.push(`/notebook/${note_id}`)
            },
            onError: (Error) =>{
                console.log(Error)
                window.alert("failed To create a notebook")
            }
        })


    }

  return (
    <Dialog>
        <DialogTrigger>
            <div className="border-dashed border-2 flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
                <Plus className="w-6 h-6 text-green-600" strokeWidth={2} />
                <h2 className="font-semibold text-green-600 sm:mt-2">
                    New Note Book
                </h2>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-center font-semibold text-2xl mb-5">
                    New Notebook
                </DialogTitle>
                <DialogDescription>
                You can create a new note by clicking the button below.
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Name..." value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <div className="h-4"></div>
                <div className="flex items-center gap-2">
                    <Button type="reset" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" className="bg-green-600" disabled={createNoteBook.isPending}>
                        {createNoteBook.isPending && (
                            <Loader2 className="w-4 h-4 mr-4 animate-spin" />
                        )}
                        Create
                    </Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>    
    )
}

export default CreateNoteDialog