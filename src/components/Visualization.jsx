import React, { useEffect, useRef } from 'react';

const Visualization = ({ algorithm, category }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw visualization based on algorithm type
    switch (category) {
      case 'Sorting Algorithms':
        drawSortingVisualization(ctx, canvas.width, canvas.height, algorithm);
        break;
      case 'Searching Algorithms':
        drawSearchingVisualization(ctx, canvas.width, canvas.height, algorithm);
        break;
      case 'Pathfinding Algorithms':
        drawPathfindingVisualization(ctx, canvas.width, canvas.height, algorithm);
        break;
      default:
        break;
    }
  }, [algorithm, category]);

  const drawSortingVisualization = (ctx, width, height, algorithm) => {
    // Generate random array
    const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * height));
    const barWidth = width / array.length;

    // Draw bars
    array.forEach((value, index) => {
      ctx.fillStyle = '#4CAF50';
      ctx.fillRect(index * barWidth, height - value, barWidth - 1, value);
    });
  };

  const drawSearchingVisualization = (ctx, width, height, algorithm) => {
    // Draw a sorted array
    const array = Array.from({ length: 10 }, (_, i) => i * 20);
    const barWidth = width / array.length;

    array.forEach((value, index) => {
      ctx.fillStyle = '#2196F3';
      ctx.fillRect(index * barWidth, height - value, barWidth - 1, value);
    });
  };

  const drawPathfindingVisualization = (ctx, width, height, algorithm) => {
    // Draw a simple grid
    const gridSize = 10;
    const cellSize = Math.min(width, height) / gridSize;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        ctx.strokeStyle = '#666';
        ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="w-full bg-gray-900 rounded-lg"
      style={{ height: '300px' }}
    />
  );
};

export default Visualization; 