export default function MatchCardFixed({ match, onPlaceBet }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <div className="flex items-center justify-between mb-2">
        
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
