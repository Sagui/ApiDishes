import Boom from 'boom';

const dishes = [];

const getAllDishes = (request, reply) => {  
  return reply(dishes);
};

const createDish = (request, reply) => {
    dishes.push(request.payload);
    return reply(dishes);
};

const getDishById = (request, reply) => {
  const dish = dishes.find(element => element.id === request.params.id);
  return reply(dish);
}
const deleteDish = (request, reply) => {
  const dish = dishes.find(element => element.id === request.params.id);
  if(dish){
    dishes.splice(dishes.indexOf(dish), 1);
    return reply(dishes);
  }
  return reply(Boom.notFound('Dish not found'));
}

const updateDish = (request, reply) => {
  const dish = dishes.find(element => element.id === request.params.id);
  const dishIndex = dishes.indexOf(dish);
  if(dish){
    dishes[dishIndex] = request.payload;
    dishes[dishIndex].id = request.params.id
    return reply(dishes);
  }
  return reply(Boom.notFound('Dish not found'));
}
export default {
  getAllDishes,
  createDish,
  getDishById,
  deleteDish,
  updateDish
};
