import styled from 'styled-components';

export const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-background-secondary);
  color: var(--color-text-secondary);
  height: 50px;
  width: 100%;
  font-size: 12px;
  padding: 10px;

  .info {
    text-align: center;
  }
`;

export const Developer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--color-text-secondary);
    font-style: italic;
  }

  p {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;