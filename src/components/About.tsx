import { aboutMeText } from '@/resources/about-me';

export function About() {
  return (
    <div id='about' className='text-stone-800 flex flex-col justify-center items-center gap-24'>
      <h1 className='text-center xs:text-6xl text-5xl font-semibold'>About Me</h1>
      <p className='max-w-[800px]'>{aboutMeText}</p>
    </div>
  )
}
