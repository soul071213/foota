import './App.css';
import Main from './pages/Main/Main';
import Data_page from './pages/Data_page/Data_page';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Rank from './pages/Rank_page/Rank';
import Players from './pages/Player/Player';
import Match from './pages/Match/Match';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/data" element={<Data_page />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/player" element={<Players />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
