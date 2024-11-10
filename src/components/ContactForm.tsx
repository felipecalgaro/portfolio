'use client'

import { sendEmail } from '@/actions/send-email'
import { useToast } from '@/hooks/use-toast'
import clsx from 'clsx'
import SendIcon from '../assets/send-icon.svg'
import Image from 'next/image'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type='submit' className={clsx('text-white px-6 py-2.5 rounded-sm text-lg flex justify-center items-center gap-3 self-start mt-8 active:scale-95 transition-all duration-300', {
      'bg-custom-black/50': pending,
      'bg-custom-black': !pending
    })}>
      Submit
      <Image src={SendIcon} alt='arrow' width={18} height={18} />
    </button>
  )
}

export function ContactForm() {
  const { toast } = useToast()

  return (
    <form
      action={async (formData) => {
        const response = await sendEmail(formData)

        toast({
          description: response.ok ? 'Your message has been sent.' : 'Unexpected error.'
        })
      }}
      className='flex flex-col justify-center gap-4 items-stretch md:w-[600px] xs:w-3/4 w-full mt-8'
    >
      <input required className='ring-zinc-300 ring-1 rounded-sm py-3 px-5' type="email" name="email" placeholder='Your email' />
      <textarea required maxLength={500} className='ring-zinc-300 ring-1 rounded-sm py-3 px-5 h-52' name="message" placeholder='Your message' />
      <SubmitButton />
    </form>
  )
}