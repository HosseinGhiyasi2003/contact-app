import { useState } from "react";
import ContactList from "./ContactList";
import AddContactForm from "./AddContactForm";
import EditContactForm from "./EditContactForm";

function MainPage() {
  const [currentView, setCurrentView] = useState("list");

  return (
    <>
      {currentView === "list" && (
        <ContactList
          setCurrentView={setCurrentView}
          onAdd={() => setCurrentView("add")}
          onEdit={() => setCurrentView("edit")}
        />
      )}
      {currentView === "add" && (
        <AddContactForm setCurrentView={setCurrentView} onCancel={() => setCurrentView("list")} />
      )}
      {currentView === "edit" && (
        <EditContactForm onCancel={() => setCurrentView("list")} />
      )}
    </>
  );
}

export default MainPage;
