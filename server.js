const express = require('express');
const path = require('path');
const cors = require('cors')
const morgan = require('morgan');
const { stringify } = require('querystring');

const app = express();
const port = 80;

//app.use(morgan('combined'))
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'yarn-client/dist')));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

// Dummy data to send as response
const data = {
                    0: {
                    id: 0,
                    type: 'Pure Merino',
                    brand: 'Viking',
                    stick: 4,
                    thickness: 22,
                    entities: [
                        {color: "Hvit", amount: 5},
                        {color: "Gul", amount: 5},
                        {color: "Blå", amount: 3},
                        {color: "Hvit", amount: 5},
                        {color: "Gul", amount: 5},
                        {color: "Blå", amount: 3}
                    ]
                },
                    1: {
                    id: 1,
                    type: 'Pure Merino',
                    stick: 4,
                    brand: 'Viking',
                    thickness: 22,
                    entities: [
                        {color: "Svart", amount: 1},
                        {color: "Gul", amount: 3},
                        {color: "Svart", amount: 1},
                        {color: "Gul", amount: 3},
                        {color: "Svart", amount: 1},
                        {color: "Gul", amount: 3}
                    ]

                }
            }

app.get('/', (req, res) => {
    console.log('hellO?')
    res.sendFile(__dirname + '/yarn-client/dist/index.html');
}); 
app.get('/vue', (req, res) => {
    res.sendFile(__dirname + '/yarn-client/dist/index.html');
});

// Route that returns data
app.get('/data', (req, res) => {
    console.log('data was requested')
    console.log(data)
    res.json(data);
});
app.post('/add_yarn', (req, res) => {
    clientData = req.body
    var newKey = Object.keys(data).length
    var newYarnObject = {
            id: newKey,
            type: clientData.type,
            brand: clientData.brand,
            stick: clientData.stick,
            thickness: clientData.thickness,
            entities: []
        }
     
    data[newKey] = newYarnObject
    res.json({message: "Nytt garn ble lagt til"});
});


// Start the Express server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});