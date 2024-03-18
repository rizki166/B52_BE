import Joi from "joi";

export const PartaiValidator = Joi.object({
    
    image: Joi.string().required(),
    namePartai : Joi.string().required(),
    KetuaUmum: Joi.string().required(),
    visiMisi: Joi.string().required(),
    Address: Joi.string().required()
 
})

;