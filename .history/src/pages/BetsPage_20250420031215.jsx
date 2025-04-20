import { useState, useEffect } from "react";
import MatchCardFixed from "./components/MatchCardFixed";
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

  function handleSubmitBet(newBet) {
    fetch("http://localhost:3000/bets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBet)
    })
      .then((r) => r.json())
      .then(() => {
        setSelectedGame(null); // closes form
        alert("Bet submitted successfully!");
      })
      .catch((err) => {
        console.error("Failed to submit bet:", err);
        alert("Something went wrong submitting the bet.");
      });
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Matches</h2>

      {selectedGame && (
        <BetForm game={selectedGame} onSubmitBet={handleSubmitBet} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game) => (
          <MatchCard key={game.id} game={game} onPlaceBet={handlePlaceBet} />
        ))}
      </div>
    </div>
  );
}
