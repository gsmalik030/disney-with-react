import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, provider } from '../firebase.js';
import {
  userName,
  userPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../features/user/userSlice.js';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(userName);
  const userphoto = useSelector(userPhoto);

  

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        navigate('/home');
      }
    });
  }, []);

  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='Disney+' />
      </Logo>
      {!username ? (
        <Login onClick={handleAuth}>login</Login>
      ) : (
        <>
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
          <SignOut>
            <UserImage src={userphoto} alt={username}></UserImage>
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
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
  cursor: pointer;
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

const UserImage = styled.img``;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImage} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  `;

export default Header;
