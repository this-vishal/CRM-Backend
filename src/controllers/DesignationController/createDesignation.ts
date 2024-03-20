
import { Request, Response } from 'express';
import Designation from '../../models/appModels/Designation';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';



export default async function createDesignation(req:Request,res:Response){
    try {

        const response = await Designation.create(req.body);

        if(response){
            ResponseSender(res,200,'Designation Created Successfully',{response});

        }
        
    } catch (error:any) {
        ResponseSender(res,500,error.message,{});
    }
} 
