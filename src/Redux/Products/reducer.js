import { GET_DATA, IS_LOADING, IS_FAILURE, SORT_DATA, FILTER_DATA } from "./actionTypes";


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
      case GET_DATA:
        return {
          ...state,
          isLoading:false,
          isError:false,
          products: payload,
        }
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
        let sortedData;
        
        if(payload === 'lth') sortedData = state.products.sort((a,b) => parseInt(a.price) - parseInt(b.price));
        else sortedData = sortedData = state.products.sort((a,b) => parseInt(b.price) - parseInt(a.price));
       
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: [...sortedData],
        };
      case FILTER_DATA:
        let filtered = state.products.filter((item) => {
          return item.category === payload || item.subcategory === payload || item.title === payload || item.gender === payload;
        });

        return {
          ...state,
          isLoading: false,
          isError: false,
          products: [...filtered],
        };
      default:
        return state;
    }
  };
  export default ProdReducer ;