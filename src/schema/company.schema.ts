import Joi from "joi";





const CompanySchema = Joi.object({
    companyName: Joi.string().min(3).required(),

    website: Joi.string().min(5).required(),

    email: Joi.string()

        .email({ minDomainSegments: 2 }).required(),
    clientId: Joi.required(),
})