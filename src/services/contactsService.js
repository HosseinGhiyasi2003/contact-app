import axios from "axios";

const BASE_URL = "http://localhost:3001/contacts";

const getContacts = () => BASE_URL;
const createContact = (newContact) => axios.post(BASE_URL, newContact);
const deleteContact = (id) => axios.delete(`${BASE_URL}/${id}`);

export { getContacts, createContact, deleteContact };
