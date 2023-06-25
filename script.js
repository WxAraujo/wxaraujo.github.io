function toggleMode() {
  const html = document.documentElement /* Procurar html */
  html.classList.toggle("light") /* Alternando as classes */
  /* html, lista de classe, contém: */
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  const img = document.querySelector("#profile img") /* Pesquisa pelo seletor */
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png") /* Light mode ON */
  } else {
    img.setAttribute("src", "./assets/avatar.png") /* Padrão */
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Está é a segunda opção de imagem que mostra as mesmas características"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Willians, em um ambiente claro, com camisa preta"
    )
  }
}
