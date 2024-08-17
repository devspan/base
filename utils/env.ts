export const getEnvVariable = (key: string): string => {
    const value = process.env[key]
    if (value === undefined) {
      throw new Error(`Missing environment variable: ${key}`)
    }
    return value
  }
  
  export const isTestnetEnabled = (): boolean => {
    return process.env.NEXT_PUBLIC_ENABLE_TESTNET === 'true'
  }