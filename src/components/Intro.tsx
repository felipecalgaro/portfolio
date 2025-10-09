'use client'

import Image from 'next/image';
import { motion } from 'framer-motion'
import GithubIcon from '../assets/github-icon.svg'
import ArrowIcon from '../assets/right-arrow.svg'
import { DownloadButton } from './DownloadButton';

export function Intro() {
  return (
    <div className='flex flex-col justify-start items-center gap-16'>
      <div className='flex justify-center items-center flex-wrap gap-24'>
        <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: .6 } }} viewport={{ once: true }} className='rounded-full p-2 shadow-xl'>
          <Image alt='avatar' src='https://github.com/felipecalgaro.png' height={180} width={180} className='rounded-full' />
        </motion.div>
        <motion.h1 initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: .6 } }} viewport={{ once: true }} className='text-8xl select-none'>👋</motion.h1>
      </div>
      <h1 className='font-crimson text-4xl sm:w-[540px] w-full text-center'><b>Hello, I&apos;m Felipe.</b> I&apos;m a <b>full-stack developer.</b> I enjoy building <i>websites</i> & <i>apps</i>. My focus is <span className='underline underline-offset-4 decoration-2'>Node.js</span> and <span className='underline underline-offset-4 decoration-2'>React</span>. </h1>
      <div className='flex sm:flex-row flex-col justify-center items-center gap-7'>
        <a className='bg-custom-black text-white px-5 py-3 rounded-sm text-xl flex justify-center items-center gap-4' href='#contact'>
          Contact me
          <Image src={ArrowIcon} alt='arrow' width={24} height={24} />
        </a>
        <DownloadButton />
        <div className='flex justify-center items-center gap-8'>
          <a className='ring-[1.3px] ring-custom-black p-3 rounded-sm text-xl flex justify-center items-center gap-2' href='https://github.com/felipecalgaro' target='_blank'>
            <Image src={GithubIcon} alt='github' width={28} height={28} />
          </a>
        </div>
      </div>
    </div>
  )
}