import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [formData, setForm] = useState({
    name: '',
    number: '',
  });
  const [numberError, setNumberError] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
    if (name === 'number') {
      setNumberError('');
    }
  };

  const { name, number } = formData;

  const verifyContact = () => {
    const xistingContact = contacts.find(contact => contact.name === name);
    return !xistingContact;
  };

  const validateForm = () => {
    if (!name || !number) {
      return false;
    }
    return verifyContact();
  };

  const validatePhoneNumber = () => {
    const allowedCharacters = /[0-9+\s()-]/;

    for (let i = 0; i < number.length; i++) {
      if (!allowedCharacters.test(number[i])) {
        setNumberError('Invalid phone number format');
        return false;
      }
    }

    return true;
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    const isValidateForm = validateForm();
    const isValidPhoneNumber = validatePhoneNumber();
    if (!isValidateForm || !isValidPhoneNumber) return;

    dispatch(addContact({ id: nanoid(), name, number }));

    setForm({
      name: '',
      number: '',
    });
  };
 
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <form onSubmit={handleSubmitForm} className={css.contactForm}>
      <label className={css.formLabel}>
        Name:
        <input
          className={css.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={css.formLabel}>
        Number:
        <input
          className={css.formInput}
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      {numberError && <p>{numberError}</p>}
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;