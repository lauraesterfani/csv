// src/controller.js
const getDataFromCSV = (req, res) => {
    res.send('Dados do CSV');
  };
  
  const addDataToCSV = (req, res) => {
    res.send('Dados adicionados');
  };
  
  const editDataInCSV = (req, res) => {
    res.send(`Dados com ID ${req.params.id} editados`);
  };
  
  const deleteDataFromCSV = (req, res) => {
    res.send(`Dados com ID ${req.params.id} deletados`);
  };
  
  module.exports = {
    getDataFromCSV,
    addDataToCSV,
    editDataInCSV,
    deleteDataFromCSV
  };
  