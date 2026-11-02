export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalProps {
  size?: ModalSize
  title?: string
  closable?: boolean
}
