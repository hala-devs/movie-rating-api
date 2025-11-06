import express from "express";
import { asyncHandler } from "../utils/helpers.js";
import * as moviesController from "../controllers/movies.controller.js";
import { authenticateAdmin } from "../middlewares/admin.middleware.js";
import { authenyicateUser } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post(
  "/",
  authenyicateUser,
  asyncHandler(authenticateAdmin),
  asyncHandler(moviesController.createMovie)
);
router.put(
  "/:id",
  authenyicateUser,
  asyncHandler(authenticateAdmin),
  asyncHandler(moviesController.updateMovie)
);
router.delete(
  "/:id",
  authenyicateUser,
  asyncHandler(authenticateAdmin),
  asyncHandler(moviesController.deleteMovie)
);
router.get(
  "/",
  asyncHandler(moviesController.getAllMovie)
);
router.get(
  "/:id",
  asyncHandler(moviesController.getMovieById)
);

export default router;
