import Joi from "joi";


const ClientSchema = Joi.object({

    name: Joi.string().min(3).required(),

    email: Joi.string()
        .email({ minDomainSegments: 2 }).required(),

    dob: Joi.number()
        .integer()
        .min(1947)
        .max(2013).required(),

    identityCard: Joi.object({

        identityType: Joi.string().min(3).required(),

        identityNumber: Joi.string().required()

    }).required(),

    address: Joi.object({

        city: Joi.string().min(3).required(),

        country: Joi.string().min(5).required(),

        state: Joi.string().min(3).required(),

        street: Joi.string().min(3).required(),

        zip: Joi.number().required()

    }).required(),

    phone: Joi.object({

        primaryPhone: Joi.string().min(8).max(14).required(),

        alternatePhone: Joi.string().min(8).max(14).required(),

    }).required(),

    company: Joi.object({
        companyName: Joi.string().min(3).required(),

        website: Joi.string().min(5).required(),

        email: Joi.string()

            .email({ minDomainSegments: 2 }).required(),
    }),

    project: Joi.object({

        name: Joi.string().min(3).required(),

        description: Joi.string().min(10).required(),

        startDate: Joi.number().required(),

        endDate: Joi.number().required(),

        clientId: Joi.string().required()

    })
})