import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Start from "./pages/Start";
import AddCard from './pages/AddCard';


function App() {
  //Array for storing Cards
  const [myCards, setMyCards] = useState([]);

  return (
    //Routing functionality
    <Router>
      <Routes>
        <Route path="/" element={<Start myCards={myCards} setMyCards={setMyCards}/>}></Route>
        <Route path="/add-card" element={<AddCard myCards={myCards} setMyCards={setMyCards}></AddCard>}></Route>
      </Routes>
    </Router>
  )
}

export default App
