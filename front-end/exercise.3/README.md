# Projeto de Taxas de Câmbio

Este projeto exibe taxas de câmbio para várias moedas em relação a uma moeda base escolhida pelo usuário. As taxas de câmbio são obtidas através da API do [ExchangeRate](https://exchangerate.host).

<p align="center">
  <img src="casa-cambio.gif" alt="Demonstração">
</p>


## Funcionalidades

- Pesquisa de taxas de câmbio com base na moeda inserida pelo usuário
- Exibição das taxas de câmbio em uma grade de retângulos
- Ícone personalizado exibido antes do nome da moeda
- Transformação automática da entrada do usuário em letras maiúsculas
- Verificação de moeda não encontrada (tratamento de erros)

## Habilidades e Tecnologias Utilizadas

- HTML para criar a estrutura da página
- CSS para estilizar a página e os elementos da interface do usuário
- JavaScript para interação do usuário e funcionalidades dinâmicas
  - Fetch API para solicitar taxas de câmbio da API do ExchangeRate
  - Manipulação do DOM para atualizar dinamicamente a lista de taxas de câmbio
  - EventListeners para lidar com ações do usuário (por exemplo, clique no botão de pesquisa)

## Como Usar

1. Abra o arquivo `index.html` em seu navegador
2. Digite o código da moeda base na barra de pesquisa (por exemplo, "USD")
3. Clique no botão "Pesquisar" para exibir as taxas de câmbio correspondentes
