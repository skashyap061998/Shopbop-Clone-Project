import React from "react";
import styles from "./Payment.module.css";
import { Link, useNavigate } from "react-router-dom";
import { loadFromLocal } from '../Utils/LocalStorage';

const Payment = () => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openCard, setOpenCard] = React.useState(false);

  const [success, setSuccess]= React.useState(false);

  const subTotal = loadFromLocal('subSaved');
  const cartCount = loadFromLocal('cartCount');

  const navigate = useNavigate();
  
  if(success){
    setTimeout(() => {
      navigate("/ordersuccess");
    }, 3000);
  }

  return (
    <div className={styles.container}>
      {success ? (
        <div className={styles.loading}>
          <div className={styles.loader}>
            <img
              src="https://media0.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif?cid=790b76116bb5074ec425d2b2084a37a7bda5f10aa0208397&rid=giphy.gif&ct=g"
              alt=""
            />
          </div>
          <h3>Please Wait</h3>
        </div>
      ) : (
        <></>
      )}

      <div className={styles.imgdiv}>
        <img
          alt=""
          src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.details}>
          <div
            className={styles.card}
            style={{ border: openAdd ? "2px solid #ee4a1b" : "" }}
            onClick={() => setOpenAdd(!openAdd)}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNFRTRBMUIiIGN4PSI5IiBjeT0iOSIgcj0iOSIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEzIDkuNjRIOS44M1YxM0g4LjE1NFY5LjY0SDVWOC4xNTZoMy4xNTNWNUg5LjgzdjMuMTU2SDEzeiIvPjwvZz48L3N2Zz4K "
              alt=""
            />
            <p>Add Shipping Address</p>

            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjk2NjM5NiAxMi4xMjYyNDJjLjAzMDQ2MS4xOTc3MjYtLjAzMDQ2LjQwNjgwOS0uMTgyNzY1LjU1OTExM2wtNS4zNzQwMTIgNS4zNzQwMTJjLS4yNTM4NC4yNTM4NC0uNjY1Mzk4LjI1Mzg0LS45MTkyMzggMC0uMjUzODQxLS4yNTM4NC0uMjUzODQxLS42NjUzOTggMC0uOTE5MjM5TDIyLjUwNiAxMi4xMjVsLTUuMDE1NjItNS4wMTUzOGMtLjI1Mzg0LS4yNTM4NDEtLjI1Mzg0LS42NjUzOTkgMC0uOTE5MjQuMjUzODQxLS4yNTM4NC42NjUzOTktLjI1Mzg0LjkxOTI0IDBsNS4zNzQwMSA1LjM3NDAxMmMuMTUyMzA1LjE1MjMwNS4yMTMyMjcuMzYxMzg3LjE4Mjc2Ni41NTkxMTR6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
              alt=""
            />
          </div>
          {openAdd ? (
            <div className={styles.detailsInput}>
              <input type="text" placeholder="Full Name" required />
              <textarea cols="30" rows="10" placeholder="Address" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="State" required />
              <input type="text" placeholder="Country" required />
              <input type="tel" placeholder="Mobile Number" required />
            </div>
          ) : (
            <></>
          )}

          <div
            className={styles.card}
            onClick={() => setOpenCard(!openCard)}
            style={{ border: openAdd ? "2px solid #ee4a1b" : "" }}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNFRTRBMUIiIGN4PSI5IiBjeT0iOSIgcj0iOSIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEzIDkuNjRIOS44M1YxM0g4LjE1NFY5LjY0SDVWOC4xNTZoMy4xNTNWNUg5LjgzdjMuMTU2SDEzeiIvPjwvZz48L3N2Zz4K "
              alt=""
            />
            <p>Add Payment Method</p>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjk2NjM5NiAxMi4xMjYyNDJjLjAzMDQ2MS4xOTc3MjYtLjAzMDQ2LjQwNjgwOS0uMTgyNzY1LjU1OTExM2wtNS4zNzQwMTIgNS4zNzQwMTJjLS4yNTM4NC4yNTM4NC0uNjY1Mzk4LjI1Mzg0LS45MTkyMzggMC0uMjUzODQxLS4yNTM4NC0uMjUzODQxLS42NjUzOTggMC0uOTE5MjM5TDIyLjUwNiAxMi4xMjVsLTUuMDE1NjItNS4wMTUzOGMtLjI1Mzg0LS4yNTM4NDEtLjI1Mzg0LS42NjUzOTkgMC0uOTE5MjQuMjUzODQxLS4yNTM4NC42NjUzOTktLjI1Mzg0LjkxOTI0IDBsNS4zNzQwMSA1LjM3NDAxMmMuMTUyMzA1LjE1MjMwNS4yMTMyMjcuMzYxMzg3LjE4Mjc2Ni41NTkxMTR6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
              alt=""
            />
          </div>
          {openCard ? (
            <div className={styles.detailsInput}>
              <input
                type="text"
                placeholder="Card Number"
                pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                className={styles.cardNum}
                required
              />
              <input type="text" placeholder="Name on Card" />
              <div className={styles.dateDetails}>
                <input
                  type="text"
                  placeholder="Month"
                  className={styles.month}
                  min="1"
                  max="12"
                  size="2"
                  maxlength="2"
                  required
                />
                <input
                  type="text"
                  placeholder="Year"
                  className={styles.year}
                  min="2000"
                  max="2050"
                  size="4"
                  maxlength="4"
                  required
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className={styles.cvv}
                  size="3"
                  maxlength="3"
                  required
                />
              </div>
            </div>
          ) : (
            <></>
          )}
          <button className={styles.btn} onClick={() => setSuccess(true)}>
            Place Order
          </button>
          <p>
            By placing your order, you agree to Shopbop.com’s{" "}
            <Link to="" style={{ textDecoration: "none", color: "#ee4a1b" }}>
              privacy notice
            </Link>{" "}
            and{" "}
            <Link to="" style={{ textDecoration: "none", color: "#ee4a1b" }}>
              condition of use
            </Link>
            .
          </p>
        </div>
        <div className={styles.orderDetails_container}>
          <div className={styles.orderDetails}>
            <p>ORDER DETAILS</p>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/54/54817.png"
            />
          </div>
          <div className={styles.orderDetails_card}>
            <div className={styles.details_info}>
              <p>Products({cartCount})</p>
              <p>₹{subTotal}</p>
            </div>
            <div className={styles.details_info}>
              <p>Shipping & Handling</p>
              <p>Free</p>
            </div>
            <div
              className={styles.details_info}
              style={{ borderBottom: "1px solid black" }}
            >
              <p>Total Before Tax</p>
              <p>₹{subTotal}</p>
            </div>
            <div
              className={styles.details_info}
              style={{
                margin: "1rem 0",
                borderBottom: "none",
                fontWeight: "bold",
              }}
            >
              <p>Order Total</p>
              <p>₹{subTotal+150}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
