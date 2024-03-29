import css from './App.module.css';
import  ContactForm  from '../ContactForm/ContactForm';
import { ContactList }  from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};