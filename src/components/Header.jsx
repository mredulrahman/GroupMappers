"use client"

import React, { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { ChevronRight } from "lucide-react"

/* ---------- NAV DATA (normalized from your arrays) ---------- */

const diseases = [
  {
    item: "Malaria",
    subitems: [
      "Village Mapping (2017 - ongoing)",
      "G6PD Testing for Malaria Treatment (2022 - ongoing)",
      "Piloting Village-level Malaria Surveillance in Lama, Bandarban. (2022)",
      "Malaria API Tracker (2021)",
    ],
  },
  {
    item: "Covid-19",
    subitems: [
      "Crisis Ready Project (CRP) (2022)",
      "Mask Study (2021)",
      "COVID-19 Risk Zoning (2020)",
      "Physical Accessibility to COVID-19 Related Health Services Analysis - Bangladesh (2020)",
      "Real-time population mapping to assess the impact of travel restrictions and social distancing on COVID-19 spread (2020)",
    ],
  },
  {
    item: "Dengue",
    subitems: [
      "Aedes mosquito survey (2021 - ongoing)",
      "Pre-monsoon Aedes Mosquito Survey",
      "Post-monsoon Aedes Mosquito Survey",
      "Dengue Risk Tracker (2021)",
      "Dengue Household Survey (2019)",
      "Dengue risk zoning (2019)",
      "Drone driven imageries to identify breeding space in Dhaka (2019)",
    ],
  },
  {
    item: "Rabies",
    subitems: [
      "Mass Dog Vaccination Program (2018 - Ongoing)",
      "Project Summary",
      "Animal Control Staff Training (2018 - ongoing)",
      "Digital map making and demarcation of union boundary (2020)",
      "CDC Atlanta Training (2018)",
      "Four Day Introductory Training on Dog Catching & Vaccination for National Team (2021)",
    ],
  },
  {
    item: "Filariasis",
    subitems: [
      "Survey for assessing the prevalence of Soil-Transmitted Helminths (STH) among school-aged children of Bangladesh (2018)",
    ],
  },
]

const nondiseases = [
  {
    item: "The Global Health Facilities Database (GHFD) (2020 - ongoing)",
    subitems: [],
  },
]

// merge diseases + nondiseases for Projects left column
const projectItems = [...diseases, ...nondiseases]

const activities = [
  { item: "Volunteering", subitems: [] },
  {
    item: "GroupLetters",
    subitems: ["Issue 1", "Issue 2", "Issue 3"],
  },
  {
    item: "Training",
    subitems: [
      "Capacity Training",
      "Introductory Training on Geographical Information System (GIS) (2019)",
      "Introduction to GIS for Communicable Disease Surveillance (2017)",
    ],
  },
  { item: "GIS & RS Club Cafe", subitems: [] },
]

/* ---------------------- HEADER ---------------------- */

export default function Header() {
  const [activeProject, setActiveProject] = useState(projectItems[0].item)
  const [activeActivity, setActiveActivity] = useState(activities[1].item) // default Groupletters

  const currentProject =
    projectItems.find((p) => p.item === activeProject) ?? projectItems[0]
  const currentActivity =
    activities.find((a) => a.item === activeActivity) ?? activities[0]

  return (
    <header className="w-full bg-[url('/src/assets/images/white-paper-bg4.jpg')] bg-cover bg-bottom-left">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 lg:h-[130px]">
        {/* LEFT LOGO */}
        <img
          src="/src/assets/images/GRPMbd.jpg"
          className="w-[220px] lg:w-[335px] h-[68px] lg:h-[93px]"
          alt="GroupMappers Logo"
        />

        {/* DESKTOP NAVIGATION */}
        <NavigationMenu className="hidden md:flex text-sm">
          <NavigationMenuList>
            {/* HOME */}
            <NavigationMenuItem>
              <a href="#home" className="px-4 py-2 rounded-xl">
                Home
              </a>
            </NavigationMenuItem>

            {/* ABOUT US */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent className="w-64 rounded-2xl bg-white text-gray-900 shadow-lg ring-1 ring-black/5 p-2">
                <MenuLink href="#who">Who we are</MenuLink>
                <MenuLink href="#what">What we do</MenuLink>
                <MenuLink href="#mission">Mission</MenuLink>
                <MenuLink href="#founders">Founders</MenuLink>
                <MenuLink href="#team">Team members</MenuLink>
                <MenuLink href="#gallery">Gallery</MenuLink>
                <MenuLink href="#news">Latest news</MenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* PROJECTS – LEFT PANEL + SEPARATE RIGHT PANEL (like screenshot) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              {/* IMPORTANT: flex with TWO BOXES inside, no absolute */}
              <NavigationMenuContent className="bg-transparent shadow-none p-0">
                <div className="flex">
                  {/* LEFT BOX */}
                  <div className="w-64 rounded-2xl bg-white text-gray-900 shadow-lg ring-1 ring-black/5 p-2">
                    {projectItems.map((proj) => {
                      const active = activeProject === proj.item
                      const hasChildren = (proj.subitems ?? []).length > 0
                      return (
                        <button
                          key={proj.item}
                          type="button"
                          onMouseEnter={() => setActiveProject(proj.item)}
                          onClick={() => setActiveProject(proj.item)}
                          className={`flex w-full items-center justify-between px-3 py-2 rounded-md text-left ${
                            active
                              ? "bg-gray-50 shadow-sm text-gray-900"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <span>{proj.item}</span>
                          {hasChildren && (
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* GAP BETWEEN BOXES */}
                  <div className="w-3" />

                  {/* RIGHT BOX (the panel you couldn’t see before) */}
                  <div className="w-80 rounded-2xl bg-white text-gray-900 shadow-lg ring-1 ring-black/5 p-3">
                    {currentProject.subitems && currentProject.subitems.length > 0 ? (
                      <>
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {currentProject.item}
                        </div>
                        <ul className="space-y-1">
                          {currentProject.subitems.map((sub, idx) => (
                            <li
                              key={idx}
                              className="px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer text-xs text-gray-800"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-xs text-gray-500">
                        No subprojects listed.
                      </p>
                    )}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* ACTIVITIES – SAME PATTERN */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Activities</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-transparent shadow-none p-0">
                <div className="flex">
                  {/* LEFT BOX */}
                  <div className="w-64 rounded-2xl bg-white text-gray-900 shadow-lg ring-1 ring-black/5 p-2">
                    {activities.map((act) => {
                      const active = activeActivity === act.item
                      const hasChildren = (act.subitems ?? []).length > 0
                      return (
                        <button
                          key={act.item}
                          type="button"
                          onMouseEnter={() => setActiveActivity(act.item)}
                          onClick={() => setActiveActivity(act.item)}
                          className={`flex w-full items-center justify-between px-3 py-2 rounded-md text-left ${
                            active
                              ? "bg-gray-50 shadow-sm text-gray-900"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <span>{act.item}</span>
                          {hasChildren && (
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* GAP */}
                  <div className="w-3" />

                  {/* RIGHT BOX */}
                  <div className="w-72 rounded-2xl bg-white text-gray-900 shadow-lg ring-1 ring-black/5 p-3">
                    {currentActivity.subitems && currentActivity.subitems.length > 0 ? (
                      <>
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {currentActivity.item}
                        </div>
                        <ul className="space-y-1">
                          {currentActivity.subitems.map((sub, idx) => (
                            <li
                              key={idx}
                              className="px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer text-xs text-gray-800"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-xs text-gray-500">
                        No sub-activities listed.
                      </p>
                    )}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* CONTACT */}
            <NavigationMenuItem>
              <a href="#contact" className="px-4 py-2 rounded-xl">
                Contact Us
              </a>
            </NavigationMenuItem>

            {/* DONATE */}
            <NavigationMenuItem>
              <a href="#donate" className="px-4 py-2 rounded-xl">
                Donate Us
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* RIGHT LOGO */}
        <img
          src="/src/assets/images/Group_MORU-removebg-preview.jpg"
          className="hidden lg:block w-[200px] h-[68px]"
          alt="MORU Logo"
        />
      </div>
    </header>
  )
}

/* ---------- SMALL HELPER FOR ABOUT MENU ---------- */

function MenuLink({ href, children }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-900"
    >
      {children}
    </a>
  )
}
