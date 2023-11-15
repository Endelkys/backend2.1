-Para correr el servidor, escribir en la terminal 'npm run dev' (Sin comillas)

-Instalar la extension de visual studio code 'Thunder Client' para probar las rutas 

- Al descargarse el repositorio, abrir la consola de la terminal y ejectuar npm i, para instalar las dependencias.

- La base de datos que se usó fue: Mongo DB

- Se hizo uso de clases para los controlodares

- Los controladores y rutas se encuentran separados en sus archivos correspondientes

- Se hizo uso de la libreia 'axios' para solicitar endpoints y estos datos enviarlo a las interfaces

- Se crearon los modelos de los datos

LOS 3 ENDPOINTS ADICIONALES QUE SE AGREGARON FUERON:

1) /obtener-total-patrocinantes => "Endpoint para solicitar el total de registros de patrocinantes y que la interfaz se mantenga actualizada".

2) /total-participantes-por-equipo => Endpoint para saber cuantos participantes tiene cada equipo

3) /total-equipos-categoria => Saber cuantos equipos estan participando por categoria y se entregan esos resultados de manera descendiente.



En ThunderClient colocar http://localhost:3000/api/ seguido de la ruta, 
quedaria asi la primera http://localhost:3000/api/registrar-modalidad


Importante poner el Metodo HTPP en Thunder Client en cada solicitud, es decir GET, POST, PUT O DELETE.

Para ver las interfaces, abrir el navegador preferido y colocar las siguiente ruta
http://localhost:3000


