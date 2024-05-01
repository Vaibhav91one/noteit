
import CreateNoteDialog from '@/components/CreateNoteDialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { UserButton, auth } from '@clerk/nextjs'
import { ArrowLeft, ArrowRight, ArrowRightSquare, ExternalLink, Flag, Lightbulb, Pencil, Sparkle, ThumbsUp } from 'lucide-react'
import { eq } from 'drizzle-orm'
import Link from 'next/link'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ClientRefresh } from '@/components/ClientRefresh'
import { challengesDescription } from '@/constants'
import { Input } from '@/components/ui/input'
import Form from '@/components/Form'

type Props = {}

const Dashboard = async (props: Props) => {

    const { userId } = auth();

    function CheckValidFlag(event: any): void {
        console.log("Working")
        throw new Error('Function not implemented.')
    }

    return (
        <>
            <div className="grainy min-h-screen">
                <div className='max-w-7xl mx-auto p-10'>
                    <div className='h-14'>

                    </div>
                    <div className='flex justify-center items-start  flex-col'>
                        <div className='flex items-center'>
                            <Link href="/">
                                <Button className='bg-green-600' size="sm">
                                    <ArrowLeft className='mr-1 w-4 h-4' />
                                    Back
                                </Button>
                            </Link>
                            <div className='w-4'></div>
                            <h1 className='text-3xl font-bold text-green-900'>
                                Challenges
                            </h1>
                            <div className='w-4'></div>
                            <UserButton />
                        </div>
                    </div>

                    <div className="h-8"></div>
                    <Separator />
                    <div className="h-8"></div>

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3'>

                        {challengesDescription.map((item: any, index: any) => (
                            <Card key={index} className='flex flex-col items-center justify-end'>
                                <Image src={item.imageURL} alt='Challenge Image' width={600} className='object-cover h-36' />
                                <CardHeader>
                                    <CardTitle className='text-md mb-5'>
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription className='text-xs h-12 overflow-hidden overflow-y-auto'>
                                        {item.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='flex flex-col flex-wrap sm:flex-row xl:flex-row gap-2 justify-center  items-center mt-2'>
                                    <div className='mr-5 flex flex-col xl:flex-row justify-center items-center gap-2'>
                                        <Dialog>
                                            <DialogTrigger>
                                                <Button className='bg-green-600 flex flex-row gap-2 hover:bg-green-500 hover:text-black '>
                                                    Submit<Flag />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle className='mb-8 p-2 text-center tracking-wide'>{item.title}</DialogTitle>
                                                    <DialogDescription className='flex flex-col justify-center items-end gap-5'>
                                                        <div className='w-full items-center space-x-2 mb-5 font-regular text-black text-center'>
                                                            {item.description}
                                                        </div>

                                                        <Form ChallengeNumber={item.number} />


                                                        <div className='mt-5 flex flex-row gap-2'>

                                                            <Dialog>
                                                                <DialogTrigger>
                                                                    <Button className="bg-white-500 hover:bg-lime-200 text-black">
                                                                        <Pencil />
                                                                    </Button>
                                                                </DialogTrigger>
                                                                <DialogContent className="flex justify-center items-center flex-wrap ">
                                                                    <p>
                                                                        {item.writeUp}
                                                                    </p>
                                                                </DialogContent>
                                                            </Dialog><HoverCard>
                                                                <HoverCardTrigger>
                                                                    <Button className='bg-green-600 flex flex-row gap-2 hover:bg-green-500 hover:text-black '>
                                                                        Mitigation<Sparkle />
                                                                    </Button>
                                                                </HoverCardTrigger>
                                                                <HoverCardContent>
                                                                    {item.mitigation}
                                                                </HoverCardContent>
                                                            </HoverCard>

                                                        </div>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>

                                        <Button className="bg-white-500 hover:bg-lime-200 text-black">
                                            <a href={item.link} target='_blank' className='flex flex-row justify-center items-center gap-2' >
                                                Challenge <ExternalLink />
                                            </a>
                                        </Button>
                                    </div>


                                    <HoverCard>
                                        <HoverCardTrigger >
                                            <Button className="bg-white-500 text-black hover:bg-lime-200 rounded-full shadow-sm">
                                                <Lightbulb />
                                            </Button>
                                        </HoverCardTrigger>
                                        <HoverCardContent className='flex justify-center items-center'>
                                            {item.hint}
                                        </HoverCardContent>
                                    </HoverCard>

                                </CardContent>

                            </Card>
                        ))}

                    </div>

                </div>
                <ClientRefresh />
            </div>
        </>
    )
}

export default Dashboard