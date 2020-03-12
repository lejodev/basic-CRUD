const {Router} = require('express');
const router = Router();
const _ = require('underscore');

var bikes = require('../bikes.json');

router.get('/', (req, res) => {
    res.json(bikes);
});

// Post: In the post i use underscore.js library to go through a json array
router.post('/', (req, res) => {
    const {brand, reference, size, purpose} = req.body;
    if(brand && reference && size && purpose){
        const id = bikes.length + 1;
        const newBike = {...req.body, id};
        bikes.push(newBike);
        res.json(bikes);
    }else{
        res.send("Uncomplete data");
    }
});

router.put('/:id', (req, res) => {
    const {brand, reference, size, purpose} = req.body;
    const {id} = req.params;
    _.each(bikes, (bike, i) => {// iterating over the bikes.json array
        console.log(bike.id == id);
        if(bike.id == id){
            res.json("Same id");
        }
    });
});

module.exports = router;