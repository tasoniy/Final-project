import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/favicon.png';
import icon from '../../assets/telephone-icon.png';
import { purple, shadow, lightGreen } from '../../assets/Pallete/Pallete';
import Container from '../Container/Container';
import Button from '../Button/Button';

const DisplayFlex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Frame = css`
  background-color: #F5FAFF;
  box-shadow: 10px 20px 40px ${shadow};
`

const HeaderStyle = styled.header`
  padding: 20px 0;
`

const Logo = styled.div`
  background: no-repeat url(${logo});
  ${Frame};
  background-position: center;
  background-size: 30px;
  padding: 1.5rem;
  border-radius: 50%;
`

const CaptionLogo = styled.span`
  font-size: 9px;
  font-weight: 700;
  color: ${purple};
`

const NavStyle = styled.nav`
  ${DisplayFlex};
  width: 40%;
  padding: 10px 30px;
  border-radius: 30px;
`

const Wrap = styled.div`
  ${DisplayFlex};
`

const PhoneStyle = styled.a`
  color: ${purple};
  margin-left: 5px;
  font-size: 10px;
`

const Header = () => {
  return (
    <HeaderStyle>
      <Container display={DisplayFlex}>
        <Logo>
        <CaptionLogo>Find bike</CaptionLogo>
        </Logo>
        <NavStyle>
          <Link to="/report">Report theft</Link>
          { //if sign up
            <Link to="/officers">Officers</Link>
          }
          <Wrap>
            <img src={icon} width="20" height="20" alt="telephone icon" />
            <PhoneStyle href="tel:(123)456-78-90">
              +7(123)456-78-90
            </PhoneStyle>
          </Wrap>
        </NavStyle>
        <Wrap>
          <Link to="/registration"><Button color={lightGreen}>Sign Up</Button></Link>
          <Link to="/login"><Button color={purple}>Sing in</Button></Link>
        </Wrap>
      </Container>  
    </HeaderStyle>
  )
}

export default Header;
