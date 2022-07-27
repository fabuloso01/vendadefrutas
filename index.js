function adicionar() {
    let frutaSelecionada = document.getElementById("fruta").value
    let total = 0
    
    switch(frutaSelecionada) {

        case "Banana":
            total += 2
            alert("Valor da compra " + total)
            break;

        case "Laranja":
            total += 4
            alert("Valor da compra " + total)
            break;

        case "Morango":
            total += 2.5
            alert("Valor da compra " + total)
            break;

        case "Abacaxi":
            total += 3.5
            alert("Valor da compra " + total)
            break;

        case "Maçã":
            total += 1.5
            alert("Valor da compra " + total)
            break;

        default:
            alert("Por gentileza adicione uma fruta.")
            break;


    }
}