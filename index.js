const form = document.getElementById("enquete-form");
const resultado = document.getElementById("resultado-enquete");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const voto = form.vote.value;

    if (!voto) {
        resultado.innerHTML = "<p style='color:red;'>Escolha uma opção antes de votar!</p>";
        return;
    }

    resultado.innerHTML = `<p style="color: green;"><strong>Obrigado pelo seu voto em ${voto}!</strong></p>`;
});

