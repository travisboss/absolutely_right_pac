import React from 'react';

import Layout from '../components/Layout';
const scriptURL =
  'https://script.google.com/macros/s/AKfycbz4hT14AOvw48nUASRiw87m45XvIQ58Xu_GkBvzb92EHTcyMxni/exec';
const form = document.forms['submit-to-google-sheet'];

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Family and Friends pre-ordering is now open!</h2>
          <p>
            Fill out the form and you will be contacted via email to complete
            your order.
          </p>
          <p>All Family and Friends orders ship free!</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <form name="submit-to-google-sheets">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="size">Size: XS-4XL</label>
                <input type="text" name="size" id="size" />
              </div>
              <div className="field">
                <label htmlFor="color">Color: Navy, Royal Blue, Red</label>
                <input type="text" name="color" id="color" />
              </div>
              <div className="field">
                <label htmlFor="style">Style: Unisex or Womens</label>
                <input type="text" name="style" id="style" />
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  </Layout>
);

window.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});

export default IndexPage;
