import React, { FC } from 'react';
import { IArticle } from '../types/types';
import { useParams, Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
// mui
import { Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArticlePage: FC = () => {
  const params = useParams();

  const article = useFetchData<IArticle | null>(
    `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`,
    null
  );

  return (
    <>
      <div className='article-img'>
        <div style={{ backgroundImage: `url(${article?.imageUrl})` }}></div>
      </div>
      <Container>
        <div className='article-body'>
          <h2>{article?.title}</h2>
          <div>
            <p>{article?.summary}</p>
          </div>
        </div>
        <div className='article-footer'>
          <Link to='/' className='btn btn-back'>
            <ArrowBackIcon fontSize='small' />
            <span>Back to homepage</span>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default ArticlePage;
