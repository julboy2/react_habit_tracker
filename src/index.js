import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
//import SimpleHabit from './components/simpleHabit';
import Habit from './components/habit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Habit />
  </React.StrictMode>
);

