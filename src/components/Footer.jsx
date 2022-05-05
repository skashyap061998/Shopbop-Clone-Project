import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerInfo}>
        <div className={styles.infoItems}>
          <p>SERVICES</p>
          <a href="/">Customer Service</a>
          <a href="/">Gift Certificates</a>
          <a href="/">Give Us Your Feedback</a>
        </div>
        <div className={styles.infoItems}>
          <p>INFORMATION</p>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Affiliate Program</a>
        </div>
        <div className={styles.infoItems}>
          <p>PERSONALIZE</p>
          <a href="/">Account</a>
          <a href="/">My Loyalty</a>
          <a href="/">My Vs</a>
          <a href="/">My Wish List</a>
          <a href="/">My Designers</a>
          <a href="/">My Reviews</a>
        </div>
        <div className={styles.infoItems}>
          <p>CONNECT</p>
          <a href="/">Mobile</a>
          <a href="/">Instagram</a>
          <a href="/">Facebook</a>
          <a href="/">Pinterest</a>
          <a href="/">Weibo</a>
          <a href="/">Sign up for Shopbop emails</a>
        </div>
        <div className={styles.infoItems}>
          <p>LOCATION</p>
          <a href="/">India (change)</a>
          <a href="/">FREE shipping and FREE returns</a>
          <a href="/">Amazon Prime eligible</a>
        </div>
      </div>
      <div className={styles.copyright}>
          © 1999-2022 BOP LLC. All Rights Reserved. Privacy Notice Conditions of
          Use
      </div>
    </div>
  );
}

export default Footer;
