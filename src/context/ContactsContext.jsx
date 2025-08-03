import { createContext, useContext, useReducer } from "react";

const initialState = {
  contacts: [],
  filteredContacts: [],
  isLoading: true,
  error: null,
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload, isLoading: false };
    case "ERROR_TYPE":
      return { ...state, error: action.payload, isLoading: false };
    case 'ADD_CONTACT': 
    return { ...state, contacts: [...state.contacts, action.payload] };
    case 'DELETE_CONTACT': 
    return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };

    default:
      return state;
  }
};

const ContactsContext = createContext();

function ContactsProvider({ children }) {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsProvider;

export const useContacts = () => useContext(ContactsContext);
