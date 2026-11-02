import type { BadgeTone, BadgeVariant, BadgeSize } from './Badge.types'

export const BADGE_BASE_CLASSES =
  'inline-flex items-center justify-center gap-1.5 font-semibold whitespace-nowrap'

export const BADGE_SIZE_CLASSES: Record<BadgeSize, string> = {
  xs: 'px-[7px] py-0.5 text-[9px]',
  sm: 'px-2.5 py-1 text-[11px]',
  md: 'px-[13px] py-[7px] text-xs',
}

export const BADGE_RADIUS_CLASSES: Record<BadgeSize, string> = {
  xs: 'rounded-[5px]',
  sm: 'rounded-md',
  md: 'rounded-lg',
}

export const BADGE_TONE_CLASSES: Record<BadgeTone, Partial<Record<BadgeVariant, string>>> = {
  soft: {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/10 text-accent',
    warning: 'bg-warning/10 text-warning',
    error: 'bg-error/10 text-error',
    pink: 'bg-pink/10 text-pink',
    cyan: 'bg-cyan/10 text-cyan',
    emerald: 'bg-emerald/10 text-emerald',
    neutral: 'bg-white/5 text-foreground/35',
    muted: 'bg-white/5 text-foreground/35',
    blue: 'bg-blue/10 text-blue',
    indigo: 'bg-indigo/10 text-indigo',
  },
  outline: {
    primary: 'bg-primary/6 border border-primary/28 text-primary',
    accent: 'bg-accent/6 border border-accent/28 text-accent',
    warning: 'bg-warning/6 border border-warning/28 text-warning',
    error: 'bg-error/6 border border-error/28 text-error',
    pink: 'bg-pink/6 border border-pink/28 text-pink',
    cyan: 'bg-cyan/6 border border-cyan/28 text-cyan',
    emerald: 'bg-emerald/6 border border-emerald/28 text-emerald',
    neutral: 'bg-white/4 border border-white/7 text-foreground/30',
    muted: 'bg-white/4 border border-white/7 text-foreground/30',
    blue: 'bg-blue/6 border border-blue/28 text-blue',
    indigo: 'bg-indigo/6 border border-indigo/28 text-indigo',
  },
  solid: {
    primary: 'bg-primary text-main',
    accent: 'bg-accent text-main',
    warning: 'bg-warning text-main',
    error: 'bg-error text-main',
    pink: 'bg-pink text-main',
    cyan: 'bg-cyan text-main',
    emerald: 'bg-emerald text-main',
    neutral: 'bg-foreground/80 text-main',
    muted: 'bg-foreground/80 text-main',
    blue: 'bg-blue text-main',
    indigo: 'bg-indigo text-main',
  },
  floating: {
    primary:
      'bg-main border border-primary/30 text-primary shadow-[0_8px_28px_rgba(66,184,131,0.16)]',
    accent: 'bg-main border border-accent/30 text-accent shadow-[0_8px_28px_rgba(124,58,237,0.16)]',
    warning:
      'bg-main border border-warning/30 text-warning shadow-[0_8px_28px_rgba(245,158,11,0.18)]',
    error: 'bg-main border border-error/30 text-error shadow-[0_8px_28px_rgba(239,68,68,0.16)]',
    pink: 'bg-main border border-pink/30 text-pink shadow-[0_8px_28px_rgba(236,72,153,0.16)]',
    cyan: 'bg-main border border-cyan/30 text-cyan shadow-[0_8px_28px_rgba(6,182,212,0.16)]',
    emerald:
      'bg-main border border-emerald/30 text-emerald shadow-[0_8px_28px_rgba(16,185,129,0.16)]',
    neutral: 'bg-main border border-white/10 text-foreground/60',
    muted: 'bg-main border border-white/10 text-foreground/60',
    blue: 'bg-main border border-blue/30 text-blue shadow-[0_8px_28px_rgba(59,130,246,0.16)]',
    indigo: 'bg-main border border-indigo/30 text-indigo shadow-[0_8px_28px_rgba(99,102,241,0.16)]',
  },
  flat: {
    muted: 'bg-subtle text-muted-fg font-mono',
  },
  // поверх цветных картинок и градиентов
  overlay: {
    neutral: 'bg-black/30 text-white/90',
  },
}
