import { combineReducers } from '@reduxjs/toolkit';
import { contactsFilterSlice } from '../redux/filterSlice';
import { contactsItemsSlice } from '../redux/contactsSlice';

const contactsReducer = combineReducers({
  [contactsItemsSlice.name]: contactsItemsSlice.reducer,
  [contactsFilterSlice.name]: contactsFilterSlice.reducer,
});

export const reducer = {
  contacts: contactsReducer,
};