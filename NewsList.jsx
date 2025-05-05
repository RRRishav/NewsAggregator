const NewsList = ({ articles }) => (
  <div className="news-container">
    {articles.map((article, index) => (
      <div key={index} className="article">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    ))}
  </div>
);

export default NewsList;
