const btn = document.querySelector("#butn")
btn.addEventListener("click", verificar)

function verificar() {
    const ano = document.querySelector("#ano")
    const anoNew = Number(ano.value)
    const date = new Date()
    const anoAtual = date.getFullYear()
    const subtra = anoAtual - anoNew
    const idade = document.getElementsByTagName("h4")[0]


    if (ano.value <= 1915 || ano.value > anoAtual) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        const sex = document.getElementsByName("radsex")
        let genero = ''

        if (sex[0].checked) {
            genero = 'Homem'
            document.body.style.backgroundColor = "#94BBE9"
            if (subtra >= 0 && subtra < 5) {
                document.querySelector("#img-pessoa").src = "assets/crianca-men-tres.png"
            } else if (subtra <= 10) {
                document.querySelector("#img-pessoa").src = "assets/crianca-men-dez.png"
            } else if (subtra <= 15) {
                document.querySelector("#img-pessoa").src = "assets/crianca-men-quinze.png"
            } else if (subtra <= 25 ) {
                document.querySelector("#img-pessoa").src = "assets/jovem-men-vinte.png"
            } else if (subtra <= 40) {
                document.querySelector("#img-pessoa").src = "assets/men-trinta.png"
            } else if (subtra <= 50) {
                document.querySelector("#img-pessoa").src = "assets/coroa-men-cinquenta.png"
            } else {
                document.querySelector("#img-pessoa").src = "assets/idoso-men.png"
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            document.body.style.backgroundColor = "#ef629fa2"
            if (subtra >= 0 && subtra < 5) {
                document.querySelector("#img-pessoa").src = "assets/crianca-fem-tres.png"
            } else if (subtra <= 10) {
                document.querySelector("#img-pessoa").src = "assets/crianca-fem-dez.png"
            } else if (subtra <= 15) {
                document.querySelector("#img-pessoa").src = "assets/crianca-fem-quinze.png"
            } else if (subtra <= 25) {
                document.querySelector("#img-pessoa").src = "assets/jovem-fem-vinte.png"
            } else if (subtra <= 40) {
                document.querySelector("#img-pessoa").src = "assets/fem-trinta.png"
            } else if (subtra <= 50) {
                document.querySelector("#img-pessoa").src = "assets/coroa-fem-cinquenta.png"
            } else {
                document.querySelector("#img-pessoa").src = "assets/idosa-fem.png"
            }
        }
        idade.textContent = `Detectamos ${genero} com ${subtra} anos!`
    }

}

