-Para correr el servidor, escribir en la terminal 'npm run dev' (Sin comillas)

-Instalar la extension de visual studio code 'Thunder Client' para probar las rutas 

- Al descargarse el repositorio, abrir la consola de la terminal y ejectuar npm i, para instalar las dependencias.

- La base de datos que se usó fue: Mongo DB

- Se hizo uso de clases para los controlodares

- Los controladores y rutas se encuentran separados en sus archivos correspondientes

- Se hizo uso de la libreia 'axios' para solicitar endpoints y estos datos enviarlo a las interfaces

- Se crearon los modelos de los datos

- Se validan los datos que se reciben en todos los formularios, en caso de error el backend notifica el error

- Las claves se guardan encriptadas

- Al registrar un usario, en la contraseña se permite solo letras minusculas y numeros, ya que hay una regex validando esto.

- La mayoria de las rutas se encuentra protegida con roles y jwt para asegurarnos de que el usuario tenga una sesion activa

- Los roles que se pueden asginar son: 'admin', 'usuario', 'editor'.

- Solamente el rol 'admin' puede crear registros de modalidad, categoria, patrocinador
- Solamente el rol 'admin' puede eliminar categorias y equipos.
- Solamente los roles 'admin' y 'editor' pueden editar una categoria

- Si un rol de 'usuario' o 'editor' intenta hacer operaciones de 'admin' reciben un mensaje de error.

- Se protegieron las interfaces de registro, es decir se le muestra las interfaces de registro unicamente al rol 'admin'

Crear un archivo en la raiz del proyecto llamada .env y pegar las credencias que se muestran debajo

Credenciales que se encuentran el archivo .env
PORT=3000
DB_URI=mongodb+srv://Endelkys:secretkey@cluster0.qvkhdnd.mongodb.net/?retryWrites=true&w=majority
USER_DB=Endelkys    
PASSWORD_DB=secretkey
SIGN_TOKEN=255393a4-aea4-e4b11fd80$2b$10$rnmX8lfseNvHytN1Q3s0z.SGU.nmnpNFEb/L4u72Zv5bB91mM/jMKc2df6080aa2d1d6e1e4e9484029-bb92

Enviar el token en las peticiones que lo requieran

En los Headers de la peticion marcar la propiedad Authorization y asignarle como valor => Bearer token

En ThunderClient colocar http://localhost:3000/api/ seguido de la ruta, 
quedaria asi la primera http://localhost:3000/api/registrar-modalidad


Importante poner el Metodo HTPP en Thunder Client en cada solicitud, es decir GET, POST, PUT O DELETE.

Para ver las interfaces, abrir el navegador preferido y colocar las siguiente ruta
http://localhost:3000


