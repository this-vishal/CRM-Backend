import { DataTypes, Model } from "sequelize";
import sequelize from "../../databaseConfig/config";



interface ClientType extends Model {
    [x: string]: any;
    name:string,
    email:string,
    dob:string,
    companyName:string,
    

}


const Client = sequelize.define<ClientType>('Client',{


    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    dob:{
        type:DataTypes.STRING
    },
   
});

export default Client;

 






