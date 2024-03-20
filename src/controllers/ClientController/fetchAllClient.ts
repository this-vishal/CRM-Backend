import Client from '../../models/appModels/Client';
import { Request, Response } from "express";
import IdentityCard from "../../models/appModels/IdentityCard";

import Address from "../../models/appModels/Address";
import Phone from "../../models/appModels/Phone";
import Company from "../../models/appModels/Company";
import Project from '../../models/appModels/Project';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';




export default async function fetchAllClients(req: Request, res: Response) {

    const clientId = req.params.id;




    const ClientDataType = {

        name: '',
        email: '',
        dob: '',
        identityCard: {
            identityType: '',
            identityNumber: ''
        },
        address: {
            city: '',
            country: '',
            state: '',
            street: '',
            zip: ''
        },
        phone: {
            primaryPhone: '',
            alternatePhone: ''
        },
        company: {
            companyName: '',
            website: '',
            email: ''
        },
        project: {
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            clientId: ''
        }

    }


    try {

        const clients = await Client.findAll({
            include: [{ model: IdentityCard ,as :'identityCard'},
            { model: Address , as:'address' },
            { model: Phone, as:'phone' },
            { model: Company , as:'company' },
            { model: Project  , as:'project'}]
        });

        if (clients) {
            ResponseSender(res, 200, 'Client details fetched successfully',clients );

        }
    } catch (error: any) {
        ResponseSender(res, 500, error.message, {});
    }

}