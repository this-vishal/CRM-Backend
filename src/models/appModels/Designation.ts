import { DataTypes, Model } from "sequelize";
import sequelize from "../../databaseConfig/config";




interface DesignationType extends Model{

    designationName:string,
    description:string

}

const Designation  = sequelize.define<DesignationType>('Designation',{
    designationName :{
        type:DataTypes.STRING,
        
    },
    description:{
        type:DataTypes.STRING,
    }
})

export  default Designation;