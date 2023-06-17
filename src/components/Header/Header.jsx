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

const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  display:flex;
  flex-direction:column;
  padding: 5px;
  align-items:center;
  justify-content: center;
  ${Frame};
  border-radius: 50%;
  position:relative;
`
const Logo = styled.img` 
  object-fit:contain;
  width:60%;
`

const CaptionLogo = styled.span`
  font-size: 15px;
  font-weight: 900;
  color: ${purple};
  margin-top:10px;
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
  font-size: Clamp(15px, 2vw, 30px);
`

const PnoneIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
`

const Header = () => {
  return (
    <HeaderStyle>
      <Container display={DisplayFlex}>
        <LogoWrapper>
          <Logo src={logo} alt='logo'></Logo>
        <CaptionLogo>Find bike</CaptionLogo>
        </LogoWrapper>
        {/* <NavStyle>
          <Link to="/report">Report theft</Link>
          { //if sign up
            <Link to="/officers">Officers</Link>
          } */}
          <Wrap>
            <PnoneIcon src={icon}  alt="telephone icon"></PnoneIcon>
            <PhoneStyle href="tel:(123)456-78-90">
              +7(123)456-78-90
            </PhoneStyle>
          </Wrap>
        {/* </NavStyle> */}
        <Wrap>
          <Link to="/registration"><Button color={lightGreen}>Sign Up</Button></Link>
          <Link to="/login"><Button color={purple}>Sing in</Button></Link>
        </Wrap>
      </Container>  
    </HeaderStyle>
  )
}

export default Header;
