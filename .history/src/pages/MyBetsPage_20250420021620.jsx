import { useEffect, useState } from "react";

export default function MyBetsPage() {
  const [bets, setBets] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bets")
      .then((r) => r.json())
      .then(setBets);

    fetch("http://localhost:3000/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function getMatch(gameId) {
    const game = games.find((g) => g.id == gameId);
    return game ? `${game.homeTeam} vs ${game.awayTeam}` : "Match not found";
  }

  function getStatusBadge(status) {
    const base = "inline-block px-2 py-0.5 text-xs font-semibold rounded-full";
    if (status === "won") return <span className={`${base} bg-green-200 text-green-800`}>Won ✅</span>;
    if (status === "lost") return <span className={`${base} bg-red-200 text-red-800`}>Lost ❌</span>;
    return <span className={`${base} bg-gray-200 text-gray-800`}>Pending ⏳</span>;
  }

  function getWinningsText(bet) {
    const amount = bet.amount;
    const odds = bet.odds;
    const winnings = amount * odds;

    if (bet.status === "won") {
      return <p className="text-green-700 font-semibold">Winnings: ${winnings.toFixed(2)}</p>;
    } else if (bet.status === "pending") {
      return <p className="text-yellow-600">Expected Winnings: ${winnings.toFixed(2)}</p>;
    } else {
      return null;
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Bets</h2>

      {bets.length === 0 ? (
        <p className="text-gray-600">No bets placed yet.</p>
      ) : (
        <ul className="space-y-4">
          {bets.map((bet) => (
            <li key={bet.id} className="bg-white shadow p-4 rounded">
              <p className="text-lg font-semibold">{getMatch(bet.gameId)}</p>
              <p className="text-gray-700">Bet On: {bet.betOn}</p>
              <p className="text-gray-700">Amount: ${bet.amount}</p>
              <p className="text-gray-700">Odds: {bet.odds}</p>
              <p className="mt-2">{getStatusBadge(bet.status)}</p>
              {getWinningsText(bet)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
