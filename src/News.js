import React from 'react';
import { getNews } from "./data";
import NewsItem from './NewsItem';

import styles from './News.scss';

function News(){
  let newsData = getNews();
  let news = newsData.map((newsItem, index) => <NewsItem title={newsItem.title} text={newsItem.text} key={index} />);
  return (
    <main id={styles.news}>
    news
    {news}
    </main>
  )
}

export default News;
