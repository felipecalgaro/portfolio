'use client'

import { useVisibleSection } from '@/hooks/use-visible-section'

const sectionIds = ['about', 'projects', 'skills', 'experience', 'contact']

export function Navbar() {
  const visibleSectionId = useVisibleSection(sectionIds)

  return (
    <div className='sm:flex hidden justify-center items-center lg:gap-14 gap-4 rounded-sm lg:text-xl text-lg text-[#484848] shadow-2xl py-4 sticky top-8 z-50 bg-white lg:w-[800px] w-[500px]'>
      {sectionIds.map(id => (
        <a key={id} href={`#${id}`} className={visibleSectionId === id ? 'bg-[#E4E4E4] rounded-md px-2 py-1 text-custom-black transition-colors duration-300' : 'bg-transparent px-2 py-1'}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
      ))}
    </div>
  )
}