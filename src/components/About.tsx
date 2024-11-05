import { aboutMeParagraphs } from '@/resources/about-me';

export function About() {
  return (
    <div id='about' className='text-stone-800 flex flex-col justify-center items-center gap-24'>
      <h1 className='text-center xs:text-6xl text-5xl font-semibold'>About Me</h1>
      <div className='flex justify-center items-center flex-col gap-10 indent-4 max-w-[800px]'>
        {aboutMeParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
