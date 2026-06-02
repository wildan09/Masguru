---
name: Neubrutalist Educator
colors:
  surface: '#fcf8f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#4b4731'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#7d775f'
  outline-variant: '#cec7aa'
  surface-tint: '#6a5f00'
  primary: '#6a5f00'
  on-primary: '#ffffff'
  primary-container: '#ffe500'
  on-primary-container: '#726600'
  inverse-primary: '#dec800'
  secondary: '#005cab'
  on-secondary: '#ffffff'
  secondary-container: '#0075d6'
  on-secondary-container: '#fefcff'
  tertiary: '#006a69'
  on-tertiary: '#ffffff'
  tertiary-container: '#00fdfc'
  on-tertiary-container: '#007171'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fee400'
  primary-fixed-dim: '#dec800'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a5c8ff'
  on-secondary-fixed: '#001c3a'
  on-secondary-fixed-variant: '#004786'
  tertiary-fixed: '#00fcfb'
  tertiary-fixed-dim: '#00dddc'
  on-tertiary-fixed: '#002020'
  on-tertiary-fixed-variant: '#00504f'
  background: '#fcf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  off-white: '#FAFAFA'
  success: '#22C55E'
  warning: '#F59E0B'
  danger: '#EF4444'
  info: '#3B82F6'
  purple: '#8B5CF6'
  orange: '#F97316'
typography:
  display-hero:
    fontFamily: Space Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Space Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
  h2:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  h2-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  h3:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.3'
  body:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 1px
  mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  caption:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section-v-desktop: 64px
  section-h-desktop: 32px
  section-v-mobile: 32px
  section-h-mobile: 16px
---

# masguru.dev — Design System & Specification
> Design Style: **Neubrutalism** | Version: 1.0 | Last updated: 2025

---

## 1. Brand Identity

| Item | Value |
|------|-------|
| Brand Name | masguru.dev |
| Username | @masguru.dev |
| Tagline | *RPL Teacher. Programmer. Always Learning.* |
| Persona | Young teacher, tech-savvy, Gen Z friendly |
| Tone | Bold, direct, energetic, approachable |

---

## 2. Color System

### Primary Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Black** | `#0a0a0a` | Borders, text, navbar bg, card shadow |
| **Electric Yellow** | `#FFE500` | Hero bg, highlights, primary accent |
| **Electric Blue** | `#1E90FF` | CTA buttons, links, active states, stats |
| **White** | `#FFFFFF` | Section backgrounds, card fills |
| **Off-White** | `#FAFAFA` | Alternate section background |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| Success | `#22C55E` | Assignment submitted, success status |
| Warning | `#F59E0B` | Assignment deadline, warning alerts |
| Danger | `#EF4444` | Not submitted, form error |
| Info | `#3B82F6` | Material info, tips |

### Color Pairings

```
Yellow bg   → Black text/border        ✅
Black bg    → Yellow text              ✅
Black bg    → White text               ✅
Blue bg     → White text               ✅
White bg    → Black text/border        ✅
```

---

## 3. Typography

### Font Stack

```css
--font-display: 'Space Mono', monospace;      /* Logo, tags, code, numbers */
--font-body:    'Space Grotesk', sans-serif;  /* Body text, UI elements */
```

### Type Scale

| Token | Size | Weight | Font | Usage |
|-------|------|--------|------|-------|
| `--text-hero` | 40–48px | 700 | Space Mono | Hero heading |
| `--text-h2` | 28–32px | 700 | Space Grotesk | Section headings |
| `--text-h3` | 20px | 700 | Space Grotesk | Card titles |
| `--text-label` | 10–11px | 700 | Space Grotesk | Tags, nav links, uppercase labels |
| `--text-body` | 14–16px | 400 | Space Grotesk | Paragraphs, descriptions |
| `--text-mono` | 13–14px | 400 | Space Mono | Code, stats, quotes |
| `--text-caption` | 12px | 400 | Space Grotesk | Helper text, footnotes |

### Typography Rules
- Nav links & labels → **ALL UPPERCASE**, letter-spacing: 0.5–1px
- Hero heading → mixed case, heavy weight
- No system fonts (no Inter, no Roboto, no Arial)
- Minimum readable size: 12px

