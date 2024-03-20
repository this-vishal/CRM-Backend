import { DataTypes, Model } from "sequelize";
import sequelize from "../../databaseConfig/config";





interface ProjectType  extends Model{
    name:string,
    description:string,
    startDate:string,
    endDate:string,
}


const Project = sequelize.define<ProjectType>('Project',{


    name:{
        type:DataTypes.STRING,
        unique:true,
    },
    description:{
        type:DataTypes.STRING,
    },
    startDate:{
        type:DataTypes.STRING,
    },
    endDate:{
        type:DataTypes.STRING,
    },
})



export default Project;
