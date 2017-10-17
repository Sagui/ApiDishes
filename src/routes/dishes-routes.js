import co from 'co';
import Joi from 'joi';

import dishesController from '../controllers/dishes';

module.exports = [
  {
    method: 'GET',
    path: '/dishes',
    config: {
      handler: dishesController.getAllDishes,
      description: 'Get all dishes',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              dishes: Joi.array().items({
                id: Joi.string().required(),
                name: Joi.string().required(),
                description: Joi.string(),
              }),
            },
          },
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/dish/{id}',
    config: {
      handler: dishesController.getDishById,
      description: 'Gets the dish related to the id sent by the user',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().required(),
        }
      },
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              dish: Joi.object({
                id: Joi.string().required(),
                name: Joi.string().required(),
                description: Joi.string(),
              }),
            },
          },
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/dish',
    config: {
      validate: {
        payload: {
          id: Joi.string().required(),
          name: Joi.string().required(),
          description: Joi.string(),
        },
      },
      handler: dishesController.createDish,
      description: 'Create new dish',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              dishes: Joi.array().items({
                id: Joi.string().required(),
                name: Joi.string().required(),
                description: Joi.string(),
              }),
            },
          },
        },
      },
    },
  },
  {
    method: 'PUT',
    path: '/dish/{id}',
    config: {
      validate: {
        payload: {
          name: Joi.string().required(),
          description: Joi.string(),
        },
        params: {
          id: Joi.string().required(),
        }
      },
      handler: dishesController.updateDish,
      description: 'Update existing dish',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              dishes: Joi.array().items({
                id: Joi.string().required(),
                name: Joi.string().required(),
                description: Joi.string(),
              }),
            },
          },
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/dish/{id}',
    config: {
      handler: dishesController.deleteDish,
      description: 'Removes one dish from the list',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().required(),
        }
      },
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              dishes: Joi.array().items({
                id: Joi.string().required(),
                name: Joi.string().required(),
                description: Joi.string(),
              }),
            },
          },
        },
      },
    },
  },
];
