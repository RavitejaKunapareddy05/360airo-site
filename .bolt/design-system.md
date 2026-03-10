# 360airo Design System

## Color Palette

### Primary Colors
- **Purple Accent**: `#b45ecf`
- **Deep Purple**: `#480056`
- **Dark Background**: `#19001d`

### Usage
- Gradients: `from-[#b45ecf] to-[#480056]`
- Background animations: Smooth gradient transitions between all three colors
- Hover states: `#b45ecf` with opacity variations
- Borders: `#b45ecf` with 20-30% opacity

## Animation Features

### Framer Motion Animations
1. **Page Entry**: Staggered children with fade-up effect
2. **Hover Effects**: Scale (1.05) and translateY (-5 to -10px)
3. **Background**: Rotating gradient blobs with 20s duration
4. **Cards**: Glow effect on hover
5. **Buttons**: Icon slide transitions

### CSS Animations
1. **gradientShift**: 15s infinite background gradient animation
2. **float**: 6s ease-in-out infinite floating effect
3. **Smooth transitions**: All interactive elements have transition-all duration-300

## Component Patterns

### Cards
- Glass morphism effect with `backdrop-filter: blur(10px)`
- Border: `1px solid rgba(180, 94, 207, 0.2)`
- Background: Gradient with purple tones and transparency

### Buttons
- Primary: Gradient from `#b45ecf` to `#480056` with glow effect
- Secondary: Outline with purple border and hover background
- All include smooth hover transitions

### Typography
- Gradient text: Linear gradient from `#b45ecf` to white
- Headings: Bold, large scale (text-5xl to text-7xl)
- Body: White with 70-90% opacity

## Page Structure

All pages follow this structure:
1. Navbar (fixed, with scroll effect)
2. Hero section (with animated background)
3. Content sections (with scroll-triggered animations)
4. CTA section
5. Footer

## Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg (Tailwind defaults)
- Navigation: Hamburger menu on mobile
- Grid layouts: Collapse to single column on mobile
