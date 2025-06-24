import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style';

// InfoCard Component
const InfoCard = ({ title, description, algorithms }) => {
  const navigate = useNavigate();

  const handleVisualize = (category) => {
    const categoryPath = category.toLowerCase().replace(/\s+/g, '');
    navigate(`/${categoryPath}`);
  };

  return (
    <div className="w-full md:w-1/3 p-4 flex">
      <div className="border border-gray-300 rounded-lg p-6 bg-black shadow-md transition-transform duration-200 transform hover:scale-105 h-full flex flex-col">
        <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-white mb-6">{description}</p>
        <ul className="list-none p-0 mb-6 flex-1">
          {algorithms.map((algo, index) => (
            <li key={index} className="text-white mb-2">
              {index + 1}. {algo}
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleVisualize(title)}
          className="inline-block px-6 py-3 bg-blue-gradient text-white rounded-lg hover:opacity-90 transition-opacity w-full text-center mt-auto"
        >
          Visualize
        </button>
      </div>
    </div>
  );
};

// Main App Component
const MainComp = () => {
  const sortingAlgorithms = [
    'Quick Sort',
    'Merge Sort',
    'Bubble Sort',
    'Selection Sort',
    'Insertion Sort',
  ];

  const searchingAlgorithms = [
    'Binary Search',
    'Linear Search',
    'Ternary Search',
  ];

  const pathfindingAlgorithms = [
    "Dijkstra's Algorithm",
    'A* Search Algorithm',
    'Breadth-First Search (BFS)',
    'Depth-First Search (DFS)',
    'Bellman-Ford Algorithm',
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <InfoCard
            title="Searching Algorithms"
            description="Searching algorithms are techniques for finding specific data within a structure, such as an array or list."
            algorithms={searchingAlgorithms}
          />
          <InfoCard
            title="Sorting Algorithms"
            description="Sorting algorithms are methods for rearranging a list of items in a specific order, typically ascending or descending."
            algorithms={sortingAlgorithms}
          />
          <InfoCard
            title="Pathfinding Algorithms"
            description="Pathfinding algorithms are used to determine the best path from one point to another within a graph or grid."
            algorithms={pathfindingAlgorithms}
          />
        </div>
      </div>
    </div>
  );
};

export default MainComp;
