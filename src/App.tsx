import React from 'react';
import Home from  './routes/home/index';
import Watch from './routes/watch/index';
import Header from './routes/header/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><Home /> </>} />
        <Route path="/watch/:videoId" element={<><Header/><Watch /></>} />
      </Routes>
    </Router>
  );
}

export default App;
