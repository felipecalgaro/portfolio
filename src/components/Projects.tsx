import { MapRepositories, repositoriesDataSchema } from '@/utils/map-repositories'

export async function Projects() {
  const response = await fetch('https://api.github.com/users/felipecalgaro/starred')
  const data = await response.json()

  const { data: repositoriesData, error } = repositoriesDataSchema.safeParse(data)

  if (error) {
    throw new Error('Unexpected error.')
  }

  const repositories = new MapRepositories(
    repositoriesData,
  ).map()

  return (
    <div className='h-screen' id='projects'>{repositories.map(repo => (
      <div key={repo.name}>
        <h1 key={repo.name}>{repo.name}</h1>
        {repo.hasSubrepositories && (
          <div className='ml-12'>
            {repo.subrepositories.map(repo => (<h1 key={repo.name}>{repo.name}</h1>))}
          </div>
        )}
      </div>
    ))}</div>
  )
}