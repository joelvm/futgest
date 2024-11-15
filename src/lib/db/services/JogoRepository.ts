"use server"

import { db } from '../database'
import { Jogo } from '../schema'
import { omit } from 'lodash'

export type JogoDTO = {
  descricao: string | null
  equipa1: string | null
  equipa2: string | null
  golos1: number
  golos2: number
  id: string
  titulo: string
  data: Date
  foto: string
}

export async function findJogoById(id: string) {
  return await db.selectFrom('jogo')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export async function findJogos(criteria: Partial<Jogo>) {
  let query = db.selectFrom('jogo')

  if (criteria.descricao) {
    query = query.where('descricao', 'like', criteria.descricao)
  }

  return await query.selectAll().execute()
}

export async function updateJogo(id: string, updateWith: Jogo) {
  await db.updateTable('jogo').set({ descricao: updateWith.descricao }).where('id', '=', id).execute()
}

export async function createJogo(jogo: Jogo) {
  return await db.insertInto('jogo')
    .values(omit(jogo, 'id'))
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function deleteJogo(id: string) {
  return await db.deleteFrom('jogo').where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}

export async function ultimosJogos(): Promise<JogoDTO[]> {
    return await db.selectFrom('jogo')
      .innerJoin('equipa as equipa1', 'equipa1.id', 'jogo.id_equipa1')
      .innerJoin('equipa as equipa2', 'equipa2.id', 'jogo.id_equipa2')
      .limit(5)
        .orderBy('data', 'desc')
        .select(['jogo.id', 'jogo.titulo', 'jogo.descricao', 'jogo.data', 'jogo.foto', 'equipa1.descricao as equipa1', 'equipa2.descricao as equipa2', 'jogo.golos1', 'jogo.golos2'])
        .execute()    
}