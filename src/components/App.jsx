import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <section className={css.section}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
};
// export const App = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);

//   const dispatch = useDispatch();

//   const [firstRenderFlag, setFlag] = useState(true);

//   useEffect(() => { }, []);
  
//   useEffect(() => {
//     if (firstRenderFlag) {
//       const contactsFromLocalStorage = localStorage.getItem('contactList');

//       if (contactsFromLocalStorage !== 'undefined') {
//         const parsedContacts = JSON.parse(contactsFromLocalStorage);

//         if (parsedContacts) {
//         }
//       }
//       setFlag(false);
//     } else {
//       localStorage.setItem('contactList', JSON.stringify(contacts));
//     }
//   }, [contacts, firstRenderFlag]);
//   // const [contacts, setContacts] = useState(
//   //   JSON.parse(localStorage.getItem('contacts')) ?? []
//   // );
//   // const [filter, setFilter] = useState('');


//   // useEffect(() => {
//   //   localStorage.setItem('contacts', JSON.stringify(contacts));
//   // }, [contacts]);

//   // const handleChange = e => {
//   //   const { value } = e.target;
//   //   setFilter(value);
//   // };

//   const handleSubmit = e => {
//     // const id = nanoid();
//     const name = e.name;
//     const number = e.number;
//     const contactsLists = [...contacts];

//     if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
//       alert(`${name} is already in contacts.`);
//     } else {
//       dispatch(addContact(name, number));
//     }
//     //   contactsLists.push({ name, id, number });
//     // }

//     // setContacts(contactsLists);
//   };

//   const handleDelete = e => {
//     setContacts(contacts.filter(contact => contact.id !== e));
//   };

//   const getFilteredContacts = () => {
//     const filterContactsList = contacts.filter(contact => {
//       return contact.name
//         .toLowerCase()
//         .includes(filter.toLowerCase());
//     });

//     return filterContactsList;
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 20,
//         color: '#010101',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <ContactForm handleSubmit={handleSubmit} />
//       <h2> Contacts</h2>
//       <Filter filter={filter} handleChange={handleChange} />
//       <ContactList
//         contacts={getFilteredContacts()}
//         handleDelete={handleDelete}
//       />
//     </div>
//   );
// };







// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: ''
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     const id = nanoid();
//     const name = e.name;
//     const number = e.number;
//     const contactsLists = [...this.state.contacts];

//     if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
//       alert(`${name} is already in contacts.`);
//     } else {
//       contactsLists.push({ name, id, number });
//     }

//     this.setState({ contacts: contactsLists });
//   };

//   handleDelete = e => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== e),
//     }));
//   };

  // getFilteredContacts = () => {
  //   const filterContactsList = this.state.contacts.filter(contact => {
  //     return contact.name
  //       .toLowerCase()
  //       .includes(this.state.filter.toLowerCase());
  //   });

  //   return filterContactsList;
  // };

//   componentDidMount() { 
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     } 
//   }
  
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
// }
//   }

  // render() {
  //   const { filter } = this.state;

//     return (
//       <div
//         style={{
//           // height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 20,
//           color: '#010101',
//         }}
//       >
//         <h1>Phonebook</h1>
//         <ContactForm handleSubmit={this.handleSubmit} />
//         <h2> Contacts</h2>
//         <Filter filter={filter} handleChange={this.handleChange} />
//         <ContactList
//           contacts={this.getFilteredContacts()}
//           handleDelete={this.handleDelete}
//         />
//       </div>
//     );
//   }
// }
