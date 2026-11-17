const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bot de WhatsApp AIMX en línea y funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
