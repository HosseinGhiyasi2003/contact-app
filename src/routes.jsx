import { Navigate } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";

const routes = [
  {path: '/', element: <Navigate to='/contacts' />},
  {path: '/contacts', element: <ContactsPage/>}
]

export default routes