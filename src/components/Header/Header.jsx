import React from 'react';
import Button from '../Button/Button';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/favicon.png';
import icon from '../../assets/telephone-icon.png';
import { purple, shadow } from '../../assets/Pallete/Pallete';
import { Container } from '../Wrappers/Wrappers';

const DisplayFlex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Frame = css`
  background: #F5FAFF;
  box-shadow: 10px 20px 40px ${shadow};
`

const HeaderStyle = styled.header`
  margin-top: 10px;
  padding: 20px 0;
`

const LogoWrap = styled.div`
  ${DisplayFlex};
  ${Frame};
  padding: 10px;
  border-radius: 50%;
`

const NavStyle = styled.nav`
  ${DisplayFlex};
  ${Frame};
  width: 30%;
  padding: 10px 30px;
  border-radius: 30px;
`

const PhoneStyle = styled.a`
  text-decoration: none;
  color: ${purple};
  font-size: 10px;
`
const CaptionLogo = styled.p`
  font-size: 10px;
  font-weight: 700;
  color: ${purple};
  margin-left: 5px;
`
const Header = () => {
  return (
    <HeaderStyle>
      <Container display={DisplayFlex}>
        <LogoWrap>
          <img src={logo} width="25" height="25" alt="bicycle logo" />
          <CaptionLogo>Find bike</CaptionLogo>
        </LogoWrap>
        <NavStyle>
          <Link to="/report">Report theft</Link>
          <span>or</span>
          <div>
            <img src={icon} width="20" height="20" alt="telephone icon" />
            <PhoneStyle href="tel:(123)456-78-90">
              (123)456-78-90
            </PhoneStyle>
          </div>
        </NavStyle>
        <Link to="/authorization"><Button color={purple}>Sing in</Button></Link>
      </Container>  
    </HeaderStyle>
  )
}

export default Header;
