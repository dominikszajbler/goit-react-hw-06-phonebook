import { createSlice } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-111', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-211', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-311', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-411', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsItemsSlice = createSlice({
  name: 'items',
  initialState:
    JSON.parse(localStorage.getItem('contacts')) || initialContacts || [],
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContact, deleteContact } = contactsItemsSlice.actions;