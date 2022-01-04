// La variable "url" no se ve desde el mundo exterior
const url = 'dbz.json'

export const get_personajes = async function (){
    let datos = await fetch('dbz.json')
    datos = await datos.json()
    console.log("entre apersonajes")
    return datos.personajes
}

//const url = 'data/dbz.json'
