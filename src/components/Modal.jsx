import { useState, useRef } from "react";
import styles from "./Modal.module.css";
import { searchFilter } from '../Redux/Products/action';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Modal = ({ show, setShow }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gender = useRef("women");

  const [women, setWomen] = useState(true);
  const [men, setMen] = useState(false);

  const [search, setSearch] = useState("");

  const handleClose = () => setShow(false);

  const searchHandler = (e) => {
    setSearch(e.target.value.trim());
    if (e.code === "Enter"){
      dispatch(searchFilter({gender:gender.current, key:search}));
      navigate(`/products/${search}`);
    } 
  };

  if (show) {
    return (
      <>
        <div onClick={handleClose} className={styles.backdrop} />
        <div className={styles.modal}>
          <div className={styles.header}>
            <div></div>
            <div>
              <p
                onClick={() => {
                  setWomen(true);
                  setMen(false);
                  gender.current = "women";
                }}
                onDoubleClick={() => {
                  setWomen(false);
                  gender.current = "";
                }}
                className={
                  women
                    ? `${styles.genTab} ${styles.activeTab}`
                    : `${styles.genTab}`
                }
              >
                Women
              </p>
              <p
                onClick={() => {
                  setMen(true);
                  setWomen(false);
                  gender.current = "men";
                }}
                className={
                  men
                    ? `${styles.genTab} ${styles.activeTab}`
                    : `${styles.genTab}`
                }
              >
                Men
              </p>
            </div>
            <p className={styles.close} onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            </p>
          </div>
          <div className={styles.input}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2vw"
                height="1.2vw"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="What's are you looking for?"
              onKeyUp={(e) => searchHandler(e)}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
