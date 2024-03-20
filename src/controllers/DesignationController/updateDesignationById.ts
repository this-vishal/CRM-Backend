
import { Request, Response } from 'express';
import Designation from '../../models/appModels/Designation';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';



export default async function updateDesignationById(req:Request,res:Response){

        const id = req.params.id;

    try {

        const response = await Designation.update(req.body,{where:{id:id}});

        if(response){
            ResponseSender(res,200,'Designation updated Successfully',{response});

        }
        else{
            ResponseSender(res,200,'Designation does not Exist..',{response});
        }
        
    } catch (error:any) {
        ResponseSender(res,500,error.message,{});
    }
} 
