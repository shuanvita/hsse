export type HeadingVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'caption' | 'mono' | 'label'

export interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4'
  variant?: HeadingVariant
  uppercase?: boolean
  html?: string
}
