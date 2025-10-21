import { MapRepositories } from '@/utils/map-repositories'
import { RepoTree } from './RepoTree'
import { z } from 'zod';

export const repositoriesDataSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    owner: z.object({
      login: z.string(),
    }),
    html_url: z.string(),
    description: z.string().nullable(),
  })
);

export async function Projects() {
  const response = await fetch('https://api.github.com/users/felipecalgaro/starred', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: {
      revalidate: 3600,
    }
  })
  const data = await response.json()

  const { data: repositoriesData, error } = repositoriesDataSchema.safeParse(data)

  if (error) {
    throw new Error('Unexpected error.')
  }

  const reposWithReadmes = await Promise.all(
    repositoriesData.map(async (repo) => {
      const response = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/readme`, {
        headers: {
          Accept: "application/vnd.github.v3.raw",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        next: {
          revalidate: 3600,
        }
      })

      const readme = response.ok ? await response.text() : null;
      return { ...repo, readme };
    })
  )

  const repositories = new MapRepositories(
    reposWithReadmes,
  ).map()

  return (
    <div className='lg:w-5/6 w-full' id='projects'>
      <h1 className='text-center xs:text-6xl text-5xl font-semibold mb-24 text-stone-800'>My Projects</h1>
      <div translate='no' className='flex flex-col justify-center items-start gap-16'>
        {repositories.map(repo => (
          <RepoTree repo={repo} key={repo.name} />
        ))}
      </div>
    </div>
  )
}