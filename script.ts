const inputUser = document.querySelector("#inputUser") as HTMLInputElement;

const btnGrant = document.querySelector("#btnGrant") as HTMLButtonElement;

const logList = document.querySelector("#logList") as HTMLUListElement;

const totalCount = document.querySelector("#totalCount") as HTMLSpanElement;

let logs: string[] = [];
let contador: number = 0;

const atualizarEstatisticas = () => {
  totalCount.textContent = contador.toString();
};

const adicionarAcesso = () => {
  const usuario = inputUser.value.trim();
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

btnGrant.addEventListener("click", adicionarAcesso);
