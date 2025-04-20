import React from "react";

const placeholderLogo = "https://via.placeholder.com/50";

export default function MatchCardFixed({ match, onSelect }) {
  console.log("MatchCard received:", match); // Debug log

  if (!match || typeof match !== "object") {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-xl shadow text-center max-w-md mx-auto my-4">
        ⚠️ Invalid match data
      </div>
    );
  }

  const {
    id,
    team1 = "Team A",
    team2 = "Team B",
    odds = { team1: "N/A", draw: "N/A", team2: "N/A" },
    team1Logo,
    team2Logo,
  } = match;

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer max-w-md mx-auto my-4"
      onClick={() => onSelect?.(match)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {/* Team 1 */}
        <div className="flex flex-col items-center">
          <img
            src={team1Logo || placeholderLogo}
            alt={team1}
            className="w-12 h-12 rounded-full mb-1"
          />
          <p className="text-sm font-semibold text-blue-700">{team1}</p>
        </div>

        {/* VS */}
        <div className="text-lg font-bold text-gray-600">VS</div>

        {/* Team 2 */}
        <div className="flex flex-col items-center">
          <img
            src={team2Logo || placeholderLogo}
            alt={team2}
            className="w-12 h-12 rounded-full mb-1"
          />
          <p className="text-sm font-semibold text-red-700">{team2}</p>
        </div>
      </div>

      {/* Odds */}
      <div className="flex justify-around text-sm sm:text-base">
        <div className="bg-blue-100 px-3 py-1 rounded-full font-medium shadow-sm">
          🟦 {team1}: <span className="font-semibold text-blue-800">{odds.team1}</span>
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded-full font-medium shadow-sm">
          ⚪ Draw: <span className="font-semibold text-gray-800">{odds.draw}</span>
        </div>
        <div className="bg-red-100 px-3 py-1 rounded-full font-medium shadow-sm">
          🟥 {team2}: <span className="font-semibold text-red-800">{odds.team2}</span>
        </div>
      </div>
    </div>
  );
}
