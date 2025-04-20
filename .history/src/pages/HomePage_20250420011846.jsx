export default function HomePage() {
    return (
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Cha-Ching!</h1>
        <p className="text-lg mb-6 text-gray-700">
          Your ultimate betting destination. Place your bets, track your wins, and join the excitement!
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
          Start Betting
        </button>
      </div>
    );
  }
  