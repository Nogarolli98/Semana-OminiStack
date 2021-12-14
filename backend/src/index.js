const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors()); 
app.use(express.json());
app.use(routes);
/* Métodos HTTP:
GET: buscar/listar uma informção do back-end
POST: criar um informaçãono back-end
PUT: alterar um informção no back-end
DELETE: deletar um informção no back-end

tipos de parametros

QUERY: Parametros nomeados enviados na rota após "?"(filtros, paginação)
ROUTE PARMS: parametros utilizados para identificar recursos
REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos


*/


app.listen(3333);