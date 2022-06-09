import bcrypt from "bcryptjs";
import User from "../models/User";

class UserController {
  async store(req, res) {
    //verifica se o email ja foi cadastrado com isso faz a pesquisa
    const emailExiste = await User.findOne({ email: req.body.email });
    if (emailExiste) {
      return res.status(400).json({
        error: true,
        code: 102,
        message: "Error: Este e-mail já está cadastrado!",
      });
    }
    //se (!diferente ou typof == indefinido ou == null)
    if (
      !req.body.name ||
      typeof req.body.name == undefined ||
      req.body.name == null
    ) {
      return res.status(400).json({
        error: true,
        code: 103,
        message: "Error: Necessário enviar o name com valor!",
      });
    }

    if (
      !req.body.email ||
      typeof req.body.email == undefined ||
      req.body.email == null
    ) {
      return res.status(400).json({
        error: true,
        code: 104,
        message: "Error: Necessário enviar o email com valor!",
      });
    }

    if (
      !req.body.password ||
      typeof req.body.password == undefined ||
      req.body.password == null
    ) {
      return res.status(400).json({
        error: true,
        code: 105,
        message: "Error: Necessário enviar o password com valor!",
      });
    }
    //criptografar a senha
    let dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 8);    
    const user = await User.create(dados, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          code: 101,
          message: "Error: Usuário não foi cadastrado com sucesso!",
        });

      return res.status(200).json({
        error: false,
        message: "Usuário cadastrado com sucesso!",
        dados: user,
      });
    });
  }
}

export default new UserController();