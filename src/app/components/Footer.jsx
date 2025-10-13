"use client";

import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer({ onPageChange }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-indigo-600 text-white p-2 rounded-lg mr-3">
                <Home className="w-6 h-6" />
              </div>
              <span className="text-xl font-semibold">PropertyHub</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect home. We connect buyers,
              sellers, and renters with the best properties in the market.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
              <Link href="/about">
                <button
                  style={{cursor:"pointer"}}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </Link>
              </li>
              <li>
                <Link href="/property-listings"> 
                <button
                //   onClick={() => onPageChange("listings")}
                  className="text-gray-400 hover:text-white transition-colors"
                   style={{cursor:"pointer"}}
                >
                  Properties
                </button>
                </Link>
              </li>
              <li>
                 <Link href="/agents"> 
                <button
                //   onClick={() => onPageChange("agents")}
                  className="text-gray-400 hover:text-white transition-colors"
                   style={{cursor:"pointer"}}
                >
                  Our Agents
                </button>
                 </Link> 
              </li>
              <li>
                 <Link href="/contact"> 
                <button
                //   onClick={() => onPageChange("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                   style={{cursor:"pointer"}}
                >
                  Contact
                </button>
                 </Link > 
              </li>
              <li>
                 <Link href="/blog"> 
                <button
                //   onClick={() => onPageChange("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                   style={{cursor:"pointer"}}
                >
                  Blog
                </button>
                 </Link > 
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400" style={{cursor:"pointer"}}>
                <Link href="/buy-properties" > 
                Property Buys
                </Link>
                </li>
              <li className="text-gray-400" style={{cursor:"pointer"}}>
                  <Link href="/rent-properties" > 
                Property Rentals
                </Link>
                </li>
              <li className="text-gray-400" style={{cursor:"pointer"}}>
                 <Link href="/commercial-properties" > 
                Commercial Properties
                </Link>
                </li>

              <li className="text-gray-400" style={{cursor:"pointer"}}>Property Management</li>
              <li className="text-gray-400" style={{cursor:"pointer"}}>Investment Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">
                  123 Business District, Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">info@propertyhub.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 PropertyHub. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Careers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
