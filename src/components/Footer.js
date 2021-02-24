import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <ul className="copyright container">
          <li className="item">
            <a href="/PrivacyPolicy">Privacy Policy</a>
          </li>
          <li className="item">
            <a
              href="https://www.termsfeed.com/live/6fae6007-67a3-4b50-b0ed-6b853baf7105"
              target="_blank"
              rel="noreferrer"
            >
              Terms and Conditions
            </a>
          </li>
        </ul>
        <p>{config.manifestFooterLineOne}</p>
        <p>{config.manifestFooterLineTwo}</p>
        <p>{config.manifestRefundPolicy}</p>
        <div className="container">
          <p style={{ width: '25%' }} className="item">
            {config.manifestEmail}
          </p>
          <p className="item">{config.manifestPhone}</p>
        </div>
      </div>
    </section>
  );
}
