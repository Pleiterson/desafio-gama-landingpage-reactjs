import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Ofertas from '../../components/Ofertas';
import Footer from '../../components/Footer';

import games from '../../assets/games.svg';
import consoles from '../../assets/consoles.svg';
import accessories from '../../assets/acessorios.svg';
import sale from '../../assets/ofertas.svg';
import account from '../../assets/conta.svg';
import console from '../../assets/consoles.jpg';
import accessorie from '../../assets/acessorios.jpg';
import support from '../../assets/suporte.jpg';

import * as S from './styled';

function Home() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  function handleForm(res) {
    res.preventDefault();
    let data =  {
      nome: userName,
      email: userEmail
    }

    localStorage.setItem('users', JSON.stringify(data));
    setUserName('');
    setUserEmail('');
    alert(`${userName}. Cadastro realizado com sucesso! Agora você vao ficar por dentro de nossas promoções`);
  }

  return (
    <>
      <Navbar />
      <Banner />

      <S.Newsletter>
        <S.Title>
          <h2>A BLACK FRIDAY ESTÁ CHEGADO!</h2>
          <h3>RECEBA EM SEU EMAIL AS OFERTAS EM PRIMEIRA MÃO!</h3>
        </S.Title>

        <S.Register>
          <h3>Cadastre-se aqui para receber as ofertas da Black Friday!</h3>
          <form onSubmit={handleForm} className="form">
            <input type="text" name="name" id="name" value={userName} placeholder="Digite aqui seu nome..." required onChange={(res) => setUserName(res.target.value)}/>
            <input type="email" name="email" id="email" value={userEmail} placeholder="Digite aqui seu email..." required onChange={(res) => setUserEmail(res.target.value)}/>
            <button type="submit">Quero me cadastrar</button>
          </form>
          <p>Ao enviar seus dados, você vai receber nossas ofertas e publicidade enviado por PleiGames.</p>
        </S.Register>
      </S.Newsletter>

      <S.Container>
        <S.Item>
          <img alt="Jogos" src={games}/>
          <span>JOGOS</span>
        </S.Item>
        <S.Item>
          <img alt="Consoles" src={consoles}/>
          <span>CONSOLES</span>
        </S.Item>
        <S.Item>
          <img alt="Acessórios" src={accessories}/>
          <span>ACESSÓRIOS</span>
        </S.Item>
        <S.Item>
          <img alt="Ofertas" src={sale}/>
          <span>OFERTAS</span>
        </S.Item>
        <S.Item>
          <img alt="Minha Conta" src={account}/>
          <span>MINHA CONTA</span>
        </S.Item>
      </S.Container>

      <Ofertas />

      <S.Container>
        <S.ItemFooter>
          <img alt="Consoles" src={console}/>
          <span>CONSOLES</span>
        </S.ItemFooter>
        <S.ItemFooter>
          <img alt="Acessórios" src={accessorie}/>
          <span>ACESSÓRIOS</span>
        </S.ItemFooter>
        <S.ItemFooter>
          <img alt="Suporte" src={support}/>
          <span>SUPORTE</span>
        </S.ItemFooter>
      </S.Container>

      <Footer />
    </>
  );
}

export default Home;