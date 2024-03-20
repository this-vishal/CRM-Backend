

// import { Request, Response } from 'express';
// import Department from '../../models/appModels/Department';
// import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';




// export default async function deleteDepartmentById(req: Request, res: Response) {



//     try {

//         const response = await Department.destroy(req.body);

//         if (response) {
//             ResponseSender(res, 200, 'Department Created Successfully...', response);
//         }
    
//     } catch (error: any) {
//         ResponseSender(res, 500, error.message, {})
//     }

// }