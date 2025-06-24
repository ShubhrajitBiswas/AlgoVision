import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./BinarySearch.css"; // You can reuse your existing CSS

const LinearSearch = () => {
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchedIndices, setSearchedIndices] = useState([]);

  const handleArrayChange = (e) => {
    let inputArray = e.target.value.split(",").map(Number);
    setArray(inputArray);
    resetSearch();
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const resetSearch = () => {
    setCurrentIndex(null);
    setFoundIndex(null);
    setSearchedIndices([]);
    setIsSearching(false);
  };

  const linearSearch = async () => {
    if (!array.length || searchValue === "") return;

    setIsSearching(true);
    setSearchedIndices([]);
    setFoundIndex(null);

    let target = parseInt(searchValue);

    for (let i = 0; i < array.length; i++) {
      setCurrentIndex(i);
      setSearchedIndices(prev => [...prev, i]);
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (array[i] === target) {
        setFoundIndex(i);
        setIsSearching(false);
        return;
      }
    }

    setIsSearching(false);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-6 w-[80%] h-[80%] rounded-lg shadow-lg">
        
        {/* Heading */}
        <h1 className="text-xl font-bold mb-6">Linear Search</h1>

        {/* Input Fields & Search Button */}
        <div className="flex flex-col items-center space-y-3">
          <input
            type="text"
            placeholder="Enter numbers (e.g. 1,2,3,4,5)"
            className="p-2 border border-gray-300 rounded w-[135%] text-black"
            onChange={handleArrayChange}
          />
          <input
            type="number"
            placeholder="Search Number"
            className="p-2 border border-gray-300 rounded w-34 text-black"
            onChange={handleSearchChange}
          />
          <button
            onClick={linearSearch}
            disabled={isSearching}
            className={`py-2 px-4 rounded text-white transition ${
              isSearching ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isSearching ? "Searching..." : "Start Search"}
          </button>
        </div>

        {/* Back Button Below */}
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Back to Home
        </button>

        {/* Array Visualization */}
        <div className="flex flex-wrap justify-center mt-6 space-x-2">
          {array.map((num, index) => (
            <div
              key={index}
              className={`array-item ${
                foundIndex === index
                  ? "bg-green-500 text-white"
                  : currentIndex === index
                  ? "bg-blue-500 text-white"
                  : searchedIndices.includes(index)
                  ? "bg-red-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Search Info */}
        <div className="mt-4 text-sm">
          {isSearching ? (
            <p className="text-blue-300">Searching...</p>
          ) : foundIndex !== null ? (
            <p className="text-green-400">Element found at index {foundIndex}</p>
          ) : searchedIndices.length > 0 ? (
            <p className="text-red-400">Element not found</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LinearSearch;
