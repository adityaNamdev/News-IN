import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaNewspaper } from 'react-icons/fa';

const Categories = () => {
  const [categories, setCategories] = useState(["general" ,"business", "technology", "sports" ,"entertainment", "health" ,"science"]);


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Helmet>
        <title>newsIN-24x7 | Categories</title>
      </Helmet>
      <div className="text-lg mb-6 text-center">
        <p className="text-2xl font-semibold">Total Categories Available: {categories.length}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-5">
        {categories.map(category => (
          <Link 
            key={category} 
            to={`/category/${category}`} 
            className="block p-6 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-4">
              <h2 className="text-2xl font-bold capitalize">{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
