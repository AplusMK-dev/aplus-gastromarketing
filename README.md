# Aplus Gastromarketing

Sitio corporativo de Aplus Gastromarketing. Aplicación React integrada como tema de WordPress.

## Estructura del proyecto

```
aplus-gastromarketing/
├── src/                              # Código fuente React
├── wordpress/aplus-gastromarketing/  # Tema de WordPress
│   ├── style.css
│   ├── functions.php
│   ├── inc/
│   │   ├── enqueue.php               # Carga de assets Vite
│   │   └── rest-api.php              # API para formularios
│   └── dist/                         # Assets compilados (generado)
├── index.html                        # Entrada para desarrollo local
└── vite.config.ts
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre **http://localhost:3000**

En modo desarrollo los formularios simulan el envío. En WordPress se conectan a la REST API del tema.

## Build para WordPress

```bash
npm run build
```

Esto compila los assets en `wordpress/aplus-gastromarketing/dist/`.

## Instalación en WordPress

1. Ejecuta `npm run build` en este repositorio.
2. Copia la carpeta `wordpress/aplus-gastromarketing/` a `wp-content/themes/` de tu instalación WordPress.
3. En **Apariencia → Temas**, activa **Aplus Gastromarketing**.
4. Configura una página estática como portada si lo necesitas (el tema renderiza la SPA en todas las vistas).

### Ruta del tema en el servidor

```
wp-content/themes/aplus-gastromarketing/
├── style.css
├── functions.php
├── header.php
├── footer.php
├── index.php
├── front-page.php
├── page.php
├── inc/
└── dist/          ← generado por npm run build
```

## Navegación

La app usa routing por hash, compatible con WordPress:

| Hash | Vista |
|------|-------|
| `#inicio` | Home |
| `#operadores` | Operadores HORECA |
| `#marcas` | Marcas |
| `#territorios` | Territorios |
| `#equipo` | Equipo |
| `#contacto` | Contacto |
| `#proyecto-{n}` | Detalle de proyecto |

## API REST (WordPress)

| Endpoint | Método | Uso |
|----------|--------|-----|
| `/wp-json/aplus/v1/contact` | POST | Formulario "Cuéntanos tu reto" |
| `/wp-json/aplus/v1/newsletter` | POST | Suscripción newsletter |

Los formularios envían al email del administrador de WordPress. Para integrar con un plugin de newsletter, usa el hook `aplus_newsletter_subscribe` en `functions.php` del tema hijo.

## Build standalone (sin WordPress)

```bash
npm run build:spa
npm run preview
```

Genera una SPA independiente en `dist/` para previsualización sin WordPress.
