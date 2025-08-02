import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";

function ContactsList() {
  return (
    <section className="bg-[#fbfbfa] max-w-[500px] p-3 rounded-md shadow-2xl mt-14 mx-3">
      <div className="flex justify-between">
        <h2 className="text-[22px] font-semibold">Contact List</h2>
        <Link
          to="/add-contact"
          className="bg-primary text-white flex justify-center items-center font-semibold py-2 px-3 rounded-lg cursor-pointer hover:bg-[#0e7dfdd0] transition-colors"
        >
          Add Contact
        </Link>
      </div>
      <div className="mt-3">
        <SearchBox />
      </div>
      <div className="max-h-80 overflow-y-auto">
        <table className="w-full mx-auto mt-4">
          <thead>
            <tr className="text-left">
              <th className="pb-2 pl-2">Name</th>
              <th className="pb-2 pl-4">Email</th>
              <th className="pb-2 pl-15">Action</th>
            </tr>
          </thead>
          <tbody>
            <ContactItem />
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ContactsList;
