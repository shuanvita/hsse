export type BadgeVariant =
  | 'primary'
  | 'accent'
  | 'warning'
  | 'error'
  | 'pink'
  | 'cyan'
  | 'emerald'
  | 'neutral'
  | 'muted'
  | 'blue'
  | 'indigo'

export type BadgeTone = 'soft' | 'outline' | 'solid' | 'floating' | 'flat' | 'overlay'

export type BadgeSize = 'xs' | 'sm' | 'md'

export interface BadgeProps {
  variant?: BadgeVariant
  tone?: BadgeTone
  size?: BadgeSize
  pill?: boolean
  dot?: boolean
  preIcon?: string
  postIcon?: string
  iconSize?: string
}
