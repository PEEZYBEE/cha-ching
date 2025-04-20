import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 to-green-100 flex items-center justify-center px-6">
      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-24 -right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-green-500">Cha-Ching</span> 💸
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Bet on live matches, track your stats, and win big! Are you ready to cash in on your predictions?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/bets"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            🎯 Place a Bet
          </Link>
          <Link
            to="/my-bets"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            📊 My Bets
          </Link>
          <Link
            to="/results"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            🏆 Results
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
