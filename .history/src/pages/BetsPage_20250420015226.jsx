import { useEffect, useState } from "react";
import MatchCard from "../components/MatchCard";
import BetForm from "../components/BetForm";

export default function BetsPage() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function handlePlaceBet(game) {
    setSelectedGame(game);
  }

  function handleSubmitBet(betData) {
    fetch("http://localhost:3000/myBets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(betData)
    })
      .then((r) => r.json())
      .then((newBet) => {
        console.log("Bet placed:", newBet);
        setSelectedGame(null);
      });
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Games</h2>

      {selectedGame && (
        <BetForm game={selectedGame} onSubmitBet={handleSubmitBet} />
      )}

      <ul className="space-y-4">
        {games.map((game) => (
          <li key={game.id}>
            <MatchCard game={game} onPlaceBet={handlePlaceBet} />
          </li>
        ))}
      </ul>
    </div>
  );
}
