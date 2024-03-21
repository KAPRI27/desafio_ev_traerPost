//Usar función  anonima con async y catch 
const traerPosts = async () => {
    try {
      // usamos fetch para consultar la API
      let response = await fetch("");
      // convertimos la respuesta a JSON
      let data = ("");
      // Verificamos si los datos obtenidos no son nulos
      if (data !== null) {
        // Mapeamos los datos para crear elementos HTML
        data.map();
      }
    } catch (error) {
      // Capturamos y mostramos errores en la consola
      console.log(error);
    }
  };