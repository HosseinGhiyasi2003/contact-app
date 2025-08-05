import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { contactFormSchema } from "../utils/validation";
import { useContacts } from "../context/ContactsContext";
import { updateContact } from "../services/contactsService";

function EditContactPage() {
  const { state, dispatch } = useContacts();
  const { contactId } = useParams();
  let navigate = useNavigate()

  const contact = state.contacts.find((contact) => contact.id === contactId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
    },
    resolver: yupResolver(contactFormSchema),
  });

  const formSubmitting = (data) => {
    const fetchUpdateContact = async () => {
      try {
        await updateContact(contact.id, data)
        dispatch({type: 'UPDATE_CONTACT', payload: data})
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchUpdateContact()
    navigate('/contacts')
  };

  return (
    <div className="w-[350px] bg-[#fbfbfa] rounded-md shadow-2xl p-4 mt-14">
      <h3 className="text-[22px] font-semibold">Edit Contact</h3>
      <form className="mt-5" onSubmit={handleSubmit(formSubmitting)}>
        <div className="flex flex-col mb-3">
          <label htmlFor="first_name" className="font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            {...register("firstName")}
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="first_name" className="font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            {...register("lastName")}
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="first_name" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="first_name" className="font-semibold">
            Phone
          </label>
          <input
            type="number"
            id="first_name"
            {...register("phone")}
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
          {errors.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}
        </div>
        <div className="flex justify-end gap-x-2 mt-4">
          <button
            className="bg-primary w-20 py-1 flex justify-center rounded-lg font-semibold text-white cursor-pointer hover:bg-[#0e4efd]"
            type="submit"
          >
            Edit
          </button>
          <Link
            className="bg-[#e4e4e5] w-20 py-1 flex justify-center rounded-lg font-semibold cursor-pointer hover:bg-[#cdcdce]"
            to="/"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditContactPage;
