// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { useDarkMode } from '../../../contexts/DarkModeContext';
// import '../SettingsForm/SettingsForm.css';

// const SettingsForm = ({ onClose }) => {
//   const { isDarkMode, toggleDarkMode, cursorStyle, updateCursorStyle } = useDarkMode();
//   const [selectedCursorStyle, setSelectedCursorStyle] = useState(cursorStyle);

//   const handleCursorChange = (e) => {
//     setSelectedCursorStyle(e.target.value);
//     updateCursorStyle(e.target.value);
//   };

//   return (
//     <div className="settings-form">
//       <div className="settings-header">
//         <h3>Cursor Style</h3>
//         <select value={selectedCursorStyle} onChange={handleCursorChange}>
//           <option value="default">Default</option>
//           <option value="animated">Animated</option>
//         </select>
//       </div>
//       <div className="settings-toggle">
//         <h3>Mode</h3>
//         <button onClick={toggleDarkMode}>
//           {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//         </button>
//       </div>
//       <button className="close-btn" onClick={onClose}>
//         <FaTimes size={20} />
//       </button>
//     </div>
//   );
// };

// export default SettingsForm;


import React, { useState } from 'react';
import { FaTimes, FaChevronUp } from 'react-icons/fa';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import '../SettingsForm/SettingsForm.css';

const SettingsForm = ({ onClose }) => {
  const { isDarkMode, toggleDarkMode, cursorStyle, updateCursorStyle } = useDarkMode();
  const [selectedCursorStyle, setSelectedCursorStyle] = useState(cursorStyle);

  const handleCursorChange = (e) => {
    setSelectedCursorStyle(e.target.value);
    updateCursorStyle(e.target.value);
  };

  return (
    <div className="settings-form">
      <div className="arrow-up">
        <FaChevronUp size={20} />
      </div>
      <div className="settings-content">
        <div className="settings-header">
          <h3>Cursor</h3>
          <select value={selectedCursorStyle} onChange={handleCursorChange}>
            <option value="default">Default</option>
            <option value="animated">Animated</option>
          </select>
        </div>
        <div className="settings-toggle">
          <h3>Mode</h3>
          <div className="mode-buttons">
            <button onClick={() => toggleDarkMode(false)} className={!isDarkMode ? 'active' : ''}>Light</button>
            <button onClick={() => toggleDarkMode(true)} className={isDarkMode ? 'active' : ''}>Dark</button>
          </div>
        </div>
      </div>
      <button className="close-btn" onClick={onClose}>
        <FaTimes size={20} />
      </button>
    </div>
  );
};

export default SettingsForm;
