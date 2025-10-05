# CharlestonHacks Theme Guide

This document describes the design system and color palette used in the CharlestonHacks application.

## Design Philosophy

The CharlestonHacks theme reflects the warmth and historic character of Charleston, SC, while maintaining a modern, professional appearance. We use warm, earthy tones inspired by Charleston's architecture and coastal setting.

## Color Palettes

### Gold (Primary)
Our primary brand color, inspired by Charleston's historic brass and gold accents.

- **Base Color**: `#E6C388`
- **Usage**: Primary buttons, links, branding, highlights
- **Shades**:
  - `gold.0` - `#FFF8E7` - Lightest, for backgrounds
  - `gold.1` - `#FFEEC4` - Very light
  - `gold.2` - `#F5DCA4` - Light
  - `gold.3` - `#E6C388` - **Base color**
  - `gold.4` - `#D9AD6D` - Medium
  - `gold.5` - `#CC9752` - Darker
  - `gold.6` - `#B8823A` - Dark
  - `gold.7` - `#9A6D2E` - Very dark
  - `gold.8` - `#7D5824` - Deeper
  - `gold.9` - `#5F421A` - Darkest

**When to use**: Primary CTAs, active states, emphasis elements, brand elements

---

### Teal (Accent)
A complementary color providing contrast to the warm gold palette.

- **Base Color**: `#2AA9A9`
- **Usage**: Highlights, secondary actions, accent elements
- **Shades**:
  - `teal.0` - `#E6F7F7` - Lightest
  - `teal.1` - `#B8E9E9` - Very light
  - `teal.2` - `#8ADADA` - Light
  - `teal.3` - `#5CCBCB` - Medium light
  - `teal.4` - `#3BBDBD` - Medium
  - `teal.5` - `#2AA9A9` - **Base color**
  - `teal.6` - `#1F8F8F` - Medium dark
  - `teal.7` - `#177575` - Dark
  - `teal.8` - `#0F5B5B` - Very dark
  - `teal.9` - `#0A4242` - Darkest

**When to use**: Secondary CTAs, flexible availability badges, interactive elements

---

### Sage (Success)
An earthy green representing growth and positive outcomes.

- **Base Color**: `#7DA94C`
- **Usage**: Success states, confirmations, positive indicators
- **Shades**:
  - `sage.0` - `#F0F4EC` - Lightest
  - `sage.1` - `#D9E5CC` - Very light
  - `sage.2` - `#C2D6AC` - Light
  - `sage.3` - `#ABC78C` - Medium light
  - `sage.4` - `#94B86C` - Medium
  - `sage.5` - `#7DA94C` - **Base color**
  - `sage.6` - `#669A3D` - Medium dark
  - `sage.7` - `#4F7B2E` - Dark
  - `sage.8` - `#385C1F` - Very dark
  - `sage.9` - `#213D10` - Darkest

**When to use**: Full-time availability, success messages, completed states

---

### Ocean (Info)
A deep blue inspired by Charleston's coastal waters.

- **Base Color**: `#3583D0`
- **Usage**: Informational elements, links, data visualization
- **Shades**:
  - `ocean.0` - `#E8F1F8` - Lightest
  - `ocean.1` - `#C4DBF0` - Very light
  - `ocean.2` - `#9FC5E8` - Light
  - `ocean.3` - `#7AAFE0` - Medium light
  - `ocean.4` - `#5599D8` - Medium
  - `ocean.5` - `#3583D0` - **Base color**
  - `ocean.6` - `#286DB0` - Medium dark
  - `ocean.7` - `#1B5790` - Dark
  - `ocean.8` - `#0E4170` - Very dark
  - `ocean.9` - `#072B50` - Darkest

**When to use**: Part-time availability, informational messages, hyperlinks

---

### Terracotta (Error/Warning)
A warm red inspired by Charleston brick and tilework.

- **Base Color**: `#D66443`
- **Usage**: Errors, warnings, destructive actions
- **Shades**:
  - `terracotta.0` - `#FCF0ED` - Lightest
  - `terracotta.1` - `#F5D4CB` - Very light
  - `terracotta.2` - `#EDB8A9` - Light
  - `terracotta.3` - `#E69C87` - Medium light
  - `terracotta.4` - `#DE8065` - Medium
  - `terracotta.5` - `#D66443` - **Base color**
  - `terracotta.6` - `#B85236` - Medium dark
  - `terracotta.7` - `#9A4029` - Dark
  - `terracotta.8` - `#7C2E1C` - Very dark
  - `terracotta.9` - `#5E1C0F` - Darkest

