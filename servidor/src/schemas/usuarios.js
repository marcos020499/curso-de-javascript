import joi from '@hapi/joi';
import { Schema, model } from 'mongoose';

export const UsersEditValidationSchema = joi.object().keys({
  id: joi.number().required(),
  name: joi.string().required(),
  city: joi.string().required(),
});

export const UsersCreateValidationSchema = joi.object().keys({
  name: joi.string().required(),
  city: joi.string().required(),
});

const UsuarioSchema = new Schema({
  name: { type: String, required: [true, 'El name es requerido'] },
  city: { type: String },
});

export const Usuario = model('users', UsuarioSchema);
