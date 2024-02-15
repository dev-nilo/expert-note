import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

export function NewNoteCard() {

    const [ shouldShowOnBoarding, setShouldShowOnBoarding ] = useState(true)
    const [ content, setContent ] = useState('')

    function handleStartEditor() {
        setShouldShowOnBoarding(false)
    }

    function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)

        if(event.target.value === '') {
            setShouldShowOnBoarding(true)
        }
    }

    function handleSaveNote(event: FormEvent) {
        event.preventDefault()

        console.log(content)

        toast.success('aoba')
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md bg-stone-700 text-left flex flex-col p-5 gap-3 outline-none hover:ring-2 hover:ring-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-300">
                <span className='text-sm font-medium text-stone-200'>Adicionar Nota</span>
                <p className='text-sm leading-6 text-stone-400 '><span className='font-medium text-cyan-400 hover:underline'>Grave uma nota </span>que será convertida para texto ou simplesmente <span className='font-medium text-cyan-400 hover:underline'>escreva seu texto</span></p>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-stone-900/50'>
                    <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-stone-700 rounded-md flex flex-col outline-none'>
                        
                    <Dialog.DialogClose  className='absolute right-0 top-0 p-2 bg-red-800 text-stone-400 hover:text-stone-100'>
                        <X className='size-5' />
                    </Dialog.DialogClose>

                    <form
                        className='flex-1 flex flex-col'
                        onSubmit={ handleSaveNote }
                    >
                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className='text-sm font-medium text-stone-200'>
                                Adicionar Nota
                            </span>
                            { shouldShowOnBoarding ? (
                                <p className='text-sm leading-6 text-stone-400'>
                                    <button className='font-medium text-cyan-400 hover:underline'>Grave uma nota</button> que será convertida para texto ou simplesmente <button className='font-medium text-cyan-400 hover:underline' onClick={ handleStartEditor }>escreva seu texto</button>
                                </p> ) : (
                                <textarea
                                    autoFocus
                                    className='text-sm leading-6 text-stone-400 bg-transparent resize-none flex-1 outline-none'
                                    onChange={ handleContentChange }
                                />
                            ) }
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-cyan-400 py-4 text-center text-sm font-medium text-cyan-950 outline-none hover:bg-cyan-600'
                        >
                            Salvar Nota
                        </button>
                    </form>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>

        </Dialog.Root>
    )
}

// React = Components + Properties + States