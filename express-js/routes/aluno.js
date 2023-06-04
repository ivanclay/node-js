var express = require('express');
var router = express.Router();

let alunos = [
    {id: 0, nome: 'Maria'},
    {id: 1, nome: 'José'},
    {id: 2, nome: 'Joao'},
    {id: 3, nome: 'Marcelo'},
]

router.get("/alunos", (req, res) => {

    res.json(JSON.stringify(alunos));
});

router.get("/aluno", (req, res) => {
//   console.log(req.body);
  let aluno = alunos[req.body.id];
  console.log(aluno);
  res.json(aluno);
});

router.get("/alunoQuery", (req, res) => {
      let aluno = alunos[req.query.id];
      console.log(aluno);
      res.json(aluno);
    });

router.get("/aluno/:id", (req, res) => {
    //   console.log(req.body);
      let aluno = alunos[req.params.id];
      console.log(aluno);
      res.json(aluno);
    });

module.exports = router;    