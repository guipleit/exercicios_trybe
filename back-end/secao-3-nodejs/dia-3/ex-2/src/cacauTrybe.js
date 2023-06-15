const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const chocolates = await getAllChocolates();
  return chocolates.find((chocolate) => chocolate.id === Number(id));
};

const getChocolatesByBrandId = async (brandId) => {
  const chocolates = await getAllChocolates();
  return chocolates.filter((chocolate) => chocolate.brandId === Number(brandId));
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrandId,
};