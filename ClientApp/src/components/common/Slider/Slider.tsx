import React, { FC, useEffect, useRef, useState } from 'react'
import { JsxChild } from 'typescript'
import './slider.scss'
const image = require('../../../assets/images/img1.jpg')

interface SliderProps{
	children: React.ReactNode;
}

const Slider: FC<SliderProps> = ({children}) => {
	const [slidesCount, setSlidesCount] = useState(0)
	const [currentSlide, setCurrentSlide] = useState(0)
	const slideRef = useRef<HTMLDivElement>(null)

	const handleSlideBtn = (num:number) => {
		if(num + currentSlide > slidesCount-1){
			setCurrentSlide(0)
			return
		}
		if(num + currentSlide < 0){
			setCurrentSlide(slidesCount-1)
			return
		}
		setCurrentSlide(prev => prev + num)
	}

	useEffect(() => {
		setSlidesCount(slideRef.current?.childNodes.length || 0)
	}, [])

	return (
		<div className='slider'>
			<div ref={slideRef} className="slider__line" style={{left: `-${currentSlide}00%`}}>
				{children}
			</div>
			<div onClick={() => handleSlideBtn(-1)} className="slider__btn slider__btn-left"></div>
			<div onClick={() => handleSlideBtn(1)} className="slider__btn slider__btn-right"></div>
		</div>
	)
}

export default Slider