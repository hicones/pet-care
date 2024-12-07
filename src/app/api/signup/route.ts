import { NextResponse } from 'next/server'
import { openDb } from '@/lib/db'
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
  const db = await openDb()
  const { name, email, password } = await request.json()

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    await db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword])
    return NextResponse.json({ message: 'Usuário cadastrado com sucesso' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao cadastrar usuário' }, { status: 500 })
  }
}

