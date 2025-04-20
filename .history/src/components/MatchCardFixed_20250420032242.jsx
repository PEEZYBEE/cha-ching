export default function MatchCardFixed({ match, onPlaceBet }) {
  const {
    homeTeam,
    awayTeam,
    homeOdds,
    awayOdds,
    drawOdds,
    homeLogo,
    awayLogo
  } = match;

  return (
    <div className="bg-white rounded-2xl shadow p-4 border border-blue-100 hover:scale-[1.01] transition-all">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col items-center">
          <img src={homeLogo} alt={homeTeam} className="w-10 h-10 mb-1" />
          <span className="text-blue-700 font-semibold">{homeTeam}</span>
        </div>
        <span className="text-lg font-bold">VS</span>
        <div className="flex flex-col items-center">
          <img src={awayLogo} alt={awayTeam} className="w-10 h-10 mb-1" />
          <span className="text-red-700 font-semibold">{awayTeam}</span>
        </div>
      </div>

      <div className="flex justify-around text-sm">
        <button
          className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-full"
          onClick={() =>
            onPlaceBet({
              ...match,
              betOn: homeTeam,
              odds: homeOdds
            })
          }
        >
          🟦 {homeTeam}: {homeOdds ?? "N/A"}
        </button>
        <button
          className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full"
          onClick={() =>
            onPlaceBet({
              ...match,
              betOn: "Draw",
              odds: drawOdds
            })
          }
        >
          ⚪ Draw: {drawOdds ?? "N/A"}
        </button>
        <button
          className="bg-red-100 hover:bg-red-200 px-4 py-2 rounded-full"
          onClick={() =>
            onPlaceBet({
              ...match,
              betOn: awayTeam,
              odds: awayOdds
            })
          }
        >
          🟥 {awayTeam}: {awayOdds ?? "N/A"}
        </button>
      </div>
    </div>
  );
}
