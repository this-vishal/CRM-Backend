import Client from '../../models/appModels/Client';
import { Request, Response } from "express";
import IdentityCard from "../../models/appModels/IdentityCard";

import Address from "../../models/appModels/Address";
import Phone from "../../models/appModels/Phone";
import Company from "../../models/appModels/Company";
import Project from '../../models/appModels/Project';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';



export default async function fetchClientById(req: Request, res: Response) {
    const clientId = req.params.id;
    try {

        const clients = await Client.findByPk(clientId, {
            include: [{ model: IdentityCard, as: 'identityCard' },
            { model: Address, as: 'address' },
            { model: Phone, as: 'phone' },
            { model: Company, as: 'company' },
            { model: Project, as: 'project' }]
        });

        if (clients) {
          

        }
        else{
            ResponseSender(res, 200, 'Client Id Does Not Exist !', {});
        }
    } catch (error: any) {
        ResponseSender(res, 500, error.message, {});
    }
}