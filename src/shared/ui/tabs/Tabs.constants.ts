import type { TabsStyleKey, TabsClasses } from './Tabs.types'

export const TABS_ITEM_BASE_CLASSES =
  'inline-flex flex-1 cursor-pointer items-center justify-center px-4 py-2 text-sm whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40'

const FILLED_LIST = 'flex gap-1 rounded-lg border border-white/6 p-1'

const FILLED_ITEM = {
  item: 'rounded-md',
  inactive: 'text-foreground/42 hover:text-foreground/70',
}

export const TABS_CLASSES: Record<TabsStyleKey, TabsClasses> = {
  primary: {
    ...FILLED_ITEM,
    list: `${FILLED_LIST} bg-white/4`,
    active: 'bg-primary text-main font-medium',
  },
  dark: {
    ...FILLED_ITEM,
    list: `${FILLED_LIST} bg-main`,
    active: 'bg-card-dark text-foreground font-medium',
  },
  underline: {
    list: 'flex border-b-2 border-stroke',
    item: '-mb-0.5 border-b-2',
    active: 'border-primary text-primary',
    inactive: 'border-transparent text-muted-fg font-normal hover:text-foreground/60',
  },
}
