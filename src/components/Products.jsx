import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, getData, sortProducts } from "../Redux/Products/action";
import data from ".././mainData.json";
import ReactPaginate from "react-paginate";
import styles from "./Products.module.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";


const Products = () => {
  const {id} = useParams();

  const navigate = useNavigate();
  const curData = useSelector((state) => state.prod.filterData);

  const [man, setMan] = useState(data.Data);
  const [pagenumber, setPagenumber] = useState(0);


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getData(data.Data));
    dispatch(filterProducts(id));
  }, [dispatch, id]);


  const handleSort = (e) => {
    dispatch(sortProducts(e.target.value));
  };


  const userPerpage = 20; //12
  const pageVisited = userPerpage * pagenumber; //0
  const displayUser = curData.map((item) => {
    return (
      <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
        <div className={styles.image}>
          <img src={item.image} className={styles.img} alt="" />
        </div>
        <p className={styles.text}>{item.brand}</p>
        <p>{item.title}</p>
        <p className={styles.text}> ₹ {item.price}</p>
      </div>
    );
  });
  const pageCount = Math.ceil(man.length / userPerpage);

  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };


  return (
    <>
      <div className={styles.headerDiv}>
        <div className={styles.sideBar}>
          <p onClick={() => navigate("/products/clothing")}>Shop All</p>
          <p onClick={() => navigate("/products/designer boutique")}>
            New Today
          </p>
          <p onClick={() => navigate("/products/clothing")}>Clothing</p>
          <p onClick={() => navigate("/products/shoes")}>Shoes</p>
          <p onClick={() => navigate("/products/bags")}>Bags</p>
          <p onClick={() => navigate("/products/jewelery")}>Jewelery</p>
          <p onClick={() => navigate("/products/accessories")}>Accessories</p>
          <p onClick={() => navigate("/products/designer boutique")}>
            Designer Boutique
          </p>
          <p onClick={() => navigate("/products/men")}>Men</p>
        </div>
        <div className={styles.banner} onClick={() => navigate("/")}>
          <img
            src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/desktop/mastheads/2022/2022_05/sb_20220506_desktop_WNMH_mother_1-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.menTop}>
        <div id={styles.topleft}>
          <div id={styles.filter}>FILTER</div>
          <div id={styles.desiner}>
            <select>
              <option>DESIGNERS</option>
            </select>
          </div>

          <div id={styles.size}>
            <select>
              <option>Size</option>
            </select>
          </div>
          <div id={styles.color}>
            <select>
              <option>Color</option>
            </select>
          </div>
          <div id={styles.clear}>
            <p onClick={() => window.location.reload()} style={{margin:'0'}}>CLEAR ALL</p>
          </div>
        </div>

        <div>
          {/* <input type="text" placeholder="Search Products" onKeyPress={handleSearch} /> */}
          <strong>
            Sort By:
            <select onChange={handleSort}>
              <option>Newest</option>
              <option value="lth">LowToHigh</option>
              <option value="htl">HighToLow</option>
            </select>
          </strong>
        </div>
      </div>

      <div className={styles.paginate}>
        <div className={styles.left_paginate}>
          <div id={styles.item}>{man.length} Items </div>
          <div>View</div>
          <div style={{ textDecoration: "underline" }}>{pageVisited}</div>
          <div>{man.length}</div>
        </div>

        <div className={styles.right_paginate}>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationBttns}
            previousLinkClassName={styles.previousBttn}
            nextLinkClassName={styles.nextBttn}
            disabledClassName={styles.paginationDisabled}
            activeClassName={styles.paginationActive}
          />
        </div>
      </div>

      <div className={styles.grid}>{displayUser}</div>
    </>
  );
};

export default Products;
