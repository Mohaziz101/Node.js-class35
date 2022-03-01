const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from backend to frontend!");
});

app.use(express.json());

app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;
    res.json(cityName);
});



app.listen(port, () => console.log("Server started."));