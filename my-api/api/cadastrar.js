const mysql = require('mysql2');
const cors = require('cors'); // Importando o cors

// Configuração da conexão com o MySQL no AlwaysData
const connection = mysql.createConnection({
  host: 'mysql-xitique.alwaysdata.net',
  user: 'xitique',
  password: 'Acossa@824018...84',
  database: 'xitique_cash'
});

module.exports = (req, res) => {
  if (req.method === 'POST') {
    // Pega os dados do corpo da requisição
    const { nome, turma } = req.body;
    
    // Insere os dados no banco
    const query = 'INSERT INTO alunos (nome, turma) VALUES (?, ?)';
    connection.query(query, [nome, turma], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
      }
      res.status(200).json({ message: 'Usuário cadastrado com sucesso!', id: results.insertId });
    });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};
