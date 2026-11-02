import type { ActionVariant, ActionSize } from './Action.types'

export const ACTION_BASE_CLASSES =
  'cursor-pointer inline-flex items-center justify-center gap-2 transition-all duration-150 leading-tight'

export const ACTION_VARIANT_CLASSES: Record<ActionVariant, string> = {
  primary: 'bg-transparent text-foreground',
  invert: 'bg-primary/8 border border-primary/22 text-primary hover:bg-primary/14',
  link: 'hover:underline',
  disabled: 'bg-white/4 border border-white/6 text-foreground/18 cursor-not-allowed',
  custom: '',
}

export const ACTION_SIZE_CLASSES: Record<ActionSize, string> = {
  lg: 'h-[54px] rounded-10 text-[15px] px-5',
  custom: '',
}
