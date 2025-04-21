import { useEffect, useState } from "react";
import MatchCardFixed from "../components/MatchCardFixed";
import BetForm from "../components/BetForm";

export default function BetsPage() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetch("/games")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched games:", data);
        setGames(data);
      })
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  function handlePlaceBet(game) {
    setSelectedGame(game);
  }

  function handleSubmitBet(newBet) {
    fetch("http://localhost:3000/bets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBet),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Bet submitted:", data);
        setSelectedGame(null);
        alert("Bet placed!");
      })
      .catch((err) => console.error("Error placing bet:", err));
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>

      {selectedGame && (
        <BetForm game={selectedGame} onSubmitBet={handleSubmitBet} />
      )}

      {games.length === 0 ? (
        <p>Loading games...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {games.map((game) => (
            <MatchCardFixed
              key={game.id}
              match={game}
              onPlaceBet={handlePlaceBet}
            />
          ))}
        </div>
      )}
    </div>
  );
}
