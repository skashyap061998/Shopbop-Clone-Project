import React from 'react';
import styles from './OrderSuccess.module.css';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className={styles.successContainer}>
      <div className={styles.heading}>Your order has been placed!</div>
      <div className={styles.success}>
        <img src="https://c.tenor.com/A-1z4jlGrXgAAAAi/onay2.gif" alt="" />
      </div>
      <div className={styles.info}>
        <p className={styles.orderid}>
          Order ID: #{parseInt(Math.random() * 100000000)}
        </p>
        <p>Thankyou for Purchasing</p>
        <button>
          <Link to="/">Continue Shopping...</Link>
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;