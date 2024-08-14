const express = require('express');
const app = express();
const port = 5000;


app.use((req, res, next) => {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();n

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next(); // Heures d'ouverture
    } else {
        res.send('L\'application est disponible uniquement pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h).');
    }
});

app.use(express.static('public'));

// Routes pour les pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/views/services.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});