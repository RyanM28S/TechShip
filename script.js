function Comofunciona() {
  var destino = document.getElementById("ComoFunciona");

  if (destino) {
    destino.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
function Inovações() {
  var destino = document.getElementById("inovacoes");

  if (destino) {
    destino.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
function Inovações2() {
  var destino = document.getElementById("inovacoes2");

  if (destino) {
    destino.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
function Rastreamento() {
  var destino = document.getElementById("Rastreamentor");

  if (destino) {
    destino.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
function Contato() {
  var destino = document.getElementById("contato");

  if (destino) {
    destino.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
const pagina = document.getElementById("pagina");
const botaoTrocarTemaElems = document.querySelectorAll(".trocarTema");

function trocarTema() {
  const isDark = pagina.classList.contains("tema-dark");
  if (isDark) {
    pagina.classList.remove("tema-dark");
    botaoTrocarTemaElems.forEach(
      (btn) => (btn.textContent = "Alterar Para Tema Escuro")
    );
    localStorage.setItem("tema", "claro");
  } else {
    pagina.classList.add("tema-dark");
    botaoTrocarTemaElems.forEach(
      (btn) => (btn.textContent = "Alterar Para Tema Claro")
    );
    localStorage.setItem("tema", "escuro");
  }
}

botaoTrocarTemaElems.forEach((btn) =>
  btn.addEventListener("click", trocarTema)
);

(function carregarTema() {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    pagina.classList.add("tema-dark");
    botaoTrocarTemaElems.forEach(
      (btn) => (btn.textContent = "Alterar Para Tema Claro")
    );
  } else {
    pagina.classList.remove("tema-dark");
    botaoTrocarTemaElems.forEach(
      (btn) => (btn.textContent = "Alterar Para Tema Escuro")
    );
  }
})();
function nao() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const nome = document.getElementById("nome").value;

  if (!nome) {
    alert("Sem nome");
    return;
  } else if (!email) {
    alert("Sem email");
    return;
  } else if (!senha) {
    alert("Sem senha");
    return;
  } else {
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    window.location.href = "Tela de Login.html";
  }
}
function sim() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email) {
    alert("Sem email");
    return;
  } else if (!senha) {
    alert("Sem senha");
    return;
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    window.location.href = "index.html";
  }
}
const SPINNER_HTML = '<div class="spinner"></div>';
const SPINNER_HTML2 = '<div class="spinner2"></div>';

function rastrear() {
  const botao = document.getElementById("botaoRastrear");
  const main = document.querySelector(".rastreamento");
  const inputCodigo = document.getElementById("codigo");
  const cg = inputCodigo ? inputCodigo.value : "";

  if (!cg) {
    alert("Codigo não encontrado ou não colocado!");
    return;
  }

  const textoOriginal = botao.textContent;

  botao.innerHTML = SPINNER_HTML;
  botao.classList.add("loading-button", "disabled-button");
  botao.disabled = true;

  setTimeout(() => {
    main.innerHTML = `
    <h2 class="ha">Rastreamento ao Vivo</h2>
    <p>Status do Pedido: Em transporte 🚚</p>

    <div class="exemplo">

        <div class="map-container">

            <div class="map-zoom">
                <svg viewBox="0 0 600 300" class="map-svg">

                
                  <polyline
                        class="neon-line"
                        points="70,120 150,160 220,180 300,200 380,260"
                    />

                
                    <circle cx="70" cy="120" r="8" class="dot"/>
                    <circle cx="150" cy="160" r="8" class="dot"/>
                    <circle cx="220" cy="180" r="8" class="dot"/>
                    <circle cx="300" cy="200" r="8" class="dot"/>

                
                    <circle cx="380" cy="260" r="10" class="dot final-dot"/>
                    <circle cx="380" cy="260" r="30" class="energy-ring"/>

                  <image
                        href="img/caminhao-de-carga.png"
                        x="70"
                        y="110"
                        width="28"
                        height="28"
                        class="truck"
                    />
                </svg>
            </div>

            
            <div class="city" style="top: 28%; left: 6%;">São Paulo</div>
            <div class="city" style="top: 44%; left: 20%;">Curitiba</div>
            <div class="city" style="top: 50%; left: 32%;">Joinville</div>
            <div class="city" style="top: 58%; left: 46%;">Florianópolis</div>
            <div class="city" style="top: 78%; left: 60%;">Porto Alegre</div>
        </div>

    </div>

    <h3 class="he">Endereço: Rua teste, nº 1234</h3>
    <h3 class="he">Prazo estimado: 3 dias úteis</h3>
    `;
  }, 2000);
}
function cadastrar() {
  const main = document.getElementById("conteudo");
  main.innerHTML = `
        <div class="Cadastrodivconteiner">
            <img src="img/LogoTechShip.png" alt="logo">
            <p class="Titulotechship">TECH SHIP</p>
            <p class="subtitulocadastro">Crie sua conta</p>
            <p class="nomecadastro">Nome Completo</p>
            <input type="text" id="nome" placeholder="Seu Nome" class="inputnomecadastro">
            <p class="nomecadastro">Email</p>
            <input type="email" id="email" placeholder="Digite seu E-Mail" class="inputemailcadastro">
            <p class="nomecadastro">Senha</p>
            <input type="password" id="senha" placeholder="Digite sua Senha" class="inputsenhacadastro">
            <br>
            <button class="buttoncadastrol" onclick="nao()">Criar Conta</button>
            <p class="façalogincadastro">Já tem uma conta? <a class="a" href="#" onclick="login(); return false;">Faça login</a></p>
            <hr class="linhacadastro">
            <p class="façalogincadastro">Sistema de Gestão Logística © 2025</p>
        </div>
    `;
}
function login() {
  const main = document.getElementById("conteudo");
  main.innerHTML = `
        <div class="Cadastrodivconteiner">
            <img src="img/LogoTechShip.png" alt="logo">
            <p class="Titulotechship">TECH SHIP</p>
            <p class="subtitulologin">Bem-vindo de volta!</p>
            <p class="nomecadastro">Email</p>
            <input type="email" id="email" placeholder="Digite seu E-Mail" class="inputemaillogin">
            <p class="nomecadastro">Senha</p>
            <input type="password" id="senha" placeholder="Digite sua Senha" class="inputsenhalogin">
            <br>
            <button class="buttoncadastro" onclick="sim()">Entrar</button>
            <p class="façalogincadastro">Não tem uma conta? <a class="a" href="#" onclick="cadastrar(); return false;">Faça Cadastro</a></p>
            <hr  class="linhacadastro">
            <p class="façalogincadastro">Sistema de Gestão Logística © 2025</p>
        </div>
    `;
}
function calcular() {
  const main = document.getElementById("calcular4");
  const codigo = document.getElementById("codigo2");
  const botao = document.getElementById("botaoc");
  const cg = codigo ? codigo.value : "";

  if (!cg) {
    alert("Codigo não encontrado ou não colocado!");
    return;
  }

  const textoOriginal = botao.textContent;

  botao.innerHTML = SPINNER_HTML2;
  botao.classList.add("loading-button2", "disabled-button");
  botao.disabled = true;

  setTimeout(() => {
    main.classList.add("headerCalculadoraextendida");
    main.innerHTML = `
        <div class="headerCalculadora">
                <h2>Calculadora de IA</h2>
                <p class="p0">Cálculo instantâneo com análise preditiva</p>
                <div class="inputCalculadora">
                    <input id="codigo2" type="text" placeholder="Cole o link do produto aqui..." />
                    <button id="botaoc" onclick="calcular()" class="botaoCalcular">Calcular com IA</button>
                </div>
                <div class="calde">
                    <div class="pc">
                    <div>
                        <p class="p1">Produto</p>
                        <h3>$299.99</h3>
                    </div>
                    <div>
                        <p class="p1">Frete</p>
                        <h3>$45.5</h3>
                    </div>
                    <div>
                        <p class="p1">Taxas</p>
                        <h3>$89.35</h3>
                    </div>
                    </div>
                    <hr class="lin">
                    <div class="pc2">
                    <p class="p">Total</p>
                    <h3>$446.84</h3>
                    </div>
                    <div class="pem">
                    <p class="pa">Análise Preditiva</p>
                    <p>Melhor momento para comprar! Dólar em queda.</p>
                    <p> Você economizará $78.5 comprando agora!</p>
                    </div>
                </div>
                </div>
            `;
  }, 3000);
}
function abrirMenu() {
  const a2 = document.getElementById("a2");
  const menui = document.getElementById("menui");
  const header1 = document.getElementById("header1");

  menui.classList.add("sumir2");
  a2.classList.add("a22");
  header1.classList.add("umembaixo");
}
function fecharMenu() {
  const a2 = document.getElementById("a2");
  const menui = document.getElementById("menui");
  const header1 = document.getElementById("header1");

  menui.classList.remove("sumir2");
  a2.classList.remove("a22");
  header1.classList.remove("umembaixo");
}
function levarCadastro() {
  window.location.href = "Tela de Cadastro.html";
}
function comecarImp() {
  window.location.href = "imp.html";
}
function comoimp() {
  const paginaDestino = "index.html?scroll=ComoFunciona";

  window.location.href = paginaDestino;
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);

  const elementoId = urlParams.get("scroll");

  if (elementoId) {
    const destino = document.getElementById(elementoId);

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});
function rastreimp() {
  const paginaDestino = "index.html?scroll=Rastreamentor";

  window.location.href = paginaDestino;
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);

  const elementoId = urlParams.get("scroll");

  if (elementoId) {
    const destino = document.getElementById(elementoId);

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});

function contatoimp() {
  const paginaDestino = "index.html?scroll=contato";

  window.location.href = paginaDestino;
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);

  const elementoId = urlParams.get("scroll");

  if (elementoId) {
    const destino = document.getElementById(elementoId);

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});
contato;
