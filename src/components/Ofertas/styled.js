import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  margin: 20px;
  padding: 10px;
`;

export const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 25px;
  font-weight: 300;
`;

export const Sale = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const Item = styled(Link)`
  background-color: var(--color-background-tertiary);
  -webkit-filter: drop-shadow(0px 5px 5px rgba(0,0,0,.5));
  filter: drop-shadow(0px 5px 5px rgba(0,0,0,.5));
  color: var(--color-text-primary);
  margin: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;

  img {
    height: 430px;
  }

  h4, span {
    font-size: 14px;
    padding: 10px;
  }

  span {
    color: var(--color-text-quintenary);
  }

  p {
    font-size: 25px;
    padding: 10px;
    text-align: right;
  }
`;