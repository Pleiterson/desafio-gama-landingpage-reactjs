import React from 'react';
import Navbar from '../../components/Navbar';

import * as S from './styled';

const Records = () => {
  return (
    <>
      <Navbar />
      <S.Title>Gestão de Cadastros</S.Title>
      <S.Options>
        <S.Menus to="/clientes">Cadastro de Clientes</S.Menus>
        <S.Menus to="/produtos">Cadastro de Produtos</S.Menus>
      </S.Options>
    </>
  );
}

export default Records;