import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {selectRecommend} from '../features/movie/movieSlice'
import { Container, Content, Wrap } from './components';
const Recommends = () => {
  const movies = useSelector(selectRecommend)
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies && movies.map((movie, key)=>(
          <Wrap key={key}>
            {movie.id}
            <Link to={'/details/' + movie.id}>
            <img src={movie.cardImg} alt="" />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

export default Recommends;
