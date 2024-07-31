import Joi from 'joi';

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Too short, try {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'any.required': 'Name is required',
  }),
    phoneNumber: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().min(3).max(20),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().min(3).max(20).required(),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(30),
    phoneNumber: Joi.string().min(3).max(20),
    email: Joi.string().email().min(3).max(20),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().min(3).max(20),
});

// const dataToValidate = {
//     name: 'John Doe',
//     phoneNumber: '+38087765523',
//     email: 'john.doe@example.com',
//     contactType: "home",
// };

// const validationResult = createContactSchema.validate(dataToValidate, { abortEarly: false });
// if (validationResult.error) {
//   console.error(validationResult.error.message);
// } else {
//   console.log('Data is valid!');
// }

