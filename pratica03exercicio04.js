function calcularArea() {
  const raio = Number(document.getElementById("raio").value);
  const resultado = document.getElementById("resultado");

  if (!Number.isFinite(raio) || raio <= 0) {
    resultado.textContent = "Digite um raio maior que zero.";
    return;
  }

  const area = Math.PI * Math.pow(raio, 2);
  resultado.textContent = `A área do círculo é ${area.toFixed(2)} unidades².`;
}
