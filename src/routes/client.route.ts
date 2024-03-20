
import express from "express";
import createClient from "../controllers/ClientController/createClient";
import updateClient from "../controllers/ClientController/updateClient";
import fetchClientById from "../controllers/ClientController/fetchClientById";
import fetchAllClients from "../controllers/ClientController/fetchAllClient";
import deleteClient from "../controllers/ClientController/updateClient";


const route = express.Router();




route.post('',createClient);
route.put('/:id',updateClient);
route.get('/:id', fetchClientById);
route.get('',fetchAllClients);
route.delete('/:id',deleteClient)



export  default route;



