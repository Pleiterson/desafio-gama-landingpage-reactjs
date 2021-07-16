import React from 'react';
import * as S from './styled';

import breakpoint from '../../assets/g-breakpoint.jpg';
import farcry from '../../assets/g-farcry6.jpg';
import gtav from '../../assets/g-gtav.jpg';
import legion from '../../assets/g-legion.jpg';
import mine from '../../assets/g-minecraft.jpg';
import raider from '../../assets/g-tombraider.jpg';
import valhalla from '../../assets/g-valhalla.jpg';
import witcher from '../../assets/g-witcher.jpg';

function Ofertas() {
  return (
    <S.Container>
      <S.Title>Ofertas em Destaque</S.Title>

      <S.Sale className="sale">
        <S.Item className="item" to="/">
          <img alt="Tom Clancy’s Ghost Recon Breakpoint" src={breakpoint}/>
          <h4>Tom Clancy’s Ghost Recon Breakpoint</h4>
          <span>Jogos de tiros‬</span>
          <p>R$ 89,50</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Far Cry 6" src={farcry}/>
          <h4>Far Cry 6</h4>
          <span>Jogos de tiros‬</span>
          <p>R$ 124,96</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Grand Theft Auto V" src={gtav}/>
          <h4>Grand Theft Auto V</h4>
          <span>Ação e aventura</span>
          <p>R$ 74,97</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Watch Dogs: Legion" src={legion}/>
          <h4>Watch Dogs: Legion</h4>
          <span>Ação e aventura</span>
          <p>R$ 124,99</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Minecraft" src={mine}/>
          <h4>Minecraft</h4>
          <span>Ação e aventura, Família e crianças</span>
          <p>R$ 37,47</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Tomb Raider: Definitive Edition" src={raider}/>
          <h4>Tomb Raider: Definitive Edition</h4>
          <span>Ação e aventura</span>
          <p>R$ 41,22</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="Assassin's Creed Valhalla" src={valhalla}/>
          <h4>Assassin's Creed Valhalla</h4>
          <span>Ação e aventura</span>
          <p>R$ 99,99</p>
        </S.Item>

        <S.Item className="item" to="/">
          <img alt="The Witcher 3: Wild Hunt" src={witcher}/>
          <h4>The Witcher 3: Wild Hunt</h4>
          <span>Ação e aventura, ‪RPG‬</span>
          <p>R$ 71,50</p>
        </S.Item>
      </S.Sale>
    </S.Container>
  );
}

export default Ofertas;