const express = require('express')
var cors = require('cors')
const produtoRoutes = require('./src/routes/produtoRoutes.js')

const app = express()
const port = 3000

app.use(cors({origin:'http://localhost:13002'}));
app.use(express.json());

app.use(produtoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})