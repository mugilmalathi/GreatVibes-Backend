const express = require("express");

const router = express.Router();

const Movie = require("../model/movie.model");

router.post("/movies", async(req, res)=>{

    try{
        const movies = await Movie.create(req.body);
        return res.status(201).send(movies)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("/movies", async(req, res)=>{

    try{
        const movies = await Movie.find().lean().exec();
        return res.status(201).send(movies)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/movies/id", async(req, res)=>{

    try{
        const movies = await Movie.findByIdAndUpdate(req.body, {new: true})
        return res.status(201).send(movies)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/movies/id", async(req, res)=>{

    try{
        const movies = await Movie.findByIdAndDelete();
        return res.status(201).send(movies)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;