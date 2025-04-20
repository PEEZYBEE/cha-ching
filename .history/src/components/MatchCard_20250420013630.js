// src/components/MatchCard.jsx
export default function MatchCard({ game, onPlaceBet }) {
    const { homeTeam, awayTeam, homeOdds, awayOdds, drawOdds } = game
  
    return (
      <div className="bg-white shadow p-4 rounded mb-4">
        <h2 className="text-xl font-bold mb-2">
          {homeTeam} vs {awayTeam}
        </h2>
        <div className="flex justify-between items-center mb-2">
          <div>
            <p>🏠 {homeTeam}: <span className="font-semibold">{homeOdds}</span></p>
            <p>🛣️ {awayTeam}: <span className="font-semibold">{awayOdds}</span></p>
            <p>🤝 Draw: <span className="font-semibold">{drawOdds}</span></p>
          </div>
          <button
            onClick={() => onPlaceBet(game)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Place Bet
          </button>
        </div>
      </div>
    )
  }
  