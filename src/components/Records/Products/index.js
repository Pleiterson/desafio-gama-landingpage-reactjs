import React, {useState} from 'react';
import Navbar from '../../Navbar';

import * as S from '../Costumers/styled';

const Products = () => {
  const [productName, setProductName] = useState('');
  const [productCodigo, setProductCodigo] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productQuantidade, setProductQuantidade] = useState('');
  const [productDescription, setProductDescription] = useState('');

  function cadProduct(res) {
    res.preventDefault();
    let productData = {
      name: productName,
      codigo: productCodigo,
      category: productCategory,
      quantidade: productQuantidade,
      description: productDescription
    }

    localStorage.setItem('Produtos', JSON.stringify(productData));
    setProductName('');
    setProductCodigo('');
    setProductCategory('');
    setProductQuantidade('');
    setProductDescription('');
    alert('Cadastro realizado com sucesso!');
  }

  return (
    <>
      <Navbar />
      <S.Client className="record-products">
        <h1>Cadastro de Produtos</h1>
        <p>Digite os dados solicitados nos campos abaixo</p>
        <form onSubmit={cadProduct} className="formProduct">
          <input type="text" name="name" id="name" placeholder="Nome Produto" value={productName} onChange={(res) => setProductName(res.target.value)} required/>
          <input type="text" name="codigo" id="codigo" placeholder="Código" value={productCodigo} onChange={(res) => setProductCodigo(res.target.value)} required/>
          <input type="text" name="category" id="category" placeholder="Categoria" value={productCategory} onChange={(res) => setProductCategory(res.target.value)} required/>
          <input type="text" name="quantidade" id="quantidade" placeholder="Quantidade" value={productQuantidade} onChange={(res) => setProductQuantidade(res.target.value)} required/>
          <textarea type="text" name="description" id="description" placeholder="Descrição do Produto" value={productDescription} onChange={(res) => setProductDescription(res.target.value)} required/>
        </form>
        <button type="submit">Cadastrar</button>
      </S.Client>

      <S.Back to="/cadastros">Voltar para tela de Gestão de Cadastros</S.Back>
    </>
  );
}

export default Products;