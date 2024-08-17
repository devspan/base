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