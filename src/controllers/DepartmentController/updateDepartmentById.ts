

import { Request, Response } from 'express';
import Department from '../../models/appModels/Department';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';




export default async function updateDepartmentById(req: Request, res: Response) {

    const id = req.params.id;


    try {

        const response = await Department.update(req.body,{where:{id:id}});

        if (response) {
            ResponseSender(res, 200, 'Department Updated Successfully...', response);
        }
        else{
            ResponseSender(res, 200, 'Department does not Exist ...', response);
        }
    
    } catch (error: any) {
        ResponseSender(res, 500, error.message, {})
    }

}