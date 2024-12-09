import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getEnvVariable = (key: string): string => {
  const value = process.env[key]
  if (value === undefined) {
    console.warn(`Missing environment variable: ${key}`)
    return '' // Return empty string instead of throwing error
  }
  return value
}

export const isTestnetEnabled = (): boolean => {
  return process.env.NEXT_PUBLIC_ENABLE_TESTNET === 'true'
}

// Add better error handling utilities
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
    }
  }
  
  console.error('Unexpected error:', error)
  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
    statusCode: 500,
  }
}