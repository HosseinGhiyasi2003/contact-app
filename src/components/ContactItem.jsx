import Modal from "./Modal";

function ContactItem({
  setCurrentView,
  name,
  lastName,
  email,
  id,
  selected,
  deleteContactHandler,
  setSelectedContactId,
  toggleSelect,
  setModalMode,
  setIsModalOpen,
  setTargetId,
}) {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 rounded-md bg-pink-100 hover:bg-pink-200 transition-all mt-1.5">
        <input
          type="checkbox"
          className="mr-2"
          name="selected"
          checked={selected}
          onChange={() => toggleSelect(id)}
        />

        <div className="flex-1">
          <p className="font-medium">
            {name} {lastName}
          </p>
          <p className="text-sm text-gray-600">{email}</p>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => {
              setSelectedContactId(id);
              setCurrentView("edit");
            }}
            className="bg-purple-200 hover:bg-purple-300 text-sm rounded px-2 py-1 cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => {
              setModalMode("single");
              setTargetId(id);
              setIsModalOpen(true);
            }}
            className="bg-red-200 hover:bg-red-300 transition-all cursor-pointer text-sm rounded px-2 py-1"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactItem;
