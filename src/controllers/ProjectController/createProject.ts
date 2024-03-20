import { Request, Response } from 'express';

import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';
import Project from '../../models/appModels/Project';



export default async function createProject(req:Request,res:Response){
    try {

        const response = await Project.create(req.body);

        if(response){
            ResponseSender(res,200,'Project Created Successfully',{response});
        }
        
    } catch (error:any) {
        ResponseSender(res,500,error.message,{});
    }
} 
