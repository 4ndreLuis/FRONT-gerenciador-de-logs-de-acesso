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
    logs.push(usuario);
    contador = logs.length;
    atualizarEstatisticas();
    redenrizarLogs();
    inputUser.value = "";
    inputUser.focus();
};
var redenrizarLogs = function () {
    logList.innerHTML = "";
    logs
        .slice()
        .reverse()
        .forEach(function (nome) {
        var agora = new Date();
        var horaFormatada = agora.toLocaleTimeString();
        var template = "\n       <span class=log-time>".concat(horaFormatada, "</span></li>\n      <li class=log-item><span><strong>Acesso: </strong>").concat(nome, "</span></li>");
        logList.insertAdjacentHTML("beforeend", template);
    });
};
btnGrant.addEventListener("click", adicionarAcesso);
