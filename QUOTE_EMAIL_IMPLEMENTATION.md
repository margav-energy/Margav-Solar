# 📧 Quote Request Email Implementation Guide

## **✅ Current Implementation Status**

Your quotation calculator has been updated to:
- **Collect detailed requirements** from users
- **Send quote requests** to `sales@margav.energy`
- **Show professional success message** instead of instant estimates
- **Generate qualified leads** for your sales team

## **🔧 What's Working Now**

### **User Experience:**
1. **User fills out calculator** with their requirements
2. **Clicks "Request Quote"** button
3. **Sees loading state** ("Sending Request...")
4. **Gets confirmation message** with next steps
5. **Form resets** for next user

### **Data Collected:**
- **Selected services** (Solar Panels, Battery Storage, EV Chargers)
- **Property details** (Type, Age, Energy Usage)
- **Service-specific preferences** (Roof type, capacity, etc.)
- **Timestamp and source** for tracking

## **📧 Email Integration Options**

### **Option 1: EmailJS (Easiest - No Backend Required)**

**Step 1: Set up EmailJS**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create free account
3. Add email service (Gmail, Outlook, etc.)
4. Create email template

**Step 2: Update Your Code**
Replace the `sendQuoteRequest` function in `script.js`:

```javascript
function sendQuoteRequest(quoteData) {
  return new Promise((resolve, reject) => {
    // EmailJS configuration
    const templateParams = {
      to_email: 'sales@margav.energy',
      from_name: 'Website Quote Calculator',
      services: quoteData.services.join(', '),
      house_type: quoteData.houseType,
      property_age: quoteData.propertyAge,
      energy_usage: quoteData.energyUsage,
      service_details: JSON.stringify(quoteData.serviceSpecificValues),
      timestamp: quoteData.timestamp,
      message: `New quote request from website calculator:
      
Services: ${quoteData.services.join(', ')}
Property Type: ${quoteData.houseType}
Property Age: ${quoteData.propertyAge}
Energy Usage: ${quoteData.energyUsage}

Service Details: ${JSON.stringify(quoteData.serviceSpecificValues, null, 2)}

Requested at: ${quoteData.timestamp}
Source: Website Calculator`
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(() => {
        console.log('Quote request email sent successfully');
        resolve({ success: true });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        reject(error);
      });
  });
}
```

### **Option 2: Backend API (Most Professional)**

**Step 1: Create Backend Endpoint**
```javascript
// Example Node.js/Express endpoint
app.post('/api/quote-request', async (req, res) => {
  try {
    const quoteData = req.body;
    
    // Send email using Nodemailer
    await sendQuoteEmail(quoteData);
    
    // Save to database (optional)
    await saveQuoteRequest(quoteData);
    
    res.json({ success: true, message: 'Quote request received' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process quote request' });
  }
});
```

**Step 2: Update Frontend**
```javascript
function sendQuoteRequest(quoteData) {
  return fetch('/api/quote-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quoteData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      return { success: true };
    } else {
      throw new Error(data.error || 'Failed to send quote request');
    }
  });
}
```

### **Option 3: Form Submission (Simplest)**

**Update the form to use mailto:**
```html
<form class="calculator__form" id="calculator-form" action="mailto:sales@margav.energy" method="post" enctype="text/plain">
```

## **📋 Email Template Example**

### **Subject Line:**
```
New Quote Request - [Service Type] - Website Calculator
```

### **Email Body:**
```
New quote request received from website calculator:

CUSTOMER REQUIREMENTS:
====================
Services Requested: Solar Panels, Battery Storage
Property Type: Detached House
Property Age: 25-50 years
Energy Usage: 500 kWh/month

SERVICE SPECIFICATIONS:
======================
Solar Panels:
- Number of Bedrooms: 4
- Roof Type: Pitched
- Roof Orientation: South facing
- Panel Type: Monocrystalline

Battery Storage:
- Capacity Needed: 10-15 kWh
- Battery Type: Lithium-ion
- Installation Type: Solar + Battery combination

REQUEST DETAILS:
===============
Requested at: 2024-10-15 16:30:00
Source: Website Calculator
IP Address: [User's IP]

NEXT STEPS:
===========
1. Review customer requirements
2. Prepare personalized quote
3. Contact customer within 24 hours
4. Schedule property assessment if needed

---
This email was automatically generated from the MarGav Solar website quote calculator.
```

## **🎯 Lead Management Benefits**

### **What You'll Receive:**
- **Qualified leads** with specific requirements
- **Detailed customer preferences** for personalized quotes
- **Timestamp tracking** for response time monitoring
- **Service-specific data** for accurate pricing

### **Sales Team Advantages:**
- **Pre-qualified prospects** with clear needs
- **Detailed specifications** for accurate quotes
- **Professional follow-up** within 24 hours
- **Higher conversion rates** from qualified leads

## **📊 Analytics & Tracking**

### **Track These Metrics:**
- **Quote requests per day/week**
- **Most popular service combinations**
- **Common property types and ages**
- **Response time to quote requests**
- **Conversion rate from quote to sale**

### **Add Google Analytics:**
```javascript
// Track quote requests
gtag('event', 'quote_request', {
  'event_category': 'engagement',
  'event_label': quoteData.services.join(', '),
  'value': 1
});
```

## **🚀 Quick Implementation (EmailJS)**

### **Step 1: Sign up for EmailJS**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create account and verify email
3. Add your Gmail/Outlook account

### **Step 2: Create Email Template**
1. Go to Email Templates
2. Create new template with your email format
3. Use variables like `{{services}}`, `{{house_type}}`, etc.

### **Step 3: Update Your Code**
1. Add EmailJS script to your HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

2. Initialize EmailJS in your script:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

3. Replace the `sendQuoteRequest` function with the EmailJS version above

## **✅ Testing Your Implementation**

### **Test Checklist:**
- [ ] Calculator form collects all data
- [ ] "Request Quote" button shows loading state
- [ ] Success message displays correctly
- [ ] Email arrives at sales@margav.energy
- [ ] Email contains all customer data
- [ ] Form resets after submission
- [ ] Error handling works properly

### **Test with Different Scenarios:**
- **All services selected** with full details
- **Single service** with minimal information
- **No energy usage** specified
- **Different property types** and ages

Your quotation calculator is now a powerful lead generation tool that will send qualified prospects directly to your sales team! 🎯
