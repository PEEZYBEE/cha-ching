import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import BetsPage from "./pages/BetsPage"
import MyBetsPage from "./pages/MyBetsPage"
import ResultsPage from "./pages/ResultsPage"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bets" element={<BetsPage />} />
          <Route path="/my-bets" element={<MyBetsPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </div>
  )
}
