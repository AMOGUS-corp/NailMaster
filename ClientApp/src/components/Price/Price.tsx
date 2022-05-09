import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchPriceList } from '../../store/reducers/ActionCreators'
import './price.scss'

const Price: FC = () => {
	const [activeTitle, setActiveTitle] = useState()
	const dispatch = useAppDispatch()
	const {list} = useAppSelector(state => state.priceList)

	useEffect(() => {
		dispatch(fetchPriceList())
	}, [])

	return (
		<section id='price' className='price'>
			<div className="container">
				<div className="price__list">

				</div>
			</div>
		</section>
	)
}

export default Price