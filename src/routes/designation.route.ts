import express from 'express';
import createDesignation from '../controllers/DesignationController/createDesignation';
import fetchDesignationById from '../controllers/DesignationController/fetchDesignationById';
import deleteDesignationById from '../controllers/DesignationController/deleteDesignationById';
import fetchAllDesignation from '../controllers/DesignationController/fetchAllDesignation';
import updateDesignationById from '../controllers/DesignationController/updateDesignationById';

const route = express.Router();






route.post('',createDesignation);
route.get('/:id',fetchDesignationById);
route.delete('/:id', deleteDesignationById);
route.get('',fetchAllDesignation)
route.put('/:id', updateDesignationById)





export default route;

