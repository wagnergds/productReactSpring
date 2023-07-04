import React, { useState, useEffect } from 'react';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    const response = await fetch('/produtos');
    const data = await response.json();
    setProdutos(data);
  };

  const adicionarProduto = async () => {
    const response = await fetch('/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome: nomeProduto, preco: precoProduto }),
    });
    const data = await response.json();
    setProdutos([...produtos, data]);
    setNomeProduto('');
    setPrecoProduto('');
  };

  return (
      <div>
        <h1>Listagem de Produtos</h1>
        <ul>
          {produtos.map((produto) => (
              <li key={produto.id}>{produto.nome} - R$ {produto.preco}</li>
          ))}
        </ul>
        <input
            type="text"
            placeholder="Nome do Produto"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
        />
        <input
            type="text"
            placeholder="Preço do Produto"
            value={precoProduto}
            onChange={(e) => setPrecoProduto(e.target.value)}
        />
        <button onClick={adicionarProduto}>Adicionar Produto</button>
      </div>
  );
}

export default App;