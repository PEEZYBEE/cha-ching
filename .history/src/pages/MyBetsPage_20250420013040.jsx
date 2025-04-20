import { useEffect, useState } from "react";

export default function MyBetsPage() {
  const [myBets, setMyBets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:300/myBets")
      .then((r) => r.json())
      .then(setMyBets);
  }, []);

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
              <p className="text-gray-600">Odds: {bet.odds}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
