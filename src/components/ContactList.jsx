import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";

function ContactList({ setCurrentView, contacts, setContacts, setSelectedContactId }) {
  const deleteContactHandler = (id) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  };

 

  return (
    <div className="w-screen h-screen bg-[#d5eeff] flex justify-center items-center">
      <div className="w-96 bg-[#fffefd] mx-auto px-5 py-6 rounded-2xl">
        <h2 className="text-xl font-semibold">Contact List</h2>
        <SearchBar />
        <div className="flex justify-between items-center mt-2.5 mb-3">
          <button className="bg-[#ddf7f5] border-3 border-[#c4eff0] text-[#1b7162] font-medium rounded-[10px] w-34 h-10 cursor-pointer">
            Delete Selected
          </button>
          <button
            className="bg-[#fea1b7] text-white font-medium rounded-[10px] w-34 h-10 cursor-pointer"
            onClick={() => setCurrentView("add")}
          >
            Add Contact
          </button>
        </div>
        <div className="max-h-52 overflow-y-auto">
          {contacts.length ? (
            <>
              {contacts.map((contact) => (
                <ContactItem
                  key={contact.id}
                  {...contact}
                  setCurrentView={setCurrentView}
                  deleteContactHandler={deleteContactHandler}
                  setSelectedContactId={setSelectedContactId}
                />
              ))}
            </>
          ) : (
            <p className="text-center text-xl">No Contacts Yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactList;
