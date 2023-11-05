const express = require('express');
const app = express();
const path = require('path');

const port = 80;

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
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
                },
                    2: {
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
                    3: {
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
                },
                    4: {
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
                    5: {
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
                },
                    6: {
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
                    7: {
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


const data2 = { id: 2, type: 'pure Merino'}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route that returns data
app.get('/data', (req, res) => {
    console.log('data was requested')
    res.json(data);
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});