const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoute');

const PORT = 3000;

app.use(express.json());

//Route GET
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur mon API REST !'});
    });

app.use('/api/users', userRoutes)



//Démarrer le serveur 
app.listen(PORT, () => {
    console.log(`Serveur démarrer sur http://localhost:${PORT}`);
});