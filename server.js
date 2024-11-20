const express = require('express')
var cors = require('cors')
const produtoRouter = require('./src/routes/produtoRouter.js')

const app = express()
const port = 5000

app.use(cors({origin:'http://localhost:3002'}));
app.use(express.json());

app.use(produtoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})