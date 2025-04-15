const fs = require('fs');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'csv-files', 'dados.csv');

const addDataToCSV = (req, res) => {
  const { id, nome, idade, estado } = req.body;

  if (!id || !nome || !idade || !estado) {
    return res.status(400).send('Todos os campos (id, nome, idade, estado) são obrigatórios.');
  }

  const newLine = `"${id}","${nome}","${idade}","${estado}"\n`;


  fs.appendFile(csvFilePath, newLine, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erro ao adicionar os dados.');
    }

    res.send('Dados adicionados com sucesso!');
  });
};

const getDataFromCSV = (req, res) => {
  res.send('GET funcionando — rota em construção');
};

const editDataInCSV = (req, res) => {
  res.send('PUT funcionando — rota em construção');
};

const deleteDataFromCSV = (req, res) => {
  res.send('DELETE funcionando — rota em construção');
};

// Exporta tudo
module.exports = {
  addDataToCSV,
  getDataFromCSV,
  editDataInCSV,
  deleteDataFromCSV
};
