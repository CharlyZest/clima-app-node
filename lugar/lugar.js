const axios = require('axios')

const getLugarLatLng = async(direccion) => {
    
    let URIEncoded = encodeURI( direccion )

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ URIEncoded }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if ( resp.data.status == 'ZERO_RESULTS' ) {
        
        throw new Error(`No hay resultadois para: ${ direccion }`)

    }

    let data = resp.data.results[0]
    let loc = data.geometry.location
        
    return {
        
        direccion: data.formatted_address,
        lat: loc.lat,
        lng: loc.lng

    }
}

module.exports = {

    getLugarLatLng

}