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
            <p>
              Absolutely Right is a conservative woman led PAC. After spending
              more than 10 years working with government agencies and now
              staying home to raise her four children, Absolutely Right was
              founded to support pro-freedom and liberty-minded candidates.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <img src={pic3} alt="" className="image" />
          <div className="content">
            <p>
              Comprised of best-in-class, private sector, technology and
              communication experts, Absolutely Right leverages bleeding-edge
              digital, connection, and engagement strategies to give
              conservatives a strong advantage to win campaigns.
            </p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <img src={pic1} alt="" className="image" />
          <div className="content">
            <p>
              Absolutely Right will focus on races up-and-down the ballot in
              which the outcome will have significant impact, immediately and
              for years to come, with an emphasis towards engaging in
              under-the-radar and underserved races, which don’t garner much
              attention, yet the result of which would significantly alter the
              political landscape.
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
