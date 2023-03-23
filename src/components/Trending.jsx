import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Wrap } from './components';
const Trendings = () => {
  return (
    <Container>
      <h4>Trendings</h4>
      <Content>
        <Wrap>
          <Link to='/'>
            <img src='/images/viewers-disney.png' alt='' />
          </Link>
        </Wrap>
        <Wrap>
          <Link to='/detail/123'>
            <img src='/images/viewers-pixar.png' alt='' />
          </Link>
        </Wrap>
        <Wrap>
          <Link to='/detail/123'>
            <img src='/images/viewers-marvel.png' alt='' />
          </Link>
        </Wrap>
        <Wrap>
          <Link to='/detail/123'>
            <img src='/images/viewers-starwars.png' alt='' />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};


export default Trendings;
