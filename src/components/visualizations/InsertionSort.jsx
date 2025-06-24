import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./InsertionSort.css";

const InsertionSort = () => {
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const handleArrayChange = (e) => {
    const inputArray = e.target.value.split(",").map(Number);
    setArray(inputArray);
    resetSort();
  };

  const resetSort = () => {
    setIsSorting(false);
    setActiveIndices([]);
    setIsSorted(false);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const insertionSort = async (arr) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;

      setActiveIndices([i, j]);
      await sleep(600);

      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        setArray([...arr]);
        setActiveIndices([j, j + 1]);
        await sleep(600);
        j--;
      }
      arr[j + 1] = current;
      setArray([...arr]);
      await sleep(600);
    }
  };

  const startInsertionSort = async () => {
    if (!array.length) return;
    setIsSorting(true);
    setIsSorted(false);
    let arrCopy = [...array];
    await insertionSort(arrCopy);
    setArray([...arrCopy]);
    setActiveIndices([]);
    setIsSorting(false);
    setIsSorted(true);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-6 w-[80%] h-[80%] rounded-lg shadow-lg">

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">Insertion Sort</h1>

        {/* Inputs */}
        <div className="flex flex-col items-center space-y-3">
          <input
            type="text"
            placeholder="Enter numbers (e.g. 5,3,8,4)"
            className="p-2 border border-gray-300 rounded w-[135%] text-black"
            onChange={handleArrayChange}
          />
          <button
            onClick={startInsertionSort}
            disabled={isSorting}
            className={`py-2 px-4 rounded text-white transition ${
              isSorting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            {isSorting ? "Sorting..." : "Start Insertion Sort"}
          </button>
        </div>

        {/* Back Button */}
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
                isSorted
                  ? "bg-green-500 text-white"
                  : activeIndices.includes(index)
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Info Message */}
        <div className="mt-4 text-sm">
          {isSorting && (
            <p className="text-pink-300">Sorting in progress using Insertion Sort...</p>
          )}
          {isSorted && !isSorting && (
            <p className="text-green-400 font-semibold">✅ Sorting successful!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsertionSort;
