import express from 'express';

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
