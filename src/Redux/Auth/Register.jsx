import React from "react";
import styles from './Register.module.css';
import {saveToLocal, loadFromLocal} from '../../Utils/LocalStorage';

function Register() {

  const [formData, setFormData] = React.useState({});
  const form = React.useRef();
  const [exists, setExists] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);
  let localData = loadFromLocal('userData') || [];

  const checkExisting = (username, email, password) => {
    let flag = false;
    for (let el of localData) {
      if (el.username === username || el.email === email) {
        flag = true;
        break;
      } else continue;
    }

    if (flag) {
      setExists(true);
      alert("User already exists!");
    } else {
      setExists(false);
      form.current.reset();
      alert("Thankyou for Registering!");
      localData.push({ username, email, password });
      saveToLocal("userData", localData);
    }
  };


  const submitHandler = (e) => {
    e.preventDefault();
    
    const {username, email, password, repassword} = formData;
    if(password.trim() !== repassword.trim()){
      setInvalid(true);
      alert('Invalid Password!');

    }else{
      setInvalid(false);
      checkExisting(username, email, password);
    }
  }

  const changeHandler=(e)=>{
    let inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]:e.target.value,
    });
  }

  

  return (
    <div>
      <div className={styles.register}>
        <div className={styles.registerTitle}>
          <img
            alt=""
            src="https://images-na.ssl-images-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/AUI_desktop_SB_rebrand_1-0.png._CB485948808_.png"
          />
        </div>

        <form className={styles.registerForm} ref={form}>
          <h3>Create account</h3>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="username"
            style={{ border: exists ? "2px solid red" : "1px solid black" }}
            required
            onChange={changeHandler}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            style={{ border: exists ? "2px solid red" : "1px solid black" }}
            name="email"
            required
            onChange={changeHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="At least 6 characters"
            onChange={changeHandler}
            required
            style={{ border: invalid ? "2px solid red" : "1px solid black" }}
          />
          <p className={styles.formControl}>
            Passwords must be at least 6 characters.
          </p>
          <label htmlFor="password">Re-enter Password</label>
          <input
            type="password"
            name="repassword"
            required
            onChange={changeHandler}
            style={{ border: invalid ? "2px solid red" : "1px solid black" }}
          />

          <button type="submit" onClick={submitHandler}>
            Create Account
          </button>
          <p>
            By creating an account, you agree to our{" "}
            <a
              className={styles.privacyTerms}
              href="https://www.shopbop.com/ci/aboutShopBop/privacypolicy.html"
            >
              Privacy Notice
            </a>{" "}
            and
            <a
              className={styles.privacyTerms}
              href="https://www.shopbop.com/ci/aboutShopBop/conditions.html"
            >
              {" "}
              Conditions of Use
            </a>
            .
          </p>
        </form>
        <div className={styles.registerOptions}>
          <p className={styles.registerOption}>Other Sign in Options</p>
          <button className={styles.amazonBtn}>
            <a href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&">
              <i className="fa-brands fa-amazon"></i> Login with Amazon
            </a>
          </button>
          <div className={styles.registerOptionsLine}></div>
          <div className={styles.signInOptions}>
            <p className={styles.signInOption}>
              Already have an account?
              <a href="/signin" className={styles.SignInLink}>
                <span style={{ padding: "0.5rem" }}>Sign In</span>
              </a>
            </p>
            <p className={styles.arrow}>
              <i className="fa-solid fa-caret-right"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
