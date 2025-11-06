import express from 'express';
import { authenyicateUser } from '../middlewares/auth.middleware.js';
import { asyncHandler } from '../utils/helpers.js';
import * as watchListController from '../controllers/watchlist.controller.js'
const router = express.Router();


router.post('/:movieId' , authenyicateUser , asyncHandler(watchListController.addTiWatchList))

export default router