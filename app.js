const { argv } = require('./config/yargs')

const lugar = require('./lugar/lugar')

const clima = require('./clima/clima')

let getInfo = async direccion => {
    
    try {
        
        let coords = await lugar.getLugarLatLng( direccion )
        let temp = await clima.getClima( coords.lat, coords.lng )

        return `El clima en ${ coords.direccion } es de ${ temp }°`

    } catch (e) {

        return `No se pudo determinar el clima en "${ direccion }"`
        
    }

}

getInfo( argv.direccion )
    .then( msg => console.log( msg ) )
    .catch( e => console.log( e ) )