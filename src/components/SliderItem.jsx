import React from 'react';
import styles from './SliderItem.module.css';

const SliderItem = ({image, brand, title, price}) => {
  return (
    <div className="itemContainer">
      <div className={styles.itemImg}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.itemInfo}>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>₹ {price}</p>
      </div>
    </div>
  );
}

export default SliderItem;