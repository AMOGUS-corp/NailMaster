import React, { FC } from 'react'
import { IPriceList } from '../../models/IPrceList'

interface PriceItemProps{
	list: IPriceList[];
}

const PriceItem: FC<PriceItemProps> = ({list}) => {
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

export default PriceItem