const params = new URLSearchParams(window.location.search);
const chave = params.get("chave");

if (chave !== null) {
  const resposta = chave.toLowerCase();
  const respostasValidas = ["tesseract"];

  if (respostasValidas.includes(resposta)) {
    window.location.href = "escolha.html";
  } else {
    window.location.href = "Error.html";
  }
}
