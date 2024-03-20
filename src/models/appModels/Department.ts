import { DataTypes, Model } from "sequelize";
import sequelize from "../../databaseConfig/config";






interface DepartmentType extends Model {

    deptId:string,

    name:string,
    description:string,
    departmentHead:string,
}



const Department = sequelize.define<DepartmentType>('Department', {

    deptId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },


    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    departmentHead: {
        type: DataTypes.STRING
    },
})





export default Department;