const app = require('./app');

const PORT = 3005

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

