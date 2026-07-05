# DESIGN.md - IIM Bodh Gaya IT Committee Portfolio

## 1. Design Philosophy & Art Direction
This project rejects the traditional, static university website aesthetic. It is a premium, single-page, vertical-scrolling digital experience designed to reflect a world-class technology organization while maintaining the prestige of IIM Bodh Gaya.

* **Core Vibe:** Innovative, cinematic, authoritative, dark-themed, and highly interactive.
* **Visual Language:** Deep layered layouts, glassmorphism, dynamic glowing gradients, and cinematic lighting.
* **Storytelling:** Continuous scroll-driven narrative. Sections must seamlessly bleed into one another using parallax, pinning, and mask reveals.

---

## 2. Color System & Tailwind Configuration
The UI defaults to a deep dark mode. The background acts as a void to allow high-saturation tech accents to glow.

### Core Palette
| Token | Hex Code | Usage Context |
| :--- | :--- | :--- |
| `background-base` | `#030305` | Ultimate background, deep void |
| `surface-100` | `#0A0A10` | Primary section backgrounds |
| `surface-200` | `#13131F` | Elevated cards, glassmorphic bases |
| `accent-primary` | `#2563EB` | IIM Bodh Gaya Blue (modernized) |
| `accent-cyan` | `#06B6D4` | Tech highlights, glow effects |
| `accent-purple` | `#7C3AED` | Secondary gradients, interactive states |
| `text-primary` | `#F8FAFC` | High emphasis text, headings |
| `text-secondary` | `#94A3B8` | Body text, descriptions, subtitles |

### Design Patterns to Implement
* **Glassmorphism:** Apply `bg-white/5 backdrop-blur-xl border border-white/10` for floating headers, cards, and interactive panels.
* **Glow Effects:** Use custom drop shadows for hover states (e.g., `shadow-[0_0_30px_rgba(37,99,235,0.3)]`).
* **Text Gradients:** Use `bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-cyan` for emphasis on key phrases.

---

## 3. Typography System
Typography must feel technical, precise, and highly legible. Both fonts must be optimized using `next/font/google`.

* **Primary (Display & Headings):** `Space Grotesk`
* **Secondary (Body & UI text):** `Inter`

### Typographic Scale
* **Hero Display:** 6rem - 8rem | `Space Grotesk` | Bold | `-tracking-tighter`
* **Section Headers:** 3.5rem - 5rem | `Space Grotesk` | SemiBold | `-tracking-tight`
* **Card/Component Titles:** 1.5rem - 2rem | `Space Grotesk` | Medium 
* **Body Text:** 1rem - 1.125rem | `Inter` | Regular | `leading-relaxed text-text-secondary`
* **Eyebrow Text / Labels:** 0.875rem | `Inter` | SemiBold | `uppercase tracking-widest text-accent-cyan`

---

## 4. Motion & Interaction Language
Animations must feel physics-based, smooth, and inertial. Never block the user's scroll speed. 

### Animation Tooling Rules
1. **Lenis (Studio Freight):** Must be installed for global smooth scrolling.
2. **GSAP (ScrollTrigger):** Use for scroll-linked animations, section pinning, deep parallax, and cinematic transitions.
3. **Framer Motion:** Use for React-specific layout shifts (e.g., expanding a gallery image), presence animations (mounting/unmounting), and shared layout transitions.
4. **Motion.dev / CSS:** Use for magnetic button hovers, spring-based micro-interactions, and simple hover states.

### Section-Specific Animation Specifications
| Section | Effect | Tool | Trigger |
| :--- | :--- | :--- | :--- |
| **Hero** | Blur Reveal + Text Split | GSAP | On Page Load |
| **IT Comm Intro** | Word-by-Word Opacity Reveal | GSAP ScrollTrigger | On Scroll (Scrub) |
| **Services Cards** | 3D Tilt + Glow + Magnetic Hover | Motion.dev | On Mouse Hover |
| **Members List** | Text Scramble (Binary to Text) | Framer Motion | On Mouse Hover |
| **Events Gallery** | Horizontal Scroll Section | GSAP (Pinned) | On Scroll |
| **Background** | Infinite Marquee Typography | CSS Keyframes | Continuous Loop |

---

## 5. UI Components & Layouts (shadcn/ui overrides)
You have access to `shadcn/ui`. However, default styles must be heavily customized to fit the premium dark theme.

* **Buttons:** Remove flat backgrounds. Use subtle gradients, 1px borders, and apply magnetic hover effects. Include an arrow icon (`lucide-react`) that translates `2px` on hover.
* **Cards:** Eliminate sharp solid borders. Use the glassmorphism token (`bg-white/5`, etc.) with a subtle inner light effect.
* **Images:** All images must have an overlay (`bg-background-base/20`) to blend them into the dark UI. On hover, remove the overlay and scale the image by `1.05` duration `500ms` ease `out`.

---

## 6. Development & Quality Assurance Constraints
* **Accessibility:** All complex animations must respect `prefers-reduced-motion`. Ensure high-contrast focus rings (`focus-visible:ring-accent-cyan`) for keyboard navigation.
* **Performance:** Animate ONLY `transform` and `opacity`. Do not animate layout properties (`width`, `height`, `margin`). 
* **Responsiveness:** Horizontal scroll timelines (like the Gallery or Services) must degrade gracefully into vertical stacked layouts on mobile devices (`< 768px`) to preserve touch usability.