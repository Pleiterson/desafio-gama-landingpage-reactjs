import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Navbar = styled.nav`
  background-color: var(--color-background-primary);
  -webkit-filter: drop-shadow(0px 5px 5px rgba(0,0,0,.5));
  filter: drop-shadow(0px 5px 5px rgba(0,0,0,.5));
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  color: var(--color-text-primary);
`;

export const LinkHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--color-text-primary);
  font-size: 18px;
  font-family: 'Bangers', cursive;
  letter-spacing: .5rem;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-gap: 2rem;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
`;

export const MenuItem = styled.li`
  font-weight: bold;
  cursor: pointer;
  
  :hover {
    color: var(--color-text-tertiary);
  }
`;