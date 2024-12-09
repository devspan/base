import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://scan.rupaya.io/api/v2/stats', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
} 