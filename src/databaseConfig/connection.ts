
import { globSync } from "glob";
import Team from "../models/appModels/Team";
import Client from "../models/appModels/Client";
import Address from "../models/appModels/Address";
import Company from "../models/appModels/Company";
import Phone from "../models/appModels/Phone";
import Employee from "../models/appModels/Employee";
import IdentityCard from '../models/appModels/IdentityCard';
import Department from "../models/appModels/Department";
import Project from "../models/appModels/Project";
import Role from "../models/appModels/Role";
import Designation from "../models/appModels/Designation";






// Define the Relation Between  Models/Tables


Client.hasOne(Address, { foreignKey: 'clientId', as: 'address', onDelete: 'CASCADE' });
Address.belongsTo(Client, { foreignKey: 'clientId', onDelete: 'CASCADE' });


Client.hasOne(Company, { foreignKey: 'clientId', as: 'company', onDelete: 'CASCADE' });
Company.belongsTo(Client, { foreignKey: 'clientId', onDelete: 'CASCADE' ,as: 'client' });

Client.hasOne(Phone, { foreignKey: 'clientId', as: 'phone', onDelete: 'CASCADE' });
Phone.belongsTo(Client, { foreignKey: 'clientId', onDelete: 'CASCADE' });


Client.hasOne(IdentityCard, { foreignKey: 'clientId', as: 'identityCard', onDelete: 'CASCADE' });
IdentityCard.belongsTo(Client, { foreignKey: 'clientId', onDelete: 'CASCADE' });

Company.hasOne(Address, { foreignKey: 'companyId', as: 'address', onDelete: 'CASCADE' });
Address.belongsTo(Company, { foreignKey: 'companyId', onDelete: 'CASCADE' });


Client.hasMany(Project, { foreignKey: 'clientId', as: 'project', onDelete: 'CASCADE' });
Project.belongsTo(Client, { foreignKey: 'clientId', onDelete: 'CASCADE' ,as:'client' });


Employee.hasOne(Phone, { foreignKey: 'empId' });
Phone.belongsTo(Employee, { foreignKey: 'empId' });



Employee.hasOne(Address, { foreignKey: 'empId' });
Address.belongsTo(Employee, { foreignKey: 'empId' });

Designation.hasMany(Employee, { foreignKey: 'designationId' });
Employee.belongsTo(Designation, { foreignKey: 'designationId' });



Employee.hasOne(IdentityCard, { foreignKey: 'empId' });
IdentityCard.belongsTo(Employee, { foreignKey: 'empId' });


Department.hasMany(Employee, { foreignKey: 'departmentId' });
Employee.belongsTo(Department, { foreignKey: 'departmentId' });


Role.hasMany(Employee, { foreignKey: 'roleId' });
Employee.belongsTo(Role, { foreignKey: 'roleId' });

Project.hasOne(Team, { foreignKey: 'projectId' ,as:'team' });
Team.belongsTo(Project, { foreignKey: 'projectId' ,as:'project' })


Employee.belongsToMany(Team, { through: 'TeamMembers', foreignKey: 'employeeId' });
Team.belongsToMany(Employee, { through: 'TeamMembers', foreignKey: 'teamId' });



const syncronizeModels = async () => {

    // Synchronize the model with the database
    // It will create the tables in Database

    try {
        await Designation.sync({ force: false });

        await Role.sync({ force: false })
        await Department.sync({ force: false })
        await Employee.sync({ force: false })
        await Client.sync({ force: false });
        await IdentityCard.sync({ force: false })
        await Company.sync({ force: false })
        await Address.sync({ force: false })
        await Phone.sync({ force: false })
        await Project.sync({ force: false });
        await Team.sync({ force: false });

    } catch (error) {
        console.log(error, 'error');
    }
}


export default syncronizeModels;









