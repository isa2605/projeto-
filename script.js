// Dados estruturados das matérias
const materias = [
  {
    nome: "Física",
    area: "Ciências da Natureza",
    conteudos: "Mecânica Clássica, Termodinâmica, Eletromagnetismo e Óptica",
    ferramentas: "Laboratório experimental, simuladores PhET e cálculos vetoriais",
    cargaHoraria: "80h",
    status: "Em andamento",
    classeStatus: "status-ativo"
  },
  {
    nome: "Tecnociência",
    area: "Ciência, Tecnologia e Sociedade",
    conteudos: "Impactos sociais da tecnologia, bioética, sustentabilidade e inovação",
    ferramentas: "Pesquisa científica, debates, análise de artigos e estudos de caso",
    cargaHoraria: "40h",
    status: "Concluído",
    classeStatus: "status-concluido"
  },
  {
    nome: "Programação",
    area: "Desenvolvimento de Software",
    conteudos: "Lógica de programação, estruturas de dados, HTML/CSS/JS e Python",
    ferramentas: "VS Code, Git, GitHub e navegadores web",
    cargaHoraria: "100h",
    status: "Em andamento",
    classeStatus: "status-ativo"
  },
  {
    nome: "Robótica",
    area: "Automação e Eletrônica",
    conteudos: "Microcontroladores, sensores, atuadores, cinemática e eletrônica básica",
    ferramentas: "Arduino, ESP32, C++, protoboard e impressão 3D",
    cargaHoraria: "80h",
    status: "Em andamento",
    classeStatus: "status-ativo"
  }
];

const tableBody = document.getElementById("table-body");
const searchInput = document.getElementById("search-input");
const btnStar = document.getElementById("btn-star");
const starCount = document.getElementById("star-count");

// Função para renderizar as linhas da tabela
function renderizarTabela(lista) {
  tableBody.innerHTML = "";

  if (lista.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: #57606a;">
          Nenhuma matéria encontrada para esse filtro.
        </td>
      </tr>
    `;
    return;
  }

  lista.forEach((materia) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${materia.nome}</strong></td>
      <td>${materia.area}</td>
      <td>${materia.conteudos}</td>
      <td>${materia.ferramentas}</td>
      <td>${materia.cargaHoraria}</td>
      <td><span class="status-badge ${materia.classeStatus}">${materia.status}</span></td>
    `;
    tableBody.appendChild(tr);
  });
}

// Filtro de pesquisa em tempo real
searchInput.addEventListener("input", (event) => {
  const termo = event.target.value.toLowerCase();
  const filtradas = materias.filter((m) =>
    m.nome.toLowerCase().includes(termo) ||
    m.area.toLowerCase().includes(termo) ||
    m.conteudos.toLowerCase().includes(termo) ||
    m.ferramentas.toLowerCase().includes(termo)
  );
  renderizarTabela(filtradas);
});

// Interação do botão Star (estilo GitHub)
let starred = false;
btnStar.addEventListener("click", () => {
  let count = parseInt(starCount.textContent, 10);
  if (!starred) {
    starCount.textContent = count + 1;
    btnStar.style.backgroundColor = "#eaeef2";
    starred = true;
  } else {
    starCount.textContent = count - 1;
    btnStar.style.backgroundColor = "#f6f8fa";
    starred = false;
  }
});

// Inicializa a tabela ao carregar a página
renderizarTabela(materias);