---

## 4. Spacing System

```css
--space-xs:  4px
--space-sm:  8px
--space-md:  16px
--space-lg:  24px
--space-xl:  32px
--space-2xl: 48px
--space-3xl: 64px
--space-4xl: 96px
```

Section padding: `64px 32px` (desktop) | `32px 16px` (mobile)

---

## 5. Neubrutalism Component Rules

### Borders
```css
--border-width:    3px;
--border-color:    #0a0a0a;
--border:          3px solid #0a0a0a;
--border-radius:   0;   /* NO ROUNDED CORNERS by default */
```

### Box Shadow (Neubrutalist Offset Shadow)
```css
--shadow-sm:  3px 3px 0px #0a0a0a;
--shadow-md:  5px 5px 0px #0a0a0a;
--shadow-lg:  8px 8px 0px #0a0a0a;
```

### Hover States (Cards & Buttons)
```css
/* Card hover */
transform: translate(-2px, -2px);
box-shadow: 7px 7px 0px #0a0a0a;

/* Button press (active) */
transform: translate(2px, 2px);
box-shadow: none;
```

---

## 6. Component Library

### 6.1 Buttons

```
PRIMARY BUTTON
─────────────────────────────
│  VIEW PROJECTS  │           ← black bg, yellow text, 3px black border
─────────────────────────────
Hover: blue bg, white text
Active: translate +2px, shadow removed

SECONDARY BUTTON
┌─────────────────────────────┐
│  CONTACT ME                 │  ← transparent bg, black border, black text
└─────────────────────────────┘
Hover: black bg, yellow text

DOWNLOAD BUTTON
─────────────────────────────
│  ↓  DOWNLOAD PDF  │
─────────────────────────────
Black bg, white text, icon left
```

### 6.2 Cards

```
PROJECT CARD
┌──────────────────────────────┐  ← 3px solid black border
│ ████████████████████████████ │  ← yellow header bar 8px
│                              │
│  Project Name                │  ← Space Grotesk bold 18px
│  [tag] [tag] [tag]           │  ← tech stack pills
│                              │
│  Short project description   │  ← 14px, max 2 lines
│  that was built...           │
│                              │
│  [DEMO]    [GITHUB]          │  ← two small buttons
└──────────────────────────────┘
Shadow: 5px 5px 0 #0a0a0a
Hover: shadow increases to 8px, card lifts 3px
```

```
MATERIAL CARD
┌──────────────────────────────┐
│ ███ (colored top bar)        │  ← 6px colored top border per subject
│                              │
│  Basic Web Programming       │  ← title bold
│  Class X RPL 1               │  ← subtitle gray
│  Semester 1, 2024            │
│                              │
│  [PDF]  ↓ Download           │  ← badge + download button
└──────────────────────────────┘
```

```
TIPS CARD
┌──────────────────────────────┐
│ [PROGRAMMING]                │  ← blue category tag, uppercase
│                              │
│  How to Install Git on Win   │  ← bold title
│  Short excerpt here...       │  ← excerpt 2 lines
│                              │
│  Read More →                 │  ← text link blue
└──────────────────────────────┘
```

### 6.3 Form Elements

```css
input, select, textarea {
  border: 2px solid #0a0a0a;
  border-radius: 0;
  padding: 12px 16px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  background: #ffffff;
  outline: none;
}
input:focus {
  border-color: #1E90FF;
  box-shadow: 3px 3px 0 #1E90FF;
}
```

### 6.4 Tags / Pills

```
[HTML]  [CSS]  [PHP]  [Laravel]
```
```css
.tag {
  border: 2px solid #0a0a0a;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: #ffffff;
  color: #0a0a0a;
}
.tag:hover {
  background: #FFE500;
}
```

### 6.5 Stat Box

```
┌──────────┬──────────┬──────────┐
│   5+     │  200+    │   30+    │
│ Years    │ Active   │ Projects │
│ Teaching │ Students │ Done     │
└──────────┴──────────┴──────────┘
Border: 3px solid black | Number color: #1E90FF
```

---

## 7. Layout & Navigation

