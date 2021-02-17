import React from 'react';
import Layout from '../components/Layout';
import logo from '../assets/img/website-icon.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <picture>
            <img className="logoResize" src={logo} alt="" />
          </picture>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
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
