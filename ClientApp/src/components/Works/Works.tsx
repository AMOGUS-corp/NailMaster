import React, { FC } from "react";
import Slider from "../common/Slider/Slider";
import "./works.scss";
const image = require('../../assets/images/img1.jpg')

const Works: FC = () => {
  return (
    <section id='works' className='works'>
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
