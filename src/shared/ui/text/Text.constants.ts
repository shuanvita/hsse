// TODO Добавить пропс для управления font-family. Добавить blockquote как вариант отображения

import type { TextVariant } from './Text.types'

export const TEXT_SIZE_CLASSES: Record<TextVariant, string> = {
  lg: 'text-[15px] xl:text-[18px]',
  default: 'text-[16px]',
  sm: 'text-[14px]',
  caption: 'text-[12px]',
  mono: 'text-[13px] font-mono',
  label: 'text-[11px] font-mono',
  custom: '',
}
