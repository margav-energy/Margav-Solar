# 📧 Contact Form EmailJS Template Code

## **🎯 Template Setup for Contact Form**

### **Step 1: Create New Template in EmailJS**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click "Email Templates" → "Create New Template"
3. **Template Name:** "Contact Us"
4. **Template ID:** `template_gcy68b5` ✅ (Already created)

### **Step 2: Template Content**

#### **Subject Line:**
```
New Contact Form Message - {{first_name}} {{last_name}}
```

#### **Email Content:**
```
📧 New contact form submission from MarGav Solar website:

👤 CUSTOMER CONTACT DETAILS:
============================
👨‍💼 Name: {{first_name}} {{last_name}}
📧 Email: {{email}}
📞 Phone: {{phone}}

🏠 PROPERTY DETAILS:
====================
📍 Property Address: {{property_address}}
🏘️ Property Type: {{property_type}}

💬 MESSAGE:
===========
{{message}}

📅 REQUEST DETAILS:
==================
⏰ Submitted at: {{timestamp}}
🌐 Source: {{source}}

✅ NEXT STEPS:
==============
1. 📋 Review customer inquiry above
2. 📞 Contact {{first_name}} {{last_name}} at {{email}} within 24 hours
3. 💼 Address their specific questions/requirements
4. 📅 Schedule consultation if needed

---
🤖 This email was automatically generated from the MarGav Solar website contact form.
```

### **Step 3: Template Variables Used**
- `{{first_name}}` - Customer's first name
- `{{last_name}}` - Customer's last name
- `{{email}}` - Customer's email address
- `{{phone}}` - Customer's phone number
- `{{property_address}}` - Property address from map
- `{{property_type}}` - Property type selection
- `{{message}}` - Customer's message
- `{{timestamp}}` - Submission timestamp
- `{{source}}` - Source identifier

---

## **🔧 JavaScript Code for Contact Form**

### **Current Contact Form Submission Code:**
```javascript
// Function to send contact form message via EmailJS
function sendContactMessage(formData) {
  return new Promise((resolve, reject) => {
    console.log('Sending contact message with EmailJS...');
    
    // Initialize EmailJS if not already done
    if (typeof emailjs === 'undefined') {
      reject(new Error('EmailJS not loaded'));
      return;
    }
    
    // Initialize EmailJS with public key
    emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
    
    // Prepare email template parameters
    const templateParams = {
      to_email: 'sales@margav.energy',
      from_name: 'MarGav Solar Website',
      subject: `New Contact Form Message - ${formData.firstName} ${formData.lastName}`,
      
      // Customer details
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      property_address: formData.propertyAddress,
      property_type: formData.propertyType || 'Not specified',
      message: formData.message,
      
      // Request metadata
      timestamp: new Date().toLocaleString('en-GB'),
      source: 'Contact Form'
    };
    
    // Debug: Log the parameters being sent
    console.log('EmailJS Service ID:', CONFIG.EMAILJS_SERVICE_ID);
    console.log('EmailJS Template ID:', CONFIG.EMAILJS_TEMPLATE_ID);
    console.log('Template Parameters:', templateParams);
    
    // Send email using EmailJS
    emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('Contact message email sent successfully:', response);
        resolve({ success: true, message: 'Contact message sent successfully' });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        console.error('Error details:', error.text || error.message || error);
        reject(error);
      });
  });
}
```

### **Contact Form Event Handler:**
```javascript
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const formObject = {};

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
      formObject[key] = value;
    }

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName", 
      "email",
      "propertyAddress",
      "message",
      "privacy",
    ];
    let isValid = true;
    let missingFields = [];

    requiredFields.forEach((field) => {
      if (!formObject[field] || formObject[field].trim() === "") {
        isValid = false;
        missingFields.push(field);
      }
    });

    if (!isValid) {
      showNotification(
        `Please fill in all required fields: ${missingFields.join(", ")}`,
        "error"
      );
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formObject.email)) {
      showNotification("Please enter a valid email address", "error");
      return;
    }

    // Send email using EmailJS
    sendContactMessage(formObject)
      .then(() => {
        showNotification("Thank you for your message! We'll get back to you within 24 hours.", "success");
        this.reset();
      })
      .catch((error) => {
        console.error('Contact form submission failed:', error);
        showNotification("Failed to send message. Please try again or contact us directly.", "error");
      });
  });
}
```

