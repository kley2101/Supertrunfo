var baralho = [
  carta1 = {
    nome: "Naruto",
    atributos: { ataque: 7, defesa: 6, magia: 9 },
    img: "https://i.ibb.co/ynCt4KF/naruto-1498593686428-v2-1920x1080-pxb6.png"
  },
  carta2 = {
    nome: "Jiraiya",
    atributos: { ataque: 8, defesa: 9, magia: 5 },
    img:
      "https://kanto.legiaodosherois.com.br/w750-h450-k1/wp-content/uploads/2021/02/legiao_jnhcQRAHmVtP.jpg.jpeg"
  },
  carta3 = {
    nome: "Tsunade",
    atributos: { ataque: 10, defesa: 2, magia: 8 },
    img: "https://nerdhits.com.br/wp-content/uploads/2021/12/tsunade.jpg"
  },
  carta4 = {
    nome: "Orochimaru",
    atributos: { ataque: 4, defesa: 6, magia: 10 },
    img: "https://upload.wikimedia.org/wikipedia/pt/e/eb/Orochimaru.jpg"
  },
  carta5 = {
    nome: "Tobirama",
    atributos: { ataque: 5, defesa: 8, magia: 9 },
    img:
      "https://nerdhits.com.br/wp-content/uploads/2021/10/tobirama-1200x900.jpg"
  },
  carta6 = {
    nome: "Hashirama",
    atributos: { ataque: 9, defesa: 9, magia: 10 },
    img:
      "https://criticalhits.com.br/wp-content/uploads/2019/01/Sennin_M%C5%8Ddo_Hashirama_Senju_-_Anime.png"
  },
  carta7 = {
    nome: "Hiruzen",
    atributos: { ataque: 6, defesa: 10, magia: 7 },
    img:
      "https://criticalhits.com.br/wp-content/uploads/2022/02/Hiruzen-Sarutobi-.jpg"
  },
  carta8 = {
    nome: "Minato",
    atributos: { ataque: 9, defesa: 7, magia: 8 },
    img:
      "https://criticalhits.com.br/wp-content/uploads/2021/11/minato-namikaze-naruto-shippuden-quiz.jpg"
  },
  carta9 = {
    nome: "Kakashi",
    atributos: { ataque: 7, defesa: 8, magia: 2 },
    img:
      "https://criticalhits.com.br/wp-content/uploads/2021/12/Hokage_Kakashi.jpg"
  },
  carta10 = {
    nome: "Hagoromo",
    atributos: { ataque: 11, defesa: 8, magia: 11 },
    img: "http://pm1.narvii.com/6787/773593bac9dc34194c68fa301fb68b825307b3abv2_00.jpg"
  }
];

var baralhoJogador = []
var baralhoMaquina = []

var cartaJogador = {}
var cartaMaquina = {}


function sortearBaralhos(){
  while(baralho.length>0){
    var ran = parseInt(Math.random()*baralho.length)
    if (baralhoMaquina.length>=baralhoJogador.length){
      baralhoJogador.push(baralho[ran])
      var del = baralho.splice(ran, 1)
    } else{
      baralhoMaquina.push(baralho[ran])
      var del = baralho.splice(ran, 1)
    }
  }
   document.getElementById("contador").innerHTML =
    "Você tem " +
    baralhoJogador.length +
    " cartas<br> Seu oponente tem " +
    baralhoMaquina.length +
    " cartas";
  document.getElementById("btnSortear2").disabled = false;
  console.log(baralhoJogador)
}

function puxarCarta(){
  document.getElementById("carta-maquina").innerHTML = ""
  document.getElementById("carta-maquina").style.background = "";
  
  cartaJogador = baralhoJogador[0]
  baralhoJogador.shift()
  cartaMaquina = baralhoMaquina [0]
  baralhoMaquina.shift()
  renderCartaJog()
}

