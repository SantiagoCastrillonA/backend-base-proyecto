# Tienda de Tecnología
## Requisitos
### Tener instalado nodejs v20 o superior.
## Instrucciones
### Cree un archivo de variables de entorno .env en él ponga las siguientes variables
- **DB_HOST:** localhost
- **DB_DATABASE:** nombreBaseDeDatos
- **DB_USERNAME:** nombreDeUsuario
- **DB_PASSWORD:** passwordDelUsuario
### Ejecute npm install para instalar los paquetes necesarios para el proyecto.
### Abra una terminal y ejecute tsc -w para el modo observador de Typescript
### Abra otra terminal y ejecute node ./dist/app para ejecutar el servidor
<!-- Para el registro de usuarios se utiliza:
<!-- Método: POST
URL: http://localhost:10101/register
Headers:
Content-Type: application/json
Body (raw, JSON):
json
{
  "email": "test@email.com",
  "password": "123456",
  "name": "Test",
  "lastName": "User",
  "phoneNumber": "123456789"
} -->
