

## Portfolio Enhancement Plan

### Current State
The portfolio is solid with good structure. Here are targeted enhancements to make it more recruiter-friendly and visually impactful.

### Enhancements

**1. Add a Typing Animation to Hero Section**
- Add a typewriter effect on the subtitle "I build things for mobile." cycling through phrases like "mobile.", "Android.", "the future." — creates an engaging first impression.

**2. Add a "Download Resume" CTA Button in Hero**
- Add a prominent green-bordered button next to social icons saying "Download Resume" — recruiters always look for this first. Currently it's only in the navbar.

**3. Add Stats/Metrics Bar Below Hero**
- A horizontal strip showing key numbers: "4+ Years Experience", "100K+ Users Impacted", "99.72% Crash-Free", "5+ Apps Shipped" — recruiters love quantifiable achievements at a glance.

**4. Fix Section Numbering**
- Currently Awards says "06." and Contact says "06." too. Fix numbering to be consistent across all sections (01-08).

**5. Enhance Contact Section**
- Add links to LinkedIn and GitHub alongside the email button so recruiters have multiple ways to reach out. Add a subtle tagline like "Let's build something great together."

**6. Add Smooth Scroll Behavior**
- Add `scroll-behavior: smooth` to the HTML for polished navigation transitions when clicking navbar links.

**7. Add Hover Animations on Skill Pills**
- Subtle scale-up and glow on hover for skill tags — adds interactivity and polish.

### Technical Details
- **Files modified**: `HeroSection.tsx`, `ContactSection.tsx`, `SkillsSection.tsx`, `index.css`, `AwardsSection.tsx`, `ArticlesSection.tsx`
- **No new dependencies** — typewriter effect built with `useState` + `useEffect`
- All changes follow existing design patterns (mono font, primary color accents, framer-motion animations)

