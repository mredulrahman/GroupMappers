import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import newsData from "/src/assets/data/news-data.json";
import Header from "./../Header";
import Footer from "./../Footer";
import ReactMarkdown from "react-markdown";

export default function News() {
  const { slug } = useParams();
  const news = Array.isArray(newsData) ? newsData.find((item) => item.slug === slug) : null;

  if (!news) {
    return (
      <>
        <Header />
        <div className="min-h-[50vh] flex items-center justify-center text-red-600 text-xl">
          News not found
        </div>
        <Footer />
      </>
    );
  }

  const images = Array.isArray(news.images) ? news.images : [];

  return (
    <>
      <Header />
      <div className="px-8 md:px-16 py-8 bg-linear-to-r from-cyan-100 to-sky-50">
        {/* Content */}
        <div className="max-w-none text-justify mb-8 md:text-lg">
          <ReactMarkdown>{news.para || ""}</ReactMarkdown>
        </div>
       {images.length === 1 ? (
          /* SINGLE IMAGE – CENTERED */
          <div className="flex justify-center">
            <img
              src={images[0]}
              alt=""
              className="max-w-full md:max-w-200 shadow-md"
            />
          </div>
        ) : images.length > 1 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="mb-4 w-full shadow-md"
              />
            ))}
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
}
