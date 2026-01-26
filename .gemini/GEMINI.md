# I Am Alive - Website Project Guidelines

This document serves as the source of truth for the project's architecture, design patterns, and coding standards.

## 1. Project Overview
"I Am Alive" Website serves as the landing and informational portal for the "I Am Alive" iOS safety application. It provides users with information about the app's features, privacy policy, and download links.

## 2. Technology Stack
*   **Framework**: Nuxt 4 (Vue 3)
*   **Styling**: Tailwind CSS
*   **Language**: TypeScript
*   **Localization**: @nuxtjs/i18n
*   **Package Manager**: pnpm

## 3. Architecture & Design Patterns

### Directory Structure
We follow the **Nuxt 4** specific directory structure where the bulk of the application logic resides in the `app/` folder to keep the root clean.
*   `/app`: Contains the application source code.
    *   `/pages`: File-based routing.
    *   `/components`: Reusable Vue components.
    *   `/assets`: Static assets like CSS and images.
    *   `app.vue`: The root component.
*   `/locales`: Translation files (JSON) for i18n.
*   `/public`: Publicly accessible static files (favicon, robots.txt).

### Data & State
*   **State Management**: Use `useState` for simple, app-wide shared state. For complex global state, consider defining specific composables.
*   **Data Fetching**: Use `useFetch` or `useAsyncData` for server-side compatible data fetching.
*   **SEO**: Manage meta tags via `useHead` or `definePageMeta` within pages, or globally in `nuxt.config.ts`.

### Styling Strategy
*   **Tailwind CSS**: This is the primary styling engine.
    *   Use utility classes directly in templates for standard styling.
    *   Extract recurring patterns into components rather than using `@apply` in CSS files, unless necessary for base styles or complex animations.
    *   Define custom colors, fonts, and extensive theme configuration in `tailwind.config.ts`.

## 4. Coding Standards

### Vue/Nuxt Style
*   **Script Setup**: Always use `<script setup lang="ts">`.
*   **TypeScript**: Explicitly type props and emits. Use interfaces for data models.
    ```typescript
    interface Props {
      title: string
      isActive?: boolean
    }
    defineProps<Props>()
    ```
*   **Auto-imports**: Leverage Nuxt's auto-import feature for Vue core functions (`ref`, `computed`) and Nuxt composables. Do not manually import them unless necessary for clarity in testing files.
*   **Component Naming**: Multi-word names (e.g., `AppHeader.vue`, `FeatureCard.vue`) to prevent conflicts with HTML elements.

### Tailwind Best Practices
*   **Ordering**: Follow a logical order for classes (Layout -> Box Model -> Typography -> Visuals -> Interactive).
*   **Responsiveness**: Design mobile-first. Use `sm:`, `md:`, `lg:` prefixes for larger screens.
*   **Dark Mode**: Support dark mode where applicable using the `dark:` modifier.

## 5. UI/UX Rules
*   **Performance**:
    *   Use `<NuxtImg>` (if configured) or standard optimization for images.
    *   Minimize layout shifts (CLS) by defining dimensions for media.
*   **Accessibility**:
    *   Ensure all images have `alt` text.
    *   Use semantic HTML tags (`<header>`, `<main>`, `<footer>`, `<article>`).
    *   Ensure high contrast ratios for text.
*   **Aesthetics**: Align with the "I Am Alive" brand identity—clean, trustworthy, and modern safety aesthetic.

## 6. Critical Configurations
*   **Nuxt Config**: `nuxt.config.ts` controls modules, build settings, and strict typescript checks.
*   **i18n**: Configured in `i18n.config.ts` and `nuxt.config.ts`. Ensure all user-facing text is localized using `$t()` or `t()`.

## 7. Workflow
*   **Environment**:
    *   Dev: `pnpm dev`
    *   Build: `pnpm build`
    *   Preview: `pnpm preview`
*   **Linting/Formatting**: Ensure code is linted before committing.

---
*Created by Antigravity Agent - 2026*