---

## **📋 Contact Form HTML Structure**

### **Form Fields Collected:**
```html
<form class="contact__form" id="contact-form">
  <!-- Name Fields -->
  <input type="text" id="first-name" name="firstName" required />
  <input type="text" id="last-name" name="lastName" required />
  
  <!-- Contact Fields -->
  <input type="email" id="email" name="email" required />
  <input type="tel" id="phone" name="phone" />
  
  <!-- Property Fields -->
  <input type="text" id="property-address" name="propertyAddress" required />
  <select id="property-type" name="propertyType">
    <option value="detached">Detached</option>
    <option value="semi-detached">Semi-detached</option>
    <option value="terraced">Terraced</option>
    <option value="flat">Flat</option>
    <option value="bungalow">Bungalow</option>
  </select>
  
  <!-- Message Field -->
  <textarea id="message" name="message" required></textarea>
  
  <!-- Privacy Consent -->
  <input type="checkbox" name="privacy" required />
  
  <!-- Submit Button -->
  <button type="submit">Send Message</button>
</form>
```

---

## **🔧 Configuration Update**

### **Update config.js with Contact Template ID:**
```javascript
const CONFIG = {
  // EmailJS Configuration
  EMAILJS_SERVICE_ID: 'service_xpxec2s',
  EMAILJS_TEMPLATE_ID: 'template_00uncww', // Quote requests
  EMAILJS_CONTACT_TEMPLATE_ID: 'template_gcy68b5', // Contact form ✅
  EMAILJS_PUBLIC_KEY: 'ux9Oo2Pc2NKWpl4rq',
};
```

### **Update Contact Form to Use New Template:**
```javascript
// In sendContactMessage function, change this line:
emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_CONTACT_TEMPLATE_ID, templateParams)

// To this (already updated ✅):
emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_CONTACT_TEMPLATE_ID, templateParams)
```

---

## **🚀 Testing Your Contact Form**

### **Test Steps:**
1. **Go to:** `http://localhost:4000`
2. **Scroll to Contact section**
3. **Fill out the form:**
   - First Name: John
   - Last Name: Smith
   - Email: john.smith@email.com
   - Phone: 01234 567890
   - Property Address: Use map to select location
   - Property Type: Detached
   - Message: "I'm interested in solar panels for my home"
   - Privacy: Check (required)
4. **Click "Send Message"**
5. **Check `sales@margav.energy`** for the email

### **Expected Email:**
```
📧 New contact form submission from MarGav Solar website:

👤 CUSTOMER CONTACT DETAILS:
============================
👨‍💼 Name: John Smith
📧 Email: john.smith@email.com
📞 Phone: 01234 567890

🏠 PROPERTY DETAILS:
====================
📍 Property Address: 123 Main Street, London, UK
🏘️ Property Type: Detached

💬 MESSAGE:
===========
I'm interested in solar panels for my home

📅 REQUEST DETAILS:
==================
⏰ Submitted at: 22/10/2025, 11:15:30
🌐 Source: Contact Form

✅ NEXT STEPS:
==============
1. 📋 Review customer inquiry above
2. 📞 Contact John Smith at john.smith@email.com within 24 hours
3. 💼 Address their specific questions/requirements
4. 📅 Schedule consultation if needed

---
🤖 This email was automatically generated from the MarGav Solar website contact form.
```

---

## **✅ Summary**

Your contact form template is ready! The code above provides:

- ✅ **Complete template content** for EmailJS
- ✅ **JavaScript code** for form submission
- ✅ **All form fields** properly mapped
- ✅ **Professional email formatting**
- ✅ **Testing instructions**

Just create the template in EmailJS with the content above, update your config with the new template ID, and you're ready to go! 🎉
