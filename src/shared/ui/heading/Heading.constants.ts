import type { HeadingVariant } from './Heading.types'

export const HEADING_CLASSES: Record<HeadingVariant, string> = {
  display: 'text-[32px] lg:text-[46px] xl:text-[67px] font-black -tracking-[0.04em]',
  h1: 'text-[32px] lg:text-[36px] xl:text-[45px] font-black -tracking-[0.035em]',
  h2: 'text-[24px] lg:text-[26px] xl:text-[32px] font-black -tracking-[0.025em]',
  h3: 'text-[18px] font-extrabold -tracking-[0.01em]',
  h4: 'text-[16px] font-extrabold -tracking-[0.01em]',
  caption: 'text-[12px]',
  mono: 'text-[13px] font-mono',
  label: 'text-[11px] font-mono',
}
