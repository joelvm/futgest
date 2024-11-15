"use server"

import { db, sql } from '../database'
import { Epoca } from '../schema'

export async function findEpocaById(id: string) {
  return await db.selectFrom('epoca')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export async function findEpocas(criteria: Partial<Epoca>) {
  let query = db.selectFrom('epoca')

  if (criteria.descricao) {
    query = query.where('descricao', 'like', criteria.descricao)
  }

  return await query.selectAll().execute()
}

export async function updateEpoca(id: string, updateWith: Epoca) {
  await db.updateTable('epoca').set({ descricao: updateWith.descricao }).where('id', '=', id).execute()
}

export async function createEpoca(epoca: Epoca) {
  return await db.insertInto('epoca')
    .values({ descricao: epoca.descricao })
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function deleteEpoca(id: string) {
  return await db.deleteFrom('epoca').where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}

export async function epocaScore() {
    const e = await db.selectFrom('epoca')
      .orderBy('descricao', 'desc')
      .selectAll()
      .executeTakeFirst()

    const equipas = await db.selectFrom('equipa')
      .selectAll().execute()

    let query = `SELECT `
    equipas.map((eq, i) => {
      query = `${query} ${i>0 ? ',' : ''} COUNT(j1_${i}.id) + COUNT(j2_${i}.id) as jogos${i}`
    })

    query = `${query} FROM epoca e`
    equipas.map((eq, i) => {
      query = `${query} LEFT JOIN jogo j1_${i} ON j1_${i}.id_epoca = e.id AND j1_${i}.id_equipa1 = '${eq.id}' AND j1_${i}.golos1 > j1_${i}.golos2`
      query = `${query} LEFT JOIN jogo j2_${i} ON j2_${i}.id_epoca = e.id AND j2_${i}.id_equipa2 = '${eq.id}' AND j2_${i}.golos2 > j2_${i}.golos1`
    })
    
    const result = await sql.raw(`${query} WHERE e.id='${e?.id}'`).execute(db)
    
    return {
      epoca: e?.descricao ?? '',
      equipa1: equipas[0].descricao ?? '',
      equipa2: equipas[1].descricao ?? '',
      resultado1: result.rows[0]['jogos0'],
      resultado2: result.rows[0]['jogos1']
    }
    
}