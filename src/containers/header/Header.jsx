import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text"> Wassgoodiiee, Unleash Chat GPT-3&apos;s potential to build, innovate, and shape the future. \(^O^)/</h1>
        <p>Collaborate with ChatGPT-3 by setting goals, refining prompts, evaluating outputs critically, using external tools, and providing feedback to unleash its potential.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <a href="https://auth0.openai.com/u/signup/identifier?state=hKFo2SBpdEJYdHJYYVdMM09hWVNDRWZPUnFqeXM2c29hV0R5ZaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDhaTmdSWDVYcXdkM2ZfaVNFd09maHhtaS1uRE16dV9xo2NpZNkgVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEc" target="_blank" rel="noreferrer">
            <button type="button">Get Started</button>
          </a>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>More than 1,600 people requested access in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  ) 
}

export default Header


