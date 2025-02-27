import React from "react";
import "./App.css";
import TicTacToe from "./components/TicTacToe";  // ✅ Correct import

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1>VPN Game</h1>
      </nav>

      {/* Main Game Section */}
      <main className="game-container">
        <h2>Welcome to VPN Game</h2>
        <p>Choose a game and start playing!</p>

        {/* Tic-Tac-Toe Game */}
        <TicTacToe />  {/* ✅ Correct usage */}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 VPN Game. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;  // ✅ Correct placement
