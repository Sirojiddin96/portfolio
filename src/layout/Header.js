import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Links = [
  { id: '00', name: 'Home', link: '/' },
  { id: '01', name: 'Skills', link: '/skills' },
  { id: '02', name: 'Portfolio', link: '/portfolio' },
  { id: '03', name: 'Contact', link: '/contact' },
];

const Header = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const openSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };
  const onSelect = (id) => {
    setIsOpen(false);
    history.push(id);
  };

  return (
    <Wrapper>
      <div className="main">
        <div className="header-left">
          <Link to="/">Home</Link>
        </div>
        <div className="header-right">
          <Link to="/experience">Experience</Link>
          <Link to="/portfolio">Portfolio</Link>
          <button className="contact__button">Contact</button>
        </div>
        <div className="mobile-header">
          <div className="image" onClick={openSideBar}>
            <img src={require('../assets/ic_menu.png')} alt="hamburger" />
          </div>
        </div>
        <MobileRight isOpen={isOpen}>
          {Links.map((link) => {
            return (
              <li key={link.id} onClick={onSelect.bind(null, link.link)}>
                {link.name}
              </li>
            );
          })}
        </MobileRight>
      </div>
    </Wrapper>
  );
};
export default Header;

const MobileRight = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 40%;
    height: 150px;
    background: white;
    margin-top: 2px;
    position: absolute;
    right: 0;
    margin-right: 8px;
    z-index: 1;
    margin-top: 105px;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    animation: openSideBar 0.5s ease-out;
    @keyframes openSideBar {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
    }
    li {
      height: 25%;
      border-bottom: 1px solid gray;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1b263b;
      font-weight: 600;
      font-size: 15px;
      font-family: sans-serif;
      cursor: pointer;
      background-color: rgba(108, 206, 168, 0.26);
    }
  }
  @media (max-width: 500px) {
    width: 50%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  .main {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .mobile-header {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      .image {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .header-left {
    width: 40%;
    color: white;
    font-weight: bold;
    padding: 5px 0 5px 0;
    padding-left:40px;
    box-sizing:border-box;
    a {
      text-decoration: none;
      color: #BDEBEA;
      font-size:20px;
      font-weight:600px;
    }
    @media (max-width: 768px) {
      padding-left: 20px;
    }
  }
  .header-right {
    width: 30%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-sizing:border-box;
    a {
      text-decoration: none;
      color: #BDEBEA;
      font-size:20px;
      font-weight:bold;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      box-sizing:border-box;
      padding: 12px 20px 13px;
      gap: 10px;
    }
    .contact__button{
      background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
      border-radius: 6px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      box-sizing:border-box;
      padding: 12px 20px 13px;
      gap: 10px;
      border:none;
      color: #252728;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
