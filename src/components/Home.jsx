import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Orignals';
import Recommends from './Recommends';
import Trendings from './Trending';
import Viewers from './Viewers';
const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    z-index: -1;
  }
`;

export default Home;
