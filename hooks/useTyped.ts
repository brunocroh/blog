import { useEffect, useRef, RefObject } from 'react'
import Typed from 'typed.js'

interface Options {
  strings: string[]
  typeSpeed: number
  backSpeed: number
  loop: boolean
}

const useTyped = (el: RefObject<Element>, options: Options) => {

  const typed = useRef<any>({})

  useEffect(() => {
    if (el?.current) {
      typed.current = new Typed(el?.current, options) as any;
    }
    
    return () => {
      typed.current?.destroy();
    }
  }, [])
}

export default useTyped
