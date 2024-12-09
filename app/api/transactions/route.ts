import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  try {
    const response = await fetch('https://scan.rupaya.io/api?module=account&action=txlist&address=0x18e5b3dee30232CB8a83e4883E17df34d79E7296', {
      headers: {
        'Accept': 'application/json'
      },
      next: {
        revalidate: 10 // Revalidate every 10 seconds
      }
    })

    if (!response.ok) {
      throw new Error('API response was not ok')
    }

    const data = await response.json()
    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
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
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    )
  }
} 