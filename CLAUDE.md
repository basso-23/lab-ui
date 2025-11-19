# Directrices de Desarrollo del Proyecto

## Restricciones de Comandos

- **NO ejecutar nunca** `npm run build` o `npm run dev`

## Estilos CSS - Directrices Generales

### Filosofía de Estilos

Usar **clases CSS personalizadas semánticas** en lugar de Tailwind CSS inline.

### Unidades de Medida

- **rem**: Para todas las medidas generales (padding, margin, font-size, etc.)
- **dvh**: Para altura del viewport
- **vw**: Para ancho del viewport
- **px**: Únicamente para dimensiones en media queries

### Requisitos de Implementación

1. **Ubicación**: Crear todas las clases en el archivo `globals.css` (o equivalente)

2. **Nomenclatura Semántica**: Usar nombres que describan la función o posición del componente
   - Ejemplos: `.editor-header`, `.settings-card`, `.btn-primary`

3. **Patrón de Nomenclatura**: `[componente]-[elemento]-[modificador]`
   ```
   .sidebar-nav-item
   .header-logo-container
   .btn-primary-large
   ```

4. **Organización del CSS**: Organizar por secciones con comentarios descriptivos
   ```css
   /* ============================================
      LAYOUT
      ============================================ */

   /* ============================================
      HEADER
      ============================================ */

   /* ============================================
      SIDEBAR
      ============================================ */

   /* ============================================
      BUTTONS
      ============================================ */
   ```

5. **Variables CSS**: Usar CSS custom properties para colores y valores reutilizables
   ```css
   :root {
     --color-primary: #3b82f6;
     --color-secondary: #64748b;
     --spacing-sm: 0.5rem;
     --spacing-md: 1rem;
     --spacing-lg: 1.5rem;
   }
   ```

6. **Documentación**: Todo debe estar documentado en este archivo (CLAUDE.md)

7. **No Usar Estilos Inline**: **NUNCA** usar el atributo `style={{...}}` en componentes React
   - **Prohibido**: `style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}`
   - **Correcto**: Crear una clase CSS semántica en `globals.css`

   **Razones:**
   - Los estilos inline no son reutilizables
   - Dificultan el mantenimiento del código
   - No respetan el sistema de diseño
   - Hacen que el código JSX sea menos legible

8. **Iconos**: Usar **lucide-react** para todos los iconos
   - **Prohibido**: Usar emojis (👥, 🎨, ⚙️, etc.)
   - **Correcto**: Importar y usar componentes de Lucide

   **Ejemplo:**
   ```jsx
   import { Users, Settings, Palette } from 'lucide-react';

   <button className="btn-icon">
     <Users size={20} />
   </button>
   ```

   **Razones:**
   - Los iconos de Lucide son vectoriales y escalables
   - Mantienen consistencia visual en todo el proyecto
   - Los emojis varían según el sistema operativo
   - Lucide ofrece miles de iconos profesionales

### Ejemplo de Uso

**Antes (Tailwind):**
```jsx
className="flex items-center gap-4 bg-white p-6 rounded-lg"
```

**Después (CSS Semántico):**
```jsx
className="settings-card"
```

**En globals.css:**
```css
.settings-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
```

## Media Queries

### Regla Anti-Redundancia

**NO repetir media queries con las mismas dimensiones**. Si ya existe una media query con ciertas dimensiones, agregar las nuevas reglas dentro de esa media query existente.

### Formato Estándar

```css
@media (max-width: 768px) {
  /* Todas las reglas para este breakpoint van aquí */
  .header-nav {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .settings-card {
    flex-direction: column;
  }
}
```

**Breakpoints comunes:**
- `@media (max-width: 1536px)` - 2xl y menores
- `@media (max-width: 1280px)` - xl y menores
- `@media (max-width: 1024px)` - lg y menores
- `@media (max-width: 768px)` - md y menores
- `@media (max-width: 640px)` - sm y menores

## Límite de Líneas de Código

**IMPORTANTE**: Antes de escribir código en cualquier archivo:

1. Verificar si el archivo excede las **1500 líneas de código**
2. Si el archivo excede este límite:
   - **PARAR** inmediatamente
   - Comunicar al usuario: "El archivo [nombre] excede las 1500 líneas de código"
   - **ESPERAR** indicaciones antes de proceder

## Resumen de Reglas Rápidas

- ❌ No ejecutar `npm run build` o `npm run dev`
- ❌ **NUNCA usar estilos inline** `style={{...}}`
- ❌ **NUNCA usar emojis**, usar iconos de Lucide
- ✅ Usar clases CSS semánticas, no Tailwind inline
- ✅ Usar iconos de lucide-react para todos los iconos
- ✅ Medidas: rem (general), dvh (viewport height), vw (viewport width), px (media queries)
- ✅ Nomenclatura: `[componente]-[elemento]-[modificador]`
- ✅ Organizar CSS con comentarios por secciones
- ✅ Usar variables CSS para valores reutilizables
- ✅ No duplicar media queries
- ✅ Verificar límite de 1500 líneas antes de editar
