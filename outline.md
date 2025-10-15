# Tabkha Platform - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Main homepage with hero and meal discovery
├── subscriptions.html      # Subscription plans and pricing
├── chefs.html             # Chef profiles and specialties
├── main.js                # Core JavaScript functionality
├── resources/             # Media assets folder
│   ├── hero-cooking.jpg   # Generated hero image
│   ├── meal-*.jpg         # Food category images (15+ images)
│   ├── chef-*.jpg         # Chef profile images (8 images)
│   └── testimonial-*.jpg  # Customer avatar images
├── interaction.md         # Interaction design document
├── design.md             # Visual design guide
└── outline.md            # This project outline
```

## Page Content Structure

### index.html - Main Homepage
**Sections:**
1. **Navigation Bar**
   - Logo and brand name "طبخة"
   - Menu: الرئيسية، الاشتراكات، الطباخات، تواصل معنا
   - Language toggle (AR/EN)

2. **Hero Section**
   - Generated hero image of authentic home cooking scene
   - Animated headline with Typed.js: "وجبات منزلية من قلب المطبخ إلى طاولتك"
   - Subtitle about connecting working women with home chefs
   - Primary CTA: "ابدأي رحلتك الغذائية"

3. **Meal Category Selector** (Interactive Component #1)
   - Grid of 6 meal categories with hover effects
   - Categories: Traditional, Healthy, International, Family Meals, Desserts, Seasonal
   - Each card shows meal count and chef availability

4. **Chef Discovery Quiz** (Interactive Component #2)
   - 4-step interactive matching quiz
   - Questions about preferences, dietary needs, schedule
   - Results show personalized chef recommendations

5. **Featured Chefs Carousel**
   - Horizontal scrolling chef cards
   - Profile photos, specialties, ratings
   - "احجزي استشارة" buttons

6. **How It Works Section**
   - 3-step process visualization
   - Icons and descriptions in Arabic
   - Progress indicators

7. **Customer Testimonials**
   - Rotating testimonials with customer photos
   - Star ratings and review highlights

8. **Subscription Preview**
   - Quick plan comparison cards
   - Pricing highlights
   - "شاهدي جميع الخطط" CTA

9. **Footer**
   - Contact information
   - Social links
   - Copyright and trust badges

### subscriptions.html - Subscription Plans
**Sections:**
1. **Navigation** (shared component)

2. **Page Header**
   - Title: "اختري خطة الاشتراك المثالية"
   - Subtitle about flexibility and savings

3. **Subscription Plan Builder** (Interactive Component #3)
   - Interactive customization interface
   - Meal frequency, portion size, delivery preferences
   - Real-time pricing calculation
   - Savings visualization with ECharts.js

4. **Plan Comparison Table**
   - Detailed feature comparison
   - Monthly vs weekly options
   - Special dietary accommodation indicators

5. **Add-on Services**
   - Special occasion catering
   - Nutritional consultations
   - Family meal upgrades

6. **FAQ Section**
   - Collapsible questions about subscriptions
   - Payment and cancellation policies

### chefs.html - Chef Profiles
**Sections:**
1. **Navigation** (shared component)

2. **Page Header**
   - Title: "تعرفي على طباخاتنا المميزات"
   - Filter and search options

3. **Chef Profile Cards** (Interactive Component #4)
   - Grid layout with live status indicators
   - Availability badges (Available/Busy/Pre-order)
   - Specialty tags and cuisine types
   - Rating stars and review counts
   - Sample menu previews

4. **Chef Detail Modals**
   - Full profile information
   - Photo galleries of dishes
   - Customer reviews and testimonials
   - Direct booking interface

5. **Search and Filter Sidebar**
   - Cuisine type filters
   - Availability calendar
   - Rating and price filters
   - Location preferences

## Interactive Features Implementation

### Component 1: Meal Category Selector
- **Technology**: Vanilla JS with Anime.js animations
- **Data**: Hardcoded meal categories with image URLs
- **Interaction**: Click to filter, smooth transitions

### Component 2: Chef Discovery Quiz
- **Technology**: Multi-step form with progress tracking
- **Logic**: Preference matching algorithm
- **Results**: Dynamic chef recommendations

### Component 3: Subscription Plan Builder
- **Technology**: Real-time calculation with ECharts.js
- **Features**: Dynamic pricing, savings visualization
- **Validation**: Form validation and error handling

### Component 4: Chef Profile Cards
- **Technology**: Grid layout with modal popups
- **Data**: Chef profiles with availability status
- **Interaction**: Filter, search, detailed views

## Technical Implementation

### Core Libraries
- **Anime.js**: Entrance animations and micro-interactions
- **Splide.js**: Image carousels and galleries
- **Typed.js**: Dynamic text effects in hero section
- **ECharts.js**: Data visualization for pricing and savings
- **p5.js**: Background effects and organic animations

### Responsive Design
- **Mobile-first**: Touch-friendly interactions
- **Breakpoints**: 320px, 768px, 1024px, 1440px
- **Typography**: Responsive font scaling
- **Images**: Optimized WebP with fallbacks

### Performance Optimization
- **Lazy Loading**: Images load as needed
- **Code Splitting**: JavaScript modules for each page
- **CSS Optimization**: Critical CSS inlined
- **Image Compression**: WebP format with quality optimization