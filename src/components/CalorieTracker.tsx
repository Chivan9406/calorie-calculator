import type { Activity } from '../types'
import { useMemo } from 'react'
import CalorieDisplay from './CalorieDisplay.tsx'

type CalorieTrackerProps = {
  activities: Activity[]

}

export default function CalorieTracker({activities}: CalorieTrackerProps) {
  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) =>
    activity.category === 1 ? total + activity.calories : total, 0), [activities])

  const caloriesBurned = useMemo(() => activities.reduce((total, activity) =>
    activity.category === 2 ? total + activity.calories : total, 0), [activities])

  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [caloriesConsumed, caloriesBurned])

  return (
    <>
      <h2 className='text4xl font-black text-white text-center'>Resumen de calorías</h2>

      <div className='flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10'>
        <CalorieDisplay
          calories={caloriesConsumed}
          text='Consumidas'
        />

        <CalorieDisplay
          calories={caloriesBurned}
          text='Quemadas'
        />

        <CalorieDisplay
          calories={netCalories}
          text='Diferencia'
        />
      </div>
    </>
  )
}