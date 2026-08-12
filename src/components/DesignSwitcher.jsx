import React from 'react';

export default function DesignSwitcher({ activeDesign, onSelectDesign }) {
  return (
    <div className="design-switcher-bar">
      <div className="switcher-label">
        <span className="switcher-icon">🎨</span>
        <span>SWITCH PORTFOLIO DESIGN:</span>
      </div>
      <div className="switcher-options">
        <button 
          className={`switcher-btn ${activeDesign === 'design1' ? 'active' : ''}`}
          onClick={() => onSelectDesign('design1')}
        >
          <span className="btn-dot dot-crimson"></span>
          Design 01 (Rayhan / Crimson)
        </button>
        <button 
          className={`switcher-btn ${activeDesign === 'design2' ? 'active' : ''}`}
          onClick={() => onSelectDesign('design2')}
        >
          <span className="btn-dot dot-amber"></span>
          Design 02 (Robin / Amber Glow)
        </button>
      </div>
    </div>
  );
}
