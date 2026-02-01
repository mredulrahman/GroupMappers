import React from 'react'
import Header from '../../Header';
import Footer from '../../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <Header/>
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-semibold text-white text-2xl'>Meet our team members </h3>
      </div>
      <section className="bg-radial-[at_15%_35%] from-cyan-200 via-sky-100 via-45% to-blue-300 to-95% grid md:grid-cols-2 gap-9 md:p-16 py-6 px-3">
        
            <div className="flex items-start gap-7">
              {/* Image column */}
              <div className="w-52 h-48 flex-shrink-0 overflow-hidden rounded-br-4xl rounded-tl-4xl">
                <img
                  src="/src/assets/images/PXL_20230422_0302hh04833-removebg-preview-246x250.png"
                  alt=""
                  className="h-full w-full object-contain transition-transform duration-500 ease-out hover:scale-110"
                />
              </div>

              {/* Text column */}
              <div className="flex flex-col flex-1">
                <Link
                  to="/staff/nurullah/"
                  className="text-2xl text-blue-950 hover:text-white transition duration-700">
                  Md Nurullah
                </Link>

                <p className="text-sm text-gray-400">GIS Data Manager</p>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  A geographer with data management and GIS analytical capability. His main
                  skill sets are in archiving...
                </p>

                <Link
                  to="/staff/nurullah/"
                  className="group mt-4 inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
                  />
                  <span className="text-blue-950 text-sm">Read more</span>
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-7">
                {/* Image column */}
                <div className="w-52 flex-shrink-0 overflow-hidden rounded-tl-4xl rounded-br-4xl">
                  <img
                    src="/src/assets/images/yfufu-350x250.jpg"
                    alt=""
                    className="h-48 w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>

                {/* Text column */}
                <div className="flex flex-col flex-1 py-2">
                  <Link
                    to="/staff/afrida/"
                    className="text-2xl text-blue-950 hover:text-white transition duration-700">
                    Afrida Asad
                  </Link>

                  <p className="text-sm text-gray-400">Research and Development Officer</p>

                  <p className="mt-3 text-sm text-gray-400">
                    A geographer from Bangladesh, who is currently pursuing a Masters in Global
                    Health Science and Epidemiology...
                  </p>

                  <Link
                    to="/staff/afrida/"
                    className="group mt-4 inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
                    />
                    <span className="text-blue-950 text-sm">Read more</span>
                  </Link>
                </div>
              </div>

            <div className="flex items-start gap-7">
              {/* Image column */}
              <div className="w-56 h-[170px] flex-shrink-0 overflow-hidden rounded-tl-4xl rounded-br-4xl">
                <img
                  src="/src/assets/images/vyyty-350x250.jpg"
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                />
              </div>
                  {/* Text column */}
                  <div className="flex flex-col flex-1">
                    <Link
                      to="/staff/ismail/"
                      className="text-2xl text-blue-950 hover:text-white transition duration-700"
                    >
                      Md Ismail Hossain
                    </Link>
                    <p className="text-sm text-gray-400">
                      Spatial Data Scientist
                    </p>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      With expertise in GIS, remote sensing, machine learning in spatial analysis
                      and data visualization, a...
                    </p>

                    <Link
                      to="/staff/ismail/"
                      className="group mt-4 inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
                      />
                      <span className="text-blue-950 text-sm">Read more</span>
                    </Link>
                  </div>
                </div>

        <div className="flex items-start gap-7">
          {/* Image column */}
          <div className="w-56 h-[170px] flex-shrink-0 overflow-hidden rounded-tl-4xl rounded-br-4xl">
            <img
              src="/src/assets/images/hgytty-350x250.jpg"
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>

          {/* Text column */}
          <div className="flex flex-col flex-1">
            <Link
              to="/staff/didar/"
              className="text-2xl text-blue-950 hover:text-white transition duration-700"
            >
              Didar Uddin
            </Link>

            <p className="text-sm text-gray-400">
              Research Assistant
            </p>

            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Working at the field level, he has contributed to data collection,
              monitoring, and validation for a...
            </p>

            <Link
              to="/staff/didar/"
              className="group mt-4 inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
              />
              <span className="text-blue-950 text-sm">Read more</span>
            </Link>
          </div>
        </div>

        <div>
            <div>
                <Link to="/staff/antor/" className='text-2xl text-blue-950 hover:text-white transition duration-700'>Ahamed Sakib Antor</Link>
                <h1 className='text-sm text-gray-400'>GIS Analyst</h1><br/>
                <p className='text-sm text-gray-400'>He is a multi-talented individual who excels in<br/> various aspects of data collection and datatbase<br/> organization....</p><br/>
                <Link to="/staff/antor/" className="group inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
                  />
                  <span className="text-blue-950 text-sm">
                    Read more
                  </span>
                </Link>
            </div>
        </div>

        <div className="flex items-start gap-7">
          {/* Image column */}
          <div className="w-56 h-[170px] flex-shrink-0 overflow-hidden rounded-tl-4xl rounded-br-4xl">
            <img
              src="/src/assets/images/vjfuyf-350x250.png"
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>

          {/* Text column */}
          <div className="flex flex-col flex-1">
            <Link
              to="/staff/mustakim/"
              className="text-xl text-blue-950 hover:text-white transition duration-700"
            >
              Md. Mustakim Hossain Khan
            </Link>

            <p className="text-sm text-gray-400">
              GIS Specialist
            </p>

            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Being involved with GroupMappers since 2018, he is a valuable resource with
              skills in data management,...
            </p>

            <Link
              to="/staff/mustakim/"
              className="group mt-4 inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
              />
              <span className="text-blue-950 text-sm">Read more</span>
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-7">
          {/* Image column */}
          <div className="w-56 h-[170px] flex-shrink-0 overflow-hidden rounded-tl-4xl rounded-br-4xl">
            <img
              src="/src/assets/images/dfhbdr-336x250.png"
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>

          {/* Text column */}
          <div className="flex flex-col flex-1">
            <Link
              to="/staff/joly/"
              className="text-2xl text-blue-950 hover:text-white transition duration-700"
            >
              Mst. Asfat Ara Joly
            </Link>

            <p className="text-sm text-gray-400">
              Data Analyst
            </p>

            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              With a background in Geography and Environment, she has been with
              GroupMappers as a volunteer since 2020...
            </p>

            <Link
              to="/staff/joly/"
              className="group mt-4 inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
              />
              <span className="text-blue-950 text-sm">Read more</span>
            </Link>
          </div>
        </div>

        <div>
            <div>
                <Link to="/staff/israt/" className='text-2xl text-blue-950 hover:text-white transition duration-700'>Israt Jahan Ria</Link>
                <h1 className='text-sm text-gray-400'>Data Analyst</h1><br/>
                <p className='text-sm text-gray-400'>With a background in Geography and Environment,<br/> she has been with GroupMappers as a volunteer<br/> since 2020....</p><br/>
                <Link to="/staff/israt/" className="group inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
                  />
                  <span className="text-blue-950 text-sm">
                    Read more
                  </span>
                </Link>
            </div>
        </div>

        <div>
            <div>
                <Link to="/staff/naila/" className='text-2xl text-blue-950 hover:text-white transition duration-700'>Kazi Nuzhat Naila</Link>
                <h1 className='text-sm text-gray-400'>Project-Coordinator</h1><br/>
                <p className='text-sm text-gray-400'>With competitive educational credentials from a<br/> geography background, Nayla is highly motivated<br/> in her...</p><br/>
                <Link to="/staff/naila/" className="group inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
                  />
                  <span className="text-blue-950 text-sm">
                    Read more
                  </span>
                </Link>
            </div>
        </div>

        <div>
            <div>
                <Link to="/staff/sabiha/" className='text-2xl text-blue-950 hover:text-white transition duration-700'>Sabiha Sabrina</Link>
                <h1 className='text-sm text-gray-400'>Research Assistant</h1><br/>
                <p className='text-sm text-gray-400'>With GIS expertise and an apprenticeship in R<br/> programming, Sabiha provides vital support to the<br/> research...</p><br/>
                <Link to="/staff/sabiha/" className="group inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
                  />
                  <span className="text-blue-950 text-sm">
                    Read more
                  </span>
                </Link>
            </div>
        </div>

        <div className="flex items-start gap-7">
          {/* Image column */}
          <div className="w-56 h-[180px] flex-shrink-0 overflow-hidden rounded-tl-4xl rounded-br-4xl">
            <img
              src="/src/assets/images/gftrtr-350x250.jpg"
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>

          {/* Text column */}
          <div className="flex flex-col flex-1">
            <Link
              to="/staff/farah/"
              className="text-2xl text-blue-950 hover:text-white transition duration-700"
            >
              Farah Yeasmin
            </Link>

            <p className="text-sm text-gray-400">
              Knowledge Management Officer
            </p>

            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              With a background in Environmental Science and GIS, Farah possesses a unique
              talent for creating visually...
            </p>

            <Link
              to="/staff/farah/"
              className="group mt-4 inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
              />
              <span className="text-blue-950 text-sm">Read more</span>
            </Link>
          </div>
        </div>

        <div>
            <div>
                <Link to="/staff/elmee/" className='text-2xl text-blue-950 hover:text-white transition duration-700'>Elmee Tabassum</Link>
                <h1 className='text-sm text-gray-400'>Communication Officer</h1><br/>
                <p className='text-sm text-gray-400'>Elmee Tabassum, a final year bachelors’ student,<br/> recently joined GroupMappers to assist in<br/> promoting...</p><br/>
                <Link to="/staff/elmee/" className="group inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
                  />
                  <span className="text-blue-950 text-sm">
                    Read more
                  </span>
                </Link>
            </div>
        </div>

       <div className="flex items-start gap-7">
          {/* Image column */}
          <div className="w-56 h-[170px] flex-shrink-0 overflow-hidden rounded-tl-4xl rounded-br-4xl">
            <img
              src="/src/assets/images/htrh-350x250.jpg"
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>

          {/* Text column */}
          <div className="flex flex-col flex-1">
            <Link
              to="/staff/mahmudul/"
              className="text-2xl text-blue-950 hover:text-white transition duration-700"
            >
              Mahmudul Hasan
            </Link>

            <p className="text-sm text-gray-400">
              Field Operations and Technical Support Officer
            </p>

            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              A mechatronics engineer involved with GroupMappers, he brings experience in
              web and app development and...
            </p>

            <Link
              to="/staff/mahmudul/"
              className="group mt-4 inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
              />
              <span className="text-blue-950 text-sm">Read more</span>
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-7">
        {/* Image column */}
        <div className="w-56 h-[180px] flex-shrink-0 overflow-hidden rounded-tl-4xl rounded-br-4xl">
          <img
            src="/src/assets/images/dfgregregrege-300x250.jpg"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>

        {/* Text column */}
        <div className="flex flex-col flex-1">
          <Link
            to="/staff/azizur/"
            className="text-2xl text-blue-950 hover:text-white transition duration-700"
          >
            Azizur Rahman
          </Link>

          <p className="text-sm text-gray-400">
            Data Analyst
          </p>

          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            A data analyst who specializes in preprocessing raw data for a2i, he is
            skilled in plotting GPS coordinates...
          </p>

          <Link
            to="/staff/azizur/"
            className="group mt-4 inline-flex items-center gap-2 transition duration-700 hover:text-white no-underline"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="rounded-full p-1 text-xs bg-emerald-400 transition-colors duration-700 group-hover:bg-black"
            />
            <span className="text-blue-950 text-sm">Read more</span>
          </Link>
        </div>
        </div>

      </section>
      <Footer/>
    </>
  )
}
