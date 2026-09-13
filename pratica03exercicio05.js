function calcularVolume() {
  const raio = Number(document.getElementById("raio").value);
  const resultado = document.getElementById("resultado");

  if (!Number.isFinite(raio) || raio <= 0) {
    resultado.textContent = "Digite um raio maior que zero.";
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
  resultado.textContent = `O volume da esfera é ${volume.toFixed(2)} unidades³.`;
}
