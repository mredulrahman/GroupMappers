import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaMap, FaSatellite } from "react-icons/fa";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  LayersControl
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import { GestureHandling } from "leaflet-gesture-handling";

  L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);


  // Fix marker icons
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });




  export default function Footer() {
    const position = [23.8103, 90.4125];
    return (
      <>
          <footer className="relative w-full md:h-70">
            {/* Light White Base Layer */}
            <div className="absolute inset-0 bg-blue-300"></div>

            {/* Background Image with opacity */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-75"
              style={{ backgroundImage: "url('/src/assets/images/insurance-footer-background.webp')" }}
            ></div>

            {/* Footer Content */}
            <div className="grid md:grid-cols-4 relative z-10 h-full">
              <div className="mt-[80px] px-9">
                <h1 className='text-2xl font-semibold text-white'>Contact Us</h1>
                <hr className='w-12 border-t-4 border-white my-5'/>
                <h1 className='mt-5 text-white'>+8801793593083</h1>
                <h1 className='text-white'>groupmappers@gmail.com</h1>
              </div>
              <div className="mt-[80px] px-9">
                <h1 className='text-2xl font-semibold text-white'>Bangladesh Office</h1>
                <hr className='w-12 border-t-4 border-white my-5'/>
                <h1 className='text-white'>House : 6/20 (1st floor), Block- E, Lalmatia, Mohammadpur, Dhaka, Bangladesh.</h1>
              </div>
              
                <div
                  style={{
                    position: "relative",
                    width: "200px",
                    height: "200px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "2px solid white",
                    marginTop: "65px"
                  }}
                >
                  {/* Overlay Label */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: "rgba(0,0,0,0.6)",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      zIndex: 1000,
                    }}
                  >
                    Mini Map
                  </div>

                  {/* Map */}
                  <MapContainer
                    center={position}
                    zoom={16}
                    gestureHandling={true}
                    zoomControl={true}
                    style={{ width: "100%", height: "100%" }}
                  >
                    {/* Layer Control (BOTTOM LEFT) */}
                    <LayersControl position="bottomleft">
                      {/* OSM DEFAULT */}
                      <LayersControl.BaseLayer checked name="OSM View">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                      </LayersControl.BaseLayer>

                      {/* SATELLITE */}
                      <LayersControl.BaseLayer name="Satellite View">
                        <TileLayer
                          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                      </LayersControl.BaseLayer>
                    </LayersControl>

                    <Marker position={position} />
                  </MapContainer>
                </div>
              
              <div className="mt-[80px]">
                <h1 className='text-2xl font-semibold text-white'>Important Links</h1>
                <hr className='w-12 border-t-4 border-white my-5'/>
                <div className='grid grid-cols-2'>
                  <span className='flex flex-col gap-3 text-white'>
                    <a href="" target="_blank" class="no-underline hover:underline text-white hover:text-blue-950 hover:transition duration-400">Home</a>
                    <a href="" target="_blank" class="no-underline hover:underline text-white hover:text-blue-950 hover:transition duration-400">What We Do</a>
                    <a href="" target="_blank" class="no-underline hover:underline text-white hover:text-blue-950 hover:transition duration-400">Projects</a>
                  </span>
                  <span className='flex flex-col gap-3 '>
                    <a href="" target="_blank" class="no-underline hover:underline text-white hover:text-blue-950 hover:transition duration-400">Who we are</a>
                    <a href="" target="_blank" class="no-underline hover:underline text-white hover:text-blue-950 hover:transition duration-400">Latest News</a>
                    <a href="" target="_blank" class="no-underline hover:underline text-white hover:text-blue-950 hover:transition duration-400">Activities</a>
                  </span>
                </div>
              </div>
            </div>

          </footer>
          
          <div className="bg-[#000B58] w-full px-4 py-3 flex flex-col-reverse gap-2 md:flex-row md:items-center md:justify-between">
            <div className="text-white flex items-center justify-center md:justify-start">
                <h1 className="text-sm">
                    © 2025 Copyright | GroupMappers | All rights reserved.
                </h1>
            </div>

            <div className="flex gap-2 justify-center md:justify-end">
                <a href="https://www.facebook.com/GroupMappers" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} className="text-md hover:text-white rounded-full hover:bg-blue-900 p-2 bg-[#A0A5C0] transition duration-400" />
                </a>
                <a href="https://twitter.com/GroupMappers" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} className="text-md hover:text-white rounded-3xl hover:bg-black p-2 bg-[#A0A5C0] transition duration-400" />
                </a>
                <a href="https://www.instagram.com/groupmappers.bd/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="text-md hover:text-white rounded-3xl hover:bg-stone-500 p-2 bg-[#A0A5C0] transition duration-400" />
                </a>
                <a href="https://www.linkedin.com/company/groupmappers/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-md hover:text-white rounded-3xl hover:bg-sky-800 p-2 bg-[#A0A5C0] transition duration-400" />
                </a>
                <a href="https://www.youtube.com/@groupmappers539" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} className="text-md hover:text-white rounded-3xl hover:bg-red-700 p-2 bg-[#A0A5C0] transition duration-400" />
                </a>
            </div>
          </div>
        </>
      );
  }