import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./QuickSort.css";

const QuickSort = () => {
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  const [pivotIndex, setPivotIndex] = useState(null);
  const [isSorted, setIsSorted] = useState(false);

  const handleArrayChange = (e) => {
    const inputArray = e.target.value.split(",").map(Number);
    setArray(inputArray);
    resetSort();
  };

  const resetSort = () => {
    setIsSorting(false);
    setActiveIndices([]);
    setPivotIndex(null);
    setIsSorted(false);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    setPivotIndex(high);
    let i = low - 1;

    for (let j = low; j < high; j++) {
      setActiveIndices([j, high]);
      await sleep(600);

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await sleep(600);
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await sleep(600);
    return i + 1;
  };

  const quickSort = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  };

  const startQuickSort = async () => {
    if (!array.length) return;
    setIsSorting(true);
    setIsSorted(false);
    let arrCopy = [...array];
    await quickSort(arrCopy, 0, arrCopy.length - 1);
    setArray([...arrCopy]);
    setActiveIndices([]);
    setPivotIndex(null);
    setIsSorting(false);
    setIsSorted(true);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-6 w-[80%] h-[80%] rounded-lg shadow-lg">

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">Quick Sort</h1>

        {/* Inputs */}
        <div className="flex flex-col items-center space-y-3">
          <input
            type="text"
            placeholder="Enter numbers (e.g. 5,3,8,4)"
            className="p-2 border border-gray-300 rounded w-[135%] text-black"
            onChange={handleArrayChange}
          />
          <button
            onClick={startQuickSort}
            disabled={isSorting}
            className={`py-2 px-4 rounded text-white transition ${
              isSorting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            {isSorting ? "Sorting..." : "Start Quick Sort"}
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
                  : pivotIndex === index
                  ? "bg-purple-500 text-white"
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
            <p className="text-purple-300">Sorting in progress using Quick Sort...</p>
          )}
          {isSorted && !isSorting && (
            <p className="text-green-400 font-semibold">✅ Sorting successful!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickSort;
