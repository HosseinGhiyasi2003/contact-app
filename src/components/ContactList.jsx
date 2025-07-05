import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";

function ContactList({ setCurrentView }) {
  return (
    <div className="w-screen h-screen bg-[#d5eeff] flex justify-center items-center">
      <div className="w-96 bg-[#fffefd] mx-auto px-5 py-6 rounded-2xl">
        <h2 className="text-xl font-semibold">Contact List</h2>
        <SearchBar />
        <div className="flex justify-between items-center mt-2.5 mb-3">
          <button className="bg-[#ddf7f5] border-3 border-[#c4eff0] text-[#1b7162] font-medium rounded-[10px] w-34 h-10 cursor-pointer">
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
          <ContactItem setCurrentView={setCurrentView} />
          <ContactItem setCurrentView={setCurrentView} />
          <ContactItem setCurrentView={setCurrentView} />
          <ContactItem setCurrentView={setCurrentView} />
        </div>
      </div>
    </div>
  );
}

export default ContactList;
