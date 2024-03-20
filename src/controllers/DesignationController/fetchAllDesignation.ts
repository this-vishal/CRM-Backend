
import { Request, Response } from 'express';
import Designation from '../../models/appModels/Designation';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';



export default async function fetchAllDesignation(req:Request,res:Response){

        

    try {

        const response = await Designation.findAll();

        if(response){
            ResponseSender(res,200,'Designation Fetched Successfully',{response});

        }
        else{
            ResponseSender(res,200,'Designation does not Exist..',{response});
        }
        
    } catch (error:any) {
        ResponseSender(res,500,error.message,{});
    }
} 
