const receitas = [
    {
        numero: 1,
        nome: "Receita 1",
        descricao: "Esta receita estabelece os fundamentos do HTML, apresentando a estrutura hierárquica em árvore de um documento web, as marcas/tags (h1, p, br, img) e propriedades como src e width."
    },
    
    {
        numero: 2,
        nome: "Receita 2",
        descricao: "Aborda a separação entre estrutura (HTML) e estilo visual através de folhas de estilo externas (estilo.css), vinculadas pela tag <link>, além do uso de classes CSS (.verso e .mote) e estilização de seletores descendentes e tabelas."
    },
    
    {
        numero: 3,
        nome: "Receita 3",
        descricao: "Introduce a manipulação dinâmica do DOM pelo navegador utilizando o objeto document, getElementById(), alteração da propriedade innerHTML e tratamento de eventos de clique em botões."
    },
    
    {
        numero: 4,
        nome: "Receita 4",
        descricao: "Trata da manipulação de coleções/vetores em JavaScript, substituição de laços manuais (for) por funções de alta ordem como map() e join(), além do uso de template literals (${})."
    },

    {
        numero: 5,
        nome: "Receita 5",
        descricao: "Demonstra a refatoração do código para sintaxe moderna (ES6+), definindo constantes com const, reduzindo funções para Arrow Functions (=>), usando lambdas anônimas e substituindo botões por links."
    },

    {
        numero: 6,
        nome: "Receita 6",
        descricao: "Aprofunda o trabalho com a sintaxe JSON (JavaScript Object Notation), coleções de objetos estruturados, desestruturação (destructuring) e criação de funções geradoras de tabela flexíveis e genéricas."
    },

    {
        numero: 7,
        nome: "Receita 7",
        descricao: "Ensina a realizar requisições HTTP assíncronas para APIs externas trazendo dados dinâmicos em tempo real, realizando o parse JSON com await res.json() e tratando falhas de rede com try/catch."
    },

    {
        numero: 8,
        nome: "Receita 8",
        descricao: "Aborda a manipulação de assincronismo em JavaScript utilizando explicitamente o objeto Promise e encadeamentos com os métodos .then() para sucesso e .catch() para tratamento centralizado de erros."
    }
];

const listaReceitas = document.getElementById("lista-receitas");
const cardsReceitas = document.getElementById("cards-receitas");


// ==================== DROPDOWN ====================

receitas.forEach((receita) => {

    const item = document.createElement("li");

    item.innerHTML = `
        <a
            class="dropdown-item"
            href="receita_${receita.numero}/index.html"
        >
            Receita ${receita.numero}
        </a>
    `;

    listaReceitas.appendChild(item);
});


// ==================== CARDS ====================
receitas.forEach((receita) => {

    const card = document.createElement("div");

    card.className = "col";

    card.innerHTML = `
        <div class="card h-100 card-recipe p-3">

            <div class="card-body d-flex flex-column">

                <div class="icon-box mb-3">
                    <i class="bi bi-file-earmark-code"></i>
                </div>

                <h3 class="h5 fw-semibold">
                    ${receita.nome}
                </h3>

                <p class="card-text text-muted small flex-grow-1">
                    ${receita.descricao}
                </p>

                <a
                    href="receita_${receita.numero}/index.html"
                    class="btn btn-outline-purple btn-sm w-100 mt-3"
                >
                    Acessar Receita
                    <i class="bi bi-arrow-right ms-1"></i>
                </a>

            </div>

        </div>
    `;

    cardsReceitas.appendChild(card);
});