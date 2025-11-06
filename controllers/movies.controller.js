import { Movie } from "../models/index.js";

export async function createMovie(req , res){
    const movie = await Movie.create({
        name: req.body.name,
        genre: req.body.genre,
         releaseDate: req.body.releaseDate,
    });
    res.status(201).json(movie);
}
export async function updateMovie(req , res){
    const movie = await Movie.findByPk(req.params.id);
    if(!movie){
        return res.status(404).json({message: 'Movie Not Found!'});
    }
    movie.name = req.body.name;
    movie.genre = req.body.genre;
    movie.releaseDate = req.body.releaseDate;
    await movie.save();
    res.json(movie);
}

export async function deleteMovie(req , res){
    const movie = await Movie.findByPk(req.params.id);
    if(!movie){
        return res.status(404).json({message: 'Movie Not Found!'});
    }
  await  movie.destroy();
    res.json({message: 'Movie deleted'})
}

export async function getAllMovie(req , res){
    const movies = await Movie.findAll();
    res.json(movies);
}

export async function getMovieById(req , res){
    const movies = await Movie.findByPk(req.params.id);
    if(!movies){
        return res.status(401).json({message: 'Movie Not Found!'})
    }
    res.json(movies);
}
