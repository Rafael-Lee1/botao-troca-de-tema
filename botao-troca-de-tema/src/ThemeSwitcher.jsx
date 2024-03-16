import React, { useState } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <button onClick={toggleTheme}>Trocar Tema</button>
      <p>Modo: {darkMode ? 'Escuro' : 'Claro'}</p>
    </div>
  );
}

export default ThemeSwitcher;
