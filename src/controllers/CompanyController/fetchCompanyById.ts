import { Request, Response } from 'express';
import Company from '../../models/appModels/Company';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';
import Client from '../../models/appModels/Client';
import Address from '../../models/appModels/Address';



export default async function fetchCompanyById(req: Request, res: Response) {
    const id = req.params.id;

    try {

        const company= await Company.findOne({where:{id:id},include:[{model:Client,as:'client'},{model:Address,as:'address'}]});

        if (company) {
            ResponseSender(res, 200, 'Company Fetched Successfully...', company);
        }
        else {
            ResponseSender(res, 200, 'Companies does Not Exist...', {});

        }


    } catch (error: any) {
        ResponseSender(res, 500, error.message, {})
    }

}