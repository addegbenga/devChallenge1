import React from "react";
import Navbar from "../nav/Navbar";
import avatar from "../assets/avatar.jpg";
export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className=" md:w-3/5 md:m-auto md:mt-20 mt-28">
        <div className="mt-7 flex flex-col items-center">
          <h1 className="text-xl mb-2">Personal info</h1>
          <p style={{ color: "#828282" }}>
            Basic info, like your name and photo
          </p>
        </div>
        <div className="md:border rounded-lg mt-10  ">
          <div className="flex justify-between md:border-b mb-10 md:mb-2 px-3 md:py-4 items-center md:px-8 ">
            <div className="flex flex-col ">
              <h1 className="text-xl">Profile</h1>
              <p style={{ color: "#828282" }} className="text-sm w-40 md:w-full">
                Some info may be visible to other people
              </p>
            </div>
            <button
              style={{ color: "#828282" }}
              className=" px-5 md:px-8 md:py-2 py-1 border rounded text-sm"
            >
              Edit
            </button>
          </div>
          <div className="h-80 overflow-y-scroll">
            <div className="flex justify-between items-center border-b pb-2 px-3 md:px-8 ">
              <h1 style={{ color: "#828282" }}>PHOTO</h1>
              <img src={avatar} className="h-20 w-20 rounded-lg" alt="avt" />
            </div>
            <div className="flex py-6 border-b justify-between px-3 md:px-8  ">
              <h1 style={{ color: "#828282" }}>NAME</h1>
              <p>Xanthe Neal</p>
            </div>
            <div className="flex border-b py-6 justify-between px-3 md:px-8 ">
              <h1 style={{ color: "#828282" }}>BIO</h1>
              <p>I am a software dedevCompetition jd gjh</p>
            </div>
            <div className="flex py-6 justify-between border-b px-3 md:px-8 ">
              <h1 style={{ color: "#828282" }}>EMAIL</h1>
              <p>xanthe.neal@gmail.com</p>
            </div>
            <div className="flex py-6 justify-between border-b px-3 md:px-8 ">
              <h1 style={{ color: "#828282" }}>PASSWORD</h1>
              <p>*************</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
