import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'


interface NoteCardProps {
    note: {
        date: Date
        content: string
    }
}

export function NoteCard({ note } : NoteCardProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md text-left flex flex-col bg-stone-800 p-5 gap-3 overflow-hidden outline-none relative hover:ring-2 hover:ring-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-300">
                <span className='text-sm font-medium text-stone-200'>
                    { formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true }) }
                </span>
                <p className='text-sm leading-6 text-stone-400'>
                    { note.content }
                </p>
            
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-stone-950/60 to-stone-950/0 pointer-events-none" />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-stone-900/50'>
                    <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-stone-700 rounded-md flex flex-col outline-none'>
                        
                    <Dialog.DialogClose  className='absolute right-0 top-0 p-2 bg-red-800 text-stone-400 hover:text-stone-100'>
                        <X className='size-5' />
                    </Dialog.DialogClose>

                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className='text-sm font-medium text-stone-200'>
                                { formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true }) }
                            </span>
                            <p className='text-sm leading-6 text-stone-400'>
                                { note.content }
                            </p>
                        </div>

                        <button
                            type='button'
                            className='w-full bg-stone-800 py-4 text-center text-sm font-medium text-stone-300 outline-none group'    
                        >
                            Deseja <span className="text-red-400 group-hover:underline">apagar essa nota?</span>
                        </button>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>    
        </Dialog.Root>
    )
}