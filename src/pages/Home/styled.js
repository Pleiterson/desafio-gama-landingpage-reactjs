import styled from 'styled-components';

export const Newsletter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--color-background-secondary);
  color: var(--color-text-secondary);
`;

export const Title = styled.div`
  text-align: center;
  justify-content: center;
  width: 25%;
  
  h2, h3 {
    font-family: 'Oswald', sans-serif;
  }

  h2 {
    font-size: 40px;
    font-weight: 700;
    margin: 0 20px;
  }

  h3 {
    font-size: 20px;
    margin-top: 40px;
  }
`;

export const Register = styled.div`
  text-align: center;
  width: 32%;
  background-color: rgba(0, 0, 0, .65);
  padding: 30px;

  h3 {
    font-size: 19px;
    margin-bottom: 20px;
    padding: 0 20px;
  }

  p {
    font-size: 16px;
    font-weight: 200;
    text-align: justify;
    margin: 0 10px;
    padding: 0 15px;
    color: var(--color-text-quintenary);
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 293px;
    width: 100%;
    margin: 0 auto;

    input {
      border-radius: 3px;
      border: 1px solid var(--color-line-primary);
      background-color: transparent;
      color: var(--color-text-secondary);
      width: 100%;
      margin-bottom: 7px;
      padding: 10px;
      font-size: 16px;
    }

    button {
      background-color: var(--color-background-quarternary);
      color: var(--color-text-secondary);
      width: 100%;
      max-width: 100%;
      margin: 20px;
      padding: 10px;
      border-radius: 20px;
      border: none;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px;
  padding: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  img {
    width: 72px;
  }
  
  span {
    font-size: 15px;
    font-weight: bold;
    color: var(--color-text-quarternary);
  }
`;

export const ItemFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  
  img {
    width: 236.17px;
  }
  
  span {
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: var(--color-text-quarternary);
    padding: 10px 0;
  }
`;