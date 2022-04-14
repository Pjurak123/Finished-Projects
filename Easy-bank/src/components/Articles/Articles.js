import React from "react";
import "../Articles/Articles.css";
import { DataArticles } from "./DataArticles";

function Articles() {
  return (
    <div className="article-container">
      <h2 className="article-title">Latest Articles</h2>
      <div className="card-container">
        {DataArticles.map((data, index) => {
          return (
            <div className="card-container">
              <div className="card">
                <div className="article-row" key={index}>
                  <div className="article_image_container">
                    <img
                      src={data.articleImg}
                      alt={data.articleAlt}
                      className="article_image"
                    />
                  </div>
                  <div className="article_text_container">
                    <p className="article_author">{data.author}</p>
                    <h4 className="article_title">{data.title}</h4>
                    <p className="article_text">{data.text}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Articles;
