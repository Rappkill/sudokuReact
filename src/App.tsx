import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import SudokuGame from './components/SudokuGame';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <SudokuGame />
      <Footer />
    </>
  );
}
export default App;
