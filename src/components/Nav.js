import React from 'react';
import { Link } from 'gatsby';
import config from '../../config';
import { Helmet } from 'react-helmet';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="gp-ownership-proof" content="5fff5f9ae2ec29006f5d30ee" />
      </Helmet>
      <nav id="menu">
        <div className="inner">
          <h2>{config.manifestMenu}</h2>
          <ul className="links">
            <li>
              <Link
                onClick={e => {
                  onMenuToggle();
                }}
                to="/"
              >
                {config.manifestHome}
              </Link>
            </li>
            <li>
              <Link
                onClick={e => {
                  onMenuToggle();
                }}
                to="/PrivacyPolicy"
              >
                {config.manifestPrivacyPolicy}
              </Link>
            </li>
          </ul>
          <a
            className="close"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            href="#menu"
          >
            {''}
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}
