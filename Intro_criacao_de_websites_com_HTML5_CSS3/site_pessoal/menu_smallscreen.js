const botao_menu = document.querySelector("#botao_menu")
const menu = document.querySelector("#links")

const home = document.querySelector("#opcao_home")
const habilidades = document.querySelector("#opcao_habilidades")
const certificados = document.querySelector("#opcao_certificados")
const contatos = document.querySelector("#opcao_contatos")

let clique = 0

function abrir_menu()
{
    if(clique === 0)
    {
        menu.style.display = 'block'
        clique++
    }
    else
    {
        menu.style.display = 'none'
        clique = 0
    }
}

function fechar_menu()
{
    menu.style.display = 'none'
    clique = 0
}

botao_menu.addEventListener("click", abrir_menu)

home.addEventListener("click", fechar_menu)
habilidades.addEventListener("click", fechar_menu)
certificados.addEventListener("click", fechar_menu)
contatos.addEventListener("click", fechar_menu)