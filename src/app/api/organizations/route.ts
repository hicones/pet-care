import { NextResponse } from 'next/server'
import { openDb } from '@/lib/db'

export async function GET() {
  const db = await openDb()
  const organizations = await db.all('SELECT * FROM organizations')
  return NextResponse.json(organizations)
}

export async function POST(request: Request) {
  const db = await openDb()
  const { name, location, description, needs } = await request.json()

  try {
    const result = await db.run(
      'INSERT INTO organizations (name, location, description, needs) VALUES (?, ?, ?, ?)',
      [name, location, description, JSON.stringify(needs)]
    )
    return NextResponse.json({ id: result.lastID, message: 'Organização adicionada com sucesso' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao adicionar organização' }, { status: 500 })
  }
}

