import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { initDB } from './utils/db.js';
import { User } from './models/user.model.js';
import authRouter from './routes/auth.routes.js';
import moviesRouter from './routes/movies.routes.js';
import reviewsRouter from './routes/reviews.routes.js';
import watchListRouter from './routes/watchlist.routes.js';
import { createDefaultAdmin } from './utils/admin.js';
initDB().then(() => {
    createDefaultAdmin();
}).catch((e) => console.log(e))

const app = express();
app.use(morgan('dev'));
app.use(express.json());
const port = process.env.PORT || 3000;


app.get('/' , (req , res) => {
    res.send("Hello World");
});

app.use('/api/auth' , authRouter);
app.use('/api/movies' , moviesRouter);
app.use('/api/reviews' , reviewsRouter);
app.use('/api/watchlist' , watchListRouter)

app.get('/users' , async (req , res) => {
    const users = await User.findAll();
    res.json(users);
});

app.use((req , res) => {
    res.status(404).json({error: "Not Found!"})
});

app.use((err , req , res , next) => {
    console.error(err.message);
    res.status(500).json({error: 'Something went wrong'});
});

app.listen(port , () => {
    console.log(`Server running for port ${port}`);
});

