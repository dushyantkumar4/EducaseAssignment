import Joi from "joi";

export const addSchoolSchema = Joi.object({
  name: Joi.string().trim().required(),

  address: Joi.string().trim().required(),

  latitude: Joi.number()
    .min(-90)
    .max(90)
    .required(),

  longitude: Joi.number()
    .min(-180)
    .max(180)
    .required(),
});