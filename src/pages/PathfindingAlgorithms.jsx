import React from 'react';
import { useNavigate } from 'react-router-dom';

const PathfindingAlgorithms = () => {
  const navigate = useNavigate();

  const algorithms = [
    {
      name: "Dijkstra's Algorithm",
      description: 'An algorithm for finding the shortest paths between nodes in a graph, which may represent road networks.',
      path: 'dijkstra'
    },
    {
      name: 'Bellman-Ford Algorithm',
      description: 'An algorithm that computes shortest paths from a single source vertex to all other vertices in a weighted digraph.',
      path: 'bellmanford'
    },
    {
      name: 'A* Search Algorithm',
      description: 'A pathfinding algorithm that uses a heuristic function to find the shortest path between two points in a graph.',
      path: 'astar'
    },
    {
      name: 'Breadth-First Search (BFS)',
      description: 'A graph traversal algorithm that explores all vertices at the present depth before moving on to vertices at the next depth level.',
      path: 'bfs'
    },
    {
      name: 'Depth-First Search (DFS)',
      description: 'A graph traversal algorithm that explores as far as possible along each branch before backtracking.',
      path: 'dfs'
    }
  ];

  return (
    <div className="min-h-screen bg-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Pathfinding Algorithms</h1>
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
                  onClick={() => window.location.href = 'https://algovision-pathfinding-algorithm.vercel.app/'}
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

export default PathfindingAlgorithms; 