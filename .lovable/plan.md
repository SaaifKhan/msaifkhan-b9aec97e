

## Add Awards & Certifications Section

### Overview
Add a new "Awards & Certifications" section to the portfolio, showcasing two awards with clean card-based layout and the uploaded image for the Fast Learner Award.

### Changes

1. **Copy uploaded image** to `src/assets/fast-learner-award.png`

2. **Create `src/components/AwardsSection.tsx`**
   - Section header: "06. Awards & Certifications" (matching existing numbering style)
   - Two award cards with framer-motion animations:
     - **Fast Learner Award** — Issued by Next Generation Innovation, Feb 2025. Includes the uploaded photo. Description about curiosity and learning spirit.
     - **Best Presentation Award** — Issued by Appiskey, Sep 2021. With ₹5,000 cash prize. No image, icon-based card.
   - Cards use the existing glass/glow styling patterns from the project

3. **Update `src/pages/Index.tsx`**
   - Import and add `<AwardsSection />` between the Experience and Projects sections (logical flow: About → Skills → Experience → Awards → Projects → Articles → Contact)

4. **Update `src/components/Navbar.tsx`**
   - Add "Awards" link to the `navLinks` array pointing to `#awards`

### Layout
- Responsive grid: 1 column on mobile, 2 columns on desktop
- Award card with image gets the photo displayed prominently
- Each card shows: award name, issuer, date, brief description
- Uses existing design tokens (mono font headers, border-glow, glass effects)

