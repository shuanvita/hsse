import type { ModalSize } from './Modal.types'

export const MODAL_OVERLAY_CLASSES =
  'fixed inset-0 z-50 flex items-center justify-center bg-main/80'

export const MODAL_BASE_CLASSES =
  'relative flex flex-col overflow-hidden bg-card-dark text-foreground shadow-2xl outline-none'

export const MODAL_SIZE_CLASSES: Record<ModalSize, string> = {
  sm: 'max-h-[90dvh] w-full max-w-[24rem] rounded-2xl border border-white/6',
  md: 'max-h-[90dvh] w-full max-w-[32rem] rounded-2xl border border-white/6',
  lg: 'max-h-[90dvh] w-full max-w-[48rem] rounded-2xl border border-white/6',
  xl: 'max-h-[90dvh] w-full max-w-[72rem] rounded-2xl border border-white/6',
  full: 'h-full w-full rounded-none',
}
