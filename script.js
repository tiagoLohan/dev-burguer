const list = document.querySelector("ul")
const buttonForEach = document.querySelector("#for-each")
const buttonMap = document.querySelector("#map")
const buttonReduce = document.querySelector("#reduce")
const buttonFilter = document.querySelector("#filter")
let descontoAplicado = "false"



function mostrarTudo(array) {
    myList = ""
    array.forEach(product => {
        myList += `
                <li>
                    <img src= ${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">${product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                </li>
            `
    })
    list.innerHTML = myList
}

function aplicarDesconto() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    mostrarTudo(newPrice)

}

function somarTudo() {
    const valueTotal = menuOptions.reduce((acc, product) => {
        acc += product.price
        return acc
    }, 0)

    list.innerHTML = `
        <li>
            <p>A soma do valor total de todos os produtos do menu é de:</p><br>
            <p class="item-price">${valueTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        </li>
    `
}

function filtrar() {
    const veganos = menuOptions.filter( product => (product.vegan === true))

    mostrarTudo(veganos)
}



buttonForEach.addEventListener("click", () => mostrarTudo(menuOptions))
buttonMap.addEventListener("click", aplicarDesconto)
buttonReduce.addEventListener("click", somarTudo)
buttonFilter.addEventListener("click", filtrar)


