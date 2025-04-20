import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://t3.ftcdn.net/jpg/05/78/34/44/360_F_578344405_6CndmOVe9Ey43LCRfCnO4zOcl0hjRypS.jp"
          alt="Win Big,Get Big"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold leading-tight drop-shadow-lg"
        >
          Welcome to <span className="text-green-400">Cha-Ching</span>
        </motion.h1>
        <p className="text-xl mt-4 max-w-xl text-gray-200">
          💰 Bet smart. Win big. Track your moves and outplay the odds.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-6">
          <Link to="/bets">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg rounded-full shadow-lg transition"
            >
              Start Betting
            </motion.button>
          </Link>
          <Link to="/my-bets">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-full shadow-lg transition"
            >
              View My Bets
            </motion.button>
          </Link>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-10 text-left max-w-5xl w-full">
          <FeatureCard
            icon="📊"
            title="Track Stats"
            text="See your betting history and stats in real time. Knowledge is power."
          />
          <FeatureCard
            icon="⚡"
            title="Instant Bets"
            text="Fast and smooth betting experience, just like the pros."
          />
          <FeatureCard
            icon="🏆"
            title="Rise to the Top"
            text="Challenge yourself, improve your strategy, and stack your wins."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 shadow-lg"
    >
      <h3 className="text-3xl mb-2">{icon}</h3>
      <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  );
}
