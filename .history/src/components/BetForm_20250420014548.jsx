import { useState } from "react";

export default function BetForm({ game, onSubmitBet }) {
  const [betOn, setBetOn] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!betOn || !amount) return;

    const newBet = {
      gameId: game.id,
      betOn,
      amount: parseFloat(amount),
      status: "pending"
    };

    onSubmitBet(newBet);
  }

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">
        Place a Bet on {game.homeTeam} vs {game.awayTeam}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="betOn"
              value={game.homeTeam}
              checked={betOn === game.homeTeam}
              onChange={(e) => setBetOn(e.target.value)}
            />
            {game.homeTeam} ({game.homeOdds})
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="betOn"
              value="Draw"
              checked={betOn === "Draw"}
              onChange={(e) => setBetOn(e.target.value)}
            />
            Draw ({game.drawOdds})
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="betOn"
              value={game.awayTeam}
              checked={betOn === game.awayTeam}
              onChange={(e) => setBetOn(e.target.value)}
            />
            {game.awayTeam} ({game.awayOdds})
          </label>
        </div>

        <input
          type="number"
          placeholder="Bet amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-1 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Submit Bet
        </button>
      </form>
    </div>
  );
}
