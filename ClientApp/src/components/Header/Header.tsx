import React, { FC } from 'react'
import { useInView } from '../../hooks/useInView'
import './header.scss'

const Header: FC = () => {
	const {isInView, myRef} = useInView()

	return (
		<header ref={myRef} id='header' className="header">
			<div className='container'>
				<h1 className={isInView ? 'header__title header__title--active' : 'header__title'}>Мастер маникюра</h1>
				<p className={isInView ? 'header__desc header__desc--active' : 'header__desc'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus inventore obcaecati laudantium rem aliquid id, modi molestiae totam tempore doloribus!</p>
			</div>
		</header>
	)
}

export default Header