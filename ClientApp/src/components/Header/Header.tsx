import React, { FC } from 'react'
import './header.scss'

const Header: FC = () => {
	return (
		<header id='header' className="header">
			<div className='container'>
				<h1 className='header__title'>Мастер маникюра</h1>
				<p className='header__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus inventore obcaecati laudantium rem aliquid id, modi molestiae totam tempore doloribus!</p>
			</div>
		</header>
	)
}

export default Header