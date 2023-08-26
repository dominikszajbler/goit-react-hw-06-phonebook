import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  const handleFilterInputChange = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>Find contacts by name</label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filterValue}
        onChange={handleFilterInputChange}
      />
    </div>
  );
};