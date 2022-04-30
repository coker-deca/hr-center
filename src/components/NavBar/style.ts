import styled from 'styled-components';

export const StyledNavbar = styled.header`
  background-color: #05668D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  font-family: "Gilroy-Bold";
  font-weight: 400;
`;

export const NavbarItem = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.01em;
  color: #3C1D59;


  button{
    min-width: 150px;
  }
`;
