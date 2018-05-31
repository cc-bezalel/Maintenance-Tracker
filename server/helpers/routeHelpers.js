import Joi from 'joi';

export function validateBody(schema) {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json({ message: 'Oops!..Invalid inputs' });
    }
    if (!req.value) {
      req.value = {};
    }
    req.value.body = result.value;
    next();
  };
}
export const schemas = {
  authSchema: Joi.object().keys({
    title: Joi.string().min(6).max(30).required(),
    operation: Joi.string().min(6).max(30).required(),
    description: Joi.string().min(6).max(50).required(),
    location: Joi.string().min(3).max(30)
      .required(),
    status: Joi.string().min(3).max(15).required(),
  }),
};
