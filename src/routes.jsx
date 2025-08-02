import { Navigate } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditContactPage";
import ContactDetailsPage from "./pages/ContactDetailsPage";

const routes = [
  { path: "/", element: <Navigate to="/contacts" replace={true} /> },
  { path: "/contacts", element: <ContactsPage /> },
  { path: "/add-contact", element: <AddContactPage /> },
  { path: "/edit-contact", element: <EditContactPage /> },
  { path: "/contact/:contactId", element: <ContactDetailsPage /> },
];

export default routes;
