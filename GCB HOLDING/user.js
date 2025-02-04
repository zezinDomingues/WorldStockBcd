document.addEventListener("DOMContentLoaded", loadInventoryUser);

function logout() {
    localStorage.removeItem("loggedUser");
    location.reload();
}

function sellProduct(index) {
    let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
    let item = inventory[index];

    const quantityToSell = parseInt(prompt(`Quantos ${item.name} você deseja vender? (Quantidade disponível: ${item.quantity})`));

    if (isNaN(quantityToSell) || quantityToSell <= 0) {
        alert("Por favor, insira uma quantidade válida para a venda.");
        return;
    }

    if (quantityToSell > item.quantity) {
        alert("Quantidade solicitada excede o estoque disponível!");
    } else {
        item.quantity -= quantityToSell;
        localStorage.setItem("inventory", JSON.stringify(inventory));
        loadInventoryUser();
        alert(`${quantityToSell} unidades de ${item.name} foram vendidas!`);
    }
}

function loadInventoryUser() {
    const userInventoryList = document.getElementById("user-inventory-list");
    userInventoryList.innerHTML = "";
    let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

    inventory.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ${item.quantity} | Categoria: ${item.category} | Local: ${item.location}`;

        let sellBtn = document.createElement("button");
        sellBtn.textContent = "Vender";
        sellBtn.onclick = () => sellProduct(index);

        li.appendChild(sellBtn);
        userInventoryList.appendChild(li);
    });
}
