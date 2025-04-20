// src/components/BetForm.jsx
import { useState } from "react"

export default function BetForm({ game, onSubmitBet }) {
  const [betOn, setBetOn] = useState("")
  const [amount, setAmount] = useState("")

  if (!game) return null

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Place a Bet on {game.homeTeam} vs {game.awayTeam}</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmitBet({
            gameId: game.id,
            betOn,
            amount: parseFloat(amount),
            status: "pending"
          })
          setBetOn("")
          setAmount("")
        }}
        className="space-y-3"
      >
        <div>
          <label className="block font-medium">Choose Outcome:</label>
          <select
            className="w-full border p-2 rounded"
            value={betOn}
            onChange={(e) => setBetOn(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value={game.homeTeam}>{game.homeTeam}</option>
            <option value={game.awayTeam}>{game.awayTeam}</option>
            <option value="Draw">Draw</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Bet Amount:</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="1"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit Bet
        </button>
      </form>
    </div>
  )
}
