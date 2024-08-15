import React, { useState } from 'react';
import './App.css';
import AnimatedCursor from "react-animated-cursor";
import { DarkModeProvider } from './contexts/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';
import SettingsIcon from './components/Settings/SettingsIcon';
import SettingsForm from './components/Settings/SettingsForm/SettingsForm';
import Home from './components/Home/Home';
// import SettingsIcon from './components/SettingsIcon';
// import SettingsForm from './components/SettingsForm';

function App() {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <DarkModeProvider>
      <div className="App">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
          outerStyle={{
            border: '3px solid var(--cursor-color)'
          }}
        />
        <div>
          {/* <DarkModeToggle />
          <h1>Hello World</h1>
          <p>This is a sample application with dark mode support.</p> */}
          <Home/>
        </div>
        <SettingsIcon onClick={toggleSettings} />
        {showSettings && <SettingsForm onClose={toggleSettings} />}
      </div>
    </DarkModeProvider>
  );
}

export default App;
