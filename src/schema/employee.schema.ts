import Joi from "joi";






const EmployeeSchema = Joi.object({
    empId: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string()
        .email({ minDomainSegments: 2 }).required(),
    dob: Joi.number()
        .integer()
        .min(1947)
        .max(2013).required(),
    joiningDate: Joi.string().required(),
    designationId: Joi.string().required(),
    departmentId: Joi.string().required(),
    roleId: Joi.string().required(),
})