const btn = document.querySelector("#butn")
btn.addEventListener("click", verificar)

function verificar(){
    const ano = document.querySelector("#ano")
    const anoNew = Number(ano.value)
    const date = new Date()
    const anoAtual = date.getFullYear()
    
    const subtra = anoAtual - anoNew

    const res = document.querySelector("#res")
    

    res.innerHTML = `Você tem ${subtra} anos!`
}