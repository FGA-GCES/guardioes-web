import {
    LOAD_MAKES,
    SET_TOKEN,
    SET_USER,
    SET_EMAIL,
  } from 'constants/action-types';
  
  export const loadMakes = (payload) => ({ type: LOAD_MAKES, payload });

  export const setToken = (payload) => ({ type: SET_TOKEN, payload });

  export const setEmail = (payload) => ({ type: SET_EMAIL, payload });

  export const setUser = (payload) => ({ type: SET_USER, payload });