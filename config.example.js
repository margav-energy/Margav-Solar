// Configuration file for API keys
// Copy this file to config.js and replace with your actual credentials

const CONFIG = {
  // OpenStreetMap + Leaflet - No API key required! 🎉
  // Using free OpenStreetMap tiles with Leaflet.js
  
  // EmailJS Configuration - REPLACE WITH YOUR OWN CREDENTIALS
  EMAILJS_SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
  EMAILJS_TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE', // Quote requests
  EMAILJS_CONTACT_TEMPLATE_ID: 'YOUR_CONTACT_TEMPLATE_ID_HERE', // Contact form
  EMAILJS_PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
  
  // You can add other API keys here
  // OTHER_API_KEY: 'your_other_key_here'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else {
  window.CONFIG = CONFIG;
}
