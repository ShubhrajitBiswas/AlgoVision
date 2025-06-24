import { v4 as uuidv4 } from 'uuid';

// Board Size
export const BOARD_ROW = 16;
export const BOARD_COL = 30;

// Color
export const INITIAL_COLOR = '#0000FF';
export const VISITED_COLOR = '#00FF00';
export const CLICKED_COLOR = '#FF0000';
export const FIXED_COLOR = '#000000';
export const SHORTEST_COLOR = '#FF00FF';
export const COLOR_TYPES = [
  'initial',
  'visited',
  'clicked',
  'fixed',
  'shortest',
];

// algorithm
export const DIJKSTRA = 'dijkstra';
export const BELLMAN_FORD = 'bellman-ford';
export const A_STAR = 'A-star';
export const DFS = 'DFS';
export const BFS = 'BFS';

// uuid
export const KEYS = [];
for (let i = 0; i < BOARD_ROW; i++) {
  KEYS[i] = [];
  for (let j = 0; j < BOARD_COL; j++) {
    KEYS[i][j] = uuidv4();
  }
}

// Item state
export const ITEM_TYPES = {
  EMPTY: 'empty',
  CLICKED: 'clicked',
  SHORTEST: 'shortest',
  VISITED: 'visited',
  INITIAL: 'initial',
};

export const ITEM_INITIAL = 'ITEM_INITIAL';
export const ITEM_VISITED = 'ITEM_VISITED';
export const ITEM_CLICKED = 'ITEM_CLICKED';
export const ITEM_SHORTEST = 'ITEM_SHORTEST';

// Delay
export const DELAY_FAST = 50;
export const DELAY_NORMAL = 100;
export const DELAY_SLOW = 250;

// Board
export const BOARD = [];
for (let i = 0; i < BOARD_ROW; i++) {
  BOARD[i] = [];
  for (let j = 0; j < BOARD_COL; j++) {
    BOARD[i][j] = {
      color: INITIAL_COLOR,
      visit: false,
    };
  }
}
