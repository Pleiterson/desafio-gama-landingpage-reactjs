import React from 'react';
import black from '../../assets/black.png';
import banner from '../../assets/banner.jpg';

import * as S from './styled';

function Banner() {
  return (
    <>
      <S.Black>
        <p>50% OFF</p>
        <img alt="black friday" src={black}/>
      </S.Black>

      <S.Info>
        <img alt="banner" src={banner}/>
        <div className="info">
          <h2>Promoção Black Friday!</h2>
          <h2>Nada supera um clássico!</h2>
          <p>Economize até 50% de sua grana nos jogos 😉</p>
          <span>Não fique de fora, aproveite as promoções da Black Friday para começar a jogatina!</span>
        </div>
      </S.Info>
    </>
  );
}

export default Banner;