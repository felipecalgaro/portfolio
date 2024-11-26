import { EventDetails } from '@/resources/my-experience';
import { EventButton } from './EventButton';
import clsx from 'clsx';
import { EventContent } from './EventContent';

type EventProps = {
  event: EventDetails
  isRightOriented: boolean
}

export function Event({ event, isRightOriented }: EventProps) {
  return (
    <div className='w-full flex justify-center items-start xl:gap-32 sm:gap-10 gap-4 lg:text-base text-sm'>
      <EventContent content={event.content} isRightOriented={isRightOriented} title={event.title} />
      <EventButton eventIcon={event.icon} isRightOriented={isRightOriented} images={event.images} content={event.content} title={event.title} />
      <p className={clsx('w-full xs:mt-5 mt-2', {
        'order-first text-end': isRightOriented,
        'text-start': !isRightOriented
      })
      }>{event.date[0]}, {event.date[1]}</p>
    </div >
  )
}