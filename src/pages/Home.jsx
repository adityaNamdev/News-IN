import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { MdReadMore } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [newsTopHeadlines, setNewsTopHeadlines] = useState([]);
  const [news, setNews] = useState([]);
  const [news_4, setNews_4] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [country, SetCountry] = useState("in");
  const navigate = useNavigate();

  const fetchTopHeadlines = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}`,
        {
          params: {
            pageSize,
            country,
          },
        }
      );
      setNewsTopHeadlines(response.data.articles);
    } catch (error) {
      console.error("oops! Server error", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNews_4 = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.REACT_APP_API_KEY}`,
        {
          params: {
            pageSize: 4,
            category: "business",
          },
        }
      );
      setNews_4(response.data.articles);
    } catch (error) {
      console.error("oops! Server error", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=all&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error("oops! Server error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews_4();
    fetchTopHeadlines();
    fetchNews();
  }, [country, pageSize]);

  const handleMoreTopHeadlines = () => {
    navigate("/top-headlines");
  };

  return (
    <>
      <Helmet>
        <title>newsIN-24x7 | Home</title>
      </Helmet>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex">
            <aside className=" md:w-[100%] p-4 mb-4 ">
              <h2 className="text-2xl font-bold bg-[#38598b] text-white text-center rounded p-2">
                Top Headlines
              </h2>
              <div className="relative border p-5 shadow-xl rounded bg-gray-300">
                <div>
                  <div className="space-y-4">
                    {newsTopHeadlines.map((news, index) => (
                      <div
                        key={index}
                        className="flex space-x-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200  transition-transform transform hover:scale-105"
                      >
                        <img
                          src={
                            news.urlToImage ||
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s"
                          }
                          alt="oops"
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <h3 className="font-semibold">{news.title}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(news.publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="m-3 flex justify-center">
                  <button
                    className="bg-[#113f67] text-white p-2 px-4 rounded-lg hover:bg-[#38598b] font-bold flex items-center gap-1"
                    onClick={handleMoreTopHeadlines}
                  >
                    More <MdReadMore size={25} />
                  </button>
                </div>
              </div>
            </aside>

            <div>
              <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 ">
                {news_4.map((item, index) => (
                  <div className=" transition-transform transform hover:scale-105">
                    <NewsCard
                      key={index}
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
            </div>
          </div>

          <main>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
              {news.map((item, index) => (
                <div className=" transition-transform transform hover:scale-105">
                  <NewsCard
                    key={index}
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
          </main>
        </>
      )}
    </>
  );
};

export default Home;
