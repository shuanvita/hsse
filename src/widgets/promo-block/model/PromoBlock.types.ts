export interface PromoBlockProps {
  title: string
  headingAs?: 'h2' | 'h3'
  headingVariant?: 'h1' | 'h2' | 'h3'
  uppercase?: boolean
  image: string
  imageAlt: string
  text?: string
  description?: string[]
  actions: { label: string, to: string }[]
}
