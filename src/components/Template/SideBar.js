import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me1.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Chandan Parameshwarappa</h2>
        <p>
          <a href="mailto:chandanparameshwarappa96@gmail.com">Chandan@cparam.me</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> Hi, I&apos;m Chandan. I am a graduate from Colorado State University. Currently, I
        am a Back End Developer at <a href="https://thedonovansvenom.org">The Donovan&apos;s Venom 501c3</a>.
        Previously, I was a Software Engineer at <a href="https://freshfrosh.com">FreshFrosh LLC</a>,
        <a href="https://fordpro.com/">FordPro</a>, and <a href="https://ironmountain.com/">IronMountain</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Chandan Parameshwarappa <Link to="/">cparam.me</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
