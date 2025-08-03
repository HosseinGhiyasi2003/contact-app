import { filterEmail } from "../helper/helper";

function ContactItem({data}) {

  return (
    <tr className="text-left border-t-2 border-[#f2f2f3]">
      <td className="pl-2 w-[150px] pt-2 pb-2">{data.firstName + " " + data.lastName}</td>
      <td className="w-[200px] pl-4 pt-2 pb-2">{filterEmail(data.email)}</td>
      <td className="pl-15 pt-2 pb-2">
        <button className="bg-secondary w-20 py-1 rounded-lg text-white hover:bg-[#ed5252da] cursor-pointer">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactItem;
