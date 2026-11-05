export interface Partner {
  name: string
  logo: string
  width: number
  wide?: boolean
  href?: string
}

export interface PartnersProps {
  title: string
  description?: string
  partners: Partner[]
}
