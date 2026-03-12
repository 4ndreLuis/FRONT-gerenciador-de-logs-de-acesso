var inputUser = document.querySelector("#inputUser");
var btnGrant = document.querySelector("#btnGrant");
var logList = document.querySelector("#logList");
var totalCount = document.querySelector("#totalCount");
var logs = [];
var contador = 0;
var atualizarEstatisticas = function () {
    totalCount.textContent = contador.toString();
};
var adicionarAcesso = function () {
    var usuario = inputUser.value.trim();
    if (!usuario) {
        alert("Por favor, inisira um ID ou Nome válido.");
        return;
    }
};
btnGrant.addEventListener("click", adicionarAcesso);
