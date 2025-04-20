import { motion } from "framer-motion";

export default function MatchCard({ match, onSelect }) {
  const { team1, team2, odds, id } = match;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 p-6 max-w-md mx-auto mt-6 relative overflow-hidden"
    >
      {/* Gradient top bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-2xl" />

      {/* Teams */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold text-gray-800">{team1}</div>
        <span className="text-gray-500 font-semibold">vs</span>
        <div className="text-xl font-bold text-gray-800">{team2}</div>
      </div>

      {/* Odds */}
      <div className="grid grid-cols-3 gap-4 my-4 text-center">
        <OddsBox label={team1} value={odds.team1} />
        <OddsBox label="Draw" value={odds.draw} />
        <OddsBox label={team2} value={odds.team2} />
      </div>

      {/* Bet button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onSelect(match)}
        className="w-full mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold shadow-lg"
      >
        Place Bet
      </motion.button>
    </motion.div>
  );
}

function OddsBox({ label, value }) {
  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg font-semibold text-green-600">{value}</div>
    </div>
  );
}
