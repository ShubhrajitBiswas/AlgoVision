import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Footer,
  Hero,
  Navbar,
  Stats,
  About
} from './components/layout';
import {
  MainComp,
  PathfindingAlgorithms,
  SearchingAlgorithms,
  SortingAlgorithms
} from './pages';
import {
  BellmanFord,
  BinarySearch,
  BubbleSort,
  Dijkstra,
  InsertionSort,
  LinearSearch,
  MergeSort,
  QuickSort,
  SelectionSort,
  TernarySearch,
} from './components/visualizations';

import styles from './style'

const App = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);

  // Effect to manage body scroll
  useEffect(() => {
    if (showAboutModal) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'unset'; // Enable scroll
    }

    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showAboutModal]); // Re-run effect when showAboutModal changes

  return (
    <div className='bg-primary w-full overflow-hidden min-h-screen'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar onOpenAbout={() => setShowAboutModal(true)} />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div className={`bg-primary ${styles.flexStart} pt-20`}>
              <div className={`${styles.boxWidth}`}>
                <Hero/>      
              </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Stats/>
                <MainComp/>
                <Footer/>     
              </div>
            </div>
          </>
        } />
        <Route path="/searchingalgorithms" element={<SearchingAlgorithms />} />
        <Route path="/searchingalgorithms/binarysearch" element={<BinarySearch />} />
        <Route path="/searchingalgorithms/linearsearch" element={<LinearSearch />} />
        <Route path="/searchingalgorithms/ternarysearch" element={<TernarySearch />} />
        <Route path="/sortingalgorithms" element={<SortingAlgorithms />} />
        <Route path="/sortingalgorithms/bubblesort" element={<BubbleSort />} />
        <Route path="/sortingalgorithms/quicksort" element={<QuickSort />} />
        <Route path="/sortingalgorithms/mergesort" element={<MergeSort />} />
        <Route path="/sortingalgorithms/selectionsort" element={<SelectionSort />} />
        <Route path="/sortingalgorithms/insertionsort" element={<InsertionSort />} />
        <Route path="/pathfindingalgorithms" element={<PathfindingAlgorithms />} />
        <Route path="/pathfindingalgorithms/bellmanford" element={<BellmanFord />} />
        <Route path="/pathfindingalgorithms/dijkstra" element={<Dijkstra />} />
      </Routes>

      {showAboutModal && <About onClose={() => setShowAboutModal(false)} />}
    </div>
  )
}

export default App