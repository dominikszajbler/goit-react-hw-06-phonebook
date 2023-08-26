
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilterValue } from 'redux/selectors';
export const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  const filteredData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className={`${css.contactList} ${css.noPadding}`}>
        {filteredData.map(contact => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};