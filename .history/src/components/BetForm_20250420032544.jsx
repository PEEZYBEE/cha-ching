import { useState } from "react";

export default function BetForm({ game, onSubmitBet }) {
  const [betOn, setBetOn] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const oddsLookup = {
      Home: game.homeOdds,
      Away: game.awayOdds,
      Draw: game.drawOdds,
    };

    const newBet = {
      gameId: game.id,
      match: `${game.homeTeam} vs ${game.awayTeam}`,
      betOn: betOn === "Home" ? game.homeTeam : betOn === "Away" ? game.awayTeam : "Draw",
      amount: Number(amount),
      odds: oddsLookup[betOn],
      status: "pending",
    };

    onSubmitBet(newBet);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded bg-gray-50">
      <h3 className="text-xl font-bold mb-2">Placing Bet on {game.homeTeam} vs {game.awayTeam}</h3>

      <label className="block mb-2">
        <span className="mr-2">Choose:</span>
        <select value={betOn} onChange={(e) => setBetOn(e.target.value)} required>
          <option value="">Select</option>
          <option value="Home">{game.homeTeam}</option>
          <option value="Away">{game.awayTeam}</option>
          <option value="Draw">Draw</option>
        </select>
      </label>

      <label className="block mb-4">
        <span className="mr-2">Amount:</span>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded"
      >
        Submit Bet
      </button>
    </form>
  );
}
