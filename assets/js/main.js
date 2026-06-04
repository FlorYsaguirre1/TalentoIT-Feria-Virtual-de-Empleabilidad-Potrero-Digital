// ===== Datos de empresas participantes =====
const empresas = [
  {
    nombre: "TechNova",
    descripcion: "Empresa de desarrollo de software a medida para startups y corporaciones.",
    tags: ["Backend", "Node.js", "Python"]
  },
  {
    nombre: "DataViz AR",
    descripcion: "Especialistas en análisis de datos y visualización para el mercado latinoamericano.",
    tags: ["Data Science", "Power BI", "SQL"]
  },
  {
    nombre: "CloudSur",
    descripcion: "Infraestructura cloud y DevOps para empresas en crecimiento.",
    tags: ["AWS", "DevOps", "Docker"]
  },
  {
    nombre: "UX Studio",
    descripcion: "Diseño de experiencias digitales centradas en el usuario.",
    tags: ["UX/UI", "Figma", "Research"]
  },
  {
    nombre: "CodeBridge",
    descripcion: "Consultoría IT y desarrollo de aplicaciones móviles.",
    tags: ["React Native", "iOS", "Android"]
  },
  {
    nombre: "CiberSec BA",
    descripcion: "Seguridad informática y consultoría en ciberseguridad empresarial.",
    tags: ["Ciberseguridad", "Pentesting", "SOC"]
  }
];

// ===== Renderizar tarjetas =====
function renderEmpresas() {
  const grid = document.getElementById('empresas-grid');
  if (!grid) return;

  grid.innerHTML = empresas.map(e => `
    <div class="card">
      <h3>${e.nombre}</h3>
      <p>${e.descripcion}</p>
      <div>${e.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderEmpresas);
