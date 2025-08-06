# ToxoLinko - Landing Page 🚀

**Automatiza tus leads y haz crecer tu negocio**

Una landing page moderna desarrollada con Next.js 14 y TailwindCSS que presenta ToxoLinko, un servicio de automatización de leads que integra formularios, tiendas online y funnels directamente con CRM y sistemas de notificación.

## 🌟 Características

- **Diseño responsive** optimizado para todos los dispositivos
- **Animaciones fluidas** con Framer Motion
- **Componentes reutilizables** con TypeScript
- **SEO optimizado** con metadata completo
- **WhatsApp integration** para CTAs directos
- **Performance optimizado** con Next.js 14

## 🛠️ Stack Técnico

| Aspecto             | Tecnología                   | Motivo                                                         |
| ------------------- | ---------------------------- | -------------------------------------------------------------- |
| **Framework**       | **Next.js 14 (App Router)**  | SSR/SSG rápido y rutas basadas en directorios                  |
| **Lenguaje**        | **TypeScript**               | Tipado estricto y mejor DX                                      |
| **UI**              | **React + Tailwind CSS**     | Composición de componentes + utilidades de estilo minimalistas |
| **Animaciones**     | **Framer Motion**            | Micro-interacciones y animaciones fluidas                      |
| **Iconos**          | **Lucide React**             | Iconos SVG optimizados y consistentes                          |
| **Deploy**          | **Vercel**                   | CI/CD automático y optimizaciones para Next.js                 |

## 📁 Estructura del Proyecto

```
src/
  app/              # App Router de Next.js
    layout.tsx      # Layout global con Navbar/Footer
    page.tsx        # Página principal (landing)
  components/
    common/         # Componentes reutilizables
      CTAButton.tsx # Botón principal con WhatsApp integration
      Navbar.tsx    # Navegación con scroll spy
    sections/       # Secciones de la landing
      Hero.tsx      # Sección principal con CTA
      Problem.tsx   # Identificación del problema
      Solution.tsx  # Presentación de la solución
      Benefits.tsx  # Beneficios clave
      HowItWorks.tsx# Proceso paso a paso
      PriceCard.tsx # Plan y precio
      Support.tsx   # Información de soporte
      Alerts.tsx    # Alertas personalizadas
      Agenda.tsx    # Reserva de llamada
      Testimonials.tsx # Testimonios de clientes
      CTAFinal.tsx  # Llamada a la acción final
      Contact.tsx   # Información de contacto
      Footer.tsx    # Pie de página
  hooks/            # Hooks personalizados
    useWhatsAppLink.ts # Para generar enlaces de WhatsApp
    useScrollSpy.ts    # Para navigation activa
  styles/
    globals.css     # Estilos globales con Tailwind
public/
  assets/           # Imágenes y recursos estáticos
```

## 🎯 Secciones de la Landing

1. **Hero** - Propuesta de valor principal con CTA
2. **Problema** - Identificación de dolor del cliente
3. **Solución** - Cómo ToxoLinko resuelve el problema
4. **Beneficios** - Ventajas competitivas clave
5. **Cómo Funciona** - Proceso de implementación
6. **Precio** - Plan único con condiciones claras
7. **Soporte** - Garantías y comunicación
8. **Alertas** - Personalización de notificaciones
9. **Agenda** - Reserva de llamada gratuita
10. **Testimoniales** - Casos de éxito
11. **CTA Final** - Última oportunidad con urgencia
12. **Contacto** - Información y formulario

## 🚀 Desarrollo

### Requisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/webSiteToxolinko.git
cd webSiteToxolinko

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## 📱 Características Especiales

### WhatsApp Integration
Los botones CTA abren automáticamente WhatsApp con mensajes predefinidos:

```typescript
const { openWhatsApp } = useWhatsAppLink()

// Ejemplo de uso
openWhatsApp("+57000000000", "Hola! Quiero información sobre ToxoLinko")
```

### Scroll Spy Navigation
La navegación se actualiza automáticamente según la sección visible:

```typescript
const activeSection = useScrollSpy(['hero', 'beneficios', 'precio'])
```

### Animaciones Contextuales
Cada sección incluye animaciones con Framer Motion que mejoran la experiencia:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

## 🎨 Sistema de Diseño

### Colores

```css
/* Colores principales */
primary: azul (#0ea5e9)
accent: verde (#22c55e)  
secondary: amarillo (#eab308)

/* Aplicación */
--primary-50 a --primary-700: Variaciones de azul
--accent-50 a --accent-600: Variaciones de verde
--secondary-50 a --secondary-600: Variaciones de amarillo
```

### Componentes

- **CTAButton**: Botón reutilizable con variantes primary/secondary
- **Card**: Contenedor con shadow y hover effects
- **Section**: Padding y spacing consistente

## 📈 Performance

- **Core Web Vitals** optimizado
- **Images** con next/image para lazy loading
- **Fonts** optimizadas con next/font
- **Bundle** optimizado con tree shaking
- **CSS** purging automático de Tailwind

## 🌐 SEO

- Meta tags completos para redes sociales
- Open Graph optimizado
- Twitter Cards configurados
- Structured data preparado
- Sitemap automático con Next.js

## 📞 Información de Contacto

- **WhatsApp**: +57 (000) 000-0000
- **Email**: hola@toxolinko.com
- **Soporte**: Lun-Sáb 9:00 AM - 6:00 PM

## 📄 Licencia

Proyecto privado - Todos los derechos reservados © 2025 ToxoLinko

---

**Desarrollado por Pablo/Pedro** - Automatización de leads sin complicaciones 🚀  
mi whatsapp, +573054489598
correo toxolinko@gmail.com
