import React from "react";
import { useParams } from "react-router-dom";
import Header from "./../Header";
import Footer from "./../Footer";
import teamData from "/src/assets/data/profile.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function TeamMember() {
  const { key } = useParams();
  const member = Array.isArray(teamData) ? teamData.find(item => item.key === key) : null;
  if (!member) {
    return (
      <>
        <Header />
        <div className="p-10 text-center text-red-600 text-xl">
          profile not found
        </div>
        <Footer />
      </>
    );
  }

  const { name = "Unknown", designation = "", description = "", img = "", mail = "", socialLink = "" } = member;

  return (
    <>
      <Header />
      <div className="md:mt-3 md:mx-18 mb-40 p-3">
        <div>
          <h1 className="text-5xl font-bold text-blue-950">
            {name}
          </h1>
          <h1 className="text-lg font-bold text-gray-500">
            {designation}
          </h1>
          <hr className="w-12 border-t-4 border-gray-200 my-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {img ? (
            <img src={img} alt={name} className="h-72 mx-auto" />
          ) : (
            <div className="h-72 hidden md:block" />
          )}
          <p className="text-justify">{description}</p>
        </div>

        <div className="bg-[#000B58] grid md:grid-cols-2 p-12 gap-5 mt-10">
          <div>
            <p className="text-2xl text-white font-bold">Contact Details</p>
          </div>
          <div></div>
          <div>
            <i className="fa fa-envelope" aria-hidden="true" color="green"></i>
            <a href={`mailto:${mail}`} className="hover:underline text-green-600 font-semibold ml-2">{mail}</a>
          </div>
          {socialLink && (
            <div>
              <p className="text-white font-semibold">
                Social Profiles
              </p>
              <a href={socialLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-md hover:text-white rounded-3xl hover:bg-sky-800 p-2 bg-white transition duration-400" />
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}