// Create a new file for shared types
export interface ActionResponse<T = unknown> {
  success: boolean
  data?: T
  error?: {
    message: string
    code: string
    context?: Record<string, unknown>
  }
}

export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
} 