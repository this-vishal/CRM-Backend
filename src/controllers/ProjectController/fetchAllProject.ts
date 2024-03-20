import { Request, Response } from 'express';

import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';
import Project from '../../models/appModels/Project';
import Team from '../../models/appModels/Team';
import Client from '../../models/appModels/Client';



export default async function fetchAllProject(req:Request,res:Response){
    try {

        const response = await Project.findAll({include:[{model:Team ,as:'team'},{model:Client,as:'client'}]});
        


        if(response){
            ResponseSender(res,200,'Project Fetched Successfully',{response});
        }
        else{
            ResponseSender(res,200,'Project does not Exist !',{response});
        }
        
    } catch (error:any) {
        ResponseSender(res,500,error.message,{});
    }
} 
