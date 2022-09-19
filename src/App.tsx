import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import ConversionContainer from './components/ConversionContainer';
import Header from './components/Header';
import Converting from './components/Converting';

function App() {
  const [pathName, setPathName] = React.useState("")

  React.useEffect(() => {
    setPathName(window.location.pathname.replace("/", "").charAt(0).toUpperCase() +  window.location.pathname.replace("/", "").slice(1))
    console.log("mudou")
  },[pathName]);

  return (
    <div className="App">
      <Router>
        <Header pathName={pathName}/>
        <Routes>
            <Route path="/" element={<ConversionContainer />} />
            <Route path="/:typeOfConversion" element={<Converting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
