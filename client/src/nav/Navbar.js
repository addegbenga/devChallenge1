import React from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.jpg";

export default function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 top-0 ">
      <div className="bg-white border-b py-4">
        <div className="flex justify-between w-11/12 m-auto">
          <img src={logo} alt="logo" />
          <div className="flex">
            <img src={avatar} className="w-6 h-6 rounded mr-1" alt="avatar" />
            <div className="flex items-center">
              <p className="text-xs">Xamarin star</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
