# SecureAI - Plataforma de Seguridad Electrónica Inteligente

Plataforma web profesional y futurista para empresa de seguridad electrónica con inteligencia artificial.

## 🚀 Características Principales

- **Diseño Futurista**: Interfaz moderna con animaciones y efectos visuales
- **Inteligencia Artificial**: Secciones dedicadas a capacidades de IA
- **Responsive**: 100% adaptable a todos los dispositivos
- **Base de Datos**: SQLite con Drizzle ORM
- **Gamificación**: Sistema de scores de seguridad
- **Panel Admin**: CRUD completo para gestión de contenido

## 🛠️ Tecnologías

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19 + TypeScript
- **Estilos**: Tailwind CSS 4
- **Base de Datos**: SQLite + Drizzle ORM
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Autenticación**: bcryptjs

## 📦 Instalación Local

```bash
# Instalar dependencias
bun install

# Generar migraciones de base de datos
bun db:generate

# Ejecutar migraciones (automático en sandbox)
bun db:migrate

# Iniciar servidor de desarrollo
bun dev
```

## 🌐 Despliegue en Render

### Paso 1: Preparar el Repositorio

Asegúrate de que tu código esté en GitHub y actualizado:

```bash
git add -A
git commit -m "Preparar para despliegue"
git push origin main
```

### Paso 2: Crear Web Service en Render

1. Ve a [Render Dashboard](https://dashboard.render.com/)
2. Click en "New +" → "Web Service"
3. Conecta tu repositorio de GitHub
4. Configura el servicio:

**Build & Deploy:**
- **Name**: `secureai-platform` (o el nombre que prefieras)
- **Region**: Elige la más cercana a tus usuarios
- **Branch**: `main`
- **Root Directory**: (dejar vacío)
- **Runtime**: `Node`
- **Build Command**: `bun install && bun db:generate && bun build`
- **Start Command**: `bun start`

**Environment:**
- **Node Version**: `20` o superior

### Paso 3: Variables de Entorno

En la sección "Environment" de Render, agrega:

```
NODE_ENV=production
```

Las variables de base de datos (`DB_URL`, `DB_TOKEN`) son proporcionadas automáticamente por el sandbox.

### Paso 4: Configuración Avanzada

**Auto-Deploy**: Activado (se despliega automáticamente con cada push)

**Health Check Path**: `/` (opcional)

### Paso 5: Deploy

Click en "Create Web Service" y espera a que se complete el despliegue (5-10 minutos).

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── app/                    # Páginas y rutas
│   │   ├── page.tsx           # Home
│   │   ├── servicios/         # Servicios
│   │   ├── soluciones/        # Soluciones por cliente
│   │   ├── planes/            # Planes y precios
│   │   ├── tecnologia/        # Tecnología IA
│   │   ├── contacto/          # Contacto
│   │   └── admin/             # Panel administrador
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes UI base
│   │   └── layout/           # Header, Footer
│   └── db/                   # Base de datos
│       ├── schema.ts         # Esquema de tablas
│       ├── index.ts          # Cliente DB
│       └── migrations/       # Migraciones SQL
├── public/                   # Archivos estáticos
├── drizzle.config.ts        # Configuración Drizzle
├── next.config.ts           # Configuración Next.js
├── tailwind.config.ts       # Configuración Tailwind
└── package.json             # Dependencias
```

## 🗄️ Base de Datos

### Tablas Principales

- **admins**: Usuarios administradores
- **services**: Servicios ofrecidos
- **solutions**: Soluciones por tipo de cliente
- **plans**: Planes de precios
- **testimonials**: Testimonios de clientes
- **useCases**: Casos de uso
- **aiFeatures**: Características de IA
- **contacts**: Formularios de contacto
- **blogPosts**: Artículos del blog
- **siteConfig**: Configuración del sitio

### Comandos de Base de Datos

```bash
# Generar nueva migración después de cambios en schema
bun db:generate

# Aplicar migraciones (solo en producción)
bun db:migrate
```

## 🎨 Personalización

### Colores

Los colores principales están en `src/app/globals.css`:
- Cyan: `#06b6d4` (principal)
- Blue: `#3b82f6` (secundario)
- Purple: `#8b5cf6` (acento)

### Contenido

El contenido está hardcodeado en las páginas. Para hacerlo dinámico:
1. Crear API routes en `src/app/api/`
2. Conectar con la base de datos
3. Actualizar componentes para usar datos dinámicos

## 🔒 Seguridad

- Passwords hasheados con bcryptjs
- Validación de formularios
- Sanitización de inputs
- HTTPS en producción (Render lo proporciona)

## 📱 Responsive Design

La plataforma es 100% responsive con breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance

- Server Components por defecto
- Lazy loading de imágenes
- Code splitting automático
- CSS optimizado con Tailwind

## 📞 Soporte

Para soporte técnico o consultas:
- Email: contacto@secureai.com
- Documentación: Este README

## 📄 Licencia

Proyecto privado - Todos los derechos reservados

---

Desarrollado con ❤️ usando Next.js 16 + React 19 + Tailwind CSS 4
