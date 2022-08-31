window.onload = function () {
  //setando configurações iniciais ao carregar a tela
  localStorage.setItem('error', "");
  document.querySelector(".button-new-start").style.display = "none";
  document.querySelector(".xd-message").style.display = "none";


  /*tratando requisição criando uma instância do XMLHttprequest e gerando uma solicitação ao servidor
    * que me retorna um status de 0 a 4, sendo 4 quando a operação é concluída com êxito, além do status 200.
    * Com isso temos acesso ao valor retornado em formato JSON, analisamos essa string JSON no objeto JavaScript 
    * usando o método JSON.parse(). Esse valor é armazenado localmente para ser utilizado na lógica de outras 
    * funções do jogo.
    * Foi tratado também a tela de erro quando é retornado StatusCode = 502
  */
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300", true);
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      let sortNumber = JSON.parse(xhr.responseText);
      localStorage.setItem('sortNumber', sortNumber.value);
    }else if( xhr.status == 502){
      localStorage.setItem('error', "502");
      document.querySelector(".error").style.display = "block";
      document.querySelector(".button-new-start").style.display = "block";
      document.querySelector('#button-send').disabled = true;
      document.querySelector('#number').disabled = true;
      let elements = document.getElementsByClassName('segment'); 
      for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "#CC3300";
      }
      displayThree.two();
      displayTwo.zero();
      displayOne.five();
    }
  }
  xhr.send();
  }

  //setado variavel referente ao valor sorteado
  let sortNumber = parseInt(localStorage.getItem('sortNumber'));

  /* Lógica para o display de led com os segmentos. Definindo métodos próprios em uma sintaxe mais curta,
  *  semelhante aos getters e setters.
  */
  var displayOne = {
    zero: function () {
      this.lightsOut();
      document.querySelector(".A1").style.opacity = 1;
      document.querySelector(".B1").style.opacity = 1;
      document.querySelector(".C1").style.opacity = 1;
      document.querySelector(".D1").style.opacity = 1;
      document.querySelector(".E1").style.opacity = 1;
      document.querySelector(".F1").style.opacity = 1;
    },
    one: function () {
      this.lightsOut();
      document.querySelector(".B1").style.opacity = 1;
      document.querySelector(".C1").style.opacity = 1;
    },
    two: function () {
      this.lightsOut();
      document.querySelector(".A1").style.opacity = 1;
      document.querySelector(".B1").style.opacity = 1;
      document.querySelector(".D1").style.opacity = 1;
      document.querySelector(".E1").style.opacity = 1;
      document.querySelector(".G1").style.opacity = 1;
      // document.querySelector(".F1").style.opacity = 0.1;
    },
    three: function () {
      this.lightsOut();
      document.querySelector(".A1").style.opacity = 1;
      document.querySelector(".B1").style.opacity = 1;
      document.querySelector(".C1").style.opacity = 1;
      document.querySelector(".D1").style.opacity = 1;
      document.querySelector(".G1").style.opacity = 1;
    },
    four: function () {
      this.lightsOut();
      document.querySelector(".B1").style.opacity = 1;
      document.querySelector(".C1").style.opacity = 1;
      document.querySelector(".F1").style.opacity = 1;
      document.querySelector(".G1").style.opacity = 1;
    },
    five: function () {
      this.lightsOut();
      document.querySelector(".A1").style.opacity = 1;
      document.querySelector(".C1").style.opacity = 1;
      document.querySelector(".D1").style.opacity = 1;
      document.querySelector(".F1").style.opacity = 1;
      document.querySelector(".G1").style.opacity = 1;
    },
    six: function () {
      this.lightsOut();
      document.querySelector(".A1").style.opacity = 1;
      document.querySelector(".C1").style.opacity = 1;
      document.querySelector(".D1").style.opacity = 1;
      document.querySelector(".E1").style.opacity = 1;
      document.querySelector(".F1").style.opacity = 1;
      document.querySelector(".G1").style.opacity = 1;
    },
    seven: function () {
      this.lightsOut();
      document.querySelector(".A1").style.opacity = 1;
      document.querySelector(".B1").style.opacity = 1;
      document.querySelector(".C1").style.opacity = 1;
    },
    eight: function () {
      this.lightsOut();
      document.querySelector(".A1").style.opacity = 1;
      document.querySelector(".B1").style.opacity = 1;
      document.querySelector(".C1").style.opacity = 1;
      document.querySelector(".D1").style.opacity = 1;
      document.querySelector(".E1").style.opacity = 1;
      document.querySelector(".F1").style.opacity = 1;
      document.querySelector(".G1").style.opacity = 1;
    },
    nine: function () {
      this.lightsOut();
      document.querySelector(".A1").style.opacity = 1;
      document.querySelector(".B1").style.opacity = 1;
      document.querySelector(".C1").style.opacity = 1;
      document.querySelector(".D1").style.opacity = 1;
      document.querySelector(".F1").style.opacity = 1;
      document.querySelector(".G1").style.opacity = 1;
    },
    lightsOut: function () {
      document.querySelector(".A1").style.opacity = 0.1;
      document.querySelector(".B1").style.opacity = 0.1;
      document.querySelector(".C1").style.opacity = 0.1;
      document.querySelector(".D1").style.opacity = 0.1;
      document.querySelector(".E1").style.opacity = 0.1;
      document.querySelector(".F1").style.opacity = 0.1;
      document.querySelector(".G1").style.opacity = 0.1;
    },
    turnOff: function () {
      document.querySelector(".A1").style.opacity = 0;
      document.querySelector(".B1").style.opacity = 0;
      document.querySelector(".C1").style.opacity = 0;
      document.querySelector(".D1").style.opacity = 0;
      document.querySelector(".E1").style.opacity = 0;
      document.querySelector(".F1").style.opacity = 0;
      document.querySelector(".G1").style.opacity = 0;
    }
  };

  var displayTwo = {
    zero: function () {
      this.lightsOut();
      document.querySelector(".A2").style.opacity = 1;
      document.querySelector(".B2").style.opacity = 1;
      document.querySelector(".C2").style.opacity = 1;
      document.querySelector(".D2").style.opacity = 1;
      document.querySelector(".E2").style.opacity = 1;
      document.querySelector(".F2").style.opacity = 1;
    },
    one: function () {
      this.lightsOut();
      document.querySelector(".B2").style.opacity = 1;
      document.querySelector(".C2").style.opacity = 1;
    },
    two: function () {
      this.lightsOut();
      document.querySelector(".A2").style.opacity = 1;
      document.querySelector(".B2").style.opacity = 1;
      document.querySelector(".D2").style.opacity = 1;
      document.querySelector(".E2").style.opacity = 1;
      document.querySelector(".G2").style.opacity = 1;
      // document.querySelector(".F2").style.opacity = 1;
    },
    three: function () {
      this.lightsOut();
      document.querySelector(".A2").style.opacity = 1;
      document.querySelector(".B2").style.opacity = 1;
      document.querySelector(".C2").style.opacity = 1;
      document.querySelector(".D2").style.opacity = 1;
      document.querySelector(".G2").style.opacity = 1;
    },
    four: function () {
      this.lightsOut();
      document.querySelector(".B2").style.opacity = 1;
      document.querySelector(".C2").style.opacity = 1;
      document.querySelector(".F2").style.opacity = 1;
      document.querySelector(".G2").style.opacity = 1;
    },
    five: function () {
      this.lightsOut();
      document.querySelector(".A2").style.opacity = 1;
      document.querySelector(".C2").style.opacity = 1;
      document.querySelector(".D2").style.opacity = 1;
      document.querySelector(".F2").style.opacity = 1;
      document.querySelector(".G2").style.opacity = 1;
    },
    six: function () {
      this.lightsOut();
      document.querySelector(".A2").style.opacity = 1;
      document.querySelector(".C2").style.opacity = 1;
      document.querySelector(".D2").style.opacity = 1;
      document.querySelector(".E2").style.opacity = 1;
      document.querySelector(".F2").style.opacity = 1;
      document.querySelector(".G2").style.opacity = 1;
    },
    seven: function () {
      this.lightsOut();
      document.querySelector(".A2").style.opacity = 1;
      document.querySelector(".B2").style.opacity = 1;
      document.querySelector(".C2").style.opacity = 1;
    },
    eight: function () {
      this.lightsOut();
      document.querySelector(".A2").style.opacity = 1;
      document.querySelector(".B2").style.opacity = 1;
      document.querySelector(".C2").style.opacity = 1;
      document.querySelector(".D2").style.opacity = 1;
      document.querySelector(".E2").style.opacity = 1;
      document.querySelector(".F2").style.opacity = 1;
      document.querySelector(".G2").style.opacity = 1;
    },
    nine: function () {
      this.lightsOut();
      document.querySelector(".A2").style.opacity = 1;
      document.querySelector(".B2").style.opacity = 1;
      document.querySelector(".C2").style.opacity = 1;
      document.querySelector(".D2").style.opacity = 1;
      document.querySelector(".F2").style.opacity = 1;
      document.querySelector(".G2").style.opacity = 1;
    },
    lightsOut: function () {
      document.querySelector(".A2").style.opacity = 0.1;
      document.querySelector(".B2").style.opacity = 0.1;
      document.querySelector(".C2").style.opacity = 0.1;
      document.querySelector(".D2").style.opacity = 0.1;
      document.querySelector(".E2").style.opacity = 0.1;
      document.querySelector(".F2").style.opacity = 0.1;
      document.querySelector(".G2").style.opacity = 0.1;
    },
    turnOff: function () {
      document.querySelector(".A2").style.opacity = 0;
      document.querySelector(".B2").style.opacity = 0;
      document.querySelector(".C2").style.opacity = 0;
      document.querySelector(".D2").style.opacity = 0;
      document.querySelector(".E2").style.opacity = 0;
      document.querySelector(".F2").style.opacity = 0;
      document.querySelector(".G2").style.opacity = 0;
    }
  };
  
  var displayThree = {
    zero: function () {
      this.lightsOut();
      document.querySelector(".A3").style.opacity = 1;
      document.querySelector(".B3").style.opacity = 1;
      document.querySelector(".C3").style.opacity = 1;
      document.querySelector(".D3").style.opacity = 1;
      document.querySelector(".E3").style.opacity = 1;
      document.querySelector(".F3").style.opacity = 1;
    },
    one: function () {
      this.lightsOut();
      document.querySelector(".B3").style.opacity = 1;
      document.querySelector(".C3").style.opacity = 1;
    },
    two: function () {
      this.lightsOut();
      document.querySelector(".A3").style.opacity = 1;
      document.querySelector(".B3").style.opacity = 1;
      document.querySelector(".D3").style.opacity = 1;
      document.querySelector(".E3").style.opacity = 1;
      document.querySelector(".G3").style.opacity = 1;
      // document.querySelector(".F3").style.display = "none";
    },
    three: function () {
      this.lightsOut();
      document.querySelector(".A3").style.opacity = 1;
      document.querySelector(".B3").style.opacity = 1;
      document.querySelector(".C3").style.opacity = 1;
      document.querySelector(".D3").style.opacity = 1;
      document.querySelector(".G3").style.opacity = 1;
    },
    four: function () {
      this.lightsOut();
      document.querySelector(".B3").style.opacity = 1;
      document.querySelector(".C3").style.opacity = 1;
      document.querySelector(".F3").style.opacity = 1;
      document.querySelector(".G3").style.opacity = 1;
    },
    five: function () {
      this.lightsOut();
      document.querySelector(".A3").style.opacity = 1;
      document.querySelector(".C3").style.opacity = 1;
      document.querySelector(".D3").style.opacity = 1;
      document.querySelector(".F3").style.opacity = 1;
      document.querySelector(".G3").style.opacity = 1;
    },
    six: function () {
      this.lightsOut();
      document.querySelector(".A3").style.opacity = 1;
      document.querySelector(".C3").style.opacity = 1;
      document.querySelector(".D3").style.opacity = 1;
      document.querySelector(".E3").style.opacity = 1;
      document.querySelector(".F3").style.opacity = 1;
      document.querySelector(".G3").style.opacity = 1;
    },
    seven: function () {
      this.lightsOut();
      document.querySelector(".A3").style.opacity = 1;
      document.querySelector(".B3").style.opacity = 1;
      document.querySelector(".C3").style.opacity = 1;
    },
    eight: function () {
      this.lightsOut();
      document.querySelector(".A3").style.opacity = 1;
      document.querySelector(".B3").style.opacity = 1;
      document.querySelector(".C3").style.opacity = 1;
      document.querySelector(".D3").style.opacity = 1;
      document.querySelector(".E3").style.opacity = 1;
      document.querySelector(".F3").style.opacity = 1;
      document.querySelector(".G3").style.opacity = 1;
    },
    nine: function () {
      this.lightsOut();
      document.querySelector(".A3").style.opacity = 1;
      document.querySelector(".B3").style.opacity = 1;
      document.querySelector(".C3").style.opacity = 1;
      document.querySelector(".D3").style.opacity = 1;
      document.querySelector(".F3").style.opacity = 1;
      document.querySelector(".G3").style.opacity = 1;
    },
    lightsOut: function () {
      document.querySelector(".A3").style.opacity = 0.1;
      document.querySelector(".B3").style.opacity = 0.1;
      document.querySelector(".C3").style.opacity = 0.1;
      document.querySelector(".D3").style.opacity = 0.1;
      document.querySelector(".E3").style.opacity = 0.1;
      document.querySelector(".F3").style.opacity = 0.1;
      document.querySelector(".G3").style.opacity = 0.1;
    },
    turnOff: function () {
      document.querySelector(".A3").style.opacity = 0;
      document.querySelector(".B3").style.opacity = 0;
      document.querySelector(".C3").style.opacity = 0;
      document.querySelector(".D3").style.opacity = 0;
      document.querySelector(".E3").style.opacity = 0;
      document.querySelector(".G3").style.opacity = 0;
      document.querySelector(".F3").style.opacity = 0;
    }
  };

