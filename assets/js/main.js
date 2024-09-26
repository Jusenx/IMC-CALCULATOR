function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.getElementById('resultado');

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const img = document.createElement('img');
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value / 100;
    let IMC = (peso / (altura * altura))
    console.log(IMC.toFixed(2))

    function ideal() {
      const container = document.getElementById('imagem-container');
      let img = document.getElementById('imagem')

      if (!img) {
        img = document.createElement('img');
        img.id = 'imagem'; // Define um id para a imagem
        img.width = 300; // Largura da imagem (opcional)
        container.appendChild(img); // Adiciona ao container se ainda não existir
      }

      if (IMC < 18.5) {
        resultado.style.backgroundColor = "rgb(174, 255, 185)"
        img.src = "./assets/img/magro.png";
        return 'Abaixo do Peso'
      } else if (IMC < 24.9 && IMC > 18.5) {
        resultado.style.backgroundColor = "rgb(107, 255, 127)"
        img.src = "./assets/img/normal.png";
        return 'Peso normal'
      } else if (IMC < 29.9 && IMC > 25) {
        resultado.style.backgroundColor = "rgb(255, 222, 130)"
        img.src = "./assets/img/gordo.png";
        return 'Sobrepeso'
      } else if (IMC < 34.9 && IMC > 30) {
        resultado.style.backgroundColor = "rgb(255, 121, 121)"
        img.src = "./assets/img/obeso.png";
        return 'Obesidade Grau 1'
      } else if (IMC < 39.9 && IMC > 35) {
        resultado.style.backgroundColor = "rgb(255, 76, 76)"
        return 'Obesidade Grau 2'
      } else if (IMC > 40) {
        resultado.style.backgroundColor = "rgb(112, 11, 11)"
        img.src = "./assets/img/obeso.png";
        return 'Obesidade Grau 3'

      }
      else if (peso || altura != Number) {
        resultado.style.backgroundColor = "red"
        return 'Coloque um numero'
      }
    }

    resultado.innerHTML = `Seu IMC é: ${IMC.toFixed(2)}, ${ideal()}`

  }
  addEventListener('submit', recebeEventoForm)
}


meuEscopo();