import React from 'react';
import './App.css';
import UfakInput from './components/main/ufakInput';
import Header from './components/header/header';

function App() {
  return (
    <div className="container flex flex-dir-col">
      <Header />
      <UfakInput />
    </div>
  );
}

export default App;
