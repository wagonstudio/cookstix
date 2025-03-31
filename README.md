# Cookstix Shopify Theme

Este repositorio contiene el código fuente de un **theme de Shopify** desarrollado para el cliente **Cookstix**.  
El objetivo principal es proporcionar una interfaz moderna y responsiva que combine **Bootstrap**, **ScrollMagic** y **Cart.js** para mejorar la experiencia de compra.

## Tecnologías y Librerías
- **Shopify**: Plataforma de e-commerce.
- **Bootstrap**: Framework CSS para crear diseños responsivos y consistentes.
- **ScrollMagic**: Librería de JavaScript para crear animaciones y efectos de scroll.
- **Cart.js**: Solución simplificada para manejar el carrito de Shopify desde el frontend.

## Características
- Diseño responsivo y limpio gracias a Bootstrap.
- Animaciones de scroll personalizadas (ScrollMagic) que dan una experiencia más atractiva.
- Integración con Cart.js para una gestión intuitiva del carrito.

## Instalación y Configuración
1. **Clona o descarga** el repositorio.
2. **Sube los archivos** del theme a tu tienda de Shopify (o utiliza Shopify CLI si prefieres).
3. **Configura** las secciones de tu tienda (Personalizar Theme en Shopify) para ajustar:
   - Colores
   - Tipografías
   - Imágenes y banners
   - Scripts (ScrollMagic y Cart.js)

## Uso de ScrollMagic y Cart.js
- **ScrollMagic**:  
  Configurado en los archivos JavaScript para controlar efectos y animaciones durante el desplazamiento.  
- **Cart.js**:  
  Permite agregar, eliminar y actualizar productos en el carrito directamente desde el frontend, integrándose con la API de Shopify.

## Estructura de Archivos
cookstix/ 
├─ assets/ 
├─ config/ 
├─ layout/ 
├─ locales/ 
├─ sections/ 
├─ snippets/ 
├─ templates/ 
└─ README.md

- **assets/**: Contiene CSS, JS e imágenes.
- **layout/**: Archivo `theme.liquid` principal y configuraciones globales.
- **sections/** y **snippets/**: Componentes dinámicos y reutilizables de Shopify.
- **templates/**: Plantillas para productos, colecciones y páginas.

## Créditos
- **Desarrollador**: [WagonStudio](https://github.com/wagonstudio)
- **Colaborador**: Daniel E. Bahamon - [codevamon](https://github.com/codevamon)

## Licencia
Este proyecto es privado para uso interno de Cookstix.  
Contáctanos si deseas más información sobre su uso o distribución.

---

¡Disfruta desarrollando y optimizando el theme de Shopify para Cookstix! 
Si tienes dudas o sugerencias, siéntete libre de abrir un issue o crear un pull request.
