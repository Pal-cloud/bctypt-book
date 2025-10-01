# 📚 JWT-BCrypt API Book Project

Una API REST completa para gestión de libros con autenticación JWT y encriptación de contraseñas usando bcrypt. Construida con Node.js, Express, Sequelize y MySQL.

![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?logo=express)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?logo=jsonwebtokens)
![bcrypt](https://img.shields.io/badge/Bcryptjs-3384A1?logo=npm&logoColor=white)

## 🚀 Características

- ✅ **Autenticación JWT**: Sistema seguro de login/registro
- 🔐 **Encriptación de contraseñas**: Usando bcrypt para máxima seguridad
- 📖 **CRUD de libros**: Gestión completa de biblioteca
- 🗄️ **Base de datos MySQL**: Con Sequelize ORM
- 🧪 **Testing**: Suite de pruebas con Jest y Supertest
- 📁 **Arquitectura MVC**: Código organizado y mantenible

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js, Express.js
- **Base de datos**: MySQL con Sequelize ORM
- **Autenticación**: JSON Web Tokens (JWT)
- **Encriptación**: bcrypt.js
- **Testing**: Jest, Supertest
- **Configuración**: dotenv

## 📦 Dependencias

### Producción
```json
{
  "bcryptjs": "^3.0.2",
  "dotenv": "^17.2.3",
  "express": "^5.1.0",
  "jsonwebtoken": "^9.0.2",
  "mysql2": "^3.14.3",
  "sequelize": "^6.37.7"
}
```

### Desarrollo
```json
{
  "jest": "^30.1.0",
  "supertest": "^7.1.4"
}
```

## 🗂️ Estructura del Proyecto

```
jwt-bctypt-api-book/
├── app.js                    # Archivo principal de la aplicación
├── package.json
├── README.md
├── controllers/              # Controladores de la aplicación
│   ├── AuthController.js     # Lógica de autenticación
│   └── BookController.js     # Lógica de gestión de libros
├── database/
│   └── db_connection.js      # Configuración de conexión a BD
├── models/                   # Modelos de Sequelize
│   ├── BookModel.js          # Modelo de libro
│   └── UserModel.js          # Modelo de usuario
├── routes/                   # Definición de rutas
│   ├── authRoutes.js         # Rutas de autenticación
│   └── bookRoutes.js         # Rutas de libros
├── test/
│   └── books.test.js         # Pruebas unitarias
└── utils/
    └── handleJWT.js          # Utilidades para JWT
```

## ⚡ Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd jwt-bctypt-api-book
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crear un archivo `.env` en la raíz del proyecto:
```env
# Base de datos
DB_NAME=tu_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=3306

# JWT
JWT_SECRET=tu_clave_secreta_jwt
JWT_EXPIRES_IN=24h

# Servidor
PORT=8000
```

### 4. Configurar la base de datos
Asegúrate de tener MySQL instalado y corriendo, luego crea la base de datos:
```sql
CREATE DATABASE tu_base_de_datos;
```

### 5. Ejecutar la aplicación
```bash
npm start
```

La API estará disponible en: `http://localhost:8000`

## 📋 Endpoints de la API

### Autenticación

| Método | Endpoint | Descripción | Body |
|--------|----------|-------------|------|
| POST | `/auth/register` | Registrar nuevo usuario | `{ "username": "string", "email": "string", "password": "string" }` |
| POST | `/auth/login` | Iniciar sesión | `{ "email": "string", "password": "string" }` |

### Libros

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/books` | Obtener todos los libros | ❌ |
| POST | `/books` | Crear nuevo libro | ✅ |
| DELETE | `/books/:id` | Eliminar libro por ID | ✅ |

## 📝 Ejemplos de Uso

### Registro de usuario
```bash
curl -X POST http://localhost:8000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "mi_contraseña_segura"
  }'
```

### Login
```bash
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "mi_contraseña_segura"
  }'
```

### Crear libro (requiere token)
```bash
curl -X POST http://localhost:8000/books \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TU_JWT_TOKEN" \
  -d '{
    "title": "El Quijote",
    "writer": "Miguel de Cervantes",
    "genre": "Novela",
    "pages": 863
  }'
```

### Obtener todos los libros
```bash
curl -X GET http://localhost:8000/books
```

## 🧪 Testing

Ejecutar las pruebas:
```bash
npm test
```

Las pruebas incluyen:
- Pruebas de endpoints de libros
- Validación de respuestas
- Pruebas de errores

## 🔐 Seguridad

- **Contraseñas encriptadas**: Todas las contraseñas se almacenan con hash bcrypt
- **JWT Tokens**: Autenticación segura basada en tokens
- **Validación de datos**: Validación en modelos Sequelize
- **Variables de entorno**: Configuración sensible protegida

## 📊 Modelos de Datos

### Usuario
```javascript
{
  id: INTEGER (Primary Key, Auto Increment),
  username: STRING (Required, Unique),
  email: STRING (Required, Unique, Valid Email),
  password: STRING (Required, Hashed)
}
```

### Libro
```javascript
{
  id: INTEGER (Primary Key, Auto Increment),
  title: STRING (Required, Min: 2 chars),
  writer: STRING (Required),
  genre: STRING,
  pages: INTEGER
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

Desarrollado con ❤️ por @Pal-cloud

## 🐛 Reporte de Bugs

Si encuentras algún bug, por favor crea un issue en el repositorio con:
- Descripción del problema
- Pasos para reproducir
- Comportamiento esperado
- Screenshots (si aplica)

⭐ Si este proyecto te ha sido útil, ¡dale una estrella!
