import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Client = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    margin: 20px 0 10px;
  }

  p {
    margin: 0 20px 20px;
    font-size: 12px;
  }

  .formClient, .formProduct {
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    max-width: 550px;
    margin: 0 auto;

    input {
      border-radius: 3px;
      border: 1px solid var(--color-line-primary);
      background-color: transparent;
      color: var(--color-text-primary);
      margin: 7px;
      padding: 10px;
      font-size: 16px;
    }

    textarea {
      border-radius: 3px;
      border: 1px solid var(--color-line-primary);
      background-color: transparent;
      color: var(--color-text-primary);
      margin: 7px;
      padding: 10px;
      width: 92%;
      height: 30%;
      font-size: 16px;
    }
  }

  button {
    background-color: var(--color-background-quarternary);
    color: var(--color-text-secondary);
    width: 100%;
    max-width: 20%;
    margin: 20px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid;
  padding: 10px;
`;

export const Back = styled(Link)`
  text-decoration: none;
  color: var(--color-text-primary);
  font-size: 12px;
  margin: 20px;
  padding: 10px;
`;