import React from 'react';
import {FaCode} from 'react-icons/fa';

import * as S from './styled';

function Footer() {
  return (
    <S.Copyright>
      <div className="info">
        <p>Desafio Landing Page Bootcamp Hiring Coders VTEX © 2021.<br/>Todos os direitos reservados.</p>
      </div>
      <S.Developer>
        <p>Desenvolvido por:</p>
        <a target="_blank" rel="noopener noreferrer" href="https://pleiterson.vercel.app/"><FaCode />&nbsp;Pleiterson Amorim</a>
      </S.Developer>
    </S.Copyright>
  );
}

export default Footer;