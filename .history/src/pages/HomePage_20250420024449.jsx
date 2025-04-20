import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-indigo-100 to-green-200 flex items-center justify-center px-6">
      {/* Floating background shapes */}
      <div className="absolute w-72 h-72 bg-indigo-300 opacity-30 rounded-full blur-3xl top-0 left-0 animate-pulse" />
      <div className="absolute w-60 h-60 bg-pink-300 opacity-30 rounded-full blur-2xl bottom-0 right-0 animate-ping" />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-xl p-10 bg-white bg-opacity-80 rounded-3xl shadow-2xl"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-extrabold text-indigo-700 mb-4"
        >
          💸 Welcome to Cha-Ching!
        </motion.h1>
        <p className="text-lg text-gray-700 mb-6">
          Predict. Play. Profit. Test your instincts and place your bets with confidence.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/bets">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 transition"
            >
              Start Betting
            </motion.button>
          </Link>
          <Link to="/my-bets">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-600 transition"
            >
              My Bets
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
