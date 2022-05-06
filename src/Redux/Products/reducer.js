import { IS_LOADING, IS_FAILURE, SORT_DATA, FILTER_DATA } from "./actionTypes";


const initState = {
    isLoading: false,
    isError: false,
    filterData: [],
    products: [],
    product:[],
    cartData:[],
    data:[]
  };
  
  const ProdReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case IS_LOADING:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case IS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      
      case SORT_DATA:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: state.products.sort((a, b) => {
            if (payload === "ascending") {
              return a.price - b.price;
            } else {
              return b.price - a.price;
            }
          }),
        };
      case FILTER_DATA:
        return {
          ...state,
          isLoading: false,
          isError: false,
          filterData: state.products.filter((item) => {
            return item.category === payload;
          }),
        };
      default:
        return state;
    }
  };
  export default ProdReducer ;