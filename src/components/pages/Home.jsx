// import React from 'react'
import React, { useState, useEffect } from "react";
// import { GestureHandling } from "leaflet-gesture-handling";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { styled } from '@mui/material/styles';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import { Button } from '@mui/material';
import Footer from "../Footer";
import Header from "../Header";
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


    function MainSlider() {
      return (
        <Swiper
          modules={[EffectFade, Autoplay, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          navigation={false}      // You can turn off if not required
          autoplay={{
            delay: 3000,         // change slide every 3 seconds
            disableOnInteraction: false,
          }}
          speed={1000}
          className="w-full h-[450px] md:h-[600px]"
        >
          <SwiperSlide>
            <img
              src="/src/assets/images/69455870_2412430902361748_8118738411470192640_o.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/DSC0048-scaled.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/DSC_0241-scaled.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/2C564851-1CA9-42EA-B5B3-3B75C575F9C1.jpg"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/329799865_446331290962677_9061255370092079196_n.jpg"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/9D43283D-11A2-4796-8803-1EB9C7B12E83.jpg"
              alt="Slide 6"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/IMG_20230615_105624-scaled.jpg"
              alt="Slide 7"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/IMG_5440-scaled.jpg"
              alt="Slide 8"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/gis-and-rs-club-cafe.jpgtrtj-scaled.jpg"
              alt="Slide 9"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      );
    }

  const images = [
    "/src/assets/images/331983336_1200178177277688_3773989570788146855_n.webp",
    "/src/assets/images/329856116_2015029008690502_4708346483387385590_n-1.webp",
    "/src/assets/images/9D43283D-11A2-4796-8803-1EB9C7B12E83.jpg",
    "/src/assets/images/323640300_873953090592227_1708312130902432154_n.webp",
    "/src/assets/images/332125939_946766212981655_4392939912334334589_n.webp",
    "/src/assets/images/IMG_5440-scaled.jpg",
    "/src/assets/images/volunteer-scaled.webp"
  ];

  const Accordion = styled((props) => (
      <MuiAccordion elevation={0} square {...props} />
    ))(({ theme }) => ({
      border: `3px solid ${theme.palette.divider}`,
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&::before': {
        display: 'none',
      },
  }));

    const AccordionSummary = styled((props) => (
      <MuiAccordionSummary
        expandIcon={<DoubleArrowSharpIcon sx={{ fontSize: '0.9rem', color: 'greenyellow' }} />}
        {...props}
      />
    ))(({ theme }) => ({
      backgroundColor: '#000B58',
      color: 'white',
      flexDirection: 'row-reverse',
      [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
          transform: 'rotate(90deg)',
        },
      [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
      },
      ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
      }),
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
      padding: theme.spacing(2),
      borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

  function Slider() {
    return (
      <Swiper
        modules={[Grid, Autoplay, Navigation, Pagination]}
        // slidesPerView={2}                // 2 images visible at a time
        grid={{ rows: 1 }}               // 1 row -> 2 columns
        spaceBetween={0}                // gap between images
        loop={true}
        navigation={true}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={900}
        // breakpoints={{
        //   768: {       // md: tablets and above
        //     slidesPerView: 1,
        //     grid: { rows: 1 },
        //   },
        //   1024: {      // lg: desktop
        //     slidesPerView: 2,
        //     grid: { rows: 1 },
        //   },
        // }}
        className="h-[250px] w-[400px] m-6"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="flex">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }


  export default function Home() {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    return (
      <>
        <Header />
        <MainSlider />
          <div className='bg-[#000B58] text-center py-1'>
              <h3 className='font-[600] text-white text-2xl'>Who we are</h3>
          </div>
        <section>
          <div className='grid md:grid-cols-2 gap-7 bg-linear-to-r from-cyan-200 to-oklch(98.4% 0.019 200.873) text-center text-base'>
            <div className='text-lg text-blue-950 p-6 text-center'>
                <p>
                  <strong>
                    As our name suggests, we are a group of Bangladesh-based mapmakers
                  </strong>
                </p>
                <p>
                  GroupMappers is a Bangladeshi crowdsourcing initiative that utilizes geospatial technology for public health issues. Established in 2017, it is led by the Mahidol Oxford Tropical Medicine Research Unit and the Communicable Disease Control division of the DGHS in Bangladesh.
                </p>
                <p>
                  The organization’s 20 core members possess a strong GIS aptitude and diverse backgrounds in education and professional experience. Starting with village mapping, our success in the field has continued to grow.
                </p>
            </div>
            
            <Slider />
            
          </div>
        </section>

          <div className='bg-[#000B58] text-center py-1'>
              <h3 className='font-[600] text-white text-2xl'>Mission</h3>
          </div>
        
            <section className="grid md:grid-cols-2 bg-gradient-to-r from-cyan-200 via-sky-100 to-slate-100">
              
                  {/* Left: YouTube video */}
                  {/* <div className="bg-white/80 rounded-xl shadow-md border border-slate-200 p-2 md:p-3"> */}
                    <div className="md:w-[500px] h-[300px] m-6 border border-gray-950 shadow-md overflow-hidden">
                      <iframe
                        className="w-full h-full object-cover"
                        src="https://www.youtube.com/embed/h39Xfd5wJLw"
                        title="Village Mapping: Unlocking Its Potential – A Pilot"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  {/* </div> */}

                  {/* Right: quote text */}
                  <div className="text-slate-800 flex items-stretch self-center">
                    <p className="text-lg md:text-2xl text-blue-950 font-medium italic leading-relaxed">
                      “Empowering communities through the utilization of crowdsourced
                      mapping and data analysis for enhanced public health outcomes.”
                    </p>
                  </div>
            </section>
        

            <div className='bg-[#000B58] text-center py-1'>
              <h3 className='font-[600] text-white text-2xl'>What we do</h3>
            </div>
        <section>
              <div className='grid md:grid-cols-2 gap-8 bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100 p-5'>
                <div className='text-center text-blue-950'>
                  <p className='mb-4'>
                    By utilizing a geospatial approach, we aim to address public health issues through the development of innovative solutions. This approach involves using geographical data and technologies, such as mapping and spatial analysis, to gain a better understanding of the distribution and spread of diseases, identify high-risk areas, and evaluate the effectiveness of different interventions.
                  </p>  
                  <p>
                    By using this approach, we can improve the targeting and delivery of public health interventions and ultimately improve the health outcomes of affected communities.
                  </p>
                </div>

                <div className="w-full">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                          <Typography component="span">Data collection & management</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            The GroupMappers team has extensive expertise in both collection and management of geospatial data. They utilize a variety of methods to gather information, including key informant interviews, participatory rural appraisals, and surveys using tools such as ODK, Kobo Toolbox, and SMS. They also provide technical support to different communicable disease control programs, including rabies, malaria, aedes-transmitted infections, and soil transmitted helminths. GroupMapper’s database design and development skills encompass data cleaning, quality control, and data transformation, and they use cutting-edge tools to create customizable geo-referencing systems.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                          <Typography component="span">Data analysis and modeling</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Spatial analysis and modeling are integral to GroupMapper’s work, particularly physical accessibility analysis. Their experience includes utilizing geospatial data to perform spatial interpolation, overlay analysis, and spatial statistics, among other techniques. These capabilities enable them to support public health initiatives by providing data-driven insights and recommendations
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                          <Typography component="span">Mapping & visualization</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            GroupMappers excel in developing interactive web maps and visualizations that convey geospatial information to end-users. Expertise includes building web mapping applications, creating customized map styles, and integrating data from multiple sources to effectively present spatial data. They have applied these skills to a range of public health initiatives, enhancing comprehension and decision-making in the field. Furthermore, they possess extensive knowledge of producing tailored thematic maps for external organizations
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                          <Typography component="span">Data dissemination and sharing</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            GroupMappers provides support for making geospatial data accessible to stakeholders and end-users. This support includes data publishing, sharing, and implementation of data access policies. Through these efforts, GroupMappers aims to facilitate the effective use of geospatial data in public health and related domains.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                </div>
              </div>         
        </section>

          <div className='bg-[#000B58] text-center py-1'>
              <h3 className='font-[600] text-white text-2xl'>Volunteerism and Support</h3>
          </div>
        <section>

          <div className='grid md:grid-cols-2 gap-9 shadow-2xl bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
            <div className='m-9 text-center text-md text-blue-950'>
              <p className=''>
                As a crowdsourcing initiative, GroupMappers values the power of volunteerism and engages young individuals who share a passion for exploring the world of geospatial techniques and public health. This provides an opportunity for individuals to participate in action-oriented and impactful activities.
              </p>
              <p className=''>
                Volunteers can choose to participate in segments that align with their interests, such as working for fund raising , mapping, writing for newsletters or conducting sessions in GIS/RS club cafes.
              </p>
            </div>
            <div className='px-9 py-2'>
              <img src="/src/assets/images/Res02_IMG_20200221_144520-scaled.webp" 
                alt="Volunteers Image" 
                className='rounded-2xl w-sm h-[220px] m-5 drop-shadow-xl/100' />
            </div>
          </div>
        </section>

            <div className='bg-[#000B58] text-center py-1'>
              <h3 className='font-[600] text-white text-2xl'>Founders</h3>
            </div>

        <section className='grid md:grid-cols-3 gap-5 p-5 bg-sky-200'>
          <div className='flex flex-col items-center gap-3'>
            <img src="/src/assets/images/richard.webp" 
                alt="Richard Maude"
                className='rounded-[25%] w-[200px] h-[200px]' />
            <div className='text-center w-sm gap-x-4'>
              <h1 className='font-[700] p-2 text-2xl'>Richard Maude</h1>
              <h1 className='font-[700] p-5 text-red-800'>Head of Epidemiology</h1>
              <p>
                Professor Maude is Head of the Epidemiology Department at Mahidol-Oxford Tropical Medicine Research Unit, Bangkok, Thailand His research combines clinical studies, descriptive epidemiology and mathematical modelling of human diseases.
              </p>
            </div>
            <span className='flex flex-row gap-3'>
                <a href="https://www.tropmedres.ac/team/richard-maude" target="_blank">
                  <img src="/src/assets/images/pngegg.png" alt="logo" className='rounded-full w-[40px]' />
                </a>
                <a href="https://twitter.com/rjmaude" target="_blank">
                  <img src="/src/assets/images/twitter.png" alt="twitter" className='rounded-full w-[30px]' />
                </a>
                <a href="https://www.linkedin.com/in/richardjmaude/" target="_blank">
                  <img src="/src/assets/images/linkedin.png" alt="linkedin" className='rounded-full w-[30px]' />
                </a>
              </span>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <img src="/src/assets/images/sinha.webp" 
            alt="ipsita sinha"
            className='rounded-[25%] w-[200px] h-[200px]' />
            <div className='text-center w-xs'>
              <h1 className='font-[700] p-2 text-2xl'>Ipsita Sinha</h1>
              <h1 className='font-[700] p-5 text-red-800'>Research Physician</h1>
              <p>
                Dr Ipsita Sinha is part of the Epidemiology department at MORU, and a Research Physician in Tropical Medicine at the University of Oxford. She is also an honorary medical registrar at the John Radcliffe Hospital in Oxford.
              </p>
            </div>
            <span className='flex flex-row gap-3'>
                <a href="https://www.tropmedres.ac/team/ipsita-sinha" target="_blank">
                  <img src="/src/assets/images/pngegg.png" alt="logo" className='rounded-full w-[40px]' />
                </a>
              </span>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <img src="/src/assets/images/Sazid-Ibna-Zaman-scaled.webp" 
            alt="Sazid-Ibna-Zaman"
            className='rounded-[25%] w-[200px] h-[200px]' />
            <div className='text-center w-xs'>
              <h1 className='font-[700] p-2 text-2xl'>Sazid Ibna Zaman</h1>
                <h1 className='font-[700] p-5 text-red-800'>Data Manager & GIS Specialist</h1>
                <p>
                  Based in Dhaka, Bangladesh, Sazid Ibna Zaman is a Data Manager & GIS Specialist for the MORU Epidemiology departments at the Mahidol Oxford Tropical Medicine Research Unit (MORU), Bangkok, Thailand
                </p>
              </div>
              <span className='flex flex-row gap-3'>
                <a href="https://www.tropmedres.ac/team/sazid-ibna-zaman" target="_blank">
                  <img src="/src/assets/images/pngegg.png" alt="logo" className='rounded-full w-[40px]' />
                </a>
                <a href="https://twitter.com/sajidgeo1707" target="_blank">
                  <img src="/src/assets/images/twitter.png" alt="twitter" className='rounded-full w-[30px]' />
                </a>
                <a href="https://www.linkedin.com/in/sazid-ibna-zaman-8072144/" target="_blank">
                  <img src="/src/assets/images/linkedin.png" alt="linkedin" className='rounded-full w-[30px]' />
                </a>
              </span>
          </div>
        </section>

        <div className='bg-[#000B58] text-center py-1'>
            <h3 className='font-[600] text-white text-2xl'>Latest News</h3>
        </div>
        <section className="grid md:grid-cols-3 gap-9 p-5 bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100">
          <div>
           <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
              {/* Image */}
              <img
                src="/src/assets/images/363292119_622358269996766_5741166488675444152_n.webp"
                alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                <FontAwesomeIcon icon={faTag} />
                July 25, 2023
              </span>

              {/* Hover dim overlay */}
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Center “Open” */}
              <Link
                to="/2023/07/25/groupmappers-moru-is-featured-in-celebration-of-world-malaria-day-2023-by-who-news/" target="_blank" // Use `Link` for internal routing
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
              >
                
              </Link>
           </div>
              {/* Static bottom overlay (Title + Date) */}
              <Link to="/2023/07/25/groupmappers-moru-is-featured-in-celebration-of-world-malaria-day-2023-by-who-news/"
                target="_blank">
                <h3 className="text-center text-md text-green-400 font-bold hover:underline">
                    GroupMappers, MORU, is featured in celebration of World Malaria Day 2023 by WHO news.                                    
                </h3>
              </Link>
          </div>

          <div>
              <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
                  {/* Image */}
                  <img
                    src="/src/assets/images/363295717_621875540045039_953665437720276652_n.webp"
                    alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                    <FontAwesomeIcon icon={faTag} />
                    July 25, 2023
                  </span>

                  {/* Hover dim overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  {/* Center “Open” */}
                  <Link to="/2023/07/25/the-two-week-long-diagnostic-network-optimization-dno-training-workshop-funded-by-find/" target="_blank" // Use `Link` for internal routing
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    
                  </Link>
              </div>
                  {/* Static bottom overlay (Title + Date) */}
                <Link to="/2023/07/25/the-two-week-long-diagnostic-network-optimization-dno-training-workshop-funded-by-find/" target="_blank">
                  <h3 className="text-center text-md text-green-400 font-bold hover:underline">
                      The two week long Diagnostic Network Optimization (DNO) training workshop, funded by FIND       
                  </h3>
                </Link>
          </div>

          <div>
           <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
              {/* Image */}
              <img
                src="/src/assets/images/355011755_603194128579847_6181054942140954672_n.webp"
                alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Static bottom overlay (Title + Date) */}
              <div className="absolute bottom-0 left-0 w-full 
                              bg-gradient-to-t from-slate-400 via-gray-200 to-transparent 
                              px-4 py-3 flex items-center justify-between">
              </div>
              <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                <FontAwesomeIcon icon={faTag} />  
                July 19, 2023
              </span>

              {/* Hover dim overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Center “Open” */}
              <Link
                to="/2023/06/19/update-on-monsoon-aedes-mosquito-survey/"
                target="_blank"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
              >
                
              </Link>
           </div>
              <Link to="/2023/06/19/update-on-monsoon-aedes-mosquito-survey/">
                <h3 className="text-center text-md text-green-400 font-bold hover:underline">
                    Update on Monsoon Aedes Mosquito Survey         
                </h3>
              </Link>
          </div>

          <div>
           <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
              {/* Image */}
              <img
                src="/src/assets/images/347551904_601425012090092_920833754943124441_n.webp"
                alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Static bottom overlay (Title + Date) */}
              <div className="absolute bottom-0 left-0 w-full 
                              bg-gradient-to-t from-slate-400 via-gray-200 to-transparent 
                              text-black px-4 py-3 flex items-center justify-between">
              </div>
              <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                <FontAwesomeIcon icon={faTag} />
                June 15, 2023
              </span>

              {/* Hover dim overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Center “Open” */}
              <Link
                to="/2023/06/15/nmep-brac-and-groupmappers-unite-to-celebrate-the-world-malaria-day-2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
              >
                
              </Link>
           </div>
            <Link to="/2023/06/15/nmep-brac-and-groupmappers-unite-to-celebrate-the-world-malaria-day-2023/" target="_blank">
              <h3 className="text-center text-md font-bold text-green-400 hover:underline">
                NMEP, BRAC, and GroupMappers unite to celebrate The World Malaria Day, 2023        
              </h3>
            </Link>
          </div>

          <div>
              <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
                  {/* Image */}
                  <img
                    src="/src/assets/images/E88DC258-35FA-4175-B8E2-42A08B82ABD0.webp"
                    alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Static bottom overlay (Title + Date) */}
                  <div className="absolute bottom-0 left-0 w-full 
                                  bg-gradient-to-t from-slate-400 via-gray-200 to-transparent 
                                  text-black px-4 py-3 flex items-center justify-between">
                  </div>
                  <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                    <FontAwesomeIcon icon={faTag} />  
                    February 26, 2023
                  </span>

                  {/* Hover dim overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  {/* Center “Open” */}
                  <Link
                    to="/2023/02/10/updates-on-crisis-ready-project-crp-workshop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    
                  </Link>
              </div>
              <Link to="/2023/02/10/updates-on-crisis-ready-project-crp-workshop/"
                    target="_blank">
                  <h3 className="text-center text-md font-bold text-green-400 hover:underline"> 
                    Updates on Crisis Ready Project (CRP) workshop!                                    
                  </h3>
              </Link>
          </div>

          <div>
            <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
                {/* Image */}
                <img
                  src="/src/assets/images/329799865_446331290962677_9061255370092079196_n.jpg"
                  alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Static bottom overlay (Title + Date) */}
                <div className="absolute bottom-0 left-0 w-full 
                                bg-gradient-to-t from-slate-400 via-gray-200 to-transparent 
                                text-black px-4 py-3 flex items-center justify-between">
                </div>
                <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                  <FontAwesomeIcon icon={faTag} />  
                  February 10, 2023
                </span>

                {/* Hover dim overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Center “Open” */}
                <Link
                  to="/2023/01/11/technical-assistance-in-implementing-village-level-data-collection-and-surveillance-towards-malaria-elimination-in-lama-upazila-bandarban/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  
                </Link>
            </div>
            <Link to="/2023/01/11/technical-assistance-in-implementing-village-level-data-collection-and-surveillance-towards-malaria-elimination-in-lama-upazila-bandarban/" target="_blank">
                  <h3 className="text-center text-md font-bold text-green-400 hover:underline">
                    Updates on Crisis Ready Project (CRP) workshop!                            
                  </h3>
            </Link>
          </div>

          <div>
              <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
                  {/* Image */}
                  <img
                    src="/src/assets/images/323640300_873953090592227_1708312130902432154_n (1).webp"
                    alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Static bottom overlay (Title + Date) */}
                  <div className="absolute bottom-0 left-0 w-full 
                                  bg-gradient-to-t from-slate-400 via-gray-200 to-transparent 
                                  text-black px-4 py-3 flex items-center justify-between">
                  </div>
                  <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                    <FontAwesomeIcon icon={faTag} />  
                    January 11, 2023
                  </span>

                  {/* Hover dim overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  {/* Center “Open” */}
                  <Link
                    to="/2023/01/11/technical-assistance-in-implementing-village-level-data-collection-and-surveillance-towards-malaria-elimination-in-lama-upazila-bandarban/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    
                  </Link>
              </div>
              <Link to="/2023/01/11/technical-assistance-in-implementing-village-level-data-collection-and-surveillance-towards-malaria-elimination-in-lama-upazila-bandarban/" target="_blank">
                    <h3 className="text-center text-md font-bold text-green-400 hover:underline">
                        Implementing village level data collection and surveillance towards malaria elimination     
                    </h3>
              </Link>     
          </div>

          <div>
            <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
                {/* Image */}
                <img
                  src="/src/assets/images/320811567_523192509756883_5078948741165636619_n.webp"
                  alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Static bottom overlay (Title + Date) */}
                <div className="absolute bottom-0 left-0 w-full 
                                bg-gradient-to-t from-slate-400 via-gray-200 to-transparent 
                                text-black px-4 py-3 flex items-center justify-between">
                </div>
                <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                  <FontAwesomeIcon icon={faTag} />  
                  December 15, 2022
                </span>

                {/* Hover dim overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Center “Open” */}
                <Link
                  to="/2022/12/15/a-two-day-workshop-with-find-iccdr-b-and-nmep-on-applying-diagnostic-network-optimisation-analysis-to-inform-the-introduction-of-g6pd-testing-into-bangladesh-for-improved-malaria-treatment-was/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  
                </Link>
            </div>
            <Link to="/2022/12/15/a-two-day-workshop-with-find-iccdr-b-and-nmep-on-applying-diagnostic-network-optimisation-analysis-to-inform-the-introduction-of-g6pd-testing-into-bangladesh-for-improved-malaria-treatment-was/" target="_blank">
                  <h3 className="text-center text-md font-bold text-green-400 hover:underline">
                      Assisting in introduction of G6PD testing to improve malaria treatment in Bangladesh.                               
                  </h3>
            </Link>
          </div>

          <div>
              <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
                  {/* Image */}
                  <img
                    src="/src/assets/images/317859655_3366860196918809_9046594087199264735_n.webp"
                    alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Static bottom overlay (Title + Date) */}
                  <div className="absolute bottom-0 left-0 w-full 
                                  bg-gradient-to-t from-slate-400 via-gray-200 to-transparent 
                                  text-black px-4 py-3 flex items-center justify-between">
                  </div>
                  <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                    <FontAwesomeIcon icon={faTag} />  
                    December 5, 2022
                  </span>

                  {/* Hover dim overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  {/* Center “Open” */}
                  <Link
                    to="/2022/12/05/mass-dog-vaccination-program-mdv-from-30th-november-to-5th-december-2022/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    
                  </Link>
              </div>
              <Link to="/2022/12/05/mass-dog-vaccination-program-mdv-from-30th-november-to-5th-december-2022/" target="_blank">
                <h3 className="text-center text-md font-bold text-green-400 hover:underline">
                  Mass Dog Vaccination Program (MDV)                                    
                </h3>
              </Link>
          </div>

          <div>
           <div className="relative w-full max-w-md overflow-hidden shadow-lg group">
              {/* Image */}
              <img
                src="/src/assets/images/316113518_3357919677812861_7216339683318669044_n.webp"
                alt="sdrajfhvgrweuavuerbvburbvbbrvbrbvbvr"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              <span className="absolute right-0 top-3 p-1 text-sm font-bold bg-green-300 opacity-90">
                <FontAwesomeIcon icon={faTag} />  
                November 20, 2022
              </span>

              {/* Hover dim overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Center “Open” */}
              <Link
                to="/2022/11/20/our-training-in-lama-upazila-is-continuing-this-week-under-technical-assistance-in-implementing-village-level-data-collection-and-surveillance-towards-malaria-elimination-at-lama-bandarban/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
              >
              </Link>
           </div>
           <Link to="/2022/11/20/our-training-in-lama-upazila-is-continuing-this-week-under-technical-assistance-in-implementing-village-level-data-collection-and-surveillance-towards-malaria-elimination-at-lama-bandarban/" target="_blank">
                <h3 className="text-center text-md font-bold text-green-400 hover:underline">Celebrating GIS Day, 2022 with JnU                                                                        
                </h3>
            </Link>
          </div>
        </section>

        <div className='bg-[#000B58] text-center py-1'>
            <h3 className='font-[600] text-white text-2xl'>Join our effort</h3>
        </div>    
        <section className='grid md:grid-cols-2 gap-9 bg-sky-200'>
            <div className='md:w-full mx-5 my-9 text-md text-blue-950 text-center'>
              <p className=''>You can support us in our mission to improve public health in Bangladesh, particularly in remote areas like Bandarban, by making a donation, sharing your technical knowledge or collaborating with the organization.</p>
              <p>Donations can help fund GroupMapper’s efforts to collect and analyze geospatial data and support the implementation of public health interventions. Your technical knowledge, especially in the field of geospatial technologies, can also help the organization to improve its data collection and analysis capabilities.</p>
              <p>Collaborating with GroupMappers can provide opportunities to work on real-world public health challenges in Bangladesh and also help to build relationships and networks in the field. By working together, we can make a real difference in improving public health outcomes in Bangladesh.</p>
            </div>

            <div className='flex flex-col items-center my-5'>
              <img src="/src/assets/images/Caddddpture.webp" 
              alt="development office"  
              className='md:w-[600px] h-[200px] rounded-3xl shadow-2xl shadow-black my-4'
              />
              
                <p className='text-center text-3xl font-semibold py-4'>Help us make an impact</p>
                <Button  onClick={() => window.location.href = "https://www.campaign.ox.ac.uk/groupmappers"} variant="contained" color="success">
                    Donate to support us
                </Button>
              
            </div>
        </section>

        <div className='bg-[#000B58] text-center py-1'>
            <h3 className='font-[600] text-white text-2xl'>By the number</h3>
        </div>
        <section className='flex md:flex-row flex-col m-2'>
          <div className="bg-[url('/src/assets/images/stars-changing-colors.gif')] md:w-[50%] h-[200px] text-center">
              <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
              <h1 className='text-4xl mt-6 '>20</h1>
              <h1 className='text-2xl'>Core Experts</h1> 
          </div>
          <div className="bg-[url('/src/assets/images/stars-changing-colors.gif')] md:w-[50%] h-[200px] flex flex-col place-items-center">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/100/businessman.png" alt="businessman" />
              <h1 className='text-4xl mt-1'>19</h1>
              <h1 className='text-2xl'>Regular Employees</h1>
          </div>
          <div className="bg-[url('/src/assets/images/stars-changing-colors.gif')] md:w-[50%] h-[200px] text-center">
              <i class="fa fa-users fa-2x" aria-hidden="true"></i>
              <h1 className='text-4xl mt-6'>50+</h1>
              <h1 className='text-2xl'>Active Volunteers</h1>
          </div>
          <div className="bg-[url('/src/assets/images/stars-changing-colors.gif')] md:w-[50%] h-[200px] text-center">
              <i class="fa fa-pie-chart fa-2x" aria-hidden="true"></i>
              <h1 className='text-4xl mt-6'>6</h1>
              <h1 className='text-2xl'>Ongoing Projects</h1>
          </div>
          
        </section>

        <Footer/>
      </>
    )
  }