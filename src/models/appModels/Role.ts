import { DataTypes, Model } from 'sequelize';
import sequelize from '../../databaseConfig/config';
import { string } from 'joi';




interface RoleType extends Model{
    id:string,
    roleName:string,
}


const Role = sequelize.define<RoleType>('Role',{

    id:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false,
    },
    roleName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING
    }

}) 

export default Role;