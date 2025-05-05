import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import CategorySelector from './components/CategorySelector';
import './index.css';

const App = () => {
  const [category, setCategory] = useState('technology');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      const data = await res.json();
      setArticles(data.articles);
    };

    fetchNews();
  }, [category]);

  return (
    <div className="app">
      <h1>React News Aggregator</h1>
      <CategorySelector category={category} setCategory={setCategory} />
      <NewsList articles={articles} />
    </div>
  );
};

export default App;
