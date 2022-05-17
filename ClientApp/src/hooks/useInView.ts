import { useEffect, useRef, useState } from "react"

interface ObserverOptions {
	root?: Element;
	rootMargin?: string;
	threshold?: number[] | number
}

export const useInView = (options?: ObserverOptions) => {
	const [isInView, setIsInView] = useState(false)
	const myRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if(entries[0].isIntersecting){
				setIsInView(true)
			}
		},options)
		observer.observe(myRef.current as Element)
	}, [])

	return {isInView, myRef}
}