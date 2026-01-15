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

## Q&A - Experiencia de Desarrollo

### ¿Qué es lo que más te gustó de TU desarrollo?
Lo que más disfruté fue la implementación de una arquitectura modular basada en componentes con **Next.js** y **CSS Modules**. Esto permitió mantener un código limpio, escalable y fiel a los requerimientos visuales del tema "Rick & Morty" (modo oscuro, colores neón), facilitando la personalización detallada como en la barra de desplazamiento.

### Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?
Si tuviera más tiempo, me hubiera enfocado en:
1.  **Testing**: Aunque ya contamos con cobertura del 100% en la lógica de estado (`favoritesSlice`), me gustaría extender las pruebas unitarias y de integración a los componentes visuales (`CharacterCard`, `CharacterList`) para garantizar la estabilidad de la interfaz.
2.  **Optimización**: Mejorar aún más la carga de imágenes y assets utilizando formatos de próxima generación (AVIF/WebP) de manera más agresiva.
3.  **Accesibilidad**: Asegurar que todos los componentes personalizados (como el scrollbar y los botones) sean plenamente accesibles por teclado y lectores de pantalla.

### Descríbenos un pain point o bug con el que te hayas encontrado y cómo lo solucionaste.
**Bug Crítico:** Durante el inicio del proyecto, me encontré con un error persistente: `[Error: Failed to open database ... invalid digit found in string]`, que impedía levantar el entorno de desarrollo.

**Solución:** Identifiqué que el problema provenía de **Turbopack** (el bundler por defecto en Next.js 16) y su capa de persistencia en este entorno específico. Tras intentar limpiar los cachés (`.next`, `.swc`, `node_modules/.cache`) y reinstalar dependencias sin éxito, la solución definitiva fue configurar el proyecto para usar **Webpack** (el bundler clásico y estable) modificando el script de desarrollo en `package.json`: `"dev": "next dev --webpack -p 3045"`. Esto eliminó el error y permitió trabajar con estabilidad.
