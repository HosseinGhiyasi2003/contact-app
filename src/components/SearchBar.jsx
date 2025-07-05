function SearchBar() {
  return (
    <div className="w-full bg-[#fffaef] border-2 border-[#fedfb5] rounded-[10px] px-3 py-2 flex mt-3">
      &#128269;
      <input
        type="text"
        placeholder="Search by name or email"
        className="ml-2.5 w-full border-0 outline-0"
      />
    </div>
  );
}

export default SearchBar;
