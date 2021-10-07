import React from "react";
import Nav from "../nav/Navbar";
import avatar from "../assets/avatar.jpg";
import { useHistory } from "react-router";
import { IoChevronBackSharp } from "react-icons/io5";
export default function EditProfile() {
  const history = useHistory();
  return (
    <div>
      <Nav />
      <div className="mt-20 p-4 md:w-3/5 md:m-auto md:mt-20 ">
        <div className="flex items-center mb-4 text-blue-500">
          <IoChevronBackSharp />
          <button onClick={() => history.goBack()} className="pl-1 text-sm">
            Back
          </button>
        </div>
        <div className="md:border md:p-8 md:rounded-lg">
          <div className="flex flex-col justify-center items-center md:block mb-7 border-b md:border-0">
            <h1 className="text-xl mb-2">Change Info</h1>
            <p style={{ color: "#828282" }} className="text-sm pb-2">
              Changes will be reflected to every services
            </p>
          </div>
          <div className="flex items-center pb-5">
            <img src={avatar} className="h-20 w-20 rounded-lg" alt="avat" />
            <p style={{ color: "#828282" }} className="text-sm ml-5">
              Change photo
            </p>
          </div>
          <form>
            <div className="grid mb-4">
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <input
                style={{ fontSize: "13px" }}
                className="border p-2 rounded"
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="grid mb-4">
              <label className="text-sm" htmlFor="bio">
                Bio
              </label>
              <textarea
                style={{ fontSize: "13px" }}
                className="border p-2  rounded"
                placeholder="Enter your bio"
                rows="3"
                type="text"
                id="bio"
                name="bio"
              />
            </div>
            <div className="grid mb-4">
              <label className="text-sm" htmlFor="phone">
                Phone
              </label>
              <input
                style={{ fontSize: "13px" }}
                placeholder="Enter your number"
                className="p-2 border rounded"
                type="text"
                id="phone"
                name="phone"
              />
            </div>
            <div className="grid mb-4">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                style={{ fontSize: "13px" }}
                className="p-2 border rounded"
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="grid">
              <label className="text-sm" htmlFor="password">
                password
              </label>
              <input
                style={{ fontSize: "13px" }}
                className="p-2 border rounded "
                placeholder="Enter your new password"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <button className="bg-blue-500 px-8 py-2 text-white text-sm rounded mt-4">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
