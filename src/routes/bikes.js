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
    const id = req.params.id;
    console.log(req.body);
    if(brand && reference && size && purpose){
        _.each(bikes, (bike, i) => {
            if(id == bike.id){
                bike.brand = brand;
                bike.reference = reference;
                bike.size = size;
                bike.purpose = purpose;
                res.json(bikes);
            }
        });
    }else{
        res.json({"Error": "Incomplete info"});
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    _.each(bikes, (bike, i) => {
        if(bike.id == id){
            console.log(bike);
            bikes.splice(i, 1);
            res.json(bikes);}
        // }else{
        //     res.json({"Error": "Not valid data"});
        // }
    });
});

module.exports = router;