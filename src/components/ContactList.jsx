import { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";
import Modal from "./Modal";

function ContactList({
  setCurrentView,
  contacts,
  setContacts,
  setSelectedContactId,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("single");
  const [targetId, setTargetId] = useState(null);

  const deleteContactHandler = (id) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearchTerm(searchInput.toLowerCase());
    }, 400);

    return () => clearTimeout(delay);
  }, [searchInput]);

  const normalize = (str) => str?.toLowerCase().trim().replace(/\s+/g, "");

  const filteredContacts = contacts.filter((contact) => {
    const fullName = `${contact.name} ${contact.lastName}`;
    return (
      normalize(fullName).includes(normalize(searchTerm)) ||
      normalize(contact.email).includes(normalize(searchTerm))
    );
  });

  const deleteSelectedHandle = () => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => !contact.selected)
    );
  };

  const toggleSelect = (id) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id
          ? { ...contact, selected: !contact.selected }
          : contact
      )
    );
  };

  return (
    <>
      <div className="w-screen h-screen bg-[#d5eeff] flex justify-center items-center">
        <div className="w-96 bg-[#fffefd] mx-auto px-5 py-6 rounded-2xl">
          <h2 className="text-xl font-semibold">Contact List</h2>
          <SearchBar
            searchTerm={searchInput}
            searchChangeHandle={(e) => setSearchInput(e.target.value)}
          />
          <div className="flex justify-between items-center mt-2.5 mb-3">
            <button
              onClick={() => {
                setModalMode("bulk");
                setIsModalOpen(true);
              }}
              className="bg-[#ddf7f5] border-3 border-[#c4eff0] text-[#1b7162] font-medium rounded-[10px] w-34 h-10 cursor-pointer"
            >
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
            {filteredContacts.length ? (
              <>
                {filteredContacts.map((contact) => (
                  <ContactItem
                    key={contact.id}
                    {...contact}
                    setCurrentView={setCurrentView}
                    deleteContactHandler={deleteContactHandler}
                    setSelectedContactId={setSelectedContactId}
                    deleteSelectedHandle={deleteSelectedHandle}
                    toggleSelect={toggleSelect}
                    modalMode={modalMode}
                    setModalMode={setModalMode}
                    setTargetId={setTargetId}
                    setIsModalOpen={setIsModalOpen}
                  />
                ))}
              </>
            ) : (
              <p className="text-center text-xl">No Contacts Yet</p>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          message={
            modalMode === "single"
              ? "Are you sure you want to delete this contact?"
              : "Are you sure you want to delete all selected contacts?"
          }
          onCancel={() => setIsModalOpen(false)}
          onConfirm={() => {
            if (modalMode === "single") {
              deleteContactHandler(targetId);
            } else {
              deleteSelectedHandle();
            }
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
}

export default ContactList;
