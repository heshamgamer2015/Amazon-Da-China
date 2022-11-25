let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"../img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

let section_element = document.getElementById("itens_section")

let tamanho_itens = ITENS_LOJA.length
for(i=0 ; i<tamanho_itens ; i++){
    itens(ITENS_LOJA[i])
}

function itens(item){
    let conteudo = document.createElement("div")
    let context = ` 
    <div class="vetrine">
        <img src="${item.url_img}"class="vetrine_foto">
        <h2 class= "vetrine_produto_nome">${item.nome}</h2>
        <p>Preço: R$ ${item.preco}</p>
        <p>descraçao</p>
        <p>${item.descricao}</p>
    </div>
    `

    conteudo.innerHTML = context
    section_element.appendChild(conteudo)
}

function add_produto() {
    produto_img= prompt("coloca o URL da imagem do seu produto ")
    produto_nome= prompt("Digite o nome do seu produto")
    produto_preco= prompt("Digite o preco do seu produto ")
    produto_descricao= prompt("Ecreva uma descricao para o seu produto")

    novo_prduto = {
        url_img:produto_img,
        nome:produto_nome,
        preco:produto_preco,
        descricao:produto_descricao,
    }
    ITENS_LOJA.push(novo_prduto)  
    itens(novo_prduto)
}
function remover_user(){
   id= prompt("Digite ")
   elemento= document.getElementById("article-id-" + id)
    section_element.removeChild(elemento)
}


