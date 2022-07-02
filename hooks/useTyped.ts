import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const useTyped = (el, options) => {

  const typed = useRef(null)

  useEffect(() => {
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])
}

export default useTyped
