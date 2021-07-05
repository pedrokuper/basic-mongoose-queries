class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUsers(req, res) {
    const users = await this.userService.getUsers();
    //El método getUsers del controller llama al método getUsers del service.  El método getUsers del service se declara como una variable de clase. A su vez el método getUsers del servicio hace una .find() sobre nuestra base de datos.
    return res.json(users);
  }

  addUser(req, res) {
    const { name, age, hobbies } = req.body;
    const { token } = req.headers;
    const user = {
      hobbies,
      age,
      name,
    };

    if (age && name) {
      if (token == "r2d2") {
        this.userService.addUser(user);
        res.sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    } else {
      res.send("Algunos campos no han sido completados").status(400);
    }
  }

  deleteUser(req, res) {
    const { id } = req.params;

    if (id) {
      if (req.headers.token === "r2d2") {
        this.userService.deleteUser(id);
        return res.send("Usuario borrado exitosamente").status(200);
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(400);
    }
  }
}

module.exports = UserController;
