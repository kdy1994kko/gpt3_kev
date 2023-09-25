import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css';


const featuresData = [
  {
    title: 'Language Understanding',
    text: 'Comprehend and analyze human language input, providing accurate responses based on the given context. It uses deep learning techniques to process and understand the meaning and intent behind the text.',
  },
  {
    title: 'Contextual Understanding',
    text: 'Ability to maintain context throughout a conversation, allowing it to remember and reference past dialogue. This helps in providing coherent and relevant responses, as it understands the ongoing conversation flow.',
  },
  {
    title: 'Information Retrieval',
    text: 'Retrieve information from a wide range of topics and sources, providing answers to specific questions and offering detailed explanations. It can access its vast knowledge base to provide accurate and up-to-date information to the user.',
  },
  {
    title: 'Creative Text Generation',
    text: 'Generate creative and contextually relevant responses by leveraging its vast training on diverse texts. It can produce stories, write code, draft emails, and engage in interactive storytelling, showcasing its ability to generate human-like text in various scenarios.',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features"> 
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Seize the endless opportunities of the present, embrace the future, and shape your destiny through innovation and determination.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    </div>
  ) 
}

export default Features  