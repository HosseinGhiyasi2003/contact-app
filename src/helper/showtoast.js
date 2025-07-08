const showToast = (msg, setToast) => {
  setToast(msg);
  setTimeout(() => setToast(""), 3000);
};

export default showToast