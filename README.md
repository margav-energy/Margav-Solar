# MarGav Solar Website

A responsive, modern website for MarGav Solar, a UK-based energy consultancy firm specializing in solar panels, boilers, and battery installation for all types of UK properties.

## 🌱 Features

### Design & Branding

- **Colors**: Green (#28A745), White (#FFFFFF), Black (#000000)
- **Typography**: Modern, professional Inter font family
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support

### Sections Included

1. **Header/Navigation**

   - Sticky header with smooth scroll behavior
   - Mobile-responsive hamburger menu
   - Language selector dropdown
   - Active section highlighting

2. **Hero Section**

   - Full-width background image of UK homes with solar panels
   - Compelling headline and subheadline
   - Call-to-action button

3. **About Us**

   - Company introduction with statistics
   - Image and text layout
   - Emphasis on expertise with all property types

4. **Services**

   - Three service cards: Solar Panels, Battery Storage, Boilers
   - Feature lists and "Learn More" buttons
   - Hover effects and animations
   - Solutions for all property types

5. **Process Timeline**

   - 5-step customer journey
   - Visual timeline with numbered steps
   - Clear process explanation

6. **Request Quote**

   - Interactive form with property details
   - Real-time cost estimation
   - Step-by-step input validation

7. **Blog/Insights**

   - Grid layout with featured articles
   - High-quality images from Unsplash
   - "Read More" links

8. **Testimonials**

   - Customer quotes with author information
   - Professional testimonial cards

9. **Accreditations**

   - MCS, Ofgem, ISO certifications
   - Partner brand logos

10. **Contact Form**

    - Comprehensive contact form with property details
    - Contact information display
    - Form validation and submission handling
    - Social media links

11. **Footer**
    - Contact information
    - Social media links
    - Newsletter signup
    - Language selector
    - Legal links

### Interactive Features

- **Request Quote**: Functional cost estimation based on property details
- **Contact Form**: Comprehensive form with validation and submission handling
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Form Validation**: Real-time input validation with visual feedback
- **Newsletter Signup**: Working subscription form
- **Language Selector**: Multi-language support (UI ready)
- **Scroll Animations**: Elements animate into view on scroll
- **Scroll to Top**: Floating button for easy navigation

## 🚀 Getting Started

### Prerequisites

- Modern web browser
- Local web server (optional, for development)

### Installation

1. Clone or download the project files
2. Open `index.html` in a web browser
3. For development, use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

### File Structure

```
margav-energy-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technical Details

### HTML

- Semantic HTML5 structure
- Accessibility attributes (ARIA labels, alt text)
- Meta tags for SEO and responsive design
- External font and icon library integration

### CSS

- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables) for consistency
- Mobile-first responsive design
- Smooth transitions and hover effects
- Print stylesheet included

### JavaScript

- Vanilla JavaScript (no dependencies)
- ES6+ features
- Intersection Observer for scroll animations
- Form validation and submission handling
- Local storage for user preferences
- Error handling and performance optimization

### Performance Features

- Optimized images from Unsplash
- Lazy loading implementation
- Debounced scroll events
- Efficient DOM manipulation
- Minimal external dependencies

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Customization

### Colors

Update CSS variables in `:root` section of `styles.css`:

```css
:root {
  --primary-color: #28a745; /* Green */
  --secondary-color: #ffffff; /* White */
  --text-color: #000000; /* Black */
  --text-light: #666666; /* Light gray */
}
```

### Content

- Update text content in `index.html`
- Replace placeholder images with actual photos
- Modify contact information in footer
- Update service descriptions and features

### Calculator Logic

Modify the `calculateInstallationCost()` function in `script.js` to adjust pricing calculations.

## 🔧 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for MarGav Solar. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**MarGav Solar** - Powering a Greener Future for UK Homes
