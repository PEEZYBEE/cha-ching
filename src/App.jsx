import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BetsPage from "./pages/BetsPage";
import MyBetsPage from "./pages/MyBetsPage";
import ResultsPage from "./pages/ResultsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  const [myBets, setMyBets] = useState([]);

  function handlePlaceBet(bet) {
    setMyBets((prevBets) => [...prevBets, bet]);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bets" element={<BetsPage onPlaceBet={handlePlaceBet} />} />
          <Route path="/my-bets" element={<MyBetsPage myBets={myBets} />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}
