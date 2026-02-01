import React, { useRef } from "react";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import Footer from '../../Footer';
import Header from '../../Header';


const images = [
  {
    src: "/src/assets/images/329799865_446331290962677_9061255370092079196_n.jpg",
    thumb: "/src/assets/images/329799865_446331290962677_9061255370092079196_n.jpg",
    alt1: "329799865_446331290962677_9061255370092079196_n",
  },
  {
    src: "/src/assets/images/331983336_1200178177277688_3773989570788146855_n.jpg",
    thumb: "/src/assets/images/331983336_1200178177277688_3773989570788146855_n.jpg",
    alt1: "331983336_1200178177277688_3773989570788146855_n",
  },
  {
    src: "/src/assets/images/9D43283D-11A2-4796-8803-1EB9C7B12E83-1536x1152.jpg",
    thumb: "/src/assets/images/9D43283D-11A2-4796-8803-1EB9C7B12E83-1536x1152.jpg",
    alt1: "9D43283D-11A2-4796-8803-1EB9C7B12E83",
  },
  {
    src: "/src/assets/images/332125939_946766212981655_4392939912334334589_n.jpg",
    thumb: "/src/assets/images/332125939_946766212981655_4392939912334334589_n.jpg",
    alt1: "332125939_946766212981655_4392939912334334589_n",
  },
  {
    src: "/src/assets/images/gis-and-rs-club-cafe.jpgtrtj-scaled.jpg",
    thumb: "/src/assets/images/gis-and-rs-club-cafe.jpgtrtj-scaled.jpg",
    alt1: "gis-and-rs-club-cafe",
  },
  {
    src: "/src/assets/images/E88DC258-35FA-4175-B8E2-42A08B82ABD0-1536x1152.jpg",
    thumb: "/src/assets/images/E88DC258-35FA-4175-B8E2-42A08B82ABD0-1536x1152.jpg",
    alt1: "E88DC258-35FA-4175-B8E2-42A08B82ABD0",
  },
  {
    src: "/src/assets/images/IMG_20180705_182847-1536x1152.jpg",
    thumb: "/src/assets/images/IMG_20180705_182847-1536x1152.jpg",
    alt1: "IMG_20180705_182847",
  },
  {
    src: "/src/assets/images/volunteer-1536x679.jpg",
    thumb: "/src/assets/images/volunteer-1536x679.jpg",
    alt1: "volunteer",
  },
  {
    src: "/src/assets/images/69455870_2412430902361748_8118738411470192640_o-1-1536x581.jpg",
    thumb: "/src/assets/images/69455870_2412430902361748_8118738411470192640_o-1-1536x581.jpg",
    alt1: "69455870_2412430902361748_8118738411470192640_o-1",
  },
  {
    src: "/src/assets/images/323640300_873953090592227_1708312130902432154_n.jpg",
    thumb: "/src/assets/images/323640300_873953090592227_1708312130902432154_n.jpg",
    alt1: "Join GroupMappers' Volunteer Program and Make a Difference in Communities",
    alt2: "Join GroupMappers' volunteer program and help make a positive impact on communities."
  },
  {
    src: "/src/assets/images/Res02_IMG_20200221_144520-1536x1108.jpg",
    thumb: "/src/assets/images/Res02_IMG_20200221_144520-1536x1108.jpg",
    alt1: "Res02_IMG_20200221_144520",
    alt2: "Join GroupMappers' volunteer program and help make a positive impact on communities."
  },
  {
    src: "/src/assets/images/321999833_501425571869219_7835864888382398404_n-1536x1536.jpg",
    thumb: "/src/assets/images/321999833_501425571869219_7835864888382398404_n-1536x1536.jpg",
    alt1: "321999833_501425571869219_7835864888382398404_n",
    alt2: "Join GroupMappers' volunteer program and help make a positive impact on communities."
  },
  {
    src: "/src/assets/images/Captu555re.jpg",
    thumb: "/src/assets/images/Captu555re.jpg",
    alt1: "Captu555re",
    alt2: "Join GroupMappers' volunteer program and help make a positive impact on communities."
  },
  {
    src: "/src/assets/images/IMG_5440-1536x1152.jpg",
    thumb: "/src/assets/images/IMG_5440-1536x1152.jpg",
    alt1: "IMG_5440",
    alt2: "Join GroupMappers' volunteer program and help make a positive impact on communities."
  },
  {
    src: "/src/assets/images/DSC0048-1536x1021.jpg",
    thumb: "/src/assets/images/DSC0048-1536x1021.jpg",
    alt1: "DSC0048",
    alt2: "Join GroupMappers' volunteer program and help make a positive impact on communities."
  },
  {
    src: "/src/assets/images/323640300_873953090592227_1708312130902432154_n.jpg",
    thumb: "/src/assets/images/323640300_873953090592227_1708312130902432154_n.jpg",
    alt1: "Join GroupMappers' Volunteer Program and Make a Difference in Communities",
    alt2: "Become part of a passionate team of volunteers with GroupMappers."
  },
  {
    src: "/src/assets/images/image1-1155x570-1.jpg",
    thumb: "/src/assets/images/image1-1155x570-1.jpg",
    alt1: "image1-1155x570",
    alt2: "Become part of a passionate team of volunteers with GroupMappers."
  }
];

const Gallery = () => {
  const galleryRef = useRef(null);
  const lgInstanceRef = useRef(null);

  // Initialize lightGallery manually on first click
  const openGallery = (index) => {
      if (!lgInstanceRef.current) {
        lgInstanceRef.current = lightGallery(galleryRef.current, {
          dynamic: true,
          dynamicEl: images.map((img) => ({
            src: img.src,
            thumb: img.thumb || img.src,
            subHtml:  `
              <div class="lg-sub-html">
                <h3 style="margin-bottom:6px;">${img.alt1 || ""}</h3>
                <p style="font-size:14px; opacity:0.85;">${img.alt2 || ""}</p>
              </div>
            `, // optional caption
          })),

          plugins: [
            lgThumbnail,
            lgZoom,
            lgShare,
            lgAutoplay,
            lgFullscreen,
          ],
          // 🔹 Enable features
          thumbnail: true,
          zoom: true,
          fullScreen: true,     // fullscreen button
          autoplay: true,       // autoplay button
          autoplayControls: true,
          pause: 3000,          // autoplay delay (ms)
          progressBar: true,
          share: true,          // share button
          download: true,       // download button
          index: index,         // start from clicked image
        });
      } else {
        lgInstanceRef.current.openGallery(index);
      }
    };


  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-semibold text-white text-2xl'>Gallery</h3>
      </div>
      {/* Hidden container only for LightGallery to attach */}
      <div ref={galleryRef} style={{ display: "none" }} />

      {/* Your actual visible gallery grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-7 p-9 bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => openGallery(idx)}
            className="block focus:outline-none"
          >
            <img
              src={img.thumb || img.src}
              alt={img.alt2}
              className="w-full h-48 object-cover shadow-md hover:opacity-80 transition"
            />
          </button>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Gallery;