import { Request, Response } from 'express';
import Company from '../../models/appModels/Company';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';
import Client from '../../models/appModels/Client';
import Address from '../../models/appModels/Address';



export default async function updateCompanyById(req: Request, res: Response) {
    const id = req.params.id;

    const address = req.body.address;

    try {
        const response = await Company.update(req.body, { where: { id: id } });
        
        if (Object.keys(address).length > 0) {
            await Address.update({ ...address }, { where: { companyId: id } });
        }
        if (response) {
            ResponseSender(res, 200, 'Company Updated Successfully...', response);
        }
        else {
            ResponseSender(res, 200, 'Companies does Not Exist...', {});
        }
    } catch (error: any) {
        ResponseSender(res, 500, error.message, {})
    }

}