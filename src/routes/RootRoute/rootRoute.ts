
import clientRoute from '../client.route';
import companyRoute from '../company.route';
import express from 'express'

const API = express.Router();


// API.use('/role',roleRoute);
// API.use('/designation',designationRoute);
// API.use('/employee',employeeRoute);
API.use('/client',clientRoute);
API.use('/company',companyRoute )




export default API;




