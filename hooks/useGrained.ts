import { useEffect, useRef } from 'react'
import Grained from 'grained'

const useGrained = (el, options) => {

  const grained = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      grained.current = grained(el.current, options);
    }
    
    return () => {
      // grained.current.destroy();
    }
  }, [])
}

export default useGrained
