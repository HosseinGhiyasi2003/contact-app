function Toast({ message, onClose, isSuccess }) {
  return (
    <div className={`fixed top-5 left-1/2 -translate-x-1/2 ${isSuccess ? 'bg-green-400' : 'bg-red-500'} text-white px-4 py-2 rounded-md shadow-lg z-50 transition-all`}>
      {message}
      <button onClick={onClose} className="ml-3 text-sm text-white">✕</button>
    </div>
  );
}

export default Toast;
