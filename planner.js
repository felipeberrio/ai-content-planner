const ideas = {
  motivacional: [
    "Comparte una frase poderosa con fondo tipo 'Reels'.",
    "Cuenta una historia personal de superación en menos de 60 segundos.",
    "Graba un día tuyo con voz en off inspiradora.",
  ],
  tecnología: [
    "Haz un resumen de una herramienta IA nueva.",
    "Comparte un truco de productividad con apps.",
    "Explica en 1 minuto una tendencia tech como ChatGPT o blockchain.",
  ],
  fitness: [
    "Graba tu rutina de mañana con música.",
    "Explica una técnica de ejercicio que pocos usan.",
    "Comparte tu transformación física con voz emocional.",
  ],
  general: [
    "Haz un detrás de cámaras de tu proceso creativo.",
    "Comparte una reflexión rápida que tu audiencia necesite oír.",
    "Lanza una pregunta profunda que invite a comentar.",
  ]
};

function generateIdea() {
  const typeInput = document.getElementById("contentType").value.toLowerCase();
  const area = document.getElementById("resultArea");

  const ideasArray = ideas[typeInput] || ideas["general"];
  const idea = ideasArray[Math.floor(Math.random() * ideasArray.length)];

  area.textContent = `"${idea}"`;
}
