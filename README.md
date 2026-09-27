# [Link do Site](https://phs-00.github.io/receitas-pweb/)

## Receitas de Programação Web

Repositório criado para a entrega do conjunto de atividades (receitas) da disciplina.

*OBS: A página inicial foi feita usando Bootstrap, pois design é a parte mais demorada. Também usei CSS estilizado já pronto, já que o Bootstrap já ajuda na maioria das coisas.*

## 📁 Estrutura do Projeto

Cada receita foi desenvolvida em seu **próprio diretório** para manter a organização do código, **centralizadas por uma página principal**:

```bash
.
├── index.html          # Página principal com links para todas as receitas
├── style.css           # Estilização global e customizações de CSS
├── README.md           # Documentação do repositório
├── receita_1/          # Implementação da Receita 1
│   └── index.html      
. 
└── receita_N/          # Outras receitas N
    └── index.html      
```

## 🌐 APIs Utilizadas

Em substituição à **random-api** *(fora de serviço)*, foi utilizada a seguinte API:

- **[Monster Sanctuary API](https://sampleapis.com/api-list/monstersanctuary)** *(via **[SampleAPIs](https://sampleapis.com/)**)*: Usada para alimentar o catálogo de monstros com imagens, nomes e tipos.

*OBS: Tive pequenos problemas e adaptações que eu precisei fazer para poder ficar visualmente bonito por causa da nova API, mas como ela está incompleta, meio que funciona, mais dá o ar de que tem algo faltando.*

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/PHS-00/receitas-pweb.git
```
2. Acesse a pasta do projeto:

```bash
cd /receitas-pweb
```
Abra o arquivo **index.html** diretamente no **navegador de sua preferência** ou utilizando a extensão **Live Server** no VS Code.

---
