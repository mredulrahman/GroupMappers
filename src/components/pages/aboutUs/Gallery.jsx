import React, { useRef } from "react";
import lightGallery from "lightgallery";
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Footer from '../../Footer';
import Header from '../../Header';


const images = [
  {
    src: "/src/assets/images/329799865_446331290962677_9061255370092079196_n.jpg",
    thumb: "/src/assets/images/329799865_446331290962677_9061255370092079196_n.jpg",
    alt: "Image 1 description",
  },
  {
    src: "/src/assets/images/331983336_1200178177277688_3773989570788146855_n.jpg",
    thumb: "/src/assets/images/331983336_1200178177277688_3773989570788146855_n.jpg",
    alt: "Image 2 description",
  },
  {
    src: "/src/assets/images/9D43283D-11A2-4796-8803-1EB9C7B12E83-1536x1152.jpg",
    thumb: "/src/assets/images/9D43283D-11A2-4796-8803-1EB9C7B12E83-1536x1152.jpg",
    alt: "Image 3 description",
  },
  {
    src: "/src/assets/images/332125939_946766212981655_4392939912334334589_n.jpg",
    thumb: "/src/assets/images/332125939_946766212981655_4392939912334334589_n.jpg",
    alt: "Image 4 description",
  },
  {
    src: "/src/assets/images/gis-and-rs-club-cafe.jpgtrtj-scaled.jpg",
    thumb: "/src/assets/images/gis-and-rs-club-cafe.jpgtrtj-scaled.jpg",
    alt: "Image 5 description",
  },
  {
    src: "/src/assets/images/E88DC258-35FA-4175-B8E2-42A08B82ABD0-1536x1152.jpg",
    thumb: "/src/assets/images/E88DC258-35FA-4175-B8E2-42A08B82ABD0-1536x1152.jpg",
    alt: "Image 6 description",
  },
  {
    src: "/src/assets/images/IMG_20180705_182847-1536x1152.jpg",
    thumb: "/src/assets/images/IMG_20180705_182847-1536x1152.jpg",
    alt: "Image 7 description",
  },
  {
    src: "/src/assets/images/volunteer-1536x679.jpg",
    thumb: "/src/assets/images/volunteer-1536x679.jpg",
    alt: "Image 8 description",
  },
  {
    src: "/src/assets/images/69455870_2412430902361748_8118738411470192640_o-1-1536x581.jpg",
    thumb: "/src/assets/images/69455870_2412430902361748_8118738411470192640_o-1-1536x581.jpg",
    alt: "Image 9 description",
  },
  {
    src: "/src/assets/images/323640300_873953090592227_1708312130902432154_n.jpg",
    thumb: "/src/assets/images/323640300_873953090592227_1708312130902432154_n.jpg",
    alt: "Image 10 description",
  },
  {
    src: "/src/assets/images/Res02_IMG_20200221_144520-1536x1108.jpg",
    thumb: "/src/assets/images/Res02_IMG_20200221_144520-1536x1108.jpg",
    alt: "Image 11 description",
  },
  {
    src: "/src/assets/images/321999833_501425571869219_7835864888382398404_n-1536x1536.jpg",
    thumb: "/src/assets/images/321999833_501425571869219_7835864888382398404_n-1536x1536.jpg",
    alt: "Image 12 description",
  },
  {
    src: "/src/assets/images/Captu555re.jpg",
    thumb: "/src/assets/images/Captu555re.jpg",
    alt: "Image 13 description",
  },
  {
    src: "/src/assets/images/IMG_5440-1536x1152.jpg",
    thumb: "/src/assets/images/IMG_5440-1536x1152.jpg",
    alt: "Image 14 description",
  },
  {
    src: "/src/assets/images/DSC0048-1536x1021.jpg",
    thumb: "/src/assets/images/DSC0048-1536x1021.jpg",
    alt: "Image 15 description",
  },
  {
    src: "/src/assets/images/323640300_873953090592227_1708312130902432154_n.jpg",
    thumb: "/src/assets/images/323640300_873953090592227_1708312130902432154_n.jpg",
    alt: "Image 16 description",
  },
  {
    src: "/src/assets/images/image1-1155x570-1.jpg",
    thumb: "/src/assets/images/image1-1155x570-1.jpg",
    alt: "Image 17 description",
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
        // Build dynamic slides array from your images
        dynamicEl: images.map((img) => ({
          src: img.src,
          thumb: img.thumb || img.src,
        })),
        plugins: [lgThumbnail, lgZoom],
        thumbnail: true,
        zoom: true,
        download: false,
        index, // start at clicked image
      });
    } else {
      lgInstanceRef.current.openGallery(index);
    }
  };

  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Gallery</h3>
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
              alt={img.alt}
              className="w-full h-48 object-cover rounded-md shadow-md hover:opacity-80 transition"
            />
          </button>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Gallery;