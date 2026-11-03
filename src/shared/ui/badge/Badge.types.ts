export type BadgeVariant = 'category' | 'detail' | 'date'

export interface BadgeProps {
  variant?: BadgeVariant
  as?: 'span' | 'li'
}
