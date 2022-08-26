import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import RootForm from './forms/RootForm';
import RootHooks from './Hooks/RootHooks';
import RootUseEffects from './UseEffect/RootUseEffects';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/hooks' element={<RootHooks />} />
        <Route path="/" element={<RootForm />} />
        <Route path="/useeffects" element={<RootUseEffects />} />
      </Routes>
    </Router>
  );
}

export default App;
