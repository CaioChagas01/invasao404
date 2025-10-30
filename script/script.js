const params = new URLSearchParams(window.location.search);
const chave = params.get("chave");

if (chave !== null) {
  const resposta = chave.toLowerCase();
  const respostasValidas = [
    "andrômeda",
    "andromeda",
    "galaxia de andrômeda",
    "galaxia de andromeda"
  ];

  if (respostasValidas.includes(resposta)) {
    window.location.href = "andromeda.html";
  } else {
    window.location.href = "Error.html";
  }
}