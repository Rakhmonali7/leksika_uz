import React from 'react';
import classes from './Footer.module.css';
import {
  TbBrandTelegram,
  TbBrandFacebook,
  TbBrandYoutube,
  TbBrandGmail,
} from 'react-icons/tb';
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <p> © 2022 — 2024 Leksika.uz </p>
        <ul>
          <li>
            <a href="https://leksika.uz/PrivacyPolicy.html">Privacy Policy</a>
          </li>
          <li>
            <a href="https://t.me/AsqarArslonov">
              <TbBrandTelegram />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/people/LeksikaUZ/100086569411918/">
              <TbBrandFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@leksikauz">
              <TbBrandYoutube />
            </a>
          </li>
          <li>
            <a href="mailto:asqararslonov2008@gmail.com">
              <TbBrandGmail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
