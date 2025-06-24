import React from 'react';
import styles from '../../style'; // Assuming you have a styles object with paddingX, flexCenter, etc.

const About = ({ onClose }) => (
  // Overlay for dimming background and catching clicks outside modal
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-black-gradient p-6 rounded-lg shadow-lg max-w-2xl w-full text-white relative">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-white text-2xl font-bold p-1 rounded-full hover:bg-gray-700 transition"
      >
        &times;
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center text-blue-gradient">About AlgoVision</h1>
      <p className={`${styles.paragraph} mb-4`}>
        <strong>Welcome to AlgoVision</strong> — an interactive platform to explore, understand, and visualize the inner workings of popular algorithms.
      </p>
      <p className={`${styles.paragraph} mb-6`}>
        Whether you're a student, educator, or tech enthusiast, this tool is designed to make learning algorithms engaging, intuitive, and visual.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-white">🔍 What you can do here:</h2>
      <ul className="list-disc pl-5 mb-6">
        <li className={`${styles.paragraph} mb-2`}>Visualize searching, sorting, and pathfinding algorithms in real time.</li>
        <li className={`${styles.paragraph} mb-2`}>Understand step-by-step execution through animations.</li>
        <li className={`${styles.paragraph} mb-2`}>Compare different algorithms in terms of speed and behavior.</li>
        <li className={`${styles.paragraph}`}>Learn core logic with simple explanations and pseudocode.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-white">💡 Why use this?</h2>
      <ul className="list-disc pl-5 mb-6">
        <li className={`${styles.paragraph} mb-2`}>Break down complex algorithms into easy visuals.</li>
        <li className={`${styles.paragraph} mb-2`}>Enhance your understanding for interviews and academics.</li>
        <li className={`${styles.paragraph}`}>Test algorithm performance on custom inputs.</li>
      </ul>
      <p className={`${styles.paragraph}`}>
        Built using modern web technologies (<strong>React.js</strong>, <strong>Tailwind CSS</strong>), this project aims to make learning by doing more accessible and fun.
      </p>
    </div>
  </div>
);

export default About; 