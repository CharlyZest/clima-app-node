const axios = require('axios')

const getClima = async (lat, lon) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=22020b4daf8ffa8aa6bda26b41604ae6&units=metric`)
    
    if ( resp.status != 200 ) {
        
        throw new Error('No se pudo conectar al servicio')
        return
        
    }

    return resp.data.main.temp
}

module.exports = {

    getClima

}