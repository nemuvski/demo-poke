import { MutableRefObject, useEffect } from 'react'

const useIntersectionObserver = (
  targetRef: MutableRefObject<HTMLElement | null>,
  onIntersect: () => void,
  options: IntersectionObserverInit
) => {
  useEffect(() => {
    const targetElement = targetRef && targetRef.current
    if (!targetElement) return

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      options
    )

    observer.observe(targetElement)

    return () => {
      observer.unobserve(targetElement)
    }
  }, [targetRef, onIntersect, options])
}

export default useIntersectionObserver
