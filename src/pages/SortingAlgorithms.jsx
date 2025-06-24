import React from 'react';
import { useNavigate } from 'react-router-dom';

const SortingAlgorithms = () => {
  const navigate = useNavigate();

  const algorithms = [
    {
      name: 'Bubble Sort',
      description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
      path: 'bubblesort'
    },
    {
      name: 'Quick Sort',
      description: 'A highly efficient, comparison-based, divide and conquer sorting algorithm that works by selecting a pivot element and partitioning the array.',
      path: 'quicksort'
    },
    {
      name: 'Merge Sort',
      description: 'A stable, comparison-based, divide and conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves.',
      path: 'mergesort'
    },
    {
      name: 'Selection Sort',
      description: 'A simple sorting algorithm that divides the input into a sorted and unsorted region, and repeatedly selects the smallest element from the unsorted region.',
      path: 'selectionsort'
    },
    {
      name: 'Insertion Sort',
      description: 'A simple sorting algorithm that builds the final sorted array one item at a time, by repeatedly inserting a new element into the sorted portion of the array.',
      path: 'insertionsort'
    }
  ];

  return (
    <div className="min-h-screen bg-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Sorting Algorithms</h1>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Back to Home
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {algorithms.map((algo, index) => (
            <div 
              key={index} 
              className="bg-black-gradient p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full min-h-[340px]"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{algo.name}</h2>
              <p className="text-dimWhite mb-6 flex-1">{algo.description}</p>
              <div className="mt-auto">
                <button
                  onClick={() => navigate(`/sortingalgorithms/${algo.path}`)}
                  className="w-full py-3 bg-blue-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Visualize
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingAlgorithms; 