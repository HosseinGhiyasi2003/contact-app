import { Link } from "react-router-dom"

function EditContactPage() {
  return (
    <div className="w-[350px] bg-[#fbfbfa] rounded-md shadow-2xl p-4 mt-14">
      <h3 className="text-[22px] font-semibold">Edit Contact</h3>
      <form className="mt-5">
        <div className="flex flex-col mb-3">
          <label htmlFor="first_name" className="font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="first_name" className="font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="first_name" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="first_name" className="font-semibold">
            Phone
          </label>
          <input
            type="number"
            id="first_name"
            className="outline-0 border-2 border-[#f2f2f3] rounded-lg mt-2 py-1.5 px-3"
          />
        </div>
        <div className="flex justify-end gap-x-2 mt-4">
          <button className="bg-primary w-20 py-1 flex justify-center rounded-lg font-semibold text-white cursor-pointer hover:bg-[#0e4efd]">Edit</button>
          <Link className="bg-[#e4e4e5] w-20 py-1 flex justify-center rounded-lg font-semibold cursor-pointer hover:bg-[#cdcdce]" to='/'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default EditContactPage