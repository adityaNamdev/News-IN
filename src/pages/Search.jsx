import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Search = () => {
  const [newsSearch, setNewsSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalNews, setTotalNews] = useState(0);
  const [pageSize, setPageSize] = useState(40);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("publishedAt");

  const searchValue = useSelector((state) => state.search.value);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    window.scroll(0, 0);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
    window.scroll(0, 0);
  };

  const fetchSearchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_API_KEY}`,
        {
          params: {
            q: searchQuery,
            page,
            pageSize,
            sortBy,
          },
        }
      );
      setNewsSearch(response.data.articles);
      setTotalNews(response.data.totalResults);
    } catch (error) {
      console.error("oops! Server error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSearchQuery(searchValue);
  }, [searchValue]);

  useEffect(() => {
    fetchSearchNews();
  }, [page, pageSize, searchQuery , sortBy]);

  return (
    <>
      <Helmet>
        <title>newsIN-24x7 | Search</title>
      </Helmet>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-2">
          {newsSearch.length === 0 ? (
            <div className="text-center text-3xl m-4 font-bold">
              Oops!! No news found 
            </div>
          ) : (
            <div className="m-5">
              <h1 className="text-center text-3xl font-bold">
                ----Search Results----
              </h1>
              <div className="flex justify-between gap-4 my-4">
                <h3>Total search result : {totalNews}</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 p-2 rounded"
                >
                  <option value="publishedAt">Newest</option>
                  <option value="relevancy">Relevancy</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {newsSearch.map((item, index) => (
                  <div key={index}className="hover:bg-gray-100 transition-transform transform hover:scale-105">
                    <NewsCard
                      title={item.title}
                      description={item.description}
                      imageUrl={item.urlToImage}
                      author={item.author}
                      url={item.url}
                      date={item.publishedAt}
                      source={item.source.name}
                      className="transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-opacity-90 duration-300 hover:bg-black ease-in-out"
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
          )}
        </div>
      )}
    </>
  );
};

export default Search;
