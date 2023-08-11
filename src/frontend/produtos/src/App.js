import React, { useState, useEffect } from 'react';

function App() {
    const [produtos, setProdutos] = useState([]);
    const [nomeProduto, setNomeProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState('');

    useEffect(() => {
        fetchProdutos();
    }, []);

    const apiUrl = process.env.REACT_APP_API_URL;

    const fetchProdutos = async () => {
        const response = await fetch(`${apiUrl}/produtos`);
        const data = await response.json();
        setProdutos(data);
    };

    const adicionarProduto = async () => {
        const response = await fetch(`${apiUrl}/produtos`, {
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

    const handlePrecoChange = (e) => {
        const inputValue = e.target.value;
        // Verifica se o valor é um número com até duas casas decimais
        if (/^\d+(\.\d{0,2})?$/.test(inputValue) || inputValue === '') {
            setPrecoProduto(inputValue);
        }
    };

    return (
        <div>
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
                onChange={handlePrecoChange}
            />
            <button onClick={adicionarProduto}>Adicionar Produto</button>
            <h1>Listagem de Produtos</h1>
            <h2>Produtos e Preços</h2>

            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>{produto.nome} - R$ {produto.preco}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
