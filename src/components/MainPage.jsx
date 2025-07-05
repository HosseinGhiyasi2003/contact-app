import { useState } from "react";
import ContactList from "./ContactList";
import AddContactForm from "./AddContactForm";
import EditContactForm from "./EditContactForm";

function MainPage() {
  const [currentView, setCurrentView] = useState("list");
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const selectedContact = contacts.find((c) => c.id === selectedContactId);

  return (
    <>
      {currentView === "list" && (
        <ContactList
          setCurrentView={setCurrentView}
          setSelectedContactId={setSelectedContactId}
          contacts={contacts}
          setContacts={setContacts}
          onAdd={() => setCurrentView("add")}
          onEdit={() => setCurrentView("edit")}
        />
      )}
      {currentView === "add" && (
        <AddContactForm
          setCurrentView={setCurrentView}
          setContacts={setContacts}
          onCancel={() => setCurrentView("list")}
        />
      )}
      {currentView === "edit" && selectedContact && (
        <EditContactForm
          contact={selectedContact}
          contacts={contacts}
          setContacts={setContacts}
          setCurrentView={setCurrentView}
        />
      )}
    </>
  );
}

export default MainPage;
