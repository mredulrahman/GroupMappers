import React from "react";
import { useParams } from "react-router-dom";
import Header from "./../Header";
import Footer from "./../Footer";
import rabiesData from "/src/assets/data/rabies-data.json";
import ReactMarkdown from "react-markdown";

export default function Rabies() {
  const { key } = useParams();
  const rabies = Array.isArray(rabiesData) ? rabiesData.find(item => item.key === key) : null;
  if (!rabies) {
    return (
      <>
        <Header />
        <div className="p-10 text-center text-red-600 text-xl">
          Page not found
        </div>
        <Footer />
      </>
    );
  }

  const { title = "Rabies Information", para = "", img = [] } = rabies;
  const images = Array.isArray(img) ? img : [];

  return (
    <>
      <Header />
      {/* TITLE BAR */}
      <div className="bg-[#000B58] text-center py-1">
        <h3 className="font-semibold text-white md:text-xl">
          {title}
        </h3>
      </div>
      {/* CONTENT */}
      <section className="bg-linear-to-r from-cyan-100 to-sky-50">
        <div className="px-4 sm:px-6 md:mx-20 py-4 text-blue-950 text-sm sm:text-base md:text-lg leading-tight text-justify">
          <ReactMarkdown>{para}</ReactMarkdown>
        </div>
        {/* IMAGES (ONLY IF EXISTS) */}
        {images.length > 0 && (
          <div className="flex flex-col gap-4 px-4 sm:px-6 md:mx-50 py-4">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${title} - visual reference ${index + 1}`}
                className="w-full h-auto shadow-md shadow-gray-600"
              />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}