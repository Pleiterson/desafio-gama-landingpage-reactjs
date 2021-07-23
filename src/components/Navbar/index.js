import React from 'react';
import {useHistory} from 'react-router-dom';
import {RiGameFill} from 'react-icons/ri';

import * as S from './styled';

function Navbar() {
  const records = useHistory();
  const home = useHistory();

  function goRecords() {
    records.push("/cadastros");
  }
  
  function backHome() {
    home.push("/");
  }

  return (
    <>
      <S.Navbar>
        <S.LinkHome to="/"><RiGameFill size={40} color="#FBC02D"/> PleiGames</S.LinkHome>

        <S.Menu className="nav-menu">
          <S.MenuItem onClick={backHome}>Home</S.MenuItem>
          <S.MenuItem>Franquias</S.MenuItem>
          <S.MenuItem>Jogos</S.MenuItem>
          <S.MenuItem>Expansão</S.MenuItem>
          <S.MenuItem>Consoles</S.MenuItem>
          <S.MenuItem>Acessórios</S.MenuItem>
          <S.MenuItem>Promoção</S.MenuItem>
          <S.MenuItem onClick={goRecords}>Minha Conta</S.MenuItem>
        </S.Menu>
      </S.Navbar>
    </>
  );
}

export default Navbar;