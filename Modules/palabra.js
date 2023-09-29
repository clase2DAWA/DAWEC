var palabrasAleatorias = [
    "manzana",
    "adivina",
    "mando",
    "folio",
    "cargador",
    "lapiz",
    "rinoceronte",
    "flexo",
    "pantalon",
    "chicle",
    "piano"
  ];
  
  function obtenerPalabraAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * palabrasAleatorias.length);
    return palabrasAleatorias[indiceAleatorio];
  }