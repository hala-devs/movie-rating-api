import jwt from 'jsonwebtoken';
export function generateToken(id){
    return jwt.sign({id} , process.env.JWT_SECRET)
}


export function asyncHandler(fn){
    return (req , res , next) => {
        return Promise.resolve(fn(req , res , next)).catch(next);
    }
}