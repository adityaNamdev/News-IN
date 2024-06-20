import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Helmet } from "react-helmet";

const TopHeadlines = () => {
  const [newsHeadlines, setNewsHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalNews, setTotalNews] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [page, setPage] = useState(1);
  const [country, SetCountry] = useState("in");

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    window.scroll(0, 0);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
    window.scroll(0, 0);
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`,
        {
          params: {
            page,
            pageSize,
            country,
          },
        }
      );
      setNewsHeadlines(response.data.articles);
      setTotalNews(response.data.totalResults);
    } catch (error) {
      console.error("oops! Server error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page, pageSize, country]);

  return (
    <>
      <Helmet>
        <title>newsIN-24x7 | Top-Headlines </title>
      </Helmet>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-2 ">
          <h1 className="text-center text-3xl font-bold">
            ----Top Headlines----
          </h1>
          <div className="m-5">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
              {newsHeadlines.map((item, index) => (
                <div
                  key={index}
                  className=" transition-transform transform hover:scale-105"
                >
                  <NewsCard
                    title={item.title}
                    description={item.description}
                    imageUrl={item.urlToImage}
                    author={item.author}
                    url={item.url}
                    date={item.publishedAt}
                    source={item.source.name}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 gap-5">
              <div className="bg-[#38598b] p-4 rounded-2xl shadow-2xl">
                <button
                  className={`bg-white hover:bg-[#1cb3c8] text-[#113f67] font-bold py-2 px-4 rounded disabled:opacity-50 transition-colors`}
                  onClick={handlePrevious}
                  hidden={page <= 1}
                >
                  <IoIosArrowBack />
                </button>
                <span className="text-xl text-white font-bold ml-2 mr-2">
                  {page}
                </span>
                <button
                  className="bg-white hover:bg-[#1cb3c8] text-[#113f67] font-bold py-2 px-4 rounded disabled:opacity-50 transition-colors"
                  onClick={handleNext}
                  hidden={page * pageSize >= totalNews}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopHeadlines;
