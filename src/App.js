import React from 'react';
import './App.css';
import Products from './components/Products';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <NavBar />
    <Products />
    <Footer />
    </div>
  );
}

export default App;
