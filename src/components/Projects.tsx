import { MapRepositories, repositoriesDataSchema } from '@/utils/map-repositories'
import { RepoTree } from './RepoTree'

export async function Projects() {
  const response = await fetch('https://api.github.com/users/felipecalgaro/starred', { cache: 'no-store' })
  const data = await response.json()

  const { data: repositoriesData, error } = repositoriesDataSchema.safeParse(data)

  if (error) {
    throw new Error('Unexpected error.')
  }

  const repositories = new MapRepositories(
    repositoriesData,
  ).map()

  return (
    <div className='lg:w-5/6 w-full' id='projects'>
      <h1 className='text-center xs:text-6xl text-5xl font-semibold mb-24 text-stone-800'>My Projects</h1>
      <div translate='no' className='flex flex-col justify-center items-start gap-16'>{repositories.map(repo => (
        <RepoTree repo={repo} key={repo.name} />
      ))}</div>
    </div>
  )
}