import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <a href="https://openai.com/blog" target="_blank" rel="noreferrer">
          <Article imgUrl={blog01} date="Latest updates" text="Open AI Blog"></Article>
        </a>
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href="https://openai.com/gpt-4" target="_blank" rel="noreferrer">
          <Article imgUrl={blog02} date="Next Level" text="GPT-4 is the most advanced system with OpenAI, producing safer and more useful responses"></Article>
        </a>
        <a href="https://openai.com/pricing" target="_blank" rel="noreferrer">
          <Article imgUrl={blog03} date="Pricing" text="Only pay for what you use."></Article>
        </a>
        <a href="https://openai.com/safety" target="_blank" rel="noreferrer">
          <Article imgUrl={blog04} date="Safety" text="Developing safe & responsible AI"></Article>
        </a>
        <a href="https://openai.com/security" target="_blank" rel="noreferrer">
          <Article imgUrl={blog05} date="Confidentiality" text="Security & privacy"></Article>
        </a>
      </div>
    </div>
  </div>
);

export default Blog;

