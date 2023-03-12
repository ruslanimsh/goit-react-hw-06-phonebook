import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';
// import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.contactListItem}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                className={css.contactListItemBtn}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};



// export const ContactList = ({ contacts, handleDelete }) => (
//   <div className={css.wraperContactList}>
//     <ul className={css.contactList}>
//       {contacts.map((contact, id) => (
//         <li key={id} className={css.contactListItem}>
//           {contact.name}: {contact.number}
//           <button
//             type="button"
//             className={css.contactListItemBtn}
//             onClick={() => handleDelete(contact.id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// ContactList.propTypes = {
//   contacts: propTypes.arrayOf(
//     propTypes.exact({
//       id: propTypes.string.isRequired,
//       name: propTypes.string.isRequired,
//       number: propTypes.string.isRequired,
//     })
//   ),
//   handleDelete: propTypes.func.isRequired,
// };
