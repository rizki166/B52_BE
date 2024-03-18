import Joi from "joi";

export const PaslonValidator = Joi.object({
    
    // image: Joi.string().required(),
    nomerUrut: Joi.number().integer().required(),
    name: Joi.string().required(),
    visiMisi: Joi.string().required(),
    // Koaslisi: Joi.string().required()
})

;