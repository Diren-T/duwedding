import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const HeaderContainer = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  background-position: center;
  padding: 0.1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.1rem 1rem;
  }
`;

const LogoContainer = styled.div`
  width: 15rem;

  @media (max-width: 768px) {
    width: 12rem;
  }
`;

const Logo = styled.img`
  max-width: 20%;
  height: auto;
  padding-left: 20px;
  padding-top: 20px;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding-right: 2rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const NavListItem = styled.li`
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

const NavLink = styled(ScrollLink)`
  color: black;
  text-decoration: none;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const LogoLink = styled(ScrollLink)`
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoLink
          activeClass="active"
          to="landingPage"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Logo src="/du.svg" alt="Logo" />
        </LogoLink>
      </LogoContainer>
      <Nav>
        <NavList>
          <NavListItem>
            <NavLink
              activeClass="active"
              to="secondPage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Preise
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              activeClass="active"
              to="thirdPage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              feed
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="#">arbeiten</NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
