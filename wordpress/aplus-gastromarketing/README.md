# Tema WordPress — Aplus Gastromarketing

## Instalación rápida

1. Desde la raíz del proyecto, ejecuta:

```bash
npm install
npm run build
```

2. Copia esta carpeta completa (`aplus-gastromarketing`) a:

```
wp-content/themes/aplus-gastromarketing/
```

3. Activa el tema en el panel de WordPress.

## Requisitos

- WordPress 6.0+
- PHP 8.0+
- Node.js 18+ (solo para compilar assets)

## Actualizar el tema

Cada vez que modifiques el código React:

```bash
npm run build
```

Luego sube la carpeta `dist/` actualizada al servidor (o vuelve a desplegar el tema completo).

## Personalización

- **Formularios:** editar `inc/rest-api.php`
- **Assets:** editar `inc/enqueue.php`
- **Estilos React:** editar `src/index.css` en la raíz del proyecto

## Tema hijo (recomendado para producción)

Para personalizaciones PHP sin perder cambios al actualizar, crea un tema hijo que cargue este tema como plantilla padre, o copia solo los archivos PHP que necesites modificar.
