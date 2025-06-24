import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchingAlgorithms = () => {
  const navigate = useNavigate();

  const algorithms = [
    {
      name: 'Binary Search',
      description: 'An efficient algorithm for finding an element in a sorted array by repeatedly dividing the search interval in half.',
      path: 'binarysearch'
    },
    {
      name: 'Linear Search',
      description: 'A simple search algorithm that checks each element in the list sequentially until the target element is found.',
      path: 'linearsearch'
    },
    {
      name: 'Ternary Search',
      description: 'A divide and conquer algorithm that divides the search space into three parts to find the maximum or minimum of a unimodal function.',
      path: 'ternarysearch'
    }
  ];

  return (
    <div className="min-h-screen bg-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Searching Algorithms</h1>
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
                  onClick={() => navigate(`/searchingalgorithms/${algo.path}`)}
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

export default SearchingAlgorithms; 