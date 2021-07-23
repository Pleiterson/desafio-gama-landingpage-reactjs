import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  font-size: 30px;
  border-bottom: 1px solid;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px;
  padding: 10px;
`;

export const Menus = styled(Link)`
  text-decoration: none;
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: bold;
`;