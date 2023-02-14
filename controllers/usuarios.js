const { response, request } = require('express')
const usuariosGet = (req = request, res = response) => {
  const params = req.query;
  res.json({
    msg: "getApi",
    params
  })
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "postApi",
    nombre,
    edad
  })
};
const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  

  res.json({
    msg: "putApi",
    id
  })
};
const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "deleteApi"
  })
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPut
}