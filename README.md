# Projeto de Produtos

Este é um projeto de exemplo para um sistema de gerenciamento de produtos.

## Pré-requisitos

Antes de executar o projeto, verifique se você tem os seguintes requisitos instalados em sua máquina:

- Java Development Kit (JDK) 8 ou superior
- Maven
- Banco de dados H2 (em memória) - já incluído no projeto
- Node.js (v14.16.1 ou superior)
- npm (v6.14.12 ou superior)

## Executando o projeto

Siga as etapas abaixo para executar o projeto em sua máquina local:

1. Faça o clone deste repositório para o seu ambiente de desenvolvimento:
   - git clone https://github.com/wagnergds/productReactSpring.git
2. Navegue até o diretório `frontend/produtos`.
3. Execute o comando `npm install` para instalar as dependências do projeto.
   - npm start
4. Acesse a pasta do projeto:
   - cd productReactSpring/src
5. Compile o projeto usando o Maven:
   - `mvn compile`
6. Execute o projeto:
   - `mvn spring-boot:run`

7. A API estará disponível em http://localhost:8080/produtos. Você pode acessar esse endpoint em seu navegador ou por meio de uma ferramenta como o cURL ou o Postman.

## Executando os testes

Para executar os testes automatizados, siga as etapas abaixo:

1. Acesse a pasta `src/test` do projeto.
2. Execute o comando `mvn test`.

Isso executará os testes e exibirá os resultados no console.

## Integração Contínua e Entrega Contínua (CI/CD) com Jenkins

Para configurar e executar os pipelines de CI/CD para este projeto no Jenkins, siga as etapas abaixo:

1. Certifique-se de que o Jenkins esteja instalado e configurado em seu ambiente.
2. Crie um novo pipeline job no Jenkins.
3. No campo "Pipeline Script", cole o seguinte código:

```groovy
pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/wagnergds/productReactSpring.git'
      }
    }

    stage('Build') {
      steps {
        sh 'mvn compile'
      }
    }

    stage('Test') {
      steps {
        sh 'mvn test'
      }
    }

    stage('Package') {
      steps {
        sh 'mvn package'
      }
    }
  }
}
```

## Configurações

As configurações do projeto são definidas no arquivo `application.properties`, localizado em `src/main/resources`. Nesse arquivo, você pode personalizar várias configurações, como as informações do banco de dados, a porta do servidor, as URLs, entre outras.

## Documentação da API

A API possui as seguintes operações disponíveis:

- **GET /produtos**: Retorna a lista de todos os produtos.
- **POST /produtos**: Cria um novo produto.

## Contribuindo

Se você quiser contribuir para este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma nova branch com suas alterações: `git checkout -b minha-branch`.
3. Faça as alterações desejadas e commit: `git commit -m "Minhas alterações"`.
4. Envie suas alterações para o repositório remoto: `git push origin minha-branch`.
5. Crie um pull request para revisão.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
