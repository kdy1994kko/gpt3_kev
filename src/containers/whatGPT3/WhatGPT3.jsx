import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 is an advanced language model developed by OpenAI. It is a highly sophisticated artificial intelligence model that understands and generates human-like text. Trained on vast amounts of internet data, it can perform various natural language processing tasks. GPT-3 excels in text completion, translation, summarization, question-answering, and more. Its applications span chatbots, content generation, language translation, and support in coding or scientific research. With its capacity for coherent text generation, GPT-3 is at the forefront of language processing technology." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 chatbots use the advanced language model developed by OpenAI to understand and generate human-like text responses. With extensive training on internet data, these chatbots deliver prompt and contextually appropriate interactions, making them valuable for a range of applications including customer support, virtual assistants, and language tutoring." />
      <Feature title="Knowledgebase" text="GPT-3's knowledge base relies on its extensive training data for generating responses. However, it is important to note that GPT-3 may not always provide up-to-date or accurate information as it lacks real-time access to external knowledge sources." />
      <Feature title="Education" text="GPT-3 has applications in education by serving as a language tutor, generating educational content, and aiding in automated grading. In programming, GPT-3 assists with code completion, debugging, and provides documentation and resources, making it a versatile tool in both realms." />
    </div>
  </div>
);
 
export default WhatGPT3; 

