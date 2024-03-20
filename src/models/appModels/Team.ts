
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../databaseConfig/config';

interface TeamType extends Model{
    teamId:string
    teamName:string,
    roleName:string,
    description:string
}

const Team = sequelize.define<TeamType>('Team',{

    teamId:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false,
    },
    teamName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
    }

}) 

export default Team;

