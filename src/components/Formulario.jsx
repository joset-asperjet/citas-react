import React from 'react'
import {useState, useEffect} from 'React';

const Formulario = () => {
    const [nombre, setNombre] = useState('Hook');       //This is the hook

    console.log(nombre)

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {''} 
            <span className="text-indigo-600 font-bold">Administralos</span> 
            </p>
            <form className="bg-white shadown-md rounded-lg py-10 px-5 mg-10">
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                    id='mascota'
                    type="text"
                    placeholder="Nombre de la mascota"
                    class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} />
                    
                    
                    </div>
                    <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                    id='propietario'
                    type="text"
                    placeholder="Nombre del propietario"
                    class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                    </div>
                    <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                    id='propietario'
                    type="mail"
                    placeholder="Correo electronico del propietario"
                    class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                    </div>
                    <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-600 uppercase font-bold">Sintomas
                    </label>
                    <textarea id='sintomas' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"/>
                    </div>
                    <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value="Agregar paciente"/>
                    </form>
                    </div>
    )
}

export default Formulario