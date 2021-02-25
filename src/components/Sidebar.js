import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import config from '../../config';
export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
        <h1>
          <Link to="/">{config.manifestHome}</Link>
        </h1>

        <nav>
          <a
            href="https://absolutelyright.groovekart.com/donation/8-donation"
            target="_blank"
            rel="noreferrer"
            class="button"
          >
            Donate
          </a>
        </nav>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
