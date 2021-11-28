import React, { FC, useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import { IArticle } from '../types/types';
// components
import ArticleList from './ArticleList';
import InputField from './InputField';
// mui
import { Container } from '@mui/material';

const Homepage: FC = () => {
  const [value, setValue] = useState<string>('');

  const articles = useFetchData<IArticle[]>(
    'https://api.spaceflightnewsapi.net/v3/articles?_limit=24',
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const arrayContains = (array: string[], string: string) => {
    return array.some((value) => string.includes(value));
  };

  const formatString = (string: string) => {
    return string.length > 100 ? string.substring(0, 97) : string;
  };

  const filterArticles = (val: IArticle) => {
    let arrayValue: string[] = value.split(' ').filter((e) => e);
    const title = formatString(val.title),
      summary = formatString(val.summary);

    if (arrayValue.length === 0) {
      val.priority = -1;
      return val;
    } else if (arrayContains(arrayValue, title) && arrayContains(arrayValue, summary)) {
      val.priority = 1;
      return val;
    } else if (arrayContains(arrayValue, title)) {
      val.priority = 2;
      return val;
    } else if (arrayContains(arrayValue, summary)) {
      val.priority = 3;
      return val;
    } else {
      return null;
    }
  };

  return (
    <Container className='home'>
      <InputField onChange={handleChange} value={value} />
      <ArticleList
        articles={articles.filter((val) => filterArticles(val))}
        keywords={value === '' ? [] : value.split(' ')}
      />
    </Container>
  );
};

export default Homepage;
