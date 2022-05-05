import React, { useState, useEffect, useCallback } from "react";
import CTANav from "./CTANav";
import MegaMenu from "./MegaMenu";
import styles from './Navbar.module.css'; 


const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

 const handleScroll = useCallback(() => {
   const currentScrollPos = window.pageYOffset;
   setVisible((prev) => prev=(currentScrollPos >= 1200));
   setPrevScrollPos(currentScrollPos);
 }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <CTANav/>
      <div
        style={{ top: visible ? "" : "0" }}
        className={styles.navbarContainer}
      >
        <div className={styles.logo}>
          <img
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png"
            alt="Company Logo"
          />
        </div>
        <MegaMenu/>
      </div>
    </>
  );
};

export default Navbar;
