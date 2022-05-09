import React, { FC } from 'react'
import './works.scss'

const Works: FC = () => {
	return (
		<section id='works' className='works'>
			<div className="container">
				<h2 className='works__title'>My works</h2>
				<div className="works__gallery">
					<div className="works__img"></div>
					<div className="works__img"></div>
					<div className="works__img"></div>
					<div className="works__img"></div>
				</div>
			</div>
		</section>
	)
}

export default Works