# GSL Game App

## 1. Introducción
### Bienvenida y Contexto
Bienvenido a **GSL Game App**, una aplicación interactiva diseñada para la búsqueda y exploración de videojuegos.  
Desarrollada con **Vue.js**, estilizada con **Tailwind CSS** y gestionada mediante **Pinia**, se conecta a la API de **freetogame** para ofrecer información detallada de los videojuegos más destacados.  

**Vista previa del proyecto:**  
![Estructura del Proyecto](src/assets/project-structure.png)

---

## 2. Descripción General del Proyecto
### Tecnologías y Herramientas Utilizadas
- **Frontend:**  
  - Framework: Vue.js  
  - Gestión de estado: Pinia  
  - Estilizado: Tailwind CSS  
  - Lenguaje: JavaScript  
  - API: Integración directa con **freetogame API**  
- **Herramientas de Desarrollo:**  
  - **Diseño:** Figma  
  - **Gestión y Documentación:** Notion y Trello  
  - **Control de Versiones:** Git & GitHub  
  - **Editor de Código:** Visual Studio Code  

---

## 3. Arquitectura del Proyecto
La arquitectura está diseñada para garantizar escalabilidad, eficiencia y una separación lógica de responsabilidades.  

### Estructura de Archivos
```plaintext
src/
├── assets/         # Recursos estáticos (imágenes, íconos, etc.)
├── components/     # Componentes reutilizables de Vue.js
├── stores/         # Gestión de estado con Pinia
├── views/          # Vistas principales de la aplicación
├── App.vue         # Componente raíz de la aplicación
├── main.js         # Punto de entrada principal
└── routes.js       # Configuración de rutas
```
---
## 4. Funcionalidades Principales
### Exploración de Videojuegos
- **Carrusel Interactivo:** Permite navegar entre videojuegos destacados.
- **Listado de Juegos:** Los usuarios pueden explorar juegos y aplicar filtros por categoría y plataforma.

### Información Detallada
- **Descripciones:** Información completa sobre trama, personajes y mecánicas.
- **Especificaciones Técnicas:** Requisitos del sistema, resolución y tamaño.
- **Características Clave:** Información sobre gráficos, sonido y modos de juego.
---
## 5. Desarrollo de la Aplicación
- **Arquitectura:** Construida con un enfoque MVP (Minimum Viable Product).
- **API:** Integración directa con freetogame API a través de Pinia Store, eliminando la necesidad de mocks.
  - La inyección de dependencias permite que los componentes consuman los datos de forma eficiente.
- **Diseño:** Implementado con Figma siguiendo una guía de estilos coherente.
---
## 6. Instalación y Arranque
### Instalación de Módulos
Para instalar los módulos necesarios, utiliza el siguiente comando:
```bash
npm install
```

### Arrancar proyecto
Para arrancar la aplicación, usa el siguiente comando:
```bash
npm run dev
```

