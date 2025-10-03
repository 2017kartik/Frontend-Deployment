import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaDhl,
  FaCcVisa,
  FaCcPaypal,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="bg-yellow-100">
      <div className="flex w-full flex-col items-start justify-center gap-y-8 px-4 py-8 text-[#0B1E38] sm:px-6 lg:flex-row lg:gap-x-15 lg:px-10 lg:pt-15">
        {/* Company Info Section */}
        <div className="flex w-full flex-col items-start justify-start px-3 py-4 lg:w-1/4">
          <div className="flex items-center justify-start gap-1">
            <img
              src="./Logo.jpeg"
              alt="Logo"
              className="h-10 w-10 rounded-full sm:h-12 sm:w-12"
            />
            <h2 className="my-auto text-base font-bold sm:text-lg">
              SHREE ANANDAM
            </h2>
          </div>
          <div className="px-3 py-2 text-xs font-light tracking-tight sm:text-sm">
            Shree Anandam brings you authentic, hand-selected Rudraksha beads &
            malas, energized with traditional Vedic rituals to enhance peace,
            health, and spiritual growth.
          </div>
          <div className="flex items-start justify-center">
            <span className="cursor-pointer rounded-full p-2 hover:bg-neutral-50 sm:p-3">
              <FaXTwitter size={20} className="sm:h-6 sm:w-6" />
            </span>
            <span className="cursor-pointer rounded-full p-2 hover:bg-neutral-50 sm:p-3">
              <FaInstagram size={20} className="sm:h-6 sm:w-6" />
            </span>
            <span className="cursor-pointer rounded-full p-2 hover:bg-neutral-50 sm:p-3">
              <FaYoutube size={20} className="sm:h-6 sm:w-6" />
            </span>
            <span className="cursor-pointer rounded-full p-2 hover:bg-neutral-50 sm:p-3">
              <FaWhatsapp size={20} className="sm:h-6 sm:w-6" />
            </span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex w-full flex-col px-3 py-4 lg:w-1/4">
          <p className="pl-3 text-xs font-bold uppercase sm:text-sm">
            Quick Links
          </p>
          <div className="flex flex-col items-start justify-center gap-y-2 px-3 py-2 text-xs font-light tracking-tight sm:text-sm">
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              Home
            </p>
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              About us
            </p>
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              Shop Rudraksha
            </p>
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              Spiritual Articles
            </p>
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              Contact
            </p>
          </div>
        </div>

        {/* Help & Info Section */}
        <div className="flex w-full flex-col px-3 py-4 lg:w-1/4">
          <p className="pl-3 text-xs font-bold uppercase sm:text-sm">
            Help & Info
          </p>
          <div className="flex flex-col items-start justify-center gap-y-2 px-3 py-2 text-xs font-light tracking-tight sm:text-sm">
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              Track your order
            </p>
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              Returns & Exchanges
            </p>
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              Shipping Information
            </p>
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              Care & Maintenance
            </p>
            <p className="cursor-pointer transition-colors hover:text-gray-600">
              FAQs
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex w-full flex-col px-3 py-4 lg:w-1/4">
          <p className="pl-3 text-xs font-bold uppercase sm:text-sm">
            Contact Us
          </p>
          <div className="flex flex-col items-start justify-center gap-y-1 px-3 py-2 text-xs font-light tracking-tight sm:text-sm">
            <p>Have question about rudraksha or your order?</p>
            <p className="break-all">Email us at info@shreeanandam.com</p>
            <p>Need assistance?</p>
            <p>Call us: +91 4534554344</p>
          </div>
        </div>
      </div>

      <hr className="my-3 h-px border-0 bg-gray-400" />

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-between gap-y-4 bg-yellow-100 px-4 pb-6 sm:flex-row sm:gap-y-0 sm:px-6 lg:px-15">
        {/* Shipping Info */}
        <div className="flex items-center justify-center gap-x-2">
          <p className="text-xs tracking-tight text-[#0B1E38] sm:text-sm">
            We ship with:
          </p>
          <FaDhl
            size={40}
            className="cursor-pointer text-neutral-700 sm:h-15 sm:w-15"
          />
        </div>

        {/* Payment Options */}
        <div className="flex items-center justify-center gap-x-2">
          <p className="text-xs tracking-tight text-[#0B1E38] sm:text-sm">
            Payment Options:
          </p>
          <FaCcVisa
            size={24}
            className="cursor-pointer text-neutral-700 sm:h-7 sm:w-7"
          />
          <FaCcPaypal
            size={24}
            className="cursor-pointer text-neutral-700 sm:h-7 sm:w-7"
          />
        </div>

        {/* Copyright */}
        <p className="max-w-xs text-center text-xs tracking-tight text-[#0B1E38] sm:max-w-none sm:text-right sm:text-sm">
          © 2025 Shree Anandam. All Right reserved. Designed with devotion for
          the spiritual journey.
        </p>
      </div>
    </main>
  );
};

export default Footer;
