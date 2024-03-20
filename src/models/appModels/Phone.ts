import { DataTypes, Model } from "sequelize";
import sequelize from "../../databaseConfig/config";



interface PhoneType extends Model {
    primaryPhone: string,
    alternatePhone: string,
}


const Phone = sequelize.define<PhoneType>('Phone', {

    primaryPhone: {
        type: DataTypes.STRING
    },
    alternatePhone: {
        type: DataTypes.STRING
    }
})

export default Phone
