function leia_mais() {
    //expandir a descrição
    const pontos = document.getElementById("pontos-descricao");
    const complemento_desc = document.getElementById("complemento-descricao");
    const btn_leia_mais = document.getElementById("leia_mais");
    const btn_leia_menos = document.getElementById("leia_menos");

    //sumir com os 3 pontos e com o botão de ler mais
    pontos.style.display = "none";
    btn_leia_mais.style.display = "none";

    //mostrar o restante da descrição na mesma linha
    complemento_desc.style.display = "inline";
    //mostrar a opção de ler menos
    btn_leia_menos.style.display = "inline";

}

function leia_menos() {
    //contrair a descrição
    const pontos = document.getElementById("pontos-descricao");
    const complemento_desc = document.getElementById("complemento-descricao");
    const btn_leia_mais = document.getElementById("leia_mais");
    const btn_leia_menos = document.getElementById("leia_menos");

    //ocultar  o restante da descrição na mesma linha e o botão leia menos
    complemento_desc.style.display = "none";
    btn_leia_menos.style.display = "none";

    //mostar os 3 pontos e com o botão de ler mais
    pontos.style.display = "inline";
    btn_leia_mais.style.display = "inline";

}