### Navbar Structure
```
[LOGO @masguru.dev]    [HOME] [ABOUT] [SKILLS] [PROJECTS] [TIPS] [ASSIGNMENTS] [MATERIALS] [CONTACT]
```
- Height: 60px
- Background: `#0a0a0a`
- Bottom border: `3px solid #FFE500`
- Position: sticky top

### Page Sections Order
```
1.  NAVBAR               (sticky)
2.  HERO                 (yellow bg)
3.  MARQUEE              (blue scrolling bar)
4.  ABOUT                (white bg)
5.  SKILLS               (black bg)
6.  PROJECTS             (white bg)
7.  TIPS & TRICKS        (off-white bg)
8.  ASSIGNMENT SUBMISSION (yellow bg)
9.  DOWNLOAD MATERIALS   (white bg)
10. MOTIVATIONAL QUOTE   (black bg)
11. CONTACT              (yellow bg)
12. FOOTER               (black bg)
```

---

## 8. Assignment Submission Feature

### Workflow
```
Student                  masguru.dev              Teacher (Dashboard)
  │                          │                          │
  ├─ Upload file to ─────────┤                          │
  │  Google Drive             │                          │
  │                          │                          │
  ├─ Copy Drive link ────────┤                          │
  │                          │                          │
  ├─ Fill form on website ───┤                          │
  │  • Full Name              │                          │
  │  • Class                  │                          │
  │  • Assignment Name        │                          │
  │  • Drive Link             │                          │
  │                          │                          │
  │           Form data ─────┼──► Google Sheets ────────┤
  │                          │                          │
  │                          │    Google Looker ────────┤
  │                          │    Studio Dashboard       │
```

### Form Fields
| Field | Type | Required | Placeholder |
|-------|------|----------|-------------|
| Full Name | Text | Yes | "Your full name..." |
| Class | Dropdown | Yes | X RPL 1 / X RPL 2 / XI RPL 1 / XI RPL 2 / XII RPL 1 / XII RPL 2 |
| Subject | Dropdown | Yes | Active subject list |
| Assignment Name | Text | Yes | "Assignment title..." |
| Google Drive Link | URL | Yes | "https://drive.google.com/..." |
| Notes | Textarea | No | "Additional notes (optional)..." |

---

## 9. Download Materials — Categories

| Code | Subject | Accent Color |
|------|---------|--------------|
| RPL-X | Basic Programming | Blue `#1E90FF` |
| RPL-X | Static Web | Yellow `#FFE500` |
| RPL-XI | Database | Green `#22C55E` |
| RPL-XI | Web Programming | Blue `#1E90FF` |
| RPL-XII | Software Engineering | Purple `#8B5CF6` |
| RPL-XII | Final Project | Orange `#F97316` |

---

## 10. Animations & Interactions

```css
/* Global transition */
* { transition: all 0.12s ease; }

/* Card hover lift */
.card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 #0a0a0a;
}

/* Button press */
.btn:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}

/* Marquee scroll */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee { animation: marquee 20s linear infinite; }

/* Fade in on scroll */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 11. Responsive Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Desktop | ≥ 1024px | Full layout, 2-3 column grid |
| Tablet | 768–1023px | 2 column grid, nav collapses |
| Mobile | < 768px | 1 column, hamburger menu, smaller text |

---

## 12. Assets & Icons

- **Icon library**: Tabler Icons (outline style) — https://tabler.io/icons
- **Fonts**: Google Fonts — Space Mono + Space Grotesk
- **Avatar**: "MG" initials inside a black 120x120px square (replaceable with a photo)
- **Favicon**: "MG" in a yellow square with black border

---

## 13. Recommended Tech Stack

| Layer | Option |
|-------|--------|
| Frontend | HTML + CSS + Vanilla JS (simple) or Next.js |
| Form Submission | Google Apps Script → Google Sheets |
| Assignment Dashboard | Google Looker Studio embed |
| Hosting | GitHub Pages / Vercel / Netlify (free) |
| Domain | masguru.dev (register via Niagahoster or Cloudflare) |
| Materials Storage | Google Drive (already familiar) |

---

*This design system was built specifically for masguru.dev — a bold, modern, Gen Z-friendly digital teacher platform.*
