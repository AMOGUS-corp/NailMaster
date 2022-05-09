import React, { FC } from 'react'
import { IPriceList } from '../../models/IPrceList'

interface PriceItemsProps{
	list: IPriceList[];
}

const PriceItems: FC<PriceItemsProps> = ({list}) => {
	return (
		<ul className='price__list'>
			{list.map((el,i) => (
				<li className='price__list-item' key={i}>
					<p>{el.service}</p>
					<span>{el.price} руб.</span>
				</li>
			))}
		</ul>
	)
}

export default PriceItems