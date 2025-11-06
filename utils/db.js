import { Sequelize } from "sequelize";

 const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_FILE_NAME
});

export async function initDB(){
    try{
        await sequelize.sync();
        console.log('Database is running');
    }catch(e){
        console.log('Database is not working correctly');
    }
}


export default sequelize;
