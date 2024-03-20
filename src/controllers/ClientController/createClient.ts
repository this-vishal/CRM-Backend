import { Request, Response } from "express";
import Client from '../../models/appModels/Client';
import IdentityCard from '../../models/appModels/IdentityCard';
import Address from "../../models/appModels/Address";
import Company from "../../models/appModels/Company";
import Project from "../../models/appModels/Project";
import Phone from "../../models/appModels/Phone";
import ResponseSender from "../../commonServices/ResponseSender/ResponseSender";









export default async function createClient(req: Request, res: Response) {

    const identityCard = req.body.identityCard;
    const address = req.body.address;
    const company = req.body.company;
    const phone = req.body.phone;
    const project = req.body.project;

    try {
        const client = await Client.create(req.body);
        if (client) {

            await IdentityCard.create({ ...identityCard, clientId: client?.id });

            await Address.create({ ...address, clientId: client?.id });

            await Phone.create({ ...phone, clientId: client?.id });

            if (Object.keys(company).length > 0) {

                await Company.create({ ...company, clientId: client?.id });
            }

            if (Object.keys(project).length > 0) {

                Project.create({ ...Project, clientId: client?.id });
            }


            ResponseSender(res, 201, 'Client Created Successfully....', {});


        }

    } catch (error: any) {

        ResponseSender(res, 500, error.message, {});
    }

}




