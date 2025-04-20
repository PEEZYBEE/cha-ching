import { useState } from "react";

export default function BetsPage() {
  const [bets, setBets] = useState([
    { id: 1, match: "Team Alpha vs Team Omega", odds: 2.1 },
    { id: 2, match: "FC Thunder vs Real Lightning", odds: 1.8 },
    { id: 3, match: "The Giants vs The Hawks", odds: 2.5 },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Bets</h2>
      <ul className="space-y-4">
        {bets.map((bet) => (
          <li key={bet.id} className="bg-white p-4 rounded shadow">
            <p className="text-lg font-semibold">{bet.match}</p>
            <p className="text-gray-600">Odds: {bet.odds}</p>
            <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              Place Bet
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
