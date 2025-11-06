import { body } from "express-validator";

export function loginValidator() {
    return [
        body('email').notEmpty().withMessage('Email is required'),
        body('email').isEmail().withMessage('Email is invalid'),
        body('password').notEmpty().withMessage('Password is required')
    ]
}