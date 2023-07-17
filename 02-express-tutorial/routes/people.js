const express = require('express');
const router = express.Router();

let { people } = require('../data');


// GET
// we will remove the '/api/people' and replace it with just '/'
// becasue the base path is in place.
router.get('/', (req, res) => {
    res.status(200).json({success:true, data: people})
})

// With JS
router.post('/', (req, res) => {
    const { name } = req.body

    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).json({sucess: true, person: name})
})


router.post('/postman', (req, res) => {
    const { name } = req.body

    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }

    res.status(201).json({sucess: true, data: [...people, name]})

})


// PUT
router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    // console.log(id, name);

    const person = people.find((person) => person.id === Number(id));

    if(!person){
        return res.status(404).json({success:false, msg:`no person with id ${id} `})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })

    res.status(200).json({success: true, data: newPeople})
})

// Delete
router.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if(!person){
        return res.status(404).json({success:false, msg:`no person with id ${req.params.id} `})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id));

    return res.status(200).json({ success: true, data: newPeople})
})

module.exports = router