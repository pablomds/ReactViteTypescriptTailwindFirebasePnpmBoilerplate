import { Routes, Route } from "react-router";

import Home from './Pages/HomePage'
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
