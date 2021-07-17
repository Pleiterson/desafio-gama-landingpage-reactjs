import styled from 'styled-components';

export const Black = styled.div`
  color: var(--color-text-tertiary);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 350px;
  
  p {
    font-family: 'Oswald', sans-serif;
    font-size: 15rem;
    font-weight: 700;
  }

  img {
    width: 500px;
    height: 250px;
  }
`;

export const Info = styled.div`
  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 42rem;
    margin: 20px;
    padding: 10px;
    right: 2%;
  }
  
  h2 {
    font-size: 22px;
    margin: 0 20px 20px;
    padding: 10px;
    color: var(--color-text-quarternary);
  }

  p {
    font-size: 15px;
    font-weight: bold;
    color: var(--color-text-quarternary);
    margin: 20px;
    padding: 10px;
  }

  span {
    margin: 40px 20px 0 20px;
    padding: 10px;
    width: 300px;
    font-size: 12px;
  }
`;
