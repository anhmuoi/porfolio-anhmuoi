/* eslint-disable react/jsx-indent */
import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://twitter.com/anhmuoi001" alt="/#">
      <BsTwitter />
    </a>
    </div>
    <div>
    <a href="https://www.facebook.com/profile.php?id=100033612305833" alt="/#">
      <FaFacebookF />
    </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-m%C6%B0%E1%BB%9Di-6b58031ba/" alt="/#">
      <BsLinkedin />
    </a>
    </div>
  </div>
);

export default SocialMedia;
