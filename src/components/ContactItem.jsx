import { useContacts } from "../context/ContactsContext";
import { filterEmail } from "../helper/helper";
import { deleteContact } from "../services/contactsService";

function ContactItem({ data }) {

  const {dispatch} = useContacts()

  const deleteContactHandler = (e) => {
    e.preventDefault()
    console.log('delete');
    
    const fetchDeleteContact = async () => {
      try {
        await deleteContact(data.id)
        dispatch({type:'DELETE_CONTACT', payload: data.id})
      } catch (error) {
        console.log(error);
        
      }
    };
    fetchDeleteContact()
  };

  return (
    <tr className="text-left border-t-2 border-[#f2f2f3]">
      <td className="pl-2 w-[150px] pt-2 pb-2">
        {data.firstName + " " + data.lastName}
      </td>
      <td className="w-[200px] pl-4 pt-2 pb-2">{filterEmail(data.email)}</td>
      <td className="pl-15 pt-2 pb-2">
        <div>

        <button
          onClick={deleteContactHandler}
          className="bg-secondary w-20 py-1 rounded-lg text-white hover:bg-[#ed5252da] cursor-pointer"
          type="button"
        >
          Delete
        </button>
        </div>
      </td>
    </tr>
  );
}

export default ContactItem;
