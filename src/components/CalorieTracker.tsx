import CalorieDisplay from './CalorieDisplay.tsx'
import { useActivity } from '../hooks/useActivity.ts'

export default function CalorieTracker() {
  const {caloriesConsumed, caloriesBurned, netCalories} = useActivity()

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