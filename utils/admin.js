import { User } from "../models/index.js";
import bcrypt from 'bcrypt';

export async function createDefaultAdmin(){
    const admin = await User.findOne({where: {email: 'admin@admin.com'}});
    if(!admin){
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD , 10);
        await User.create({
            name: 'Admin',
            email: 'admin@admin.com',
            password: hashedPassword,
            isAdmin: true
        });
    }
}