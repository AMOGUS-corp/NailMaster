import React, { FC } from "react";
import "./contactUs.scss";

const phone = require("../../assets/icons/phone.png");
const wapp = require("../../assets/icons/wapp.png");
const vb = require("../../assets/icons/vb.png");

const ContactUs: FC = () => {
  return (
    <section id="contactUs" className="contactUs">
      <div className="container">
        <h2 className="title">Contact us</h2>
        <div className="contactUs__soc">
          <div className="contactUs__soc-item">
            <img src={phone} />
            <p>8-926-278-23-52</p>
          </div>
          <div className="contactUs__soc-item">
            <a href="#">
              <img src={wapp} />
            </a>
            <p>WhatsApp</p>
          </div>
          <div className="contactUs__soc-item">
            <a href="#">
              <img src={vb} />
            </a>
            <p>Viber</p>
          </div>
        </div>
        <div className="contactUs__address">
          <h3>АДРЕС</h3>
					<p>Гостиница "Электрон", Андропова пр-т, дом 38, корпус 2, Москва, 115487</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1124.9006013527744!2d37.66134796558285!3d55.675057048122525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x414ab4a1f4058c87%3A0x890f72aaae8aa95b!2z0JrQvtC70L7QvNC10L3RgdC60LDRjywg0JzQvtGB0LrQstCwLCDQsy4g0JzQvtGB0LrQstCw!3m2!1d55.678261!2d37.663855999999996!4m3!3m2!1d55.674569999999996!2d37.659754899999996!5e0!3m2!1sru!2sru!4v1652201669294!5m2!1sru!2sru" 
            width="800"
            height="600"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
