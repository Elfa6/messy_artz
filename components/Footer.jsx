import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>	&copy; 2022 messyyy_artzzz All rights reserved</p>
      <p className='icons'>
        <a href="https://www.instagram.com/messyyy_artzzz/" rel="noopener noreferrer" target="_blank"><AiFillInstagram /></a>
        <a href="https://www.facebook.com/messyyy.artzzz/" rel="noopener noreferrer" target="_blank"><AiFillFacebook /></a>
      </p>
    </div>
  )
}

export default Footer