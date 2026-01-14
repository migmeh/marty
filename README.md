# Rick and Morty Browser - Examen UI

Este proyecto es una aplicación web moderna construida con Next.js que permite explorar y gestionar personajes de Rick and Morty, permitiendo filtrarlos, buscarlos y añadirlos a favoritos.

## Requisitos Previos

Asegúrate de tener instalado:
- **Node.js** (versión 18 o superior recomendada)
- **npm** (viene con Node.js)

## Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/migmeh/marty.git
    cd marty
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    ```

## Ejecución del Proyecto

Para correr la aplicación correctamente, necesitas iniciar tanto el servidor de datos como el cliente.

### 1. Iniciar el Servidor de Datos (Mock API)

El proyecto utiliza `json-server` para simular una API. Inícialo en una terminal:
```bash
npm run server
```
El servidor correrá en `http://localhost:3005`.

### 2. Iniciar el Cliente (Next.js)

En una **nueva terminal**, inicia el servidor de desarrollo del frontend:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3045`.

---

## Pruebas Unitarias

El proyecto utiliza **Jest** y **React Testing Library** para asegurar la calidad del código.

Para ejecutar todas las pruebas, utiliza el siguiente comando:
```bash
npm test
```

Para ejecutar las pruebas en modo "watch" (observador):
```bash
npm test -- --watch
```

## Características Principales

- **Lista de Personajes**: Explora los personajes con paginación optimizada.
- **Buscador**: Encuentra personajes rápidamente por su nombre.
- **Detalle Compacto**: Visualiza información detallada de cada personaje con un diseño moderno.
- **Favoritos**: Guarda tus personajes preferidos de forma local (Redux Persistence).
- **Diseño Responsivo**: Optimizado para dispositivos móviles y escritorio.
- **Decoración Estilizada**: Detalles visuales únicos en la interfaz para una mejor experiencia.
