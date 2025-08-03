import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { contactFormSchema } from "../utils/validation";
import { createContact } from "../services/contactsService";
import { useContacts } from "../context/ContactsContext";

function AddContactPage() {
  const { dispatch } = useContacts();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    resolver: yupResolver(contactFormSchema),
  });

  const formSubmitting = (data) => {
    const fetchCreateContact = async () => {
      try {
        const response = await createContact(data);
        dispatch({ type: "ADD_CONTACT", payload: response.data });
      } catch (error) {
        dispatch({ type: "ERROR_TYPE", payload: error.message });
      }
    };
    fetchCreateContact();
    navigate("/contacts");
  };

  return (
    <div className="w-[350px] bg-[#fbfbfa] rounded-md shadow-2xl p-4 mt-14">
      <h3 className="text-[22px] font-semibold">Add Contact</h3>
      <form className="mt-5" onSubmit={handleSubmit(formSubmitting)}>
        <div className="flex flex-col mb-3">
          <label htmlFor="first_name" className="font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            {...register(
              "firstName"
              //   {
              //   required: "First name is required",
              //   minLength: {
              //     value: 3,
              //     message: "First name must be at least 3 characters long",
              //   },
              //   maxLength: {
              //     value: 20,
              //     message: "First name must be at most 20 characters long",
              //   },
              // }
            )}
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="last_name" className="font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            {...register(
              "lastName"
              //   {
              //   required: "Last name is required",
              //   minLength: {
              //     value: 3,
              //     message: "Last name must be at least 3 characters long",
              //   },
              //   maxLength: {
              //     value: 20,
              //     message: "Last name must be at most 20 characters long",
              //   },
              // }
            )}
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register(
              "email"
              //   {
              //   required: "Email is required",
              //   minLength: {
              //     value: 5,
              //     message: "Email must be at least 5 characters long",
              //   },
              //   maxLength: {
              //     value: 30,
              //     message: "Email must be at most 30 characters long",
              //   },
              //   pattern: {
              //     value: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
              //     message: "Invalid email address",
              //   },
              // }
            )}
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="phone" className="font-semibold">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            {...register(
              "phone"
              //    {
              //   required: "Phone is required",
              //   minLength: {
              //     value: 10,
              //     message: "Phone must be at least 10 characters long",
              //   },
              //   maxLength: {
              //     value: 15,
              //     message: "Phone must be at most 15 characters long",
              //   },
              // }
            )}
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
            Save
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

export default AddContactPage;
