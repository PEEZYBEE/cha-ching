import { NavLink } from "react-router-dom";

const linkClasses = ({ isActive }) =>
  isActive ? "underline text-green-400" : "hover:underline";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <NavLink to="/" className={linkClasses}>Home</NavLink>
      <NavLink to="/bets" className={linkClasses}>Bets</NavLink>
      <NavLink to="/my-bets" className={linkClasses}>My Bets</NavLink>
      <NavLink to="/results" className={linkClasses}>Results</NavLink>
    </nav>
  );
}
