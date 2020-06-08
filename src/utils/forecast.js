const request = require('postman-request')

const forecast = (long, lat, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=7ad7b03df7392e817224ede8804338a5&query='+lat+','+long;

  //normal
  // request({ url:url, json: true }, (error, response) => {
  //   if (error) {
  //     callback('Unable to connect to weather services!', undefined)
  //   }
  //   else if (response.body.error) {
  //     callback('Unable to find location. Try again!', undefined)
  //   }
  //   else {
  //     callback(undefined, {
  //       temperatura: response.body.current.temperature+" graus",
  //       sensacao_termica: response.body.current.feelslike+" graus",
  //       chance_de_chuva: response.body.current.precip+"%"
  //     });
  //   }
  // })

  //destructuring
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined)
    }
    else if (body.error) {
      callback('Unable to find location. Try again!', undefined)
    }
    else {
      callback(undefined, {
        forecast: "Temperatura:"+body.current.temperature+" graus; Sensacao Termica: "+ body.current.feelslike+" graus; Chance de chuva: "+body.current.precip+"%"
        //temperatura: body.current.temperature+" graus",
        //sensacao_termica: body.current.feelslike+" graus",
        //chance_de_chuva: body.current.precip+"%"
      });
    }
  })
}

module.exports = forecast;