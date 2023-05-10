import { MaskOptions } from 'maska'
import Inputmask from 'inputmask'

export interface InputProps {
  name: string
  value: string | number | null
  label: string

  floatingLabel?: boolean
  type?: string
  inputmode?: string
  disabled?: boolean
  placeholder?: string

  maska?: MaskOptions | string
  inputmask?: Inputmask.Options | string

  prependIcon?: string
}


export interface InputEvent extends Event {
  target: HTMLInputElement
}