// setando como apagado os displays com os segmentos
displayOne.lightsOut();
displayTwo.lightsOut();
displayThree.lightsOut();

//função para achar o número sorteado
function findNumber() {
  let inputValue = document.getElementById("number").value;
  let separateNumbers = [];
  separateNumbers = inputValue.split("");
  let valueSortNumber = parseInt(inputValue)
  
  //Verificando se o número digitado pelo usuario ultrapassa o valor máximo de 300 ou é menor que 1
  if(valueSortNumber > 300 || valueSortNumber < 1){
    document.querySelector(".xd-message").classList.remove('hide')
    document.querySelector(".xd-message").style.display = "flex";
  }

  //Verificando se o número digitado pelo usuario possui apenas um número
  if(separateNumbers.length == "1" && (valueSortNumber <= 300 && valueSortNumber >= 1)){
    displayOne.turnOff();
    displayTwo.turnOff();
    if(separateNumbers[0] != undefined || separateNumbers[0] != ""){
      if(separateNumbers[0] == 1) displayThree.one();
      if(separateNumbers[0] == 2) displayThree.two();
      if(separateNumbers[0] == 3) displayThree.three();
      if(separateNumbers[0] == 4) displayThree.four();
      if(separateNumbers[0] == 5) displayThree.five();
      if(separateNumbers[0] == 6) displayThree.six();
      if(separateNumbers[0] == 7) displayThree.seven();
      if(separateNumbers[0] == 8) displayThree.eight();
      if(separateNumbers[0] == 9) displayThree.nine();
      if(separateNumbers[0] == 0) displayThree.zero();
    }
  }
  //Verificando se o número digitado pelo usuario possui dois números
  if(separateNumbers.length == "2" && (valueSortNumber <= 300 && valueSortNumber >= 1)){
    displayOne.turnOff();
    if(separateNumbers[0] != undefined || separateNumbers[0] != ""){
      if(separateNumbers[0] == 1) displayTwo.one();
      if(separateNumbers[0] == 2) displayTwo.two();
      if(separateNumbers[0] == 3) displayTwo.three();
      if(separateNumbers[0] == 4) displayTwo.four();
      if(separateNumbers[0] == 5) displayTwo.five();
      if(separateNumbers[0] == 6) displayTwo.six();
      if(separateNumbers[0] == 7) displayTwo.seven();
      if(separateNumbers[0] == 8) displayTwo.eight();
      if(separateNumbers[0] == 9) displayTwo.nine();
      if(separateNumbers[0] == 0) displayTwo.zero();
    }
    if(separateNumbers[1] != undefined || separateNumbers[1] != ""){
      if(separateNumbers[1] == 1) displayThree.one();
      if(separateNumbers[1] == 2) displayThree.two();
      if(separateNumbers[1] == 3) displayThree.three();
      if(separateNumbers[1] == 4) displayThree.four();
      if(separateNumbers[1] == 5) displayThree.five();
      if(separateNumbers[1] == 6) displayThree.six();
      if(separateNumbers[1] == 7) displayThree.seven();
      if(separateNumbers[1] == 8) displayThree.eight();
      if(separateNumbers[1] == 9) displayThree.nine();
      if(separateNumbers[1] == 0) displayThree.zero();
    }
  }

  //Verificando se o número digitado pelo usuario possui três números
  if(separateNumbers.length == "3" && (valueSortNumber <= 300 && valueSortNumber >= 1)){
    if(separateNumbers[0] != undefined || separateNumbers[2] != ""){
      if(separateNumbers[0] == 1) displayOne.one();
      if(separateNumbers[0] == 2) displayOne.two();
      if(separateNumbers[0] == 3) displayOne.three();
      if(separateNumbers[0] == 4) displayOne.four();
      if(separateNumbers[0] == 5) displayOne.five();
      if(separateNumbers[0] == 6) displayOne.six();
      if(separateNumbers[0] == 7) displayOne.seven();
      if(separateNumbers[0] == 8) displayOne.eight();
      if(separateNumbers[0] == 9) displayOne.nine();
      if(separateNumbers[0] == 0) displayOne.zero();
    }
    if(separateNumbers[1] != undefined || separateNumbers[0] != ""){
      if(separateNumbers[1] == 1) displayTwo.one();
      if(separateNumbers[1] == 2) displayTwo.two();
      if(separateNumbers[1] == 3) displayTwo.three();
      if(separateNumbers[1] == 4) displayTwo.four();
      if(separateNumbers[1] == 5) displayTwo.five();
      if(separateNumbers[1] == 6) displayTwo.six();
      if(separateNumbers[1] == 7) displayTwo.seven();
      if(separateNumbers[1] == 8) displayTwo.eight();
      if(separateNumbers[1] == 9) displayTwo.nine();
      if(separateNumbers[1] == 0) displayTwo.zero();
    }
    if(separateNumbers[2] != undefined || separateNumbers[1] != ""){
      if(separateNumbers[2] == 1) displayThree.one();
      if(separateNumbers[2] == 2) displayThree.two();
      if(separateNumbers[2] == 3) displayThree.three();
      if(separateNumbers[2] == 4) displayThree.four();
      if(separateNumbers[2] == 5) displayThree.five();
      if(separateNumbers[2] == 6) displayThree.six();
      if(separateNumbers[2] == 7) displayThree.seven();
      if(separateNumbers[2] == 8) displayThree.eight();
      if(separateNumbers[2] == 9) displayThree.nine();
      if(separateNumbers[2] == 0) displayThree.zero();
    }
  }

  //Verifica se o valor digitado pelo usuário é equivalente ao sorteado pela requisição
  if(valueSortNumber == sortNumber && (valueSortNumber <= 300 && valueSortNumber >= 1)){
    document.querySelector(".bigger-than").style.display = "none";
    document.querySelector(".smaller-than").style.display = "none";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".you-won").style.display = "block";
    document.querySelector('#button-send').disabled = true;
    document.querySelector('#number').disabled = true;
    document.querySelector(".button-new-start").style.display = "block";
    document.querySelector(".input-number").value = "";
    var elements = document.getElementsByClassName('segment'); 
      for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "#32BF00";
      }
  }
  if( valueSortNumber < sortNumber && (valueSortNumber <= 300 && valueSortNumber >= 1)){      
    document.querySelector(".bigger-than").style.display = "block";   //Verifica se o valor digitado pelo usuário é 
    document.querySelector(".smaller-than").style.display = "none";   //menor que o sorteado pela requisição
    document.querySelector(".error").style.display = "none";
    document.querySelector(".you-won").style.display = "none";
    document.querySelector(".input-number").value = "";
  }else if( valueSortNumber > sortNumber && (valueSortNumber <= 300 && valueSortNumber >= 1)){
    document.querySelector(".bigger-than").style.display = "none";    //Verifica se o valor digitado pelo usuário é 
    document.querySelector(".smaller-than").style.display = "block";  //maior que o sorteado pela requisição
    document.querySelector(".error").style.display = "none";
    document.querySelector(".you-won").style.display = "none";
    document.querySelector(".input-number").value = "";
  }
}
// função que desabilita a tecla ENTER de funcionar como o botão enviar
function doNothing() {  
  let keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
  if( keyCode == 13 ) {
    if(!e) var e = window.event;
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
}

// Lógica para a mensagem de alerta para o usuário que ultrapassar o valor estipulado pelo desafio
let closesIcon = document.querySelectorAll('.xd-message .close-icon');
closesIcon.forEach(function(closeIcon) {
  closeIcon.addEventListener('click', function() {
    this.parentNode.parentNode.classList.add('hide');
    document.querySelector(".input-number").value = "";
  });
});