import { getCharacters } from '@/lib/api'
import ClientHome from './ClientHome'

export default async function Home() {
  const characters = await getCharacters()
  return <ClientHome initialCharacters={characters} />
}
