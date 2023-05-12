import axios from 'axios'

export const mealsService = {
  getMeals,
  postMeals,
  postOrder,
}

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
]

function postMeals() {
  const meals = getMeals()
  if (meals.length === 0) {
    DUMMY_MEALS.forEach(meal => {
      return axios.post(
        'https://react-meals-dd481-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
        meal
      )
    })
  }
}

async function getMeals() {
  try {
    const req = await axios.get(
      'https://react-meals-dd481-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
    )
    const meals = Object.keys(req.data).map(i => req.data[i])
    return meals
  } catch (err) {
    throw new Error('Something went wrong!')
  }
}

async function postOrder(user, order) {
  try {
    return await axios.post(
      'https://react-meals-dd481-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      { user, order }
    )
  } catch (err) {
    throw new Error('Something went wrong')
  }
}
