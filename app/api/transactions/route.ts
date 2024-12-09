import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address')

  if (!address) {
    return NextResponse.json(
      { error: 'Address is required' },
      { 
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': 'https://www.rupaya.io',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    )
  }

  try {
    const response = await fetch(
      `https://scan.rupaya.io/api?module=account&action=txlist&address=${address}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://www.rupaya.io'
        },
        next: { revalidate: 10 } // Cache for 10 seconds
      }
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch transactions')
    }
    
    const data = await response.json()
    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': 'https://www.rupaya.io',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    })
  } catch (error) {
    console.error('Error fetching transactions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch transactions' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': 'https://www.rupaya.io',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': 'https://www.rupaya.io',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    }
  )
} 