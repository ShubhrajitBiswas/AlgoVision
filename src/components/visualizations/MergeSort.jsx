import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./MergeSort.css";

const MergeSort = () => {
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

  const merge = async (arr, left, mid, right) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const L = arr.slice(left, mid + 1);
    const R = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
      setActiveIndices([left + i, mid + 1 + j]);
      await sleep(600);

      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      setArray([...arr]);
      k++;
      await sleep(600);
    }

    while (i < n1) {
      arr[k] = L[i];
      setArray([...arr]);
      i++;
      k++;
      await sleep(600);
    }

    while (j < n2) {
      arr[k] = R[j];
      setArray([...arr]);
      j++;
      k++;
      await sleep(600);
    }
  };

  const mergeSort = async (arr, left, right) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      await mergeSort(arr, left, mid);
      await mergeSort(arr, mid + 1, right);
      await merge(arr, left, mid, right);
    }
  };

  const startMergeSort = async () => {
    if (!array.length) return;
    setIsSorting(true);
    setIsSorted(false);
    let arrCopy = [...array];
    await mergeSort(arrCopy, 0, arrCopy.length - 1);
    setArray([...arrCopy]);
    setActiveIndices([]);
    setIsSorting(false);
    setIsSorted(true);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-6 w-[80%] h-[80%] rounded-lg shadow-lg">

        {/* Title */}
        <h1 className="text-xl font-bold mb-6">Merge Sort</h1>

        {/* Inputs */}
        <div className="flex flex-col items-center space-y-3">
          <input
            type="text"
            placeholder="Enter numbers (e.g. 5,3,8,4)"
            className="p-2 border border-gray-300 rounded w-[135%] text-black"
            onChange={handleArrayChange}
          />
          <button
            onClick={startMergeSort}
            disabled={isSorting}
            className={`py-2 px-4 rounded text-white transition ${
              isSorting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            {isSorting ? "Sorting..." : "Start Merge Sort"}
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
            <p className="text-indigo-300">Sorting in progress using Merge Sort...</p>
          )}
          {isSorted && !isSorting && (
            <p className="text-green-400 font-semibold">✅ Sorting successful!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MergeSort;
