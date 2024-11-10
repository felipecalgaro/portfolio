import { ContactForm } from './ContactForm'

export function Contact() {

  return (
    <div className='flex flex-col justify-center items-center gap-10 w-full' id='contact'>
      <h1 className='text-center xs:text-6xl text-5xl font-semibold text-stone-800'>Contact Me</h1>
      <p className='text-center'>Please contact me directly at <a href='mailto:pipecalgaro@gmail.com' className='underline'>pipecalgaro@gmail.com</a> or through this form.</p>
      <ContactForm />
    </div>
  )
}