# 💸 Cha-Ching - Football Betting App

Cha-Ching is a fun and interactive football betting app where users can view upcoming matches, check odds, and place bets on their favorite teams.

## 🚀 Features

- 🏟 Displays upcoming football matches
- 📊 Shows live odds for each team and draw
- 🎰 Allows users to place bets
- 🧾 Bet history tracking
- 🎨 Responsive and stylish UI with Tailwind CSS
- 🔌 Fake REST API with `json-server`

## 🛠 Tech Stack

- **Frontend:** React (with Vite), React Router
- **Styling:** Tailwind CSS
- **Backend:** json-server (serves `games` and `bets`)

## 📁 Folder Structure

cha-ching/ ├── public/ │ └── stadium.jpg # Background image ├── src/ │ ├── components/ # Reusable components │ ├── pages/ # Pages like BetHistory, Home, etc. │ ├── App.jsx │ └── main.jsx ├── data/ │ └── db.json # Matches and bets data for json-server ├── tailwind.config.js ├── package.json └── README.md



## ⚙️ Getting Started

### 1. Clone the repo 
git clone https://github.com/yourusername/cha-ching.git
cd cha-ching

2. Install dependencies

npm install

3. Start the frontend

npm run dev

4. Start the backend (json-server)

npx json-server --watch data/db.json --port 3000
Make sure your frontend is fetching from http://localhost:3000/games

📝 Example db.json

{
  "games": [
    {
      "id": 1,
      "homeTeam": "Arsenal",
      "homeTeamLogo": "...",
      "awayTeam": "Man City",
      "awayTeamLogo": "...",
      "homeOdds": 2.5,
      "awayOdds": 1.8,
      "drawOdds": 3.1,
      "result": null
    }
  ],
  "bets": []
}

Made with ❤️ by Peezybee








