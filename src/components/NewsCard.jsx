import React from "react";
import { FaArrowRight } from "react-icons/fa";

const truncateText = (text, charLimit) => {
  if (!text) return "";
  return text.length > charLimit ? text.substring(0, charLimit) + "..." : text;
};


const NewsCard = (props) => {
  let { imageUrl, title, description, author, url, date, source } = props;
  const truncatedDescription = truncateText(description,40); 

  return (
    <>
      <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
          {source || "Unknown"}
        </div>
        <img
          src={ imageUrl !=null ?
            imageUrl :
            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
          }
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title || "No title found"}</h3>
          <p className="text-gray-700 mb-2">{truncatedDescription || "No description"}</p>
          <p className="text-sm text-gray-600 mb-4"> {new Date(date).toLocaleDateString()}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">{author || "Unknown"}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 flex items-center hover:underline"
            >
              <span className="mr-1">Read More</span><FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
