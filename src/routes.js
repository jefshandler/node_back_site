// const { Router } = require('express');
import { Router } from 'express';

import mongoose from 'mongoose';
import UserController from "./app/controllers/UserController";
const routes = new Router();

routes.post('/users', UserController.store);

// routes.get('/', (reqw, res) => {
//     res.send("Jeferson em Rota Raiz")
// })
// routes.get("/", async (req, res) => {
//   await User.create(
//     {
//       nome: "Cesar3",
//       email: "cesar@celke.com.br",
//       senha: "123456",
//     },
//     function (err, small) {
//       if (err)
//         return res
//           .status(400)
//           .json({ error: "Erro: Usuário não foi cadstrado com sucesso!" });

//       return res.status(200).json({ error: "Usuário cadastrado com sucesso!" });
//     }
//   );
// });


// routes.get("/Contatos", (reqw, res) => {
//   res.send("Jeferson em Rota em Contatos");
// });
// module.exports = routes;
export default routes;