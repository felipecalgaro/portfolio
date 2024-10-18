import { skills } from '@/resources/my-skills';

export function Skills() {
  return (
    <div className='flex flex-col gap-24 justify-center items-center' id='skills'>
      <h1 className='text-center xs:text-6xl text-5xl font-semibold text-stone-800'>My Skills</h1>
      <div className='flex xs:flex-row flex-col justify-center items-center gap-3 flex-wrap lg:w-[900px] md:w-[600px] w-full'>
        {skills.map(skill => (
          <div className='ring-1 ring-zinc-200 text-xl rounded-sm py-2 px-4' key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}