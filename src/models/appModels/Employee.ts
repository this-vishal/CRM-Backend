

import { DataTypes, Model } from "sequelize";
import sequelize from "../../databaseConfig/config";




interface EmployeeType extends Model{

    name:string,
    email:string,
    dob :string,
    empId :string,
    joiningDate:string,

}


const Employee  = sequelize.define<EmployeeType>('Employee',{
    name :{
        type:DataTypes.STRING,
        
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
    },
    dob :{
        type:DataTypes.STRING,  
    },
    empId :{
        type:DataTypes.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false
        
    },
    joiningDate:{
        type:DataTypes.STRING,
    },
})

export  default Employee;