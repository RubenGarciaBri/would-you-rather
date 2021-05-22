import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'

export function generateId() {
  return uuidv4()
}

export const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
