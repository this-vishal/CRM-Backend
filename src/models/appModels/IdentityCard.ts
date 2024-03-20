import { DataTypes, Model } from "sequelize";
import sequelize from "../../databaseConfig/config";




interface IdentityCardType extends Model{
    identityType:string,
    identityNumber:string

}




const IdentityCard =  sequelize.define<IdentityCardType>('IdentityCard' , {

    identityType :{
        type:DataTypes.STRING

    },
    identityNumber :{
        type:DataTypes.STRING
    }


})


export default IdentityCard;





