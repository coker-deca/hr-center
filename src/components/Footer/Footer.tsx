import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../resources/images/facebook.svg';
import instagram from '../../resources/images/instagram.svg';
import linkedin from '../../resources/images/linkedin.svg';
import logo from '../../resources/images/logo.png';
import twitter from '../../resources/images/twitter.svg';
import youtube from '../../resources/images/youtube.svg';
import { FooterContainer } from './style';

const categoryPlaceholder = ["Our Story", "Blog", "Careers", "Media Center"];

const Footer: FunctionComponent = () => (
  <FooterContainer>
    <div className="row">
      <div className="column">
        <img src={logo} alt="logo" style={{ width: "60%", height: "auto" }} />
      </div>

      <div className="column">
        <p>COMPANY</p>
        {categoryPlaceholder.map((item, key) => (
          <Link to={`/`} key={key}>
            {item}
          </Link>
        ))}
      </div>

      <div className="column">
        <p>CONTACT</p>
        <Link to="/">Enquiry</Link>
      </div>

      <div className="column">
        <p>
          <img src={twitter} alt="twitter logo" />
          <img src={facebook} alt="face<img src={facebook logo" />
          <img src={linkedin} alt="linkedin logo" />
          <img src={youtube} alt="youtube logo" />
          <img src={instagram} alt="instagram logo" />
        </p>
      </div>
    </div>
    <div className="row divider">
      <p>Copyright © 2022 Tosin Coker. All Rights Reserved.</p>
    </div>
  </FooterContainer>
);

export default Footer;
