import { DataTypes, Model } from "sequelize";
import sequelize from "../../databaseConfig/config";


interface CompanyType extends Model{

    companyName:string,
    website:string,
    email:string,
    
}


const Company = sequelize.define<CompanyType>('Company',{

    companyName:{
        type:DataTypes.STRING,
    },
    website:{
        type:DataTypes.STRING, 
    },
    email:{
        type:DataTypes.STRING, 
    },
})




export default Company;



