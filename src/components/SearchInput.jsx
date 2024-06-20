import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { setSearchValue } from '../features/search/searchSlice';

const SearchInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchValue(inputValue));
    navigate('/search');
    setInputValue("");
  };

  return (
    <div className="relative">
      <input 
        type="text" 
        className="border rounded-full py-2 px-4 pr-10 focus:outline-none shadow" 
        placeholder="Search..." 
        value={inputValue}
        onChange={handleInputChange}
      />
      <button 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900 focus:text-black" 
        onClick={handleSearch}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchInput;
