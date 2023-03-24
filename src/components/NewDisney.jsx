import React from 'react'
import {useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import { selectNewDisney } from '../features/movie/movieSlice';
import { Container, Content, Wrap } from './components';

const NewDisney = () => {
    const movies = useSelector(selectNewDisney)
  return (
    <Container>
        <h4>New Disney +</h4>
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
  )
}

export default NewDisney