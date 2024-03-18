import Joi from "joi";

export const ArticleValidator = Joi.object({
    title: Joi.string(). required(),
    author: Joi.string(). required(),
    image: Joi.string(). required(),
    date: Joi.date(). required(),
    content: Joi.string(). required()
 
})

;