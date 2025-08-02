import { Link } from "react-router-dom";

function ContactDetailsPage() {
  return (
    <div className="max-w-[500px] h-80 bg-[#fbfbfa] rounded-md shadow-2xl p-4 mt-14">
      <h3 className="text-[22px] font-semibold">Contact Detail</h3>
      <div className="flex items-start justify-between pt-6">
        <div>
          <h4 className="text-[18px] font-bold">Hossein Ghiyasi</h4>
          <p className="font-medium pt-2.5">hosseinghiyasi2020@gmail.com</p>
          <span className="font-medium pt-2.5 block">09338200581</span>
        </div>
        <div className="flex gap-x-2">
          <Link
            to="/"
            className="bg-secondary block w-15 text-center text-white py-1 rounded-lg hover:bg-[#ed5252da] "
          >
            Back
          </Link>
          <Link
            to="/edit-contact"
            className="bg-primary block w-15 text-center text-white py-1 rounded-lg hover:bg-[#0e4efd]"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactDetailsPage;
