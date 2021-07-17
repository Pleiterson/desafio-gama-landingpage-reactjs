import React from 'react';
import {RiGameFill} from 'react-icons/ri';

import * as S from './styled';

function Navbar() {
  return (
    <>
      <S.Navbar>
        <S.LinkHome to="/" className="nav-logo"><RiGameFill size={40} color="#FBC02D"/> PleiGames</S.LinkHome>

        <S.Menu className="nav-menu">
          <S.MenuItem className="nav-item">Franquias</S.MenuItem>
          <S.MenuItem className="nav-item">Jogos</S.MenuItem>
          <S.MenuItem className="nav-item">Expansão</S.MenuItem>
          <S.MenuItem className="nav-item">Consoles</S.MenuItem>
          <S.MenuItem className="nav-item">Acessórios</S.MenuItem>
          <S.MenuItem className="nav-item">Promoção</S.MenuItem>
          <S.MenuItem className="nav-item">Minha Conta</S.MenuItem>
        </S.Menu>
      </S.Navbar>
    </>
  );
}

export default Navbar;