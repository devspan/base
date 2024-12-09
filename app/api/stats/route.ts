import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://scan.rupaya.io/api/v2/stats', {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://www.rupaya.io'
      },
      next: { revalidate: 10 } // Cache for 10 seconds
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch stats')
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
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
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