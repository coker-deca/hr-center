import { useHistory } from 'react-router-dom';

import logo from '../../resources/images/logo.png';
import { StyledButton } from '../ui/Button';
import { NavbarItem, StyledNavbar } from './style';

const NavBar = () => {
  const history = useHistory();

  return (
    <StyledNavbar className="navbar">
      <NavbarItem>
        <img
          onClick={() => {
            history.push("/");
          }}
          src={logo}
          alt="logo"
          style={{ width: "30%", height: "auto" }}
        />
      </NavbarItem>
      <NavbarItem>
        <NavbarItem
          className="desktop"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </NavbarItem>
        <StyledButton
          className="desktop"
          onClick={() => {
            history.push("/registration");
          }}
        >
          Sign Up
        </StyledButton>
      </NavbarItem>
    </StyledNavbar>
  );
};

export default NavBar;
