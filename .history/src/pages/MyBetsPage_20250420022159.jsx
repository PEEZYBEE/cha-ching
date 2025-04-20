import { useEffect, useState } from "react";

export default function MyBetsPage() {
  const [myBets, setMyBets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/myBets")
      .then((r) => r.json())
      .then(setMyBets);
  }, []);

  function getWinningsText(bet) {
    const amount = parseFloat(bet.amount);
    const odds = parseFloat(bet.odds);

    if (isNaN(amount) || isNaN(odds)) {
      return <p className="text-red-500">Invalid bet data</p>;
    }

    const winnings = amount * odds;

    if (bet.status === "won") {
      return (
        <p className="text-green-700 font-semibold">
          🏆 Winnings: ${winnings.toFixed(2)}
        </p>
      );
    } else if (bet.status === "pending") {
      return (
        <p className="text-yellow-600">
          Expected Winnings: ${winnings.toFixed(2)}
        </p>
      );
    } else if (bet.status === "lost") {
      return (
        <p className="text-red-500">
          ❌ Lost bet. No winnings.
        </p>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Bets</h2>
      {myBets.length === 0 ? (
        <p className="text-gray-600">No bets placed yet.</p>
      ) : (
        <ul className="space-y-4">
          {myBets.map((bet) => (
            <li key={bet.id} className="bg-white p-4 rounded shadow">
              <p className="text-lg font-semibold">{bet.match}</p>
              <p className="text-gray-600">Bet On: {bet.betOn}</p>
              <p className="text-gray-600">Amount: ${bet.amount}</p>
              <p className="text-gray-600">Odds: {bet.odds}</p>
              <p className="text-gray-600">Status: {bet.status}</p>
              {getWinningsText(bet)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
