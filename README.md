# Imagine OS - Marketing Site

A pixel-perfect recreation of the Imagine OS landing page from Claude Design handoff. This is a B2B marketing site for an on-device AI intelligence layer for device manufacturers.

## 🎨 Design Handoff

Built from a Claude Design handoff bundle (`Affordable AI inference platform-handoff-2.zip`). The design features:

- **Product**: Imagine OS - An intelligence layer that sits between the host OS and user surfaces
- **Target Market**: Device manufacturers (OEM programme)
- **Key Feature**: On-device AI that generates custom apps on-demand with zero network access
- **Privacy-first**: All computation happens locally with 0B leaving the device

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk (headings), DM Sans (body), IBM Plex Mono (labels)
- **Deployment**: Ready for Vercel

## 🏗️ Architecture

### Components

```
components/
├── Navigation.tsx       # Sticky header with CTA buttons
├── Hero.tsx            # Hero section with animated gradient text
├── DeviceShowcase.tsx  # Interactive device selector (6 form factors)
├── LayersSection.tsx   # 3D isometric stack visualization
├── AppGenDemo.tsx      # Complex animated app generation demo
├── PrivacySection.tsx  # Privacy stats grid
├── LicensingSection.tsx # 3-tier pricing
├── FinalCTA.tsx        # Final call-to-action with gradient
├── Footer.tsx          # Site footer
└── RFIModal.tsx        # OEM contact form modal
```

### Key Features Implemented

#### 1. Interactive Device Showcase
- 6 device form factors: Galaxy S25 Ultra, Pixel 10 Pro, Xiaomi 15 Pro, ThinkPad X1 Carbon, Surface Laptop 7, Galaxy Watch 8
- Click to switch between devices with specs display
- Animated device mockups with realistic bezels and screens

#### 2. App Generation Demo (Most Complex)
- **4-phase cycle**: Ask → Propose → Install → Run
- **4 example apps**: Bill Split, Sourdough Starter tracker, Lights remote, Plant watering log
- **Automatic cycling** through all apps with smooth transitions
- **Interactive**: Click any app prompt to jump to it
- **Type animation**: Real-time text typing effect
- **Progress bars**: Installation progress simulation
- **Dynamic theming**: Each app has its own color scheme that animates throughout

#### 3. Layers Visualization
- 3D CSS transform isometric stack
- 5 layers with interactive hover states
- Smooth animations using CSS transitions

#### 4. Animated Gradient Text
- Physics-based cursor interaction on gradient text
- Custom animation keyframes (wings, halo, wave, pop, cur)
- Responds to mouse movement

#### 5. RFI Modal
- Full OEM contact form
- Form validation
- Success state with thank you message

## 🎯 Design System

### Colors

```css
--color-dark-bg: #0F0F11        /* Primary background */
--color-dark-surface: #17171A   /* Surface/card background */
--color-light: #F2F1ED          /* Primary text */
--color-blue-primary: #2E5BFF   /* CTA buttons */
--color-blue-accent: #6E8BFF    /* Accents */
--color-purple: #9B7BFF         /* App theme 3 */
--color-pink: #FF6FB1           /* App theme 1 */
--color-orange: #FFB347         /* App theme 4 */
--color-green: #4ED6A8          /* App theme 2 */
```

### Typography

- **Headings**: Space Grotesk (400/500/600)
- **Body**: DM Sans (300/400/500)
- **Labels/Mono**: IBM Plex Mono (400/500)

### Animations

All custom animations defined in `globals.css`:
- `cur`: Cursor blink
- `pop`: Scale in
- `wings`: Gradient animation
- `halo`: Glow pulse
- `wave`: Vertical oscillation

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🌐 Deployment

This project is optimized for Vercel deployment:

```bash
# Deploy to Vercel
vercel

# Or connect to GitHub and auto-deploy on push
vercel --prod
```

## 🎭 Interactive Elements

### AppGenDemo State Machine

```
ASK (typing animation)
  → PROPOSE (app card reveal)
    → INSTALL (progress bar 0-100%)
      → RUN (full app UI with data)
        → [loop to next app]
```

Each phase has unique UI and transitions smoothly. The demo pauses when user clicks a different app prompt.

### Device Selector

6 devices across 3 form factors (phone/laptop/watch). Each device shows:
- Real-world specs (memory, latency, throughput)
- Platform details
- Device mockup with brand-appropriate styling

## 🔍 Key Implementation Details

1. **Font Loading**: Using Next.js `next/font/google` for optimal font loading
2. **Animations**: Mix of CSS animations and React state for complex sequences
3. **Responsive**: Desktop-first design (1280px max-width)
4. **Performance**: Client-side interactivity with zero API calls
5. **TypeScript**: Fully typed components with proper interfaces

## 📝 Notes

- Design source: Claude Design (claude.ai/design)
- Original design file: `Imagine OS.dc.html`
- Handoff bundle included PNG exports for reference
- All interactions implemented from scratch (no copied code from prototype)

## 🚧 Future Enhancements

Potential additions not in the original design:
- Mobile responsive breakpoints
- More device form factors
- Additional app examples
- Analytics integration
- Form submission to actual backend
- Video/gif demos instead of animated divs

---

Built with ❤️ from a Claude Design handoff • Powered by Next.js & Vercel
