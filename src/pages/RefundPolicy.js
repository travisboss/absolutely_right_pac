import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';

const IndexPage = styles => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Refund Policy</h2>
        </div>
      </header>

      <div style={{ marginTop: 0, marginBottom: 0 }} className="wrapper">
        <div className="inner">
          <section>
            <p>{config.manifestRefundPolicy}</p>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
