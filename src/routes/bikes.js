const {Router} = require('express');
const router = Router();
const _ = require('underscore');

var bikes = require('../bikes.json');

router.get('/', (req, res) => {
    res.send(req.body);
});

// Post: In the post i use underscore.js library to go through a json array
router.post('/', (req, res) => {
    const {brand, reference, size, purpose} = req.body;
    if(brand && reference && size && purpose){
        const id = bikes.length + 1;
        res.send(id);
    }else{
        res.send("Uncomplete data");
    }
});

// router.put('/', (req, res) => {
//     _.each(bikes, (bike, i) => {// iterating over the bikes.json array
//     })
// });

module.exports = router;