import { toast, ToastContainer } from "react-toastify"
import ContactsList from "../components/ContactsList"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ContactsPage() {

  //  const location = useLocation();

  // useEffect(() => {
  //   if (location.state?.toastMessage) {
  //     toast.success(location.state.toastMessage);
  //      window.history.replaceState({}, "");
  //   }
  // }, [location.state]);

  return (
    <>
      <ToastContainer/>
      <ContactsList/>
    </>
  )
}

export default ContactsPage