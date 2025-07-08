import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import AddContactForm from "./AddContactForm";
import EditContactForm from "./EditContactForm";
import Toast from "./Toast";
import showToast from "../helper/showtoast";

function MainPage() {
  const [currentView, setCurrentView] = useState("list");
  const [contacts, setContacts] = useState(() => {
  const stored = localStorage.getItem("contacts");
  return stored ? JSON.parse(stored) : [];
});

  const [selectedContactId, setSelectedContactId] = useState(null);
  const [toast, setToast] = useState("");
  const [isSuccess, setIsSuccess] = useState(null)

  const selectedContact = contacts.find((c) => c.id === selectedContactId);

useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);


  return (
    <>
      {toast && <Toast message={toast} onClose={() => setToast("")} isSuccess={isSuccess} />}
      {currentView === "list" && (
        <ContactList
          setCurrentView={setCurrentView}
          setSelectedContactId={setSelectedContactId}
          contacts={contacts}
          setContacts={setContacts}
          onAdd={() => setCurrentView("add")}
          onEdit={() => setCurrentView("edit")}
          showToast={showToast}
          setToast={setToast}
          setIsSuccess={setIsSuccess}
        />
      )}
      {currentView === "add" && (
        <AddContactForm
          setCurrentView={setCurrentView}
          setContacts={setContacts}
          onCancel={() => setCurrentView("list")}
          showToast={showToast}
          setToast={setToast}
          setIsSuccess={setIsSuccess}
        />
      )}
      {currentView === "edit" && selectedContact && (
        <EditContactForm
          contact={selectedContact}
          contacts={contacts}
          setContacts={setContacts}
          setCurrentView={setCurrentView}
          showToast={showToast}
          setToast={setToast}
          setIsSuccess={setIsSuccess}
        />
      )}
    </>
  );
}

export default MainPage;
