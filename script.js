// começo calculadora de IMC
document.getElementById("form-imc").addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultadoDiv = document.getElementById("resultado-imc");

  if (peso && altura) {
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(1);

    let classificacao = "";
    let classe = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
      classe = "alerta";
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = "Peso normal";
      classe = "sucesso";
    } else if (imc >= 25 && imc < 30) {
      classificacao = "Sobrepeso";
      classe = "alerta";
    } else if (imc >= 30 && imc < 35) {
      classificacao = "Obesidade grau I";
      classe = "perigo";
    } else if (imc >= 35 && imc < 40) {
      classificacao = "Obesidade grau II";
      classe = "perigo";
    } else {
      classificacao = "Obesidade grau III";
      classe = "perigo";
    }

    resultadoDiv.innerHTML = `
            <div class="imc-valor">IMC: ${imcFormatado}</div>
            <div class="imc-classificacao">${classificacao}</div>
        `;
    resultadoDiv.className = `resultado ${classe}`;

    // resultado
    resultadoDiv.style.opacity = "0";
    resultadoDiv.style.transform = "translateY(20px)";
    setTimeout(() => {
      resultadoDiv.style.transition = "all 0.3s ease";
      resultadoDiv.style.opacity = "1";
      resultadoDiv.style.transform = "translateY(0)";
    }, 100);
  }
});

// começo calculadora de deficit calorico
document
  .getElementById("form-calorias")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById("peso-cal").value);
    const altura = parseInt(document.getElementById("altura-cal").value);
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const atividade = parseFloat(document.getElementById("atividade").value);
    const objetivo = document.getElementById("objetivo").value;
    const resultadoDiv = document.getElementById("resultado-calorias");

    if (peso && altura && idade && sexo && atividade && objetivo) {
      let tmb;
      if (sexo === "masculino") {
        tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
      } else {
        tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
      }

      // calculo de TDEE (Total Daily Energy Expenditure)
      const tdee = tmb * atividade;

      // ajuste de calorias baseado no objetivo
      let caloriasObjetivo;
      let mensagem = "";
      let classe = "info";

      switch (objetivo) {
        case "perder":
          caloriasObjetivo = tdee - 500;
          mensagem =
            "Para perder peso de forma saudável e recomendada (aproximadamente 0,5kg por semana)";
          classe = "alerta";
          break;
        case "manter":
          caloriasObjetivo = tdee;
          mensagem = "Para manter seu peso atual";
          classe = "sucesso";
          break;
        case "ganhar":
          caloriasObjetivo = tdee + 500;
          mensagem =
            "Para ganhar peso de forma saudável e recomendada (aproximadamente 0,5kg por semana)";
          classe = "info";
          break;
      }

      resultadoDiv.innerHTML = `
            <div class="calorias-info">
                <div class="calorias-valor">${Math.round(
                  caloriasObjetivo
                )} calorias/dia</div>
                <div class="calorias-detalhes">
                    ${mensagem}<br>
                    <strong>TMB:</strong> ${Math.round(tmb)} cal/dia<br>
                    <strong>TDEE:</strong> ${Math.round(tdee)} cal/dia
                </div>
            </div>
        `;
      resultadoDiv.className = `resultado ${classe}`;

      // resultado
      resultadoDiv.style.opacity = "0";
      resultadoDiv.style.transform = "translateY(20px)";
      setTimeout(() => {
        resultadoDiv.style.transition = "all 0.3s ease";
        resultadoDiv.style.opacity = "1";
        resultadoDiv.style.transform = "translateY(0)";
      }, 100);
    }
  });

// sincronizacao de dados de ambas calculadoras
function sincronizarDados() {
  const pesoIMC = document.getElementById("peso");
  const alturaIMC = document.getElementById("altura");
  const pesoCal = document.getElementById("peso-cal");
  const alturaCal = document.getElementById("altura-cal");

  // peso
  pesoIMC.addEventListener("input", function () {
    if (this.value) {
      pesoCal.value = this.value;
    }
  });

  // altura
  alturaIMC.addEventListener("input", function () {
    if (this.value) {
      alturaCal.value = Math.round(this.value * 100);
    }
  });

  pesoCal.addEventListener("input", function () {
    if (this.value) {
      pesoIMC.value = this.value;
    }
  });

  alturaCal.addEventListener("input", function () {
    if (this.value) {
      alturaIMC.value = (this.value / 100).toFixed(2);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  sincronizarDados();

  const inputs = document.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.style.transform = "scale(1.02)";
      this.parentElement.style.transition = "transform 0.2s ease";
    });

    input.addEventListener("blur", function () {
      this.parentElement.style.transform = "scale(1)";
    });
  });
});

console.log("Calculadoras de IMC e Déficit Calórico carregadas com sucesso!");
