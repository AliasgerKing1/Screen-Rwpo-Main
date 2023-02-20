const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  Admin.find({ username: username }, (error, result) => {
    if (result.length == 1) {
      if (result[0].password == sha1(password)) {
        let obj = { name: result[0].name, id: result[0]._id };
        let token = jwt.sign(obj, "Sociala Web");
        res.send({ success: true, token: token });
      } else {
        res.send({ success: false, errType: 2 });
      }
    } else {
      res.send({ success: false, errType: 1 });
    }
  });
});

routes.get("/", (req, res) => {
  Admin.find({}, (error, result) => {
    res.send(result);
  });
});
routes.get("/:id", (req, res) => {
  let id = req.params.id;
  Admin.find({ _id: id }, (error, result) => {
    res.send(result);
  });
});
routes.delete("/:id", (req, res) => {
  let id = req.params.id;
  Admin.deleteMany({ _id: id }, (error) => {
    res.send({ success: true });
  });
});
routes.put("/:id", (req, res) => {
  let id = req.params.id;
  Admin.updateMany({ _id: id }, req.body, (error) => {
    res.send({ success: true });
  });
});

module.exports = routes;
