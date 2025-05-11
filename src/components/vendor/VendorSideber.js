'use client';
import { useState } from "react";
export default function VendorSideber() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen,setIsOpen]=useState(false)


  return (
    <>
    <button
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        {isOpen ? "Close" : "Open"}
      </button>
      

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-67 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } sm:translate-x-0`}
        aria-label="Sidebar"

      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a
            href="/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src="/"
              className="h-6 me-3 sm:h-7"
              alt=""
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ShopEase
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <button
                type="button"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  E-commerce
                </span>
              </button>
              <ul
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/vendor/stores"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Store Management</span>
                
              </a>
            </li>
            <li>
              <a
                href="/vendor/orders"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Order Management</span>
                
              </a>
            </li>
            <li>
              <a
                href="/vendor/products"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Product Management</span>
              </a>
            </li>
            <li>
              <a
                href="/vendor/earnings"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Earning & Payments</span>
              </a>
            </li>
            <li>
              <a
                href="/vendor/shippings"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Shipping & Fulfillment</span>
              </a>
            </li>
            <li>
              <a
                href="/vendor/marketings"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Store Customization & Marketing</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="/vendor/analytics"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3">Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="/vendor/reports"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3">Security, Compliance & Reports  Management</span>
              </a>
            </li>
            <li>
              <a
                href="/vendor/logistics"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3"> Logistics & Returns</span>
              </a>
            </li>
            <li>
              <a
                href="/vendor/supports"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3">Customer & Support Management</span>
              </a>
            </li>
            <li>
              <a
                href="/vendor/settings"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3">Setting</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
