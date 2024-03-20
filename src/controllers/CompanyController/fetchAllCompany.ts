import { Request, Response } from 'express';
import Company from '../../models/appModels/Company';
import ResponseSender from '../../commonServices/ResponseSender/ResponseSender';
import Client from '../../models/appModels/Client';
import Address from '../../models/appModels/Address';



export default  async function fetchAllCompany (req:Request, res:Response){

        try {

  
            const companies  =  await  Company.findAll({include:[{model:Client, as:'client'},{model:Address,as:'address'}]});

            if(companies){
                ResponseSender(res, 200, 'Compamies Fetched Successfully...',companies);
            }
            else{
                ResponseSender(res, 200, 'Companies does Not Exist...',{});

            }


        } catch (error:any) {   
                ResponseSender(res, 500, error.message,{})
        }

}