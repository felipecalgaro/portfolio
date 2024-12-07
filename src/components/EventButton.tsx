'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

type EventButtonProps = {
  isRightOriented: boolean
  eventIcon: string
  images: string[]
  content: string
  title: string
}

export function EventButton({ isRightOriented, eventIcon, images, content, title }: EventButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div onClick={!isExpanded ? () => setIsExpanded(true) : undefined} className={clsx('rounded-full shadow-xl bg-white xs:p-4 p-2.5 ring-1 ring-zinc-100 cursor-pointer', { '-order-1': isRightOriented })}>
      <Image alt='icon' src={`/${eventIcon}`} height={72} width={72} />
      <div className={clsx('z-40 pt-24 px-12 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.9)] overflow-auto fixed cursor-default', {
        'hidden': !isExpanded,
      })}>
        <div className='animate-[zoom_0.3s] flex items-center flex-col basis-0 gap-2'>
          <Carousel className='max-w-[720px] mx-20'>
            <CarouselContent>
              {images.map(image => (
                <CarouselItem key={image}>
                  <Image width={720} height={400} src={`/${image}`} alt='event' />
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className='bg-transparent text-white' />
                <CarouselNext className='bg-transparent text-white' />
              </>
            )}
          </Carousel>
          <p className='md:hidden block text-white max-w-[720px] xs:px-10 text-center text-lg font-bold'>{title}</p>
          <p className='md:hidden block text-white max-w-[720px] xs:px-10 text-center xs:text-base text-sm font-extralight'>{content}</p>
        </div>
        <p onClick={() => setIsExpanded(false)} className='text-white absolute xs:right-16 right-8 xs:top-6 top-8 xs:text-5xl text-3xl font-extralight cursor-pointer hover:text-zinc-400 transition-all duration-300'>&times;</p>
      </div>
    </div>
  )
}