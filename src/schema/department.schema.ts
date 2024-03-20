import Joi from "joi";





const DepartmentSchema = Joi.object({

    deptId:  Joi.string().required(),
    name:  Joi.string().min(3).required(),
    description:  Joi.string().required(),
    departmentHead: Joi.string().required(),
  
})