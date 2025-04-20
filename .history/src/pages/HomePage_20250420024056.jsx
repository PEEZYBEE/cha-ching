export default function HomePage() {
    return (
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Cha-Ching 💸</h1>
        <p className="text-lg text-gray-600 mb-8">
          Place your bets, track your wins, and see how your predictions stack up!
        </p>
        <div className="space-x-4">
          <a
            href="/bets"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow"
          >
            Place a Bet
          </a>
          <a
            href="/my-bets"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
          >
            View My Bets
          </a>
          <a
            href="/results"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded shadow"
          >
            See Results
          </a>
        </div>
      </div>
    );
  }
  