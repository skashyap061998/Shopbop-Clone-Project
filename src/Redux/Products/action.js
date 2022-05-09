import {
  GET_DATA,
  SORT_DATA,
  FILTER_DATA,
  SEARCH,
} from "./actionTypes";


export const getData = (data) => ({
  type: GET_DATA,
  payload: data,
});

export const sortProducts = (payload) => ({
  type: SORT_DATA,
  payload,
});

export const filterProducts = (id) => ({
  type: FILTER_DATA,
  payload: id,
});


export const searchFilter = (payload) => ({ type: SEARCH, payload });