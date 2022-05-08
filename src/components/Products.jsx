import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, getData, sortProducts } from "../Redux/Products/action";
import data from ".././mainData.json";
import ReactPaginate from "react-paginate";
import styles from "./Products.module.css";

export const Products = () => {
  const curData = useSelector((state) => state.prod.products);

  // console.log(curData);
  const [man, setMan] = useState(data.Data);
  const [pagenumber, setPagenumber] = useState(0);


  const dispatch = useDispatch();


  useEffect(() => {
    // console.log(data.Data);
    dispatch(getData(data.Data));
  }, [dispatch]);


  const handleSort = (e) => {
    // dispatch sort products on change
    dispatch(sortProducts(e.target.value));
    setMan([...curData]);
  };

  const handleSearch = (e) => {
    if(e.key === 'Enter'){
      dispatch(filterProducts(e.target.value));
      setMan([...curData]);
    }
  };

  const tabSearch =(value)=>{
    dispatch(filterProducts(value));
    setMan([...curData]);
  }


  const userPerpage = 20; //12
  const pageVisited = userPerpage * pagenumber; //0
  const displayUser = man.map((item) => {
    return (
      <div key={item.id}>
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
    <div id={styles.headerDiv}>
      <div id={styles.sideBar}>
        <p>Shop All</p>
        <p>New Today</p>
        <p onClick={()=> tabSearch('clothing')}>Clothing</p>
        <p onClick={()=> tabSearch('shoes')}>Shoes</p>
        <p onClick={()=> tabSearch('bags')}>Bags</p>
        <p onClick={()=> tabSearch('jewelery')}>Jewelery</p>
        <p onClick={()=> tabSearch('accessories')}>Accessories</p>
        <p onClick={()=> tabSearch('designer boutique')}>Designer Boutique</p>
        <p onClick={()=> tabSearch('men')}>Men</p>
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
            <a>CLEAR ALL</a>
          </div>
        </div>

        <div>
        <input type="text" placeholder="Search Products" onKeyPress={handleSearch} />
          <strong>
            Sort By:
            <select  onChange={handleSort}>
              <option>Newest</option>
              <option value="lth">LowToHigh</option>
              <option value="htl">HighToLow</option>
            </select>
          </strong>
        </div>
      </div>

      {/* <div><strong>Sort By:
        <select
          onChange={(e) => {
            SortingPrice(e);
          }}
        >
          <option>Sort</option>
          <option value="lth">LowToHigh</option>
          <option value="htl">HighToLow</option>
        </select>
        </strong>
      </div> */}

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
