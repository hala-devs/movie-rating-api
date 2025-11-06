import { WatchList } from "../models/index.js";

export async function addTiWatchList(req , res){
    const watchlist  = await WatchList.create({
        movieId: +req.params.movieId,
        userId: req.user.id
    })
    res.status(201).json(watchlist);
}
