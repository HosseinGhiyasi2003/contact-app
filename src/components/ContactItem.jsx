function ContactItem() {
  return (
    <tr className="text-left border-t-2 border-[#f2f2f3]">
      <td className="pl-2 w-[150px] pt-2 pb-2">hossein ghiyasi</td>
      <td className="w-[200px] pl-4 pt-2 pb-2">hosseinghiyasi2020</td>
      <td className="pl-15 pt-2 pb-2">
        <button className="bg-secondary w-20 py-1 rounded-lg text-white hover:bg-[#ed5252da] cursor-pointer">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactItem;
