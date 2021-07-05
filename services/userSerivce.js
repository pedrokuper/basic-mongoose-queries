const User = require("../models/userModel");

/*
  Los métodos se llaman desde el modelo. En este caso userModel, referenciado en User. 
  Tenemos 1 modelo, que está basado en un schema, que define la data de la collection.
  Si necesitamos otra collection, creamos otro modelo, basado en su propio schema. 
  */

class UserService {
  getUsers() {
    const query = User.find().exec();
    return query;
  }

  getUsersById(id) {
    const query = User.findOne({ _id: id }).exec();
    return query;
  }

  updateUser(id, data) {
    const user = User.findByIdAndUpdate({ _id: id }, data).exec();
    return user;
    /*Modifica un único objeto en base al resultado del filtro con el valor de "data". Los campos que no se encuentran en data, no se modifican.
    En el documento que tenga este ID, quiero que este campo ahora tenga este valor.
    Pasamos el id o el índice, y le pasamos la data a actualizar.
    La sintaxis sería:   Model.findOneAndUpdate(FILTER,DATA). 
    */
  }

  deleteUser(id) {
    /*
    Model.deleteOne(FILTER)
    Borra una única entrada que cumpla con la condición pactada en el filtro.
    */
    const query = User.deleteOne({ _id: id }, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Succesful deletion");
    });
    return query;
  }

  /*
  Modal.save(DATA)
  Crea una netrada en nuestra base de datos con la data provista.
  Para crear un objeto en nuestra base de datos tenemos que hacer un new del modelo. 
  Le pasamos la data con la que se tiene que generar un nuevo user. Llena el template que generamo dsd nuestro schema. 
  Una vez que eso matchea, usamos el método save() de mongoose, y genera una nueva entrada en nuestra base de datos. (Equivalente a Insert Document en Robo3T)
  */

  addUser(data) {
    const newUser = new User(data);
    return newUser.save();
  }
}

module.exports = UserService;
