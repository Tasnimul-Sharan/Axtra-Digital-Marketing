import React, { useState } from "react";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import DarkModeToggle from "./components/DarkModeToggle";
import SettingsIcon from "./components/Settings/SettingsIcon";
import SettingsForm from "./components/Settings/SettingsForm/SettingsForm";
import Home from "./components/Home/Home";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import ScrollButton from "./components/ScrollButton/ScrollButton";

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
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
        />
        <div>
          <Header />
          <ScrollButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <SettingsIcon onClick={toggleSettings} />
        {showSettings && <SettingsForm onClose={toggleSettings} />}
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
