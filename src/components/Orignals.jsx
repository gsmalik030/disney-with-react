import React from 'react';
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { Container, Content, Wrap } from './components';
import { selectOriginal } from '../features/movie/movieSlice';

const Originals = () => {
  const movies = useSelector(selectOriginal);
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Originals;
