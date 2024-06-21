import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import NewsCard from "../components/NewsCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Spinner from "../components/Spinner";

const CategoryDetails = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [pageSize, setPageSize] = useState(20);
  const [page, setPage] = useState(1);
  const [totalNews, setTotalNews] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    window.scroll(0, 0);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
    window.scroll(0, 0);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.REACT_APP_API_KEY}`,
          {
            params: {
              page,
              pageSize,
              category,
            },
          }
        );
        setArticles(response.data.articles);
        setTotalNews(response.data.totalResults);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, page, pageSize]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Helmet>
        <title>newsIN-24x7 | {category}</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-6  text-center capitalize">
        ----{category}----
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <div className=" transition-transform transform hover:scale-105">
                <NewsCard
                  key={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  url={article.url}
                  date={article.publishedAt}
                  source={article.source.name}
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
        </>
      )}
    </div>
  );
};

export default CategoryDetails;
