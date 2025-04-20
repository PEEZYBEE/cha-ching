import { useEffect, useState } from "react";

export default function BetsPage({ onPlaceBet }) {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bets")
      .then((r) => r.json())
      .then(setBets);
  }, []);

  function handleClick(bet) {
    // Save to local state
    onPlaceBet(bet);

    // POST to backend
    fetch("http://localhost:3000/myBets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bet)
    });
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Bets</h2>
      <ul className="space-y-4">
        {bets.map((bet) => (
          <li key={bet.id} className="bg-white p-4 rounded shadow">
            <p className="text-lg font-semibold">{bet.match}</p>
            <p className="text-gray-600">Odds: {bet.odds}</p>
            <button
              onClick={() => handleClick(bet)}
              className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Place Bet
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
