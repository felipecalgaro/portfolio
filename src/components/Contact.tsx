import Image from 'next/image'
import SendIcon from '../assets/send-icon.svg'

export function Contact() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 w-full' id='contact'>
      <h1 className='text-center xs:text-6xl text-5xl font-semibold text-stone-800'>Contact Me</h1>
      <p className='text-center'>Please contact me directly at <span className='underline'>pipecalgaro@gmail.com</span> or through this form.</p>
      <form className='flex flex-col justify-center gap-4 items-stretch md:w-[600px] xs:w-3/4 w-full mt-8'>
        <input className='ring-zinc-300 ring-1 rounded-sm py-3 px-5' type="email" name="email" placeholder='Your email' />
        <textarea className='ring-zinc-300 ring-1 rounded-sm py-3 px-5 h-52' name="email" placeholder='Your message' />
        <button className='bg-custom-black text-white px-6 py-2.5 rounded-sm text-lg flex justify-center items-center gap-3 self-start mt-8'>
          Submit
          <Image src={SendIcon} alt='arrow' width={18} height={18} />
        </button>
      </form>
    </div>
  )
}