import express from 'express';
import fetchAllCompany from '../controllers/CompanyController/fetchAllCompany';
import fetchCompanyById from '../controllers/CompanyController/fetchCompanyById';


const route = express.Router();


route.get('',fetchAllCompany);
route.get('/:id',fetchCompanyById);

export default route;


