import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import Jokes from './components/jokes';

export default function App() {
  return (
   <div className='container'>
     <Navbar />
     <Main />
     <Jokes />
   </div>
   )
} 
