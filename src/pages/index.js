import React from 'react';
import Layout from '../components/Layout';
import logo from '../assets/img/logo.png';
import pic1 from '../assets/images/pic09.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <img className="logoResize" src={logo} alt="" />
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <img src={pic2} alt="" className="image" />
          <div className="content">
            <p>{config.manifestIndexLineOne}</p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <img src={pic3} alt="" className="image" />
          <div className="content">
            <p>{config.manifestIndexLineTwo}</p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <img src={pic1} alt="" className="image" />
          <div className="content">
            <p>{config.manifestIndexLineThree}</p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
