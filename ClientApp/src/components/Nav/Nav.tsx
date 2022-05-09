import React, { FC, useEffect, useState } from 'react'
import './nav.scss'

interface NavProps{
	activeItem: string
}

const Nav: FC<NavProps> = ({activeItem}) => {
	const [activeNav, setActiveNav] = useState('header')
	const navActive = 'nav__menu-item--active'

	const handleActive = (id: string) => {
		setActiveNav(id)
	}

	useEffect(() => {
		setActiveNav(activeItem)	
	}, [activeItem])

	return (
		<nav className='nav'>
			<ul className='nav__menu'>
				<li onClick={() => handleActive('header')} className={activeNav == 'header' ? `nav__menu-item ${navActive}` : 'nav__menu-item'}>
					<a href="#header">Main</a>
					</li>
				<li onClick={() => handleActive('works')} className={activeNav == 'works' ? `nav__menu-item ${navActive}` : 'nav__menu-item'}>
					<a href="#works">Works</a>
					</li>
				<li onClick={() => handleActive('price')} className={activeNav == 'price' ? `nav__menu-item ${navActive}` : 'nav__menu-item'}>
					<a href="#price">Price</a>
					</li>
				<li onClick={() => handleActive('contactUs')} className={activeNav == 'contactUs' ? `nav__menu-item ${navActive}` : 'nav__menu-item'}>
					<a href="#contactUs">ContactUs</a>
					</li>
			</ul>
		</nav>
	)
}

export default Nav