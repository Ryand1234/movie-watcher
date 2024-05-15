import React from 'react';
import Home from  './routes/home/index';
import Watch from './routes/watch/index';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/watch/:videoId" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