**When to use**: Error messages, delete actions, critical warnings

---

### Dark (Backgrounds)
Warmer dark tones that complement the gold palette.

- **Usage**: Dark mode backgrounds, text on light backgrounds
- **Shades**:
  - `dark.0` - `#C9C5BD` - Lightest, text on dark
  - `dark.1` - `#B0ACA3` - Dimmed text
  - `dark.2` - `#979389` - Muted elements
  - `dark.3` - `#6B6660` - Borders, dividers
  - `dark.4` - `#4A4540` - UI borders
  - `dark.5` - `#3A3530` - Hover states
  - `dark.6` - `#2D2925` - Card backgrounds
  - `dark.7` - `#221F1B` - **Main background**
  - `dark.8` - `#1A1714` - Deeper backgrounds
  - `dark.9` - `#12100E` - Darkest

**When to use**: All dark mode UI elements, backgrounds, containers

---

## Semantic Color Mapping

```javascript
primary: 'gold'        // Primary actions, branding
success: 'sage'        // Success states, confirmations
info: 'ocean'          // Information, links
warning: 'gold'        // Warnings, cautions
error: 'terracotta'    // Errors, destructive actions
accent: 'teal'         // Highlights, secondary actions
```

## Availability Badge Colors

User availability is color-coded for quick recognition:

- **Full-time**: Sage (green) - Available for significant commitment
- **Part-time**: Ocean (blue) - Available with limited hours
- **Weekends**: Gold (yellow) - Weekend availability
- **Evenings**: Teal (cyan) - Evening availability
- **Flexible**: Teal (cyan) - Adaptable schedule
- **Unavailable**: Gray - Not currently available

## Typography

- **Font Family**: Inter (with system fallbacks)
- **Headings**: Inter, 700 weight
- **Body**: Inter, 400 weight

### Heading Sizes
- `h1`: 2.125rem (34px), line-height 1.3
- `h2`: 1.625rem (26px), line-height 1.35
- `h3`: 1.375rem (22px), line-height 1.4
- `h4`: 1.125rem (18px), line-height 1.45
- `h5`: 1rem (16px), line-height 1.5
- `h6`: 0.875rem (14px), line-height 1.5

## Component Defaults

### Border Radius
Default radius: `md` (typically 8px)

### Spacing Scale
- `xs`: 0.625rem (10px)
- `sm`: 0.75rem (12px)
- `md`: 1rem (16px)
- `lg`: 1.25rem (20px)
- `xl`: 2rem (32px)

### Cards
- Shadow: `sm`
- Padding: `lg`
- Radius: `md`
- Border: Always shown

### Buttons
- Radius: `md`
- Primary color: Gold
- Variants: `filled`, `light`, `subtle`, `outline`

## Usage Guidelines

### Do's
✅ Use gold for primary actions and brand elements
✅ Use ocean/sage for informational/success states
✅ Maintain consistent spacing with the defined scale
✅ Use semantic color names instead of hardcoded values
✅ Test designs in both light and dark modes

### Don'ts
❌ Don't use colors outside the defined palette
❌ Don't mix warm and cool tones excessively
❌ Don't use gold.9 (darkest) for text - poor contrast
❌ Don't override component defaults without good reason
❌ Don't use red/green for critical information (accessibility)

## Accessibility

All color combinations are tested for WCAG AA compliance:
- Minimum contrast ratio: 4.5:1 for normal text
- Minimum contrast ratio: 3:1 for large text
- Color is never the only indicator of state

## Implementation

Colors are defined in `/app/src/theme/mantineTheme.js` and automatically applied throughout the application via Mantine's theming system.

To use theme colors in components:

```jsx
import { Button } from '@mantine/core';

// Using semantic colors
<Button color="gold">Primary Action</Button>
<Button color="ocean">Info Action</Button>
<Button color="sage">Success Action</Button>
<Button color="terracotta">Delete</Button>

// Using color shades
<Box bg="dark.7">Background</Box>
<Text c="gold.3">Gold text</Text>
```

## Related Files

- `/app/src/theme/mantineTheme.js` - Theme configuration
- `/app/tailwind.config.js` - Tailwind color extensions
- `/app/src/App.css` - Legacy CSS styles
- `/app/src/index.css` - Global styles
