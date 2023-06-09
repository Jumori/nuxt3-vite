import { MaskOptions, MaskInputOptions, tokens } from 'maska'

export interface MaskaDictionaryItem {
  [key: string]: MaskInputOptions
}

export interface MaskaDictionaryItemOptions {
  [key: string]: {
    autounmask?: boolean
  }
}

/**
 * To make it work with Vuetify 3.x you should use options argument because they don't pass data- props to native input
 * https://github.com/beholdr/maska/issues/97#issuecomment-1340614430
 */
export const maskaDictionary: MaskaDictionaryItem = {
  phone: {
    mask: ['(##) ####-####', '(##) #####-####'],
    eager: false
  },
  cpf: {
    mask: '###.###.###-##',
    eager: false
  },
  zipcode: {
    mask: '#####-###',
    eager: false
  },
  date: {
    mask: '##/##/####',
    eager: false
  }
}

export const maskaDictionaryOptions: MaskaDictionaryItemOptions = {
  phone: {
    autounmask: true
  }
}

export const getMaskaMask = (mask: string, dict: MaskaDictionaryItem = maskaDictionary) => {
  type ObjectKey = keyof typeof dict
  const maskKey = mask as ObjectKey

  return mask in dict ? dict[maskKey] : null
}

export const getMaskaMaskOptions = (
  mask: string,
  dictOptions: MaskaDictionaryItemOptions = maskaDictionaryOptions
) => {
  type ObjectKey = keyof typeof dictOptions
  const maskKey = mask as ObjectKey

  return mask in dictOptions ? dictOptions[maskKey] : null
}

export const getMaskaUnmaskedValue = (value: string, mask: string | MaskOptions) => {
  let maskset = null

  if (typeof mask === 'string') {
    const maskItem = getMaskaMask(mask)

    if (!maskItem || !maskItem.mask) {
      return value
    }

    maskset = maskItem.mask
  } else if (mask.mask) {
    maskset = mask.mask
  }

  if (!maskset) {
    return value
  }

  const validTokens = Object.keys(tokens)
  let matchMaskset = maskset
  let unmaskedValue = []

  if (Array.isArray(maskset)) {
    matchMaskset = maskset[maskset.length - 1]
  } else {
    matchMaskset = maskset
  }

  if (typeof matchMaskset !== 'string') {
    return value
  }

  for (let char = 0; char < matchMaskset.length; char++) {
    if (validTokens.includes(matchMaskset.charAt(char))) {
      unmaskedValue.push(value.charAt(char))
    }
  }

  return unmaskedValue.join('')
}
