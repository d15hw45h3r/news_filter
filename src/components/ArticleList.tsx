import React, { FC } from 'react';
import { IArticle } from '../types/types';
// components
import Article from './Article';
// mui
import { Box } from '@mui/system';

interface ArticleListProps {
  articles: IArticle[];
  keywords: string[];
}

const ArticleList: FC<ArticleListProps> = ({ articles, keywords }) => {
  let articlesSorted = [...articles];
  articlesSorted.sort((a, b) => a.priority - b.priority);

  return (
    <div className='news-list'>
      <div>
        <h4>Results: {articles.length}</h4>
      </div>
      <Box
        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}
        className='article-wrapper'
      >
        {articles.length > 0 ? (
          articlesSorted.map((article) => (
            <Article article={article} key={article.id} keywords={keywords} />
          ))
        ) : (
          <div>Sorry, no articles were found by your request.</div>
        )}
      </Box>
    </div>
  );
};

export default ArticleList;
