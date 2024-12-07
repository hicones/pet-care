import { NextResponse } from 'next/server'
import { openDb } from '@/lib/db'

export async function GET() {
  const db = await openDb()
  const animals = await db.all('SELECT * FROM animals')
  return NextResponse.json(animals)
}

export async function POST(request: Request) {
  const db = await openDb()
  const { name, species, age, size, location, imageUrl, description } = await request.json()

  try {
    const result = await db.run(
      'INSERT INTO animals (name, species, age, size, location, imageUrl, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, species, age, size, location, imageUrl, description]
    )
    return NextResponse.json({ id: result.lastID, message: 'Animal adicionado com sucesso' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao adicionar animal' }, { status: 500 })
  }
}

