// components/Navigation.js
"use client";
import { useState } from "react";
import { Menu, X, Home, Building, Users } from "lucide-react";
import { FaBars, FaTimes, FaHome, FaBuilding, FaUsers } from "react-icons/fa";

import Button from "../components/ui/button.jsx";
import Link from "next/link.js";
import Image from "next/image.js";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPage = 1;

  const navItems = [
    { id: "home", label: "Buy", icon: FaHome, pagelink: "/buy-properties" },
    {
      id: "listings",
      label: "Rent",
      icon: FaBuilding,
      pagelink: "/rent-properties",
    },
    {
      id: "commercial",
      label: "Commercial",
      icon: FaBuilding,
      pagelink: "/commercial-properties",
    },
    { id: "agents", label: "Agents", icon: FaUsers, pagelink: "agents" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}

          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="text-white p-2 rounded-lg mr-3">
                {/* h-16 height changed */}
                {/* <FaHome className="w-6 h-6" /> */}
                {/* <Image src={"/milkiyat_logo.png"} width={85} height={85} alt="milkiyat"/> */}
                <Image src={"/Milkiyat.png"} width={150} height={150} alt="milkiyat"/>
              </div>
              {/* <span className="text-xl font-semibold text-gray-900">
                milkiyat
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, indx) => (
              <Link href={`${item?.pagelink}`} key={indx}>
                <button
                  key={item.id}
                  // onClick={() =>
                  //    onPageChange(item.id === "home" ? "home" : "listings")
                  // }
                  style={{ cursor: "pointer !important" }}
                  className={`px-3 py-2 rounded-md transition-colors 
                    ${
                      currentPage === item.id ||
                      (item.id === "home" && currentPage === "home")
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
            <Link href={`/about`}>
            
            <button
              //   onClick={() => onPageChange("about")}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === "about"
                  ? "text-green-600 bg-green-50"
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
              style={{ cursor: "pointer !important" }}
            >
              About
            </button>
            </Link>
             <Link href={`/contact`}>
            <button
              //   onClick={() => onPageChange("contact")}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === "contact"
                  ? "text-green-600 bg-green-50"
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
              style={{ cursor: "pointer !important" }}
            >
              Contact
            </button>
             </Link>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={`property-listings`}
              style={{ cursor: "pointer !important" }}
            >
              <Button
                variant="outline"
                style={{ cursor: "pointer !important" }}
              >
                List Property
              </Button>
            </Link>
             <Link href={`/signin`}>
             
            <Button
              // className="bg-green-600 hover:bg-green-700"
              className="bg-green-600 hover:bg-green-700"
              style={{ cursor: "pointer !important" }}
            >
              SignIn
            </Button>
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50"
            >
              
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item , indx) => (
                <Link href={item?.pagelink} key={indx}
                 
                >
   
                <button
                  key={item.id}
                  onClick={() => {
                    // onPageChange(item.id === "home" ? "home" : "listings");
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors cursor-pointer
 ${
                    currentPage === item.id ||
                    (item.id === "home" && currentPage === "home")
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  }`}
                    // style={{cursor:"pointer !important"}}
                >
                  {item.label}
                </button>
                </Link>
              ))}

              <Link href={"/about"}>
              <button
                onClick={() => {
                  //   onPageChange("about");
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors cursor-pointer ${
                  currentPage === "about"
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                }`}
              >
                About
              </button>
              </Link>
              <Link href={"/contact"}>

              <button
                onClick={() => {
                  //   onPageChange("contact");
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors  cursor-pointer ${
                  currentPage === "contact"
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                }`}
              >
                Contact
              </button>
              </Link>
              <div className="border-t pt-4 mt-4 space-y-2">
                <Link href={"/property-listings"}>
                 <button
                  variant="outline"
                  className="w-full cursor-pointer bg-green-700 py-2  mb-3 rounded-3xl text-white"
                  onClick={() => {
                    // onPageChange("list-property");
                    setIsMenuOpen(false);
                  }}
                >
                  List Property
                </button>
                </Link>
                <Link href={"/signin"}  >
                
                <button
                  className="w-full cursor-pointer "
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  Sign In
                </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
