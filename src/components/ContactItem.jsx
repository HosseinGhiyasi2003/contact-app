function ContactItem({ setCurrentView }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 rounded-md bg-pink-100 hover:bg-pink-200 transition-all mt-1.5">
      {/* چک‌باکس */}
      <input type="checkbox" className="mr-2" />

      {/* اطلاعات مخاطب */}
      <div className="flex-1">
        <p className="font-medium">Jenny Wilson</p>
        <p className="text-sm text-gray-600">jenny.wilson@gmail.com</p>
      </div>

      {/* دکمه‌ها */}
      <div className="flex space-x-2">
        <button
          className="bg-purple-200 hover:bg-purple-300 transition-all cursor-pointer text-sm rounded px-2 py-1"
          onClick={() => setCurrentView("edit")}
        >
          Edit
        </button>
        <button className="bg-red-200 hover:bg-red-300 transition-all cursor-pointer text-sm rounded px-2 py-1">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