function renderCartaJog() {
  var posCarJog = document.getElementById("carta-jogador");
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
  posCarJog.style.background = `url(${cartaJogador.img})`;
  posCarJog.style.backgroundSize = "350px 300px";
  posCarJog.style.backgroundRepeat = "no-repeat";
  posCarJog.style.backgroundPosition = "center 10px";

  var opTag = "<div id='opcoes' class='carta-status'>";
  var op = document.getElementById("opcoes");
  var opText = "";

  for (var atributo in cartaJogador.atributos) {
    opText +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nomePers = `<p class="carta-subtitle">${cartaJogador.nome}`;

  posCarJog.innerHTML = moldura + nomePers + opTag + opText + "</div>";

  document.getElementById("btnSortear2").disabled = true;
  document.getElementById("btnJogar").disabled = false;
}

function renderCartaMaq(){
  
  var maqTag = "<div id='opcoes' class='carta-status'>";
  var posCarMaq = document.getElementById("carta-maquina");
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
  var carTxt = "";
  posCarMaq.style.background = `url(${cartaMaquina.img})`;
  posCarMaq.style.backgroundSize = "350px 300px";
  posCarMaq.style.backgroundRepeat = "no-repeat";
  posCarMaq.style.backgroundPosition = "center 10px";

  for (var atributo in cartaMaquina.atributos) {
    carTxt +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "' >" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  var nomePers = `<p class="carta-subtitle">${cartaMaquina.nome}`;

  posCarMaq.innerHTML = moldura + nomePers + maqTag + carTxt + "</div>";
}

function jogar(){
  var sele= document.getElementsByName("atributo")
  var marcado = undefined
  for(var i=0; i<sele.length; i++){
    if (sele[i].checked==true){
      console.log(sele[i].value)
      marcado=sele[i].value
    }
  }
  if(marcado!=undefined){
  if(cartaJogador.atributos[marcado]>cartaMaquina.atributos[marcado]){
    document.getElementById("resultado").innerHTML = "Parabens, voce ganhou!"
    baralhoJogador.push(cartaJogador);
    baralhoJogador.push(cartaMaquina);
    document.getElementById("contador").innerHTML =
    "Você tem " +
    baralhoJogador.length +
    " cartas<br> Seu oponente tem " +
    baralhoMaquina.length +
    " cartas";
  }else if(cartaJogador.atributos[marcado]==cartaMaquina.atributos[marcado]){
    document.getElementById("resultado").innerHTML = "Foi empate!"
    baralhoJogador.push(cartaJogador);
    baralhoMaquina.push(cartaMaquina);
    document.getElementById("contador").innerHTML =
    "Você tem " +
    baralhoJogador.length +
    " cartas<br> Seu oponente tem " +
    baralhoMaquina.length +
    " cartas";
  }else{
    document.getElementById("resultado").innerHTML = "Que pena, voce perdeu!"
    baralhoMaquina.push(cartaJogador);
    baralhoMaquina.push(cartaMaquina);
    document.getElementById("contador").innerHTML =
    "Você tem " +
    baralhoJogador.length +
    " cartas<br> Seu oponente tem " +
    baralhoMaquina.length +
    " cartas";
    console.log("perdeu")
  }
  document.getElementById("btnSortear2").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  }else{
    document.getElementById("resultado").innerHTML = "Selecione um atributo"
  }
  renderCartaMaq();
  console.log(baralhoMaquina.length)
  if(baralhoMaquina.length==0){
    document.getElementById("contador").innerHTML =
    "O jogo acabou, voce foi o vencedor!";  
    document.getElementById("btnSortear2").disabled = true;
  document.getElementById("btnJogar").disabled = true;
  }
}

function reset(){
  document.getElementById("carta-jogador").innerHTML = "";
    document.getElementById("carta-jogador").style.background = "";
    document.getElementById("carta-maquina").innerHTML = ""
    document.getElementById("carta-maquina").style.background = "";
    baralhoMaquina = []
    baralhoJogador = []
    baralho = [
  carta1 = {
    nome: "Naruto",
    atributos: { ataque: 7, defesa: 6, magia: 9 },
    img: "https://i.ibb.co/ynCt4KF/naruto-1498593686428-v2-1920x1080-pxb6.png"
  },
  carta2 = {
    nome: "Jiraiya",
    atributos: { ataque: 8, defesa: 9, magia: 5 },
    img:
      "https://kanto.legiaodosherois.com.br/w750-h450-k1/wp-content/uploads/2021/02/legiao_jnhcQRAHmVtP.jpg.jpeg"
  },
  carta3 = {
    nome: "Tsunade",
    atributos: { ataque: 10, defesa: 2, magia: 8 },
    img: "https://nerdhits.com.br/wp-content/uploads/2021/12/tsunade.jpg"
  },
  carta4 = {
    nome: "Orochimaru",
    atributos: { ataque: 4, defesa: 6, magia: 10 },
    img: "https://upload.wikimedia.org/wikipedia/pt/e/eb/Orochimaru.jpg"
  },
  carta5 = {
    nome: "Tobirama",
    atributos: { ataque: 5, defesa: 8, magia: 9 },
    img:
      "https://nerdhits.com.br/wp-content/uploads/2021/10/tobirama-1200x900.jpg"
  },
  carta6 = {
    nome: "Hashirama",
    atributos: { ataque: 9, defesa: 9, magia: 10 },
    img:
      "https://criticalhits.com.br/wp-content/uploads/2019/01/Sennin_M%C5%8Ddo_Hashirama_Senju_-_Anime.png"
  },
  carta7 = {
    nome: "Hiruzen",
    atributos: { ataque: 6, defesa: 10, magia: 7 },
    img:
      "https://criticalhits.com.br/wp-content/uploads/2022/02/Hiruzen-Sarutobi-.jpg"
  },
  carta8 = {
    nome: "Minato",
    atributos: { ataque: 9, defesa: 7, magia: 8 },
    img:
      "https://criticalhits.com.br/wp-content/uploads/2021/11/minato-namikaze-naruto-shippuden-quiz.jpg"
  },
  carta9 = {
    nome: "Kakashi",
    atributos: { ataque: 7, defesa: 8, magia: 2 },
    img:
      "https://criticalhits.com.br/wp-content/uploads/2021/12/Hokage_Kakashi.jpg"
  },
  carta10 = {
    nome: "Hagoromo",
    atributos: { ataque: 11, defesa: 8, magia: 11 },
    img: "http://pm1.narvii.com/6787/773593bac9dc34194c68fa301fb68b825307b3abv2_00.jpg"
  }
];
}