import { Movie, Review, User } from "../models/index.js";


export async function createReview(req , res) {
    const review = await Review.create({
        rating: req.body.rating,
        text: req.body.text,
        movieId: +req.params.movieId,
        userId: req.user.id,
    });
    res.status(201).json(review);
}

export async function getReviewsById(req , res) {
    const reviews = await Review.findAll({
        where: {movieId: +req.params.movieId},
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id' , 'name']
            },
             {
                model: Movie,
                as: 'movie',
                attributes: ['id' , 'name']
            },
        ]
    })
    res.json(reviews);
}