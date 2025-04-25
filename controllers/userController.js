const userService = require('../services/userService');

// [Fonction pour gérer la requête GET /users. 
// Récupère tous les utilisateurs via le service et renvoie une réponse JSON.]
const getAllUsers = (req, res) => {
  // [Ajoutez votre logique ici]
};

// [Fonction pour gérer la requête GET /users/:id. 
// Récupère un utilisateur par ID via le service et renvoie une réponse JSON ou une erreur 404 si non trouvé.]
const getUserById = (req, res) => {
  // [Ajoutez votre logique ici. Utilisez req.params.id et gérez les cas où l’utilisateur n’existe pas.]
};



const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  try {
    const users = User.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({message: "Une erreur s'est produit lors de la récupérations des utilisateurs."});
  }
};

exports.createUser = (req, res) => {
  try {
    const newUser = req.body;
    User.create(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({error});
  }
};

