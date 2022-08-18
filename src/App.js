import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import BasicFormValidation from './forms/BasicFormValidation';
import MulFormVal from './forms/MultipleFormValidation';
import RootHooks from './Hooks/RootHooks';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/hooks' element={<RootHooks />} />
        {/* <Route path='/' element={<BasicFormValidation />} /> */}
        <Route path="/" element={<MulFormVal />} />
      </Routes>
    </Router>
  );
}

export default App;
