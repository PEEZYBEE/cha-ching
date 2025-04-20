export default function MatchCardFixed({ match, onPlaceBet }) {
  const smallLogoTeams = ["Barcelona"]; // Add more teams here

  const getLogoClass = (team) =>
    smallLogoTeams.includes(team) ? "w-10 h-10" : "w-12 h-12";

  return (
    <div className="border p-4 rounded shadow bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src={match.homeTeamLogo}
            alt={match.homeTeam}
            className={`object-contain ${getLogoClass(match.homeTeam)}`}
          />
          <span className="font-semibold text-lg">
            {match.homeTeam} vs {match.awayTeam}
          </span>
          <img
            src={match.awayTeamLogo}
            alt={match.awayTeam}
            className={`object-contain ${getLogoClass(match.awayTeam)}`}
          />
        </div>
      </div>
      <div className="text-sm mb-2">
        <p>🏠 {match.homeTeam} odds: {match.homeOdds}</p>
        <p>🛫 {match.awayTeam} odds: {match.awayOdds}</p>
        <p>⚖️ Draw odds: {match.drawOdds}</p>
      </div>
      <button
        onClick={() => onPlaceBet(match)}
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
      >
        Place Bet
      </button>
    </div>
  );
}
