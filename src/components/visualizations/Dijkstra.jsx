import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./Dijkstra.css";
import Dijkstra from "../../algorithms/dijkstra";
import {
  BOARD_ROW,
  BOARD_COL,
  ITEM_INITIAL,
  ITEM_CLICKED,
  ITEM_SHORTEST,
  DELAY_NORMAL,
} from "../../algorithms/constants";

const DijkstraComponent = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [isPathFound, setIsPathFound] = useState(false);
  
  const begin = useRef({ x: Math.round(BOARD_ROW / 2), y: 2 });
  const end = useRef({ x: Math.round(BOARD_ROW / 2), y: BOARD_COL - 3 });
  const timers = useRef([]);

  useEffect(() => {
    initializeBoard();
  }, []);

  const initializeBoard = () => {
    const newBoard = Array(BOARD_ROW).fill(null).map(() => 
      Array(BOARD_COL).fill(ITEM_INITIAL)
    );
    setBoard(newBoard);
  };

  const clearTimers = () => {
    timers.current.forEach(timer => clearTimeout(timer));
    timers.current = [];
  };

  const updateItem = (row, col, type, timeFactor = 0) => {
    if (timeFactor) {
      const timer = setTimeout(() => {
        setBoard(prev => {
          const newBoard = JSON.parse(JSON.stringify(prev));
          newBoard[row][col] = type;
          return newBoard;
        });
      }, timeFactor * DELAY_NORMAL);
      timers.current.push(timer);
    } else {
      setBoard(prev => {
        const newBoard = JSON.parse(JSON.stringify(prev));
        newBoard[row][col] = type;
        return newBoard;
      });
    }
  };
  
  const startDijkstra = () => {
    if (isVisualizing) return;
    
    setIsVisualizing(true);
    setIsPathFound(false);
    clearTimers();

    const dijkstra = new Dijkstra({
      begin: begin.current,
      end: end.current,
      updateItem,
      board,
    });

    const found = dijkstra.execute();
    
    if (found) {
      dijkstra.paintShortestPath();
      setIsPathFound(true);
    }

    // A timer to reset the visualizing state after the animation is done
    const totalDelay = (dijkstra.dist[end.current.x][end.current.y] + 5) * DELAY_NORMAL;
    const finalTimer = setTimeout(() => {
        setIsVisualizing(false);
    }, totalDelay);
    timers.current.push(finalTimer);
  };
  
  const handleCellClick = (row, col) => {
    if (isVisualizing) return;
    if (board[row][col] === ITEM_INITIAL) {
      updateItem(row, col, ITEM_CLICKED);
    } else if (board[row][col] === ITEM_CLICKED) {
      updateItem(row, col, ITEM_INITIAL);
    }
  };

  return (
    <div className="visualization-container">
      <div className="visualization-content">
        <div className="header">
          <h1 className="text-2xl font-bold">Dijkstra's Algorithm</h1>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Back to Home
          </button>
        </div>

        <div className="controls">
          <button
            onClick={startDijkstra}
            disabled={isVisualizing}
            className={`py-2 px-4 rounded text-white transition ${
              isVisualizing
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isVisualizing ? "Visualizing..." : "Start Dijkstra"}
          </button>
        </div>

        <div className="grid-container">
          {board.map((row, i) => (
            <div key={i} className="grid-row">
              {row.map((cell, j) => (
                <div
                  key={`${i}-${j}`}
                  className={`grid-cell ${cell.toLowerCase()}`}
                  onClick={() => handleCellClick(i, j)}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DijkstraComponent; 