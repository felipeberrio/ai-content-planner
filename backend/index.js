const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

dotenv.config();
console.log("KEY:", process.env.OPENAI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/generate', async (req, res) => {
  const { topic } = req.body;

  const prompt = `Genera una idea creativa y original para una publicación de contenido en redes sociales sobre el tema "${topic}". Hazlo corto, impactante y útil para atraer audiencia.`;

  try {
    console.log("🧠 Prompt enviado a OpenAI:", prompt);
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 80,
        temperature: 0.9
      })
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
    res.json({ idea: data.choices[0].message.content.trim() });
    } else {
    console.error("❌ Respuesta inesperada de OpenAI:", data);
    res.status(500).json({ error: 'Respuesta inválida de OpenAI' });
    }

    } catch (error) {
    console.error("❌ Error al hacer la solicitud a OpenAI:");
    console.error(error);

    // Si la respuesta tiene un mensaje de error más detallado
    if (error.response) {
        error.response.json().then(err => {
        console.error("Detalle del error:", err);
        });
    }

    res.status(500).json({ error: 'Error generando la idea con IA' });
    }
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
