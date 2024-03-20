
import { Request, Response } from 'express';
import Designation from '../../models/appModels/Designation';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';
import Project from '../../models/appModels/Project';
import Team from '../../models/appModels/Team';



export default async function deleteProjectById(req:Request,res:Response){

        const id = req.params.id;

    try {

        await Team.destroy({where:{projectId:id}});

        const response = await Project.destroy({where:{id:id}});

        if(response){
            ResponseSender(res,200,'Project Deleted Successfully',{response});
        }
        else{
            ResponseSender(res,200,'Project does not Exist..',{response});
        }
        
    } catch (error:any) {
        ResponseSender(res,500,error.message,{});
    }
} 
