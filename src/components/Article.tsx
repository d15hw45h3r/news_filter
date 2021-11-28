import React, { FC } from 'react';
import { IArticle } from '../types/types';

// components
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

// mui
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ArticleProps {
  article: IArticle;
  keywords: string[];
}

const Article: FC<ArticleProps> = ({ article, keywords }) => {
  const formatDate = (date: string) => {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let d = new Date(date),
      month = months[d.getMonth()],
      day = d.getDate(),
      year = d.getFullYear(),
      daySuffix = day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th';

    return `${month} ${day + daySuffix}, ${year}`;
  };

  const formatString = (string: string) => {
    return string.length > 100 ? `${string.substring(0, 97)}...` : string;
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <Link to={`/article/${article.id}`}>
        <CardActionArea>
          <CardMedia component='img' height='215' image={article.imageUrl} alt='news' />
          <CardContent className='card-body'>
            <Typography component='div' className='date'>
              <CalendarTodayIcon fontSize='small' />
              <p>{formatDate(article.publishedAt)}</p>
            </Typography>
            <Typography gutterBottom variant='h5' component='div' className='title'>
              <Highlighter
                highlightClassName='highlight-word'
                searchWords={keywords}
                caseSensitive={true}
                textToHighlight={formatString(article.title)}
              />
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <Highlighter
                highlightClassName='highlight-word'
                searchWords={keywords}
                caseSensitive={true}
                textToHighlight={formatString(article.summary)}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className='card-actions'>
        <Link to={`/article/${article.id}`} className='btn'>
          <span>Read more</span>
          <ArrowForwardIcon fontSize='small' />
        </Link>
      </CardActions>
    </Card>
  );
};

export default Article;
