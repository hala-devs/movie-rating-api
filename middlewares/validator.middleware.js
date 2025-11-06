import { validationResult } from "express-validator"

export function validateRequest(req, res, next) {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }

    return res.status(400).json({ errors: errors.array() })
}