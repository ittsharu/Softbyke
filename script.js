function mudarFoto(caminhoNovaFoto, elementoClicado) {
  // 1. Busca a imagem principal pelo ID
  const fotoPrincipal = document.getElementById("foto-principal");
  fotoPrincipal.src = caminhoNovaFoto;

  // 2. Troca o caminho da imagem principal
  fotoPrincipal.src = caminhoNovaFoto;

  // 3. Efeito de fade rápido
  fotoPrincipal.style.opacity = 0;
  setTimeout(() => {
    fotoPrincipal.style.opacity = 1;
  }, 50);

  // 4. Gerencia a classe 'active' nas miniaturas
  // Remove 'active' de todas
  const todasThumbs = document.querySelectorAll(".quadradinho");
  todasThumbs.forEach((thumb) => thumb.classList.remove("active"));

  // Adiciona 'active' na que foi clicada
  elementoClicado.classList.add("active");
}
