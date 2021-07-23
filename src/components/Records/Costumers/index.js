import React, {useState} from 'react';
import Navbar from '../../Navbar';

import * as S from './styled';

const Costumers = () => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCep, setClientCEP] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientComplemento, setClientComplement] = useState('');
  const [clientBairro, setClientBairro] = useState('');
  const [clientCidade, setClientCidade] = useState('');
  const [clientEstado, setClientEstado] = useState('');

  function cadClient(res) {
    res.preventDefault();
    let costumerData = {
      name: clientName,
      email: clientEmail,
      cep: clientCep,
      address: clientAddress,
      complemento: clientComplemento,
      bairro: clientBairro,
      cidade: clientCidade,
      estado: clientEstado
    }

    localStorage.setItem('Clientes', JSON.stringify(costumerData));
    setClientName('');
    setClientEmail('');
    setClientCEP('');
    setClientAddress('');
    setClientComplement('');
    setClientBairro('');
    setClientCidade('');
    setClientEstado('');
    alert('Cadastro realizado com sucesso!');
  }

  return (
    <>
      <Navbar />
      <S.Client className="record-client">
        <h1>Cadastro de Clientes</h1>
        <p>Digite os dados solicitados nos campos abaixo</p>
        <form onSubmit={cadClient} className="formClient">
          <input type="text" name="name" id="name" placeholder="Nome Completo" value={clientName} onChange={(res) => setClientName(res.target.value)} required/>
          <input type="email" name="email" id="email" placeholder="Email" value={clientEmail} onChange={(res) => setClientEmail(res.target.value)} required/>
          <input type="text" name="cep" id="cep" placeholder="CEP" value={clientCep} onChange={(res) => setClientCEP(res.target.value)} required/>
          <input type="text" name="address" id="address" placeholder="Endereço, nº" value={clientAddress} onChange={(res) => setClientAddress(res.target.value)} required/>
          <input type="text" name="complemento" id="complemento" placeholder="Complemento" value={clientComplemento} onChange={(res) => setClientComplement(res.target.value)} required/>
          <input type="text" name="bairro" id="bairro" placeholder="Bairro" value={clientBairro} onChange={(res) => setClientBairro(res.target.value)} required/>
          <input type="text" name="cidade" id="cidade" placeholder="Cidade" value={clientCidade} onChange={(res) => setClientCidade(res.target.value)} required/>
          <input type="text" name="estado" id="estado" placeholder="Estado" value={clientEstado} onChange={(res) => setClientEstado(res.target.value)} required/>
        </form>
        <button type="submit">Cadastrar</button>
      </S.Client>

      <S.Back to="/cadastros">Voltar para tela de Gestão de Cadastros</S.Back>
    </>
  );
}

export default Costumers;