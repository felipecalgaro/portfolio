import { events } from '@/resources/my-experience';
import { Event } from './Event';

export function Experience() {
  return (
    <div className='flex justify-center items-center flex-col w-full gap-24' id="experience">
      <h1 className='text-center xs:text-6xl text-5xl font-semibold text-stone-800'>My Experience</h1>
      <div className='events-arrow-image w-full flex flex-col justify-center items-center gap-20 py-14'>
        {events.map((event, index) => <Event event={event} key={event.id} isRightOriented={index % 2 === 1} />)}
      </div>
    </div>
  )
}