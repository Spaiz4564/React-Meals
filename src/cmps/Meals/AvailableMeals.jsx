import React, { useEffect, useState } from 'react'
import { mealsService } from '../../services/meals.service'
import MealItem from './MealItem'
import Card from '../UI/Card'

export default function AvailableMeals() {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  const loadMeals = async () => {
    try {
      const meals = await mealsService.getMeals()
      setMeals(meals)
    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false)
  }

  const mealsList = meals.map(meal => <MealItem meal={meal} key={meal.id} />)

  useEffect(() => {
    mealsService.postMeals()
    loadMeals()
  }, [])

  if (isLoading) {
    return (
      <section className='meals-loading'>
        <p>Loading...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className='meals-error'>
        <p style={{ textAlign: 'center' }}>{error}</p>
      </section>
    )
  }

  return (
    <section className='meals'>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}
