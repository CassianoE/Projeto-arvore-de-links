function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pega a tag img
  const img = document.querySelector("#profile img");

  // substitui a imagem
  if (html.classList.contains("light")) {
    //se estiver em light mode, adiciona a imagem light
    img.setAttribute("src", "assets/avatar-light.png");
  } else {
    //se ja estiver em light mode, mamtem a imagem
    img.setAttribute("src", "assets/avatar.png");
  }
}
