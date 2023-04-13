import { MaskOptions, MaskInputOptions, tokens } from 'maska'

export interface DictionaryItem {
  [key: string]: MaskInputOptions
}

export interface DictionaryItemOptions {
  [key: string]: {
    autounmask?: boolean
  }
}

/**
 * To make it work with Vuetify 3.x you should use options argument because they don't pass data- props to native input
 * https://github.com/beholdr/maska/issues/97#issuecomment-1340614430
 */
export const dictionary: DictionaryItem = {
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

export const dictionaryOptions: DictionaryItemOptions = {
  phone: {
    autounmask: true
  }
}

export const getMask = (mask: string, dict: DictionaryItem = dictionary) => {
  type ObjectKey = keyof typeof dict
  const maskKey = mask as ObjectKey

  return mask in dict ? dict[maskKey] : null
}

export const getMaskOptions = (
  mask: string,
  dictOptions: DictionaryItemOptions = dictionaryOptions
) => {
  type ObjectKey = keyof typeof dictOptions
  const maskKey = mask as ObjectKey

  return mask in dictOptions ? dictOptions[maskKey] : null
}

export const getUnmaskedValue = (value: string, mask: string | MaskOptions) => {
  let maskset = null

  if (typeof mask === 'string') {
    const maskItem = getMask(mask)

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
