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

  const isValueIncluded = (array: string[], string: string) => {
    return array.some((value) => string.includes(value));
  };

  return (
    <Container className='home'>
      <InputField onChange={handleChange} value={value} />
      <ArticleList
        articles={articles.filter((val) => {
          let arrayValue: string[] = value.split(' ').filter((e) => e);

          if (arrayValue.length === 0) {
            val.priority = -1;
            return val;
          } else {
            if (
              isValueIncluded(arrayValue, val.title) &&
              isValueIncluded(arrayValue, val.summary)
            ) {
              val.priority = 1;
              return val;
            } else if (isValueIncluded(arrayValue, val.title)) {
              val.priority = 2;
              return val;
            } else if (isValueIncluded(arrayValue, val.summary)) {
              val.priority = 3;
              return val;
            }
          }
        })}
        keywords={value === '' ? [] : value.split(' ')}
      />
    </Container>
  );
};

export default Homepage;
