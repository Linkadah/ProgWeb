//Criar referencias aos elementos que quero manipular
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
                                        //addEvent espera o usuário fazer interação com a página
frm.addEventListener("submit", (e) =>{  //Mini função
    e.preventDefault();                 //evita o envio do formulário ao clicar o botão
    //alert("você clicou no botão");
    const num1 = Number(frm.numUm.value);   
    const num2 = Number(frm.numDois.value);  
    const num3 = Number(frm.numTres.value);  
    const num4 = Number(frm.numQuatro.value); 
    const soma = Number (num1+num2+num3+num4);
    resp.innerText = `A soma dos números é: ${soma}. E a média dos números é: ${soma/4}`;
});
