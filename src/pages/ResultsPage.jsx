import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [games, setGames] = useState([]);
  const [selectedResult, setSelectedResult] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function handleResultChange(gameId, result) {
    setSelectedResult((prev) => ({ ...prev, [gameId]: result }));
  }

  function handleSubmitResult(game) {
    const result = selectedResult[game.id];
    if (!result) return;

    // Update the game's result
    fetch(`http://localhost:3000/games/${game.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ result }),
    });

    // Determine winning team
    const winningTeam =
      result === "home" ? game.homeTeam :
      result === "away" ? game.awayTeam :
      "Draw";

    // Get all bets and update status
    fetch("http://localhost:3000/bets")
      .then((r) => r.json())
      .then((allBets) => {
        const relatedBets = allBets.filter((b) => b.gameId == game.id);
        relatedBets.forEach((bet) => {
          const isWin = bet.betOn === winningTeam;
          fetch(`http://localhost:3000/bets/${bet.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              status: isWin ? "won" : "lost",
            }),
          });
        });
      });
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Set Game Results</h2>
      <ul className="space-y-4">
        {games.map((game) => (
          <li key={game.id} className="bg-white p-4 rounded shadow">
            <p className="font-semibold mb-2">
              {game.homeTeam} vs {game.awayTeam}
            </p>
            <div className="flex gap-4 items-center mb-2">
              <label>
                <input
                  type="radio"
                  name={`result-${game.id}`}
                  value="home"
                  onChange={() => handleResultChange(game.id, "home")}
                  checked={selectedResult[game.id] === "home"}
                />{" "}
                {game.homeTeam} wins
              </label>
              <label>
                <input
                  type="radio"
                  name={`result-${game.id}`}
                  value="draw"
                  onChange={() => handleResultChange(game.id, "draw")}
                  checked={selectedResult[game.id] === "draw"}
                />{" "}
                Draw
              </label>
              <label>
                <input
                  type="radio"
                  name={`result-${game.id}`}
                  value="away"
                  onChange={() => handleResultChange(game.id, "away")}
                  checked={selectedResult[game.id] === "away"}
                />{" "}
                {game.awayTeam} wins
              </label>
            </div>
            <button
              onClick={() => handleSubmitResult(game)}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Submit Result
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
