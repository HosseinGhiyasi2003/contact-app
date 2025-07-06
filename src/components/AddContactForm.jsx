import { useState } from "react";

function AddContactForm({ setCurrentView, setContacts }) {
  const [newContact, setNewContact] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const saveContactHandler = (e) => {
    e.preventDefault();

    const contactWithId = {
      ...newContact,
      id: Date.now() + Math.random(),
    };

    setContacts((prevContacts) => [...prevContacts, contactWithId]);
    setCurrentView("list");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({ ...prevContact, [name]: value, selected: false }));
  };

  return (
    <div className="w-screen h-screen bg-[#fde8db] flex justify-center items-center">
      <div className="w-96 bg-[#fffefd] mx-auto px-5 py-6 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Add Contact</h3>
        <form>
          <div className="flex flex-col mt-3">
            <label htmlFor="first-name" className="font-medium">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              onChange={handleInputChange}
              value={newContact.name}
              name="name"
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
              id="last-name"
              onChange={handleInputChange}
              value={newContact.lastName}
              name="lastName"
              className="bg-[#f8fffe] border-2 border-[#b5e2de] rounded-[10px] outline-0 px-3 py-2"
            />
            <span></span>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleInputChange}
              value={newContact.email}
              name="email"
              className="bg-[#f8fffe] border-2 border-[#b5e2de] rounded-[10px] outline-0 px-3 py-2"
            />
            <span></span>
          </div>
          <div className="flex gap-x-3 mt-5">
            <button
              className="bg-[#dddafb] text-[18px] font-semibold flex-1/2 rounded-[10px] py-2 cursor-pointer hover:bg-[#d6d2ff] transition-all"
              onClick={() => setCurrentView("list")}
            >
              Cancel
            </button>
            <button
              onClick={saveContactHandler}
              className="bg-[#86b8f1] text-[18px] font-semibold flex-1/2 rounded-[10px] py-2 cursor-pointer text-white hover:bg-[#77a7dd] transition-all"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContactForm;
