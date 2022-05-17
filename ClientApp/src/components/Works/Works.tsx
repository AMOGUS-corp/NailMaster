import React, { FC } from "react";
import { useInView } from "../../hooks/useInView";
import Slider from "../common/Slider/Slider";
import "./works.scss";
const image = require('../../assets/images/img1.jpg')

const Works: FC = () => {
	const {isInView, myRef} = useInView({rootMargin: '200px'})

  return (
    <section ref={myRef} id='works' className={isInView ? 'works works--active' : 'works'}>
    	<div className="container">
    		<h2 className='title'>Мои работы</h2>
    		{/* <div className="works__gallery">
    			<div className="works__img"></div>
    			<div className="works__img"></div>
    			<div className="works__img"></div>
    			<div className="works__img"></div>
    		</div> */}
				<Slider>
					<img src={image} />
					<img src={image} />
					<img src={image} />
				</Slider>
    	</div>
    </section>
  );
};

export default Works;
