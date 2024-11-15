'use client'

import clsx from 'clsx'
import Image from 'next/image'
import SmallTriangle from '../assets/small-triangle.svg'
import { motion } from 'framer-motion'

type EventContentProps = {
  isRightOriented: boolean
  content: string
  title: string
}

export function EventContent({ content, isRightOriented, title }: EventContentProps) {
  return (
    <motion.div className={clsx('w-full flex items-start sm:visible invisible', {
      'items-start': isRightOriented,
      'order-first justify-end': !isRightOriented
    })} initial={{ opacity: 0, x: isRightOriented ? 50 : -50 }} whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }} viewport={{ once: true, amount: 0.5 }}>
      <div className='max-w-[500px] border rounded-sm border-zinc-300 bg-zinc-100 py-6 px-8'>
        <h1 className='xl:text-lg text-base font-semibold md:mb-4 sm:block hidden'>{title}</h1>
        <p className='indent-3 md:block hidden'>{content}</p>
      </div>
      <div className={clsx('w-2 shrink-0', {
        'rotate-180 -order-1': isRightOriented
      })}>
        <Image src={SmallTriangle} alt='' width={8} height={8} className='my-8' />
      </div>
    </motion.div>
  )
}