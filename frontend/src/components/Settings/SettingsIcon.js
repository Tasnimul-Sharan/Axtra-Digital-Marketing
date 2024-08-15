import React from 'react';
import { FaCog } from 'react-icons/fa';
import './SettingsIcon.css'; 

const SettingsIcon = ({ onClick }) => (
  <div className="settings-icon" onClick={onClick}>
    <FaCog size={24} />
  </div>
);

export default SettingsIcon;
