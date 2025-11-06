import express from 'express';
import * as reviewsController from '../controllers/reviews.controller.js';
import { authenyicateUser } from '../middlewares/auth.middleware.js';
import { asyncHandler } from '../utils/helpers.js';
const router = express.Router();

router.post('/:movieId', authenyicateUser , asyncHandler(reviewsController.createReview));
router.get('/:movieId' , asyncHandler(reviewsController.getReviewsById))

export default router;
