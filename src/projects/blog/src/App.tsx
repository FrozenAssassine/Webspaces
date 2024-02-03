import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import HowToCenterDivPage from './blogpages/web/howToCenterDiv/HowToCenterDivPage';

function App() {
  return (
    <div className={styles.blogHost}>
      <div className={styles.blogRenderer}>
        <HowToCenterDivPage />
      </div>
    </div>
  );
}

export default App;
