import Paciente from "./Paciente"


const ListadoDePacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 class="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tu {''}
                <span className="text-indigo-600 font bold"> pacientes y citas</span>
                </p>
                <Paciente/>
                <Paciente/>
                <Paciente/>
                <Paciente/>
                <Paciente/>
                <Paciente/>
                <Paciente/>
                </div>
    )
}

export default ListadoDePacientes;