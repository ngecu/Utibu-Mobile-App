import joi from 'joi'

export const registerCustomerSchema = joi.object({
    FirstName: joi.string().allow(''),
    LastName: joi.string().required(),
    Email : joi.string().email().required(),
    Address: joi.string().required(),
    Username: joi.string(),
    Password:joi.string().required(),
    Phone: joi.number().min(10).required(),
})



export const loginCustomerSchema = joi.object({
    Email: joi.string().email().required(),
    Password: joi.string().required()
})