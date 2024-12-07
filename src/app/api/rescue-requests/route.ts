import { NextResponse } from 'next/server'
import { openDb } from '@/lib/db'

export async function GET() {
  const db = await openDb()
  const rescueRequests = await db.all('SELECT * FROM rescue_requests')
  return NextResponse.json(rescueRequests)
}

export async function POST(request: Request) {
  const db = await openDb()
  const { animalType, location, description, imageUrl } = await request.json()

  try {
    const result = await db.run(
      'INSERT INTO rescue_requests (animalType, location, description, imageUrl) VALUES (?, ?, ?, ?)',
      [animalType, location, description, imageUrl]
    )
    return NextResponse.json({ id: result.lastID, message: 'Pedido de resgate criado com sucesso' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar pedido de resgate' }, { status: 500 })
  }
}

