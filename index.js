import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import ollama from 'ollama';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/ask-query', async (req, res) => {
    const { query } = req.body;
  
    try {
      const response = await ollama.chat({
        model: 'mrkamalkishor',
        messages: [{ role: 'user', content: query }],
      });
      res.json(JSON.parse(response.message.content?.replace("Response: ","")));
    } catch (error) {
      res.status(500).send({ error: 'Error interacting with the model' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 