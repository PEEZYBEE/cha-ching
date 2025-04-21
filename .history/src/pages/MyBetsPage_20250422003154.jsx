import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export default function MyBetsPage({ myBets: propBets }) {
  const [myBets, setMyBets] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    fetch("https://cha-ching-backend-1.onrender.com/bets")
      .then((r) => r.json())
      .then((data) => setMyBets(data));
  }, [propBets]);

  useEffect(() => {
    myBets.forEach((bet) => {
      if (bet.status === "won" && !bet._toastShown) {
        toast.success(`🎉 You won your bet on ${bet.match}!`);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
        bet._toastShown = true;
      }
    });
  }, [myBets]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Bets</h1>
      {myBets.length === 0 ? (
        <p>No bets placed yet.</p>
      ) : (
        <div className="grid gap-4">
          {myBets.map((bet) => {
            const winnings = bet.status === "won" 
              ? (bet.amount * bet.odds).toFixed(2)
              : (bet.amount * bet.odds).toFixed(2); 

            return (
              <div key={bet.id} className="p-4 bg-white rounded shadow">
                <h2 className="text-xl font-semibold">{bet.match}</h2>
                <p>Bet On: <strong>{bet.betOn}</strong></p>
                <p>Amount: ${bet.amount}</p>
                <p>Odds: {bet.odds}</p>
                <p>Status: <span className={`font-bold ${bet.status === "won" ? "text-green-600" : bet.status === "lost" ? "text-red-600" : "text-yellow-600"}`}>
                  {bet.status}
                </span></p>
                <p>
                  {bet.status === "won" ? (
                    <>💰 You won: <strong>${winnings}</strong></>
                  ) : (
                    <>🎯 Potential Winnings: <strong>${winnings}</strong></>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
}
