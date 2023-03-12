import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';
// import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.filterLabel}>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};



// export const Filter = ({ filter, handleChange }) => (
//   <div>
//     <label className={css.filterLabel}>Find contacts by Name </label>
//     <input
//       className={css.filterName}
//       type="text"
//       name="filter"
//       placeholder="Enter filter"
//       value={filter}
//       onChange={handleChange}
//     />
//   </div>
// );

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   handleChange: propTypes.func.isRequired,
// };
