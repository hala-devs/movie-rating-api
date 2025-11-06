import { User } from "../models/index.js"

export async function authenticateAdmin(req , res ,next){
    if(!req.user){
        return res.status(401).json({message: 'Unauthorized'})
    }
    const user = await User.findByPk(req.user.id);
    if(!user.isAdmin){
        return res.status(403).json({message: 'Forbidden'})
    }
    next();
}