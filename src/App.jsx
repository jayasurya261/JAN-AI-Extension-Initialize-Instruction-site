import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Windows from './pages/Windows';
import ScrollToTop from './components/ui/ScrollToTop';


function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>} /> 
        <Route path="/os/:os" element={<Windows/>} />
       
      </Routes>
    </div>
  );
}

export default App;
