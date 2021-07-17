import React from 'react';
import {RiGameFill} from 'react-icons/ri';

import * as S from './styled';

function Navbar() {
  return (
    <>
      <S.Navbar>
        <S.LinkHome to="/"><RiGameFill size={40} color="#FBC02D"/> PleiGames</S.LinkHome>

        <S.Menu className="nav-menu">
          <S.MenuItem>Franquias</S.MenuItem>
          <S.MenuItem>Jogos</S.MenuItem>
          <S.MenuItem>Expansão</S.MenuItem>
          <S.MenuItem>Consoles</S.MenuItem>
          <S.MenuItem>Acessórios</S.MenuItem>
          <S.MenuItem>Promoção</S.MenuItem>
          <S.MenuItem>Minha Conta</S.MenuItem>
        </S.Menu>
      </S.Navbar>
    </>
  );
}

export default Navbar;