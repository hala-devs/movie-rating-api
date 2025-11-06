import { Movie } from "./movies.model.js";
import { Review } from "./reviews.model.js";
import { User } from "./user.model.js";
import { WatchList } from "./watchlist.model.js";

const models = {User, Movie , Review , WatchList};

Object.keys(models).forEach((modelName) => {
    if(models[modelName].associate){
        models[modelName].associate(models);
    }
})

export { User , Movie , Review , WatchList};