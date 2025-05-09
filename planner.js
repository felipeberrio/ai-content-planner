const ideas = {
  athlete: [
    "Graba tu entrenamiento más intenso del día.",
    "Comparte una lección mental que te ha enseñado el deporte.",
    "Haz un video de tu progreso físico mes a mes."
  ],
  music: [
    "Comparte el beat que te está inspirando esta semana.",
    "Haz un mini video tocando algo en vivo o mezclando.",
    "Cuenta cómo una canción te cambió la vida."
  ],
  engineer: [
    "Explica un concepto técnico difícil de forma simple.",
    "Muestra una solución creativa a un problema real.",
    "Comparte tu espacio de trabajo o herramientas favoritas."
  ],
  travel: [
    "Haz un top 3 de lugares que te marcaron.",
    "Muestra cómo empacas tu mochila para un viaje.",
    "Cuenta una historia loca de tu viaje más inesperado."
  ],
  creator: [
    "Haz un behind-the-scenes de cómo grabas o editas.",
    "Comparte tus herramientas favoritas para crear contenido.",
    "Explica por qué empezaste a crear contenido y qué buscas lograr."
  ],
  learner: [
    "Cuenta lo más valioso que aprendiste esta semana.",
    "Recomienda un libro, curso o canal que te está ayudando.",
    "Haz un mini tutorial explicando algo que acabas de entender."
  ],
  general: [
    "Haz una reflexión rápida sobre tu día.",
    "Lanza una pregunta incómoda o profunda a tu audiencia.",
    "Comparte una meta que te da miedo pero vas a perseguir."
  ]
};

function generateIdea() {
  const typeInput = document.getElementById("contentType").value.toLowerCase();
  const area = document.getElementById("resultArea");

  const ideasArray = ideas[typeInput] || ideas["general"];
  const idea = ideasArray[Math.floor(Math.random() * ideasArray.length)];

  area.textContent = `"${idea}"`;
}
