import { useState } from "react";

export default function BetForm({ game, onSubmitBet }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!selectedOption || !amount) return;

    const odds = getOddsForOption(game, selectedOption);

    const newBet = {
      gameId: game.id,
      match: `${game.homeTeam} vs ${game.awayTeam}`,
      betOn: selectedOption,
      amount: parseFloat(amount),
      odds: odds,
      status: "pending"
    };

    onSubmitBet(newBet);
  }

  function getOddsForOption(game, option) {
    if (option === game.homeTeam) return game.homeOdds;
    if (option === "Draw") return game.drawOdds;
    if (option === game.awayTeam) return game.awayOdds;
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 bg-white rounded shadow max-w-md"
    >
      <h3 className="text-xl font-bold mb-2">
        Place a Bet on {game.homeTeam} vs {game.awayTeam}
      </h3>

      <div className="space-y-2 mb-4">
        <label className="block">
          <input
            type="radio"
            name="bet"
            value={game.homeTeam}
            onChange={(e) => setSelectedOption(e.target.value)}
          />{" "}
          {game.homeTeam} ({game.homeOdds})
        </label>

        <label className="block">
          <input
            type="radio"
            name="bet"
            value="Draw"
            onChange={(e) => setSelectedOption(e.target.value)}
          />{" "}
          Draw ({game.drawOdds})
        </label>

        <label className="block">
          <input
            type="radio"
            name="bet"
            value={game.awayTeam}
            onChange={(e) => setSelectedOption(e.target.value)}
          />{" "}
          {game.awayTeam} ({game.awayOdds})
        </label>
      </div>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border px-2 py-1 w-full mb-4"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit Bet
      </button>
    </form>
  );
}
