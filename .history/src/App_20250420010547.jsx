import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-red-600">
      🧢 Tailwind is Working!
    </h1>
  </div>
  )
}

export default App
