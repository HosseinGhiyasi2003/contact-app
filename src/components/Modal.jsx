function Modal({onConfirm, onCancel, message}) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[300px] p-5 text-center">
        <h2 className="text-lg font-bold mb-2">Are you sure?</h2>
        <p className="text-sm text-gray-600 mb-4">
          {message}
        </p>
        <div className="flex justify-center gap-3">
          <button className="bg-red-400 text-white rounded px-4 py-1.5 cursor-pointer hover:bg-red-500 transition-all" onClick={onConfirm}>
            Yes, Delete
          </button>
          <button className="bg-gray-200 rounded px-4 py-1.5 cursor-pointer hover:bg-gray-300 transition-all" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
