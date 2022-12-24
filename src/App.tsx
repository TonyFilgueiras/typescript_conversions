import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import HomeView from './components/HomeView';
import Header from './components/Header';
import Converting from './components/Converting';

function App() {


  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/:typeOfConversion" element={<Converting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
