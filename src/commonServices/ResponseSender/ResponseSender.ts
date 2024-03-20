import { Response } from "express";
export default function ResponseSender(res:Response,status:number ,msg:string, data:any){
        return  res.status(status).json({
            msg:msg,
            payload:data
        }) 
}
