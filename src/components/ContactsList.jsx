import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useContacts } from "../context/ContactsContext";
import { useEffect } from "react";
import axios from "axios";
import { getContacts } from "../services/contactsService";
import { ClipLoader } from "react-spinners";

function ContactsList() {
  const { state, dispatch } = useContacts();

  useEffect(() => {
    const fetchGetContact = async () => {
      try {
        const response = await axios.get(getContacts());
        dispatch({ type: "GET_CONTACTS", payload: response.data });
      } catch (error) {
        dispatch({ type: "ERROR_TYPE", payload: error.message });
      }
    };
    fetchGetContact();
  }, []);

  return (
    <section className="bg-[#fbfbfa] w-[500px] p-3 rounded-md shadow-2xl mt-14 mx-3">
      <div className="flex justify-between">
        <h2 className="text-[22px] font-semibold">Contact List</h2>
        <Link
          to="/add-contact"
          className="bg-primary text-white flex justify-center items-center font-semibold py-2 px-3 rounded-lg cursor-pointer hover:bg-[#0e7dfdd0] transition-colors"
        >
          Add Contact
        </Link>
      </div>
      <div className="mt-3">
        <SearchBox />
      </div>
      <div className="max-h-80 overflow-y-auto">
        {state.isLoading ? (
          <div className="w-full flex justify-center pt-5">
            <ClipLoader color="#0e5ffd" loading size={50} />
          </div>
        ) : state.contacts.length === 0 ? (
          <p className="text-center py-5 text-2xl font-semibold">No Results</p>
        ) : (
          <table className="w-full mx-auto mt-4">
            <thead>
              <tr className="text-left">
                <th className="pb-2 pl-2">Name</th>
                <th className="pb-2 pl-4">Email</th>
                <th className="pb-2 pl-15">Action</th>
              </tr>
            </thead>
            <tbody>
              {state.contacts.map((contact) => (
                <ContactItem key={contact.id} data={contact} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default ContactsList;
