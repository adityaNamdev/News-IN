import React from "react";
import { Helmet } from "react-helmet";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>newsIN-24x7 | Contact Us</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-3xl leading-6 font-bold text-gray-900 text-center ">
                Contact Us
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                We would love to hear from you! Whether you have a question about our content, need assistance, or want to provide feedback, feel free to get in touch with us.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                    <FaPhone className="h-6 w-6 text-blue-500 mr-2 rotate-90"  /> Phone
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    +91 (234) 567-890
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                    <FaEnvelope className="h-6 w-6 text-blue-500 mr-2" /> Email
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    contact@newsin.com
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                    <FaMapMarkerAlt className="h-6 w-6 text-blue-500 mr-2" /> Address
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    123 NewsIn Street, Suite 456, India , 10001
                  </dd>
                </div>
              </dl>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl leading-6 font-bold text-gray-900">Follow Us</h2>
              <p className="mt-4 text-md text-gray-600">
                Stay connected with us through social media!
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
                  <FaFacebook className="h-8 w-8" />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-blue-500">
                  <FaTwitter className="h-8 w-8" />
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-blue-500">
                  <FaInstagram className="h-8 w-8" />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-500">
                  <FaLinkedin className="h-8 w-8" />
                </a>
              </div>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-2xl leading-6 font-bold text-gray-900">Send Us a Message</h2>
              <form className="mt-6">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full border shadow-lg sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="py-3 px-4 border shadow-lg block w-full  sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full border shadow-lg sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full border shadow-lg sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        className="py-3 px-4 block w-full border shadow-lg sm:text-sm border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
