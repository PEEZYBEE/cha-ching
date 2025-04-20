import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/bets" className="hover:underline">Bets</Link>
      <Link to="/my-bets" className="hover:underline">My Bets</Link>
      <Link to="/results" className="hover:underline">Results</Link>
    </nav>
  )
}
