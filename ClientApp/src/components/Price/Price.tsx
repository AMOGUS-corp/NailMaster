import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchPriceList } from '../../store/reducers/ActionCreators'
import './price.scss'
import PriceItem from './PriceItem'

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
					<h3 className='price__title'>Manicure</h3>
					<PriceItem list={list.filter(el => el.category == 1)}/>
					<h3 className='price__title'>Pedicure</h3>
					<PriceItem list={list.filter(el => el.category == 2)}/>
					<h3 className='price__title'>podological services</h3>
					<PriceItem list={list.filter(el => el.category == 3)}/>
			</div>
		</section>
	)
}

export default Price