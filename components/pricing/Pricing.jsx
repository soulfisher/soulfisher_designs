import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div>
      <div className="max-w-container py-20 mx-auto px-container">
        <header className="text-center mb-14 ">
          <span
            data-aos="fade-up"
            className="font-medium text-blue-500 inline-block mb-3"
          >
            Suitable pricing
          </span>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            Pricing Plans
          </h2>
        </header>

        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <article className="rounded-lg bg-white p-8 shadow ring-1 hover:ring-blue-500 transition-all duration-300 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 hover:ring-blue-500 transition-colors duration-300">
              Basic
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Essential tools for individual professionals.
            </p>
            <p className="mt-6 text-4xl font-bold text-gray-900">
              $15
              <span className="text-lg font-medium text-gray-500">/month</span>
            </p>
            <Link
              href="#"
              className="mt-6 inline-block w-full rounded-md bg-blue-500 transition-colors duration-300 py-2 px-4 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Choose Plan
            </Link>
            <ul className="mt-8 space-y-4 text-sm text-gray-600">
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> 5 Products
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Up to 1,000
                Subscribers
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Basic Analytics
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> 48-hour Support
                Response Time
              </li>
            </ul>
          </article>

          {/* Standard Plan */}
          <article className="rounded-lg bg-white p-8 shadow ring-1 hover:ring-blue-500 transition-all duration-300 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 hover:ring-blue-500 transition-colors duration-300">
              Standard
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Perfect for growing teams and small businesses.
            </p>
            <p className="mt-6 text-4xl font-bold text-gray-900">
              $30
              <span className="text-lg font-medium text-gray-500">/month</span>
            </p>
            <Link
              href="#"
              className="mt-6 inline-block w-full rounded-md bg-blue-500 transition-colors duration-300 py-2 px-4 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Choose Plan
            </Link>
            <ul className="mt-8 space-y-4 text-sm text-gray-600">
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> 25 Products
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Up to 10,000
                Subscribers
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Advanced Analytics
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> 24-hour Support
                Response Time
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Marketing
                Automations
              </li>
            </ul>
          </article>

          {/* Enterprise Plan */}
          <article className="rounded-lg bg-white p-8 shadow ring-1 hover:ring-blue-500 transition-all duration-300 ring-blue-500">
            <h3 className="text-xl font-semibold text-gray-800 ">Enterprise</h3>
            <p className="mt-4 text-sm text-gray-600">
              Comprehensive solutions for large organizations.
            </p>
            <p className="mt-6 text-4xl font-bold text-gray-900">
              $60
              <span className="text-lg font-medium text-gray-500">/month</span>
            </p>
            <Link
              href="#"
              className="mt-6 inline-block w-full rounded-md bg-blue-500 transition-colors duration-300 py-2 px-4 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Contact Sales
            </Link>
            <ul className="mt-8 space-y-4 text-sm text-gray-600">
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Unlimited Products
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Unlimited
                Subscribers
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Advanced Analytics
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> 1-hour Dedicated
                Support
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Marketing
                Automations
              </li>
              <li className="flex items-center">
                <FaCheck className="mr-2 text-green-500" /> Custom Reporting
                Tools
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
