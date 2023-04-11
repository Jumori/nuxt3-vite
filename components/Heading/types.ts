export type SizeType = 'sm' | 'md' | 'lg'

export interface HeadingProps {
  size?: SizeType
  class?: string
  asChild?: boolean
}

export interface HeadingDefaultSlotProps {
  class?: string
}
