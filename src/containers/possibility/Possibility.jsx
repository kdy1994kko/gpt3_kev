import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility"> 
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">Unleash the Profound Depths of Your Imagination through Advanced AI</h1>
        <p>Engaging in interactive conversations, using it as a brainstorming tool, experimenting with AI-generated content, and embracing collaboration to explore uncharted creative territories.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  ) 
} 
 
export default Possibility