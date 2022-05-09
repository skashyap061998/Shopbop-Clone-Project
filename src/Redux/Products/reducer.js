import {
  GET_DATA,
  SORT_DATA,
  FILTER_DATA,
  GENDER_FILTER,
  SEARCH
} from "./actionTypes";
// import MainData from ".././mainData.json";

const initState = {
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
  product: {},
  cartData: [],
};

const ProdReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };

    case SORT_DATA:
      let sortedData;

      if (payload === "lth")
        sortedData = state.filterData.sort(
          (a, b) => parseInt(a.price) - parseInt(b.price)
        );
      else
        sortedData = sortedData = state.filterData.sort(
          (a, b) => parseInt(b.price) - parseInt(a.price)
        );

      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [...sortedData],
      };

    case FILTER_DATA:
      let filtered = state.products.filter((item) => {
        return (
          item.category === payload ||
          item.subcategory === payload ||
          item.title === payload ||
          item.gender === payload
        );
      });

      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [...filtered],
      };
    
    case SEARCH: {
      const {gender, key} = payload;
      let filtered = state.products.filter((item) => {
        return (
          (item.category === key || item.subcategory === key || item.title === key) && (item.gender === gender)
        );
      });
      console.log(payload);
      return {
        ...state,
        filterData: [...filtered],
      };
    }
    default:
      return state;
  }
};
export default ProdReducer;
