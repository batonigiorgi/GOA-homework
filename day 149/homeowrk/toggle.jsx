
import React, { useState } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('Light');

  return (
    <div style={{ backgroundColor: theme === 'Dark' ? '#222' : '#eee', color: theme === 'Dark' ? '#fff' : '#000', padding: '20px' }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}>
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
