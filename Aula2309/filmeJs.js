//Criar referencias aos elementos que quero manipular
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
                                        //addEvent espera o usuário fazer interação com a página
frm.addEventListener("submit", (e) =>{  //Mini função
    e.preventDefault();                 //evita o envio do formulário ao clicar o botão
    //alert("você clicou no botão");
    
    const nomeFilme = (frm.nomeFilme.value);   
    const minutoFilme = Number(frm.minutoFilme.value);   
    const horasResposta = parseInt(minutoFilme/60);
    const minutosResposta = Number (minutoFilme%60);
    resp.innerText = `O filme "${nomeFilme}" tem a duração de ${horasResposta} horas e ${minutosResposta} minutos`;
});