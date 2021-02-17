import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import ladiesNavy from '../assets/images/LadiesNavy.jpeg';
import unisexNavy from '../assets/images/UnisexNavy.png';
import ladiesRed from '../assets/images/LadiesRed.jpeg';
import unisexRed from '../assets/images/UnisexRed.png';
import ladiesRoyalBlue from '../assets/images/LadiesRoyalBlue.jpeg';
import unisexRoyalBlue from '../assets/images/UnixesRoyalBlue.png';
import ladiesShirtFit from '../assets/images/LadiesSizeFit.jpg';
import unisexShirtFit from '../assets/images/UnisexShirtFit.png';

const formUrl =
  'https://script.google.com/macros/s/AKfycbz4hT14AOvw48nUASRiw87m45XvIQ58Xu_GkBvzb92EHTcyMxni/exec';
const ThankYou = () => (
  <div className="fw4 lh-title mt0 avenir black">Thank You!</div>
);

class ContactForm extends Component {
  render() {
    return (
      <Layout fullMenu>
        <section id="wrapper">
          <header>
            <div className="inner">
              <h2>Family and Friends pre-ordering is now open!</h2>
              <p>
                Fill out the form and you will be contacted via email to
                complete your order.
              </p>
              <p>All Family and Friends orders ship free!</p>
            </div>
          </header>
          <div className="wrapper">
            <div className="inner">
              <h3>Price: $25 Unisex</h3>
              <ul>
                <li>100% Airlume combed and ringspun cotton</li>
                <li>Unisex fit</li>
                <li>Tear away label</li>
                <li>Runs true to size</li>
              </ul>
            </div>
          </div>
          <section className="container">
            <img className="item" src={unisexNavy} alt="" />
            <img className="item" src={unisexRed} alt="" />
            <img className="item" src={unisexRoyalBlue} alt="" />
            <img className="item" src={unisexShirtFit} alt="" />
          </section>
          <div className="wrapper">
            <div className="inner">
              <h3>Price: $25 Ladies</h3>
              <ul>
                <li>100% Airlume combed and ringspun cotton </li>
                <li>Slim fit with longer body length</li>
                <li>Sewn in label</li>
                <li>Runs smaller than usual</li>
              </ul>
            </div>
          </div>
          <section className="container">
            <img className="item" src={ladiesNavy} alt="" />
            <img className="item" src={ladiesRed} alt="" />
            <img className="item" src={ladiesRoyalBlue} alt="" />
            <img className="item" src={ladiesShirtFit} alt="" />
          </section>

          <div className="wrapper">
            <div className="inner">
              <form
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              >
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
                    <label htmlFor="address1">Address1</label>
                    <input type="text" name="address1" id="address1" />
                  </div>
                  <div className="field">
                    <label htmlFor="address2">Address2</label>
                    <input type="text" name="address2" id="address2" />
                  </div>
                  <div className="field">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" />
                  </div>
                  <div className="field">
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" id="state" />
                  </div>
                  <div className="field">
                    <label htmlFor="zip">ZipCode</label>
                    <input type="text" name="zip" id="zip" />
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
                    <input type="submit" value="Submit" />
                  </li>
                  <input type="hidden" name="after" value="/OrderForm" />
                </ul>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

class EmailForm extends Component {
  state = {
    name: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    size: '',
    style: '',
    color: '',
    submitted: false,
  };

  updateValues = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      email,
      address1,
      address2,
      city,
      state,
      zip,
      size,
      style,
      color,
    } = this.state;

    axios({
      method: 'get',
      url: `${formUrl}?name=${encodeURIComponent(
        name
      )}&email=${encodeURIComponent(email)}&address1=${encodeURIComponent(
        address1
      )}&address2=${encodeURIComponent(address2)}&city=${encodeURIComponent(
        city
      )}&state=${encodeURIComponent(state)}&zip=${encodeURIComponent(
        zip
      )}&size=${encodeURIComponent(size)}&style=${encodeURIComponent(
        style
      )}&color=${encodeURIComponent(color)}`,
    });

    this.setState({ submitted: true });

    alert(`Thank You ${this.state.name}`);
    window.location = '/OrderForm';
  };

  render() {
    const { submitted } = this.state;

    return (
      <div className="center">
        {submitted ? (
          <ThankYou />
        ) : (
          <ContactForm
            onChange={this.updateValues}
            onSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default EmailForm;
