import React from "react";
import { Helmet } from "react-helmet";
import { FaNewspaper, FaUsers, FaGlobe, FaAward, FaBullhorn, FaHandsHelping, FaChartLine } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>newsIN-24x7 | About-us</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-3xl  text-center leading-6 font-bold text-gray-900">
                About-news<span className="text-[#1cb3c8] font-serif">In</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                NewsIn is your go-to source for the latest news from around the
                globe. Our dedicated team of journalists and editors work
                tirelessly to bring you accurate and up-to-date information on a
                wide range of topics.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                    <FaNewspaper className="h-6 w-6 text-blue-500 mr-2" /> Our
                    Mission
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    To provide timely, accurate, and comprehensive news coverage
                    that informs, engages, and empowers our audience.
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                    <FaUsers className="h-6 w-6 text-blue-500 mr-2" /> Our Team
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    Our team is composed of experienced journalists, dedicated
                    editors, and talented writers who are passionate about
                    delivering the news.
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center ">
                    <FaGlobe className="h-6 w-6 text-blue-500 mr-2" /> Our
                    Coverage
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    We cover news from around the world, with a focus on
                    breaking news, politics, business, technology, sports, and
                    entertainment.
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                    <FaAward className="h-6 w-6 text-blue-500 mr-2" /> Our
                    Values
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    Integrity, accuracy, and impartiality are at the core of
                    everything we do. We strive to uphold the highest standards
                    of journalism.
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                    <FaBullhorn className="h-6 w-6 text-blue-500 mr-2" /> Our
                    Impact
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    We believe in the power of journalism to drive positive
                    change. Our stories have prompted actions, influenced
                    policies, and given voice to the voiceless.
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                    <FaHandsHelping className="h-6 w-6 text-blue-500 mr-2" /> Our
                    Community
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    We are committed to serving our readers. We value your
                    feedback and strive to foster a community built on trust and
                    mutual respect.
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-lg leading-6 font-medium text-gray-900 flex items-center  justify-center">
                    <FaChartLine className="h-6 w-6 text-blue-500 mr-2" /> Our
                    Future
                  </dt>
                  <dd className="mt-1 text-md text-gray-600 sm:mt-0 sm:col-span-2">
                    We are constantly evolving to meet the needs of our audience.
                    Stay tuned for new features, deeper insights, and even more
                    compelling storytelling.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
