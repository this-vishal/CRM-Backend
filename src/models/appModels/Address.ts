import { DataTypes, Model } from "sequelize";
import sequelize from "../../databaseConfig/config";


interface Address extends Model {

    city: string,
    country: string,
    state: string,
    zip: string,
    street: string
}


const Address = sequelize.define<Address>("Address", {

    city: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    street: {
        type: DataTypes.STRING,
    },
    zip: {
        type: DataTypes.STRING,
    }


}, { timestamps: true })



export default Address;