import React, { FC, useEffect, useRef, useState } from 'react';
import Price from './components/Price/Price';
import ContactUs from './components/ContactUs/ContactUs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Works from './components/Works/Works';

const App: FC = () => {
	const myRef = useRef<HTMLDivElement>(null)
	const [activeItem, setActiveItem] = useState('header')

	const divEl = myRef.current
	const divElChildren = divEl?.childNodes
	const childArr:any = []
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: [0.4,0.5,0.6]
	}

	const handleObserver = (entries: IntersectionObserverEntry[]) => {
		entries.forEach(entry => {
			if(entry.isIntersecting && entry.intersectionRatio >= 0.5){
				setActiveItem(entry.target.id)
			}
		})
	}

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => handleObserver(entries), options)
		if(divEl){
			divElChildren?.forEach((child) => childArr.push(child))
			childArr.forEach((child: any) => {
				observer.observe(child)
			})
		}
	}, [])

	return (
		<>
			<Nav activeItem={activeItem}/>
			<div ref={myRef}>
				<Header/>
				<Works/>
				<Price/>
				<ContactUs/>
			</div>
		</>
  );
}

export default App;
