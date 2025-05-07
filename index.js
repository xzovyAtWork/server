require('dotenv').config();
const express = require('express')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 5000;
const authorRouter = require('./routes/authorRouter')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/authors', authorRouter);
const validRoutes = ['home', 'about', 'contact'];

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).send(err);
})

app.get(['/', '/:page'], (req, res) => {
    const page = req.params.page || 'home';

    if(validRoutes.includes(page)){
        return res.sendFile(path.join(__dirname, `${page}.html`));
    }

    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(PORT, ()=> console.log(`Server running at http://localhost:${PORT}`))