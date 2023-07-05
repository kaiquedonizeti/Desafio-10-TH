function clicou() {
    var click = document.getElementById("clicar")

    click.style.backgroundColor = "green"
    
    var text = document.getElementById("texto")

    text.innerHTML = "Parabéns professor, você cliclou nesse botão, mas se acalme, é só o começo!!!"
    text.style.display = "block"
}