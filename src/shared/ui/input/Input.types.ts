export type InputType = 'text' | 'email' | 'password' | 'tel' | 'number' | 'search'

export interface InputProps {
  type?: InputType
  label?: string
  hint?: string
  error?: string
  placeholder?: string
  disabled?: boolean
}
