import React from 'react';
import styled from 'styled-components';
const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='Disney+' />
      </Logo>
      <Navmenu>
        <a href='/home'>
          <img src='/images/home-icon.svg' alt='HOME' />
          <span>HOME</span>
        </a>
        <a href='/search'>
          <img src='/images/search-icon.svg' alt='SEARCH' />
          <span>SEARCH</span>
        </a>
        <a href='/watchlist'>
          <img src='/images/watchlist-icon.svg' alt='WATCHLIST' />
          <span>WATCHLIST</span>
        </a>
        <a href='/originals'>
          <img src='/images/original-icon.svg' alt='ORIGINALS' />
          <span>ORIGINALS</span>
        </a>
        <a href='/movies'>
          <img src='/images/movie-icon.svg' alt='MOVIES' />
          <span>MOVIES</span>
        </a>
        <a href='/series'>
          <img src='/images/series-icon.svg' alt='SERIES' />
          <span>SERIES</span>
        </a>
      </Navmenu>
      <Login>login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 2;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  max-height: 70px;
  margin-top: 4px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const Navmenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    gap: 10px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: '';
        position: absolute;
        height: 2px;
        left: 0;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
    }}
    @media (max-width:768px){
      display:none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
export default Header;
