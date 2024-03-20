import Joi, { required } from "joi";






const DesignationSchema = Joi.object({
    designationName: Joi.string().required(),
    description: Joi.string().required(),
})