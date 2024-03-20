

import { Request, Response } from 'express';
import Department from '../../models/appModels/Department';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';




export default async function fetchAllDepartment(req: Request, res: Response) {



    try {

        const response = await Department.findAll();

        if (response) {
            ResponseSender(res, 200, 'Departments Fetched Successfully...', response);
        }
        else{
            ResponseSender(res, 200, 'Departments does not Exist ...', response);
        }
    
    } catch (error: any) {
        ResponseSender(res, 500, error.message, {})
    }

}