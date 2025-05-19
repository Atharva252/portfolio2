"use client";
import React from "react";
import "./Cube.css"; // Create this CSS file

const Cube = () => {
  return (
    <div className="cube-scene">
      <div className="cube">
        <div className="face front"><a href="https://github.com/Atharva252/plant-_disease_detection-Botanical_eye-" target="_blank">Botanical Eye</a></div>
        <div className="face back"><a href="https://github.com/Atharva252/Ai-_Assistant_for_Health_care" target="_blank">AI Assistant</a></div>
        <div className="face right"><a href="https://github.com/Atharva252/PRODIGY_WD_01" target="_blank">WD_01</a></div>
        <div className="face left"><a href="https://github.com/Atharva252/PRODIGY_WD_02" target="_blank">WD_02</a></div>
        <div className="face top"><a href="https://github.com/Atharva252/PRODIGY_WD_05" target="_blank">WD_05</a></div>
        <div className="face bottom"><span>More Soon</span></div>
      </div>
    </div>
  );
};

export default Cube;
