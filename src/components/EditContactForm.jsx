import { useEffect, useState } from "react";

function EditContactForm({ setCurrentView, contacts,setContacts, contact }) {
  const [editedContact, setEditedContact] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (contact) {
      setEditedContact(contact);
    }
  }, [contact]);

  const saveHandler = (e) => {
  e.preventDefault();
  const updatedContacts = contacts.map((c) =>
    c.id === editedContact.id ? editedContact : c
  );
  setContacts(updatedContacts);
  setCurrentView("list");
};


  return (
    <div className="w-screen h-screen bg-[#fde8db] flex justify-center items-center">
      <div className="w-96 bg-[#fffefd] mx-auto px-5 py-6 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Edit Contact</h3>
        <form>
          <div className="flex flex-col mt-3">
            <label htmlFor="first-name" className="font-medium">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              value={editedContact.name}
              onChange={(e) =>
                setEditedContact({ ...editedContact, name: e.target.value })
              }
              className="bg-[#f8fffe] border-2 border-[#b5e2de] rounded-[10px] outline-0 px-3 py-2"
            />
            <span></span>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="last-name" className="font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="  last-name"
              value={editedContact.lastName}
              onChange={(e) =>
                setEditedContact({ ...editedContact, lastName: e.target.value })
              }
              className="bg-[#f8fffe] border-2 border-[#b5e2de] rounded-[10px] outline-0 px-3 py-2"
            />
            <span></span>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={editedContact.email}
              onChange={(e) =>
                setEditedContact({ ...editedContact, email: e.target.value })
              }
              className="bg-[#f8fffe] border-2 border-[#b5e2de] rounded-[10px] outline-0 px-3 py-2"
            />
            <span></span>
          </div>
          <div className="flex gap-x-3 mt-5">
            <button
            type="button"
              className="bg-[#dddafb] text-[18px] font-semibold flex-1/2 rounded-[10px] py-2 cursor-pointer hover:bg-[#d6d2ff] transition-all"
              onClick={() => setCurrentView("list")}
            >
              Cancel
            </button>
            <button type="submit" onClick={saveHandler} className="bg-[#86b8f1] text-[18px] font-semibold flex-1/2 rounded-[10px] py-2 cursor-pointer text-white">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContactForm;
