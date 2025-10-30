
    // Lógica de resposta (URL params)
    const params = new URLSearchParams(window.location.search);
    const chave = params.get("chave");

    if (chave !== null) {
      const resposta = chave.toLowerCase();
      const respostasValidas = ["egito"];
      if (respostasValidas.includes(resposta)) {
        window.location.href = "egito.html";
      } else {
        window.location.href = "Error.html";
      }
    }