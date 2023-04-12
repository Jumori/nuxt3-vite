import { MaskOptions } from 'maska'

export interface InputProps {
  name: string
  value: string | number | null
  label: string

  floatingLabel?: boolean
  mask?: MaskOptions | string
  type?: string
  inputmode?: string
  disabled?: boolean
  placeholder?: string

  prependIcon?: string
}


export interface InputEvent extends Event {
  target: HTMLInputElement
}
