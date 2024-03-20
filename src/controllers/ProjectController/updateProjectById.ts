import { Request, Response } from 'express';

import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';
import Project from '../../models/appModels/Project';
import Team from '../../models/appModels/Team';
import Client from '../../models/appModels/Client';



export default async function updateProjectById(req:Request,res:Response){

    const id = req.params.id;
    
    try {

        const response = await Project.update(req.body , {where:{id:id}});

        if(response){
            ResponseSender(res,200,'Project Updated Successfully',{response});
        }
        else{
            ResponseSender(res,200,'Project does not Exist !',{response});
        }
        
    } catch (error:any) {
        ResponseSender(res,500,error.message,{});
    }
} 
