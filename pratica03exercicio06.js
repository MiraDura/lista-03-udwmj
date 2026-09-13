function calcularMontante() {
  const capital = Number(document.getElementById("capital").value);
  const taxaPercentual = Number(document.getElementById("taxa").value);
  const tempo = Number(document.getElementById("tempo").value);
  const resultado = document.getElementById("resultado");

  if (!Number.isFinite(capital) || capital <= 0 ||
      !Number.isFinite(taxaPercentual) || taxaPercentual < 0 ||
      !Number.isInteger(tempo) || tempo <= 0) {
    resultado.textContent = "Preencha os campos com valores válidos. O prazo deve ser um número inteiro maior que zero.";
    return;
  }

  const taxaDecimal = taxaPercentual / 100;
  const montante = capital * Math.pow(1 + taxaDecimal, tempo);
  const juros = montante - capital;
  const formatoReal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  resultado.innerHTML =
    `Montante: ${formatoReal.format(montante)}<br>` +
    `Juros obtidos: ${formatoReal.format(juros)}`;
}
