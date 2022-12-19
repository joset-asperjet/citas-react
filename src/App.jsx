//App.jsx es la aplicacion principal, el componente madre donde importaremos el resto de componentes
//El main, es el que se esta importando y se está cargando dentro del HTML, en la sección root.
//Cuando vamos a agregar una clase en React, debemos poner className, ya que class, esta reservado por JS

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoDePacientes from "./components/ListadoDePacientes"



function App(){

  return (
    <div className="container mx-auto mt-20"> 
    <Header/>   

    <div className="mt-12 md:flex">
       <Formulario/>   
       <ListadoDePacientes/> 
    </div>
    </div>
  )
}

export default App