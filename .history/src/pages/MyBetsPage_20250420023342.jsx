import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export default function MyBetsPage() {
  const [myBets, setMyBets] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    fetch("http://localhost:3000/bets")
      .then((r) => r.json())
      .then((data) => setMyBets(data));
  }, []);

  useEffect(() => {
    myBets.forEach((bet) => {
      if (bet.status === "won" && !bet.notified) {
        toast.success(`🎉 You won $${(bet.amount * bet.odds).toFixed(2)} on ${bet.betOn}!`);
        setShowConfetti(true);

        setTimeout(() => {
          setShowConfetti(false);
        }, 4000);

        // Mark bet as notified to avoid duplicate toasts/confetti
        fetch(`http://localhost:3000/bets/${bet.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ notified: true }),
        }).then(() => {
          setMyBets((prev) =>
            prev.map((b) => (b.id === bet.id ? { ...b, notified: true } : b))
          );
        });
      }
    });
  }, [myBets]);

  return (
    <div className="relative">
      {showConfetti && <Confetti width={width} height={height} />}
      <h2 className="text-2xl font-bold mb-4">My Bets</h2>
      {myBets.length === 0 ? (
        <p className="text-gray-600">No bets placed yet.</p>
      ) : (
        <ul className="space-y-4">
          {myBets.map((bet) => (
            <li key={bet.id} className="bg-white p-4 rounded shadow">
              <p className="text-lg font-semibold">{bet.match}</p>
              <p className="text-gray-600">Bet On: {bet.betOn}</p>
              <p className="text-gray-600">Amount: ${bet.amount}</p>
              <p className="text-gray-600">Odds: {bet.odds}</p>
              <p className="text-gray-600">Status: {bet.status}</p>
              <p className="text-gray-800 font-medium">
                Expected Winnings: ${(bet.amount * bet.odds).toFixed(2)}
              </p>
              {bet.status === "won" && (
                <p className="text-green-600 font-bold">
                  🎉 You won ${ (bet.amount * bet.odds).toFixed(2) }!
                </p>
              )}
              {bet.status === "lost" && (
                <p className="text-red-500 font-bold">❌ You lost this bet.</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
