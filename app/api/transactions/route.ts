import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address')

  try {
    const response = await fetch(
      `https://scan.rupaya.io/api?module=account&action=txlist&address=${address}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 })
  }
} 