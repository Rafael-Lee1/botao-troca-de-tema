import React from 'react';
import ThemeSwitcher from './ThemeSwitcher'; // Importe o componente ThemeSwitcher
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeSwitcher /> {/* Renderize o componente ThemeSwitcher aqui */}
      </header>
    </div>
  );
}

export default App;
