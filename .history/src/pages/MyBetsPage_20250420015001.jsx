export default function MatchCard({ game, onPlaceBet }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-bold mb-2">
          {game.homeTeam} vs {game.awayTeam}
        </h3>
        <p className="text-gray-600">
          Odds — {game.homeTeam}: {game.homeOdds}, Draw: {game.drawOdds}, {game.awayTeam}: {game.awayOdds}
        </p>
        <button
          onClick={() => onPlaceBet(game)}
          className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Place Bet
        </button>
      </div>
    );
  }
  