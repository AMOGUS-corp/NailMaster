import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchPriceList } from '../../store/reducers/ActionCreators'
import './price.scss'

const Price: FC = () => {
	const [activeTitle, setActiveTitle] = useState(1)
	const dispatch = useAppDispatch()
	const {list, isLoading} = useAppSelector(state => state.priceList)

	useEffect(() => {
		dispatch(fetchPriceList())
	}, [])

	return (
		<section id='price' className='price'>
			<div className="container">
					<h3>Manicure</h3>
					{list.filter(el => el.category == 1).map(el => <p>{el.service} {el.price}</p>)}
					<h3>Pedicure</h3>
					{list.filter(el => el.category == 2).map(el => <p>{el.service} {el.price}</p>)}
					<h3>Podiatrick services</h3>
					{list.filter(el => el.category == 3).map(el => <p>{el.service} {el.price}</p>)}
			</div>
		</section>
	)
}

export default Price