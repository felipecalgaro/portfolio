import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 w-full' id='contact'>
      <h1 className='text-center xs:text-6xl text-5xl font-semibold text-stone-800'>Contact Me</h1>
      <p translate='yes' className='text-center max-w-[600px]'>Please contact me directly at<a translate='no' href='mailto:pipecalgaro@gmail.com' className='underline mx-1'>pipecalgaro@gmail.com</a>or through this form.</p>
      <ContactForm />
    </div>
  )
}