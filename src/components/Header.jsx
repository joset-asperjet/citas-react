//Un componente es basicamente una función. Solo eso.
//Cuando agregamos las llaves, le decimos a VSCODE 'El siguiente codigo es de JS'
//Que en este caso, estamos dejando un espacio vacio para que haya un espacio
//Entre seguimiento de pacientes y Vete al urinario
import React from 'react'

const Header = () => {


    return(
        <h1 className="font-black text-5xl text-center md:w2/3 mx-auto">
            Seguimiento Pacientes {''}
            <span className="text-indigo-600">Veterinaria</span> </h1>
        )
}

export default Header;