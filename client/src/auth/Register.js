import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail, MdLock } from "react-icons/md";

export default function Register() {
  return (
    <div className="flex justify-center p-5 md:items-center h-screen">
      <div className="md:border md:rounded-lg  md:w-1/2 md:p-9">
        <div className="flex mb-10">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="mb-4 mt-20 text-lg ">
          Join thousands of learners from around the world
        </h1>
        <p style={{ color: "#333333" }} className="mb-5 text-gray-600 text-sm">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <div>
          <form>
            <div className="grid relative">
              <input
                type="text"
                placeholder="Email"
                className="border mb-3 p-2 pl-8 text-sm rounded"
              />
              <div className="absolute top-2.5 left-2">
                <MdEmail color="#828282" />
              </div>
            </div>
            <div className="grid relative">
              <input
                type="password"
                placeholder="Password"
                className="border mb-4 p-2 pl-8 text-sm rounded"
              />
              <div className="absolute top-2.5 left-2">
                <MdLock color="#828282" />
              </div>
            </div>

            <button className="w-full text-white text-sm font-semibold p-1 rounded mb-5  bg-blue-500">
              Start coding now
            </button>
            <p style={{ color: "#828282" }} className="text-xs text-center">
              or continue with these social profile
            </p>
            <div className="flex mt-5 justify-center">
              <div className="p-2 border mr-3 rounded-full">
                <AiOutlineGoogle size={20} color="#828282" />
              </div>
              <div className="p-2 border mr-3 rounded-full">
                <AiFillFacebook size={20} color="#828282" />
              </div>
              <div className="p-2 border mr-3 rounded-full">
                <AiOutlineTwitter size={20} color="#828282" />
              </div>
              <div className="p-2 border rounded-full">
                <AiFillGithub size={20} color="#828282" />
              </div>
            </div>
            <div className="mt-5 text-center">
              <p className="text-xs" style={{ color: "#828282" }}>
                Already a member?{" "}
                <span className="text-blue-500">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
