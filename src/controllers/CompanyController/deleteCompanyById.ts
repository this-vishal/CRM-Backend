import { Request, Response } from 'express';
import Company from '../../models/appModels/Company';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';
import Client from '../../models/appModels/Client';
import Address from '../../models/appModels/Address';



export default async function deleteCompanyById(req: Request, res: Response) {

    const id = req.params.id;

    try {

                  await Address.destroy({where:{companyId:id}})
        const company= await Company.destroy({where:{id:id}});

        if (company) {
            ResponseSender(res, 200, 'Company Deleted Successfully...', {});
        }
        else {
            ResponseSender(res, 200, 'Companies does Not Exist...', {});

        }


    } catch (error: any) {
        ResponseSender(res, 500, error.message, {})
    }

}