'use client'

import { MappedRepository } from '@/utils/map-repositories'
import Image from 'next/image'
import ClosedFolderIcon from '../assets/closed-folder.svg'
import OpenFolderIcon from '../assets/open-folder.svg'
import InfoIcon from '../assets/info-icon.svg'
import RepositoryIcon from '../assets/repo-icon.svg'
import { useState } from 'react'

type RepoTreeProps = {
  repo: MappedRepository
}

export function RepoTree({ repo }: RepoTreeProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false)

  return (
    <div className='flex flex-col justify-center items-start gap-2'>
      <button onClick={() => setIsFolderOpen((prev) => !prev)} className='flex justify-center items-center gap-3'>
        {isFolderOpen ? (
          <div className='flex justify-center items-center w-9'>
            <Image src={OpenFolderIcon} alt='repo' width={32} height={32} />
          </div>
        ) : (
          <div className='flex justify-center items-center w-9'>
            <Image src={ClosedFolderIcon} alt='repo' width={32} height={32} />
          </div>
        )}
        <h1 className='text-blue-500 font-semibold text-start' key={repo.name}>\{repo.name}</h1>
      </button>
      <div className={isFolderOpen ? 'sm:ml-16 ml-8 flex flex-col justify-center items-start gap-6' : 'hidden'}>
        <div className='flex justify-center items-center gap-4 mt-6'>
          <Image src={InfoIcon} alt='info' width={24} height={24} />
          <p translate='yes' className='font-light'>{repo.description}</p>
        </div>
        {repo.hasSubrepositories ? (
          <>
            {repo.subrepositories.map(subRepo => (
              <div className='flex justify-center items-center gap-4' key={subRepo.name}>
                <Image src={RepositoryIcon} alt='repository' width={24} height={24} />
                <a href={subRepo.html_url} target='_blank' className='hover:underline text-blue-500 font-semibold cursor-pointer flex justify-start items-center flex-wrap'><span>felipecalgaro/</span>{subRepo.name}</a>
              </div>
            ))}
          </>
        ) : (
          <div className='flex justify-center items-center gap-4'>
            <Image src={RepositoryIcon} alt='repository' width={24} height={24} />
            <a href={repo.html_url} target='_blank' className='hover:underline text-blue-500 font-semibold cursor-pointer flex justify-start items-center flex-wrap'><span>felipecalgaro/</span>{repo.name}</a>
          </div>
        )}
      </div>
    </div>
  )
}