import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 backdrop-blur-sm bg-opacity-80 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-2xl font-extrabold tracking-wide"
        >
          💸 Cha-Ching
        </motion.div>

        {/* Links */}
        <div className="flex space-x-6 text-lg font-medium">
          <NavItem to="/" text="Home" />
          <NavItem to="/bets" text="All Bets" />
          <NavItem to="/my-bets" text="My Bets" />
        </div>
      </div>
    </motion.nav>
  );
}

function NavItem({ to, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="transition-all duration-200"
    >
      <Link
        to={to}
        className="hover:text-yellow-300 hover:underline underline-offset-4"
      >
        {text}
      </Link>
    </motion.div>
  );
}
