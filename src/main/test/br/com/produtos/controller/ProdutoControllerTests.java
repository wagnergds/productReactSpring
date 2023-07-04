package br.com.produtos.controller;

import br.com.produtos.model.Produto;
import br.com.produtos.repository.ProdutoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import java.util.ArrayList;
import java.util.List;

import static net.bytebuddy.matcher.ElementMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@WebMvcTest(ProdutoController.class)
public class ProdutoControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProdutoRepository produtoRepository;

    @Test
    public void testListarProdutos() throws Exception {
        // Mock dos dados de produtos
        List<Produto> produtos = new ArrayList<>();
        produtos.add(new Produto("Produto 1", "Produto 1", 10.0));
        produtos.add(new Produto("Produto 2", "Produto 2", 20.0));

        // Configuração do comportamento do mock repository
        when(produtoRepository.findAll()).thenReturn(produtos);

        // Execução do teste
        mockMvc.perform(get("/produtos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(produtos.size()))
                .andExpect(jsonPath("$[0].nome").value(produtos.get(0).getNome()))
                .andExpect(jsonPath("$[0].preco").value(produtos.get(0).getPreco()))
                .andExpect(jsonPath("$[1].nome").value(produtos.get(1).getNome()))
                .andExpect(jsonPath("$[1].preco").value(produtos.get(1).getPreco()));
    }

    @Test
    public void testAdicionarProduto() throws Exception {
        Produto produto = new Produto("Novo Produto", "Novo Produto", 30.0);
        String jsonString = "{\"nome\":\"Novo Produto\",\"descricao\":\"Novo Produto\",\"preco\":30.0}";

        // Configuração do comportamento do mock repository
        when(produtoRepository.save(any(Produto.class))).thenReturn(produto);

        // Execução do teste
        mockMvc.perform(post("/produtos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonString))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nome").value(produto.getNome()))
                .andExpect(jsonPath("$.descricao").value(produto.getDescricao()))
                .andExpect( jsonPath("$.preco").value(produto.getPreco()));
    }
}