import Client from '../../models/appModels/Client';
import { Request, Response } from "express";
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';



export default async function deleteClient(req: Request, res: Response) {

    const clientId = req.params.id;
    try {
        const response = await Client.destroy({where:{id:clientId}});
        if(response){
            ResponseSender(res, 200, 'Client deleted SuccessFully...', {response});
        }
    } catch (error: any) {
        ResponseSender(res, 500, error.message, {});
    }

}