// const { Router } = require('express');
import {Router} from 'express';
const routes = new Router();

routes.get('/', (reqw, res) => {
    res.send("Jeferson em Rota Raiz")
})

routes.get("/Contatos", (reqw, res) => {
  res.send("Jeferson em Rota em Contatos");
});
// module.exports = routes;
export default routes;