import { categories } from "../data/categories"
import { v4 as uuidv4 } from "uuid"
import { useState, type Dispatch } from "react"
import type { Activity } from "../types"
import type { ActivityActions } from "../reducers/activity-reducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
} 

const initialState : Activity = {
        id: uuidv4(),
        category: 1,
        name: '',
        calories: 0
}

export default function Form({dispatch}: FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => { //varios tipos según el input o select llamado
        const isNumberField = ['category', 'calories'].includes(e.target.id) //Comprobar si se está escribiendo en uno de esos para luego convertir a numero

        setActivity({
            ...activity, //Copiamos antes de actualizar
            [e.target.id]: isNumberField ? +e.target.value : e.target.value //pillamos el id del target (evento) seleccionado (de los 3 inputs), y entonces asignamos el value correspondiente para ese id (el + es para transformar de str a number)
        })
        
    }

    const isValidActivity = () =>{
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0 //Que haya nombre y calorias seleccionadas
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: "save-activity", payload: {newActivity: activity}})
        setActivity({
            ...initialState,
            id: uuidv4()
        }) //Reiniciar a 0 todo el state y el formulario ya que el formulario está enlazado a los valores del state y además generamos un id nuevo para el siguiente formulario
    }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg"
    onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                id="category"
                value={activity.category}
                onChange={handleChange}
            >
            {categories.map(category => (
                <option key={category.id}
                        value={category.id}>
                    {category.name}
                </option>
                    ))}
            </select>
        </div>

         <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad:</label>
            <input id="name"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Comida, jugo de naranja, ensalada, ejercicio, pesas..."
                value={activity.name}
                onChange={handleChange}
                >
                
                </input>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorías:</label>
            <input id="calories"
                type="number"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias. ej. 200 o 400"
                value={activity.calories}
                onChange={handleChange}
                >
                </input>
        </div>

        <input 
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-15 disabled:cursor-default"
            value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'}
            disabled={!isValidActivity()}>
        </input>
    </form>
  )
}
