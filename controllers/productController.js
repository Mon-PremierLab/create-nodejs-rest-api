const Products = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({message: "Une erreur s'est produit lors de la récupérations des utilisateurs."});
  }
};

exports.createProduit = async(req, res) => {
  try {
    const newProduct = await req.body;
    User.create(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    if(error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueContrainError"){
        const errors = error.errors.map(err => err.message);
        res.status(400).json({error});
    } else {
        res.status(500).json({message: "Une erreur s'est produit lors de la création du produit".});
    }
  }
};


exports.updateProduct =
