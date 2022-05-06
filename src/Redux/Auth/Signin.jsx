import React from "react";
import styles from "./Signin.module.css";
import { loadFromLocal, saveToLocal } from "../../Utils/LocalStorage";
import {nanoid} from 'nanoid';


function Signin() {
  const [formData, setFormData] = React.useState({});
  const form = React.useRef();
  const [invalid, setInvalid] = React.useState(false);
  let localData = loadFromLocal("userData") || [];

  const checkValidity = (email, password) => {
    let flag = true;
    for (let el of localData) {
      if (el.email !== email && el.password !== password) {
        flag=false;
        continue; 
      } else break;
    }

    if (!flag) {
      setInvalid(true);
      alert("User doesn't exists!");
    } else {
      setInvalid(false);
      form.current.reset();
      alert("Welcome!");
      saveToLocal("token", nanoid());
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const { email, password } = formData;
    checkValidity(email, password);
  };

  const changeHandler = (e) => {
    let inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };



  const handlepopup = () => {
    let popup = document.getElementById("signIn-popup-id");
    console.log("popup:", popup);
    // popup.toggleClass("active");
    popup.classList.toggle("active");
  };

  const handlepopupremove = () => {
    let popup = document.getElementById("signIn-popup-id");
    popup.classList.remove("active");
  };

  return (
    <div>
      <div className={styles.signIn}>
        <div className={styles.signInTitle}>
          <img alt='' src="https://images-na.ssl-images-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/AUI_desktop_SB_rebrand_1-0.png._CB485948808_.png" />
        </div>

        <form className={styles.signInForm} ref={form}>
          <h3>Sign In</h3>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required onChange={changeHandler} style={{ border: invalid ? "2px solid red" : "1px solid black" }}/>
          <div className={styles.forgotPassword}>
            <label htmlFor="password">Password</label>
            <a href="/">Forgot your password?</a>
          </div>
          <input type="password" name="password" style={{ border: invalid ? "2px solid red" : "1px solid black" }} required onChange={changeHandler}/>

          <button type="submit" onClick={submitHandler}>Sign In</button>
        </form>
        <div className={styles.sigInOptions}>
          <div className={styles.signInCheckbox}>
            <input type="checkbox" name="checkbox" />
            <p>
              Keep me signed in.{" "}
              <a onClick={handlepopup} href="/">
                Details
              </a>
            </p>
            <p className={styles.arrow}>
              <i className="fa-solid fa-sort-down"></i>
            </p>
            <div className={styles.signInPopup} id="signIn-popup-id">
              <h6>
                "Keep Me Signed In" Checkbox
                <a onClick={handlepopupremove} href="/">
                  <i className="fa-solid fa-xmark"></i>
                </a>
              </h6>
              <div className={styles.signInPopupContent}>
                <p>
                  Choosing "Keep me signed in" reduces the number of times
                  you're asked to Sign-In on this device.
                </p>
                <p>
                  To keep your account secure, use this option only on your
                  personal devices.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.moreSignInOptions}>
            <p>More Sign in Options</p>
            <button className={styles.amazonBtn}>
              <a href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&">
                <i className="fa-brands fa-amazon"></i> Login with Amazon
              </a>
            </button>
            <p>New to shopbop?</p>
            <button className={styles.registerBtn} >
              Create your Shopbop account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Signin;
