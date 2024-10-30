import { EventDetails } from '@/resources/my-experience';
import SmallTriangle from '../assets/small-triangle.svg'
import Image from 'next/image';
import { EventButton } from './EventButton';
import clsx from 'clsx';

type EventProps = {
  event: EventDetails
  isRightOriented: boolean
}

export function Event({ event, isRightOriented }: EventProps) {
  return (
    <div className='w-full flex justify-center items-start xl:gap-32 sm:gap-10 gap-4 lg:text-base text-sm'>
      <div className={clsx('w-full flex items-start sm:visible invisible', {
        'items-start': isRightOriented,
        'order-first justify-end': !isRightOriented
      })}>
        <div className='max-w-[500px] border rounded-sm border-zinc-300 bg-zinc-100 py-6 px-8'>
          <h1 className='xl:text-lg text-base font-semibold md:mb-4 sm:block hidden'>{event.title}</h1>
          <p className='indent-3 md:block hidden'>{event.content}</p>
        </div>
        <div className={clsx('w-2 shrink-0', {
          'rotate-180 -order-1': isRightOriented
        })}>
          <Image src={SmallTriangle} alt='' width={8} height={8} className='my-8' />
        </div>
      </div>
      <EventButton eventIcon={event.icon} isRightOriented={isRightOriented} />
      <p className={clsx('w-full xs:mt-5 mt-2', {
        'order-first text-end': isRightOriented,
        'text-start': !isRightOriented
      })
      }>{event.date[0]}, {event.date[1]}</p>
    </div >
  )
}