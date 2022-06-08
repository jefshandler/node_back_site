import mongoose from "mongoose";

class DataBase {
  constructor() {
    this.mongoDataBase();
  }
  mongoDataBase() {
    this.mongoDBConnection = mongoose.connect("mongodb://localhost/celke", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Conexão com MongoDb realizado com sucesso!");
      })
      .catch((erro) => {
        console.log(
          "Erro: Conexão com MongoDb não foi realizado com sucesso: " + erro
        );
      });
  }
}

export default new DataBase();
