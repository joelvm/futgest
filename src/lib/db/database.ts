import { createKysely } from '@vercel/postgres-kysely'
import { Epoca, Equipa, Jogo } from './schema'

export interface Database {
  epoca: Epoca
  equipa: Equipa
  jogo: Jogo
}

export const db = createKysely<Database>()
export { sql } from 'kysely'
