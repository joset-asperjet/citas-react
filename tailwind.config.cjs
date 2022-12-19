/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],    //Aqui especifico los componentes o archivos que quiero
                                            //Que tengan disponibles las funciones de Taylwind. 
                                            //Los dos ** al final del directorio en el array
                                            // significan "todos los archivos"
                                            //Pero, cuando anexo *.jsx estoy diciendo "todos con esa"
                                            //Extensión
  theme: {
    extend: {},
  },
  plugins: [],
}



//Cuando introducimos archivos que modifican la configuración, se recomienda reiniciar el servidor.
//Cuando instalamos el Intellicens de Taylwind, nos da acceso de autocompletado a todas las clases 
// disponibles de estilos, etc.
//Mientras que CSS SPEEK, nos va a mostrar al dejar quieto el mouse, sobre el elemento, los estilos 
//Que estamos aplicando a cada clase a modo de preset. Equis de Equis de.
