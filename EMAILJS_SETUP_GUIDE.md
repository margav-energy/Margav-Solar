# 📧 EmailJS Setup Guide for MarGav Solar

## **✅ Current Status**
- ✅ EmailJS account created
- ✅ Service ID: `service_p1j8xap`
- ✅ Code updated to use EmailJS
- ⏳ Need to complete template and public key setup

## **🔧 Step-by-Step Setup**

### **Step 1: Get Your Public Key**
1. **Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)**
2. **Click on "Account"** in the left sidebar
3. **Copy your "Public Key"** (starts with something like `user_xxxxxxxxx`)
4. **Update `config.js`** with your public key:

```javascript
const CONFIG = {
  // ... other config
  EMAILJS_PUBLIC_KEY: 'user_your_actual_public_key_here',
};
```

### **Step 2: Create Email Template**
1. **Go to "Email Templates"** in EmailJS dashboard
2. **Click "Create New Template"**
3. **Template Name:** "Quote Request Template"
4. **Use this template content:**

**Subject:**
```
New Quote Request - {{services}} - Website Calculator
```

**Content:**
```
New quote request received from MarGav Solar website:

CUSTOMER REQUIREMENTS:
====================
Services Requested: {{services}}
Property Type: {{house_type}}
Property Age: {{property_age}}
Energy Usage: {{energy_usage}}

SERVICE SPECIFICATIONS:
======================
{{service_details}}

REQUEST DETAILS:
===============
Requested at: {{timestamp}}
Source: {{source}}

NEXT STEPS:
===========
1. Review customer requirements
2. Prepare personalized quote
3. Contact customer within 24 hours
4. Schedule property assessment if needed

---
This email was automatically generated from the MarGav Solar website quote calculator.
```

5. **Click "Save"**
6. **Copy the Template ID** (starts with `template_xxxxxxxxx`)

### **Step 3: Update Template ID in Config**
Update your `config.js` file:

```javascript
const CONFIG = {
  // ... other config
  EMAILJS_TEMPLATE_ID: 'template_your_actual_template_id_here',
};
```

### **Step 4: Test Your Setup**
1. **Start your server:** `python -m http.server 3000`
2. **Open:** `http://localhost:3000`
3. **Go to quotation calculator**
4. **Fill out the form** and click "Request Quote"
5. **Check your email** at `sales@margav.energy`
6. **Check browser console** (F12) for any errors

## **📧 Email Template Variables**

Your template can use these variables:
- `{{services}}` - Selected services (e.g., "Solar Panels, Battery Storage")
- `{{house_type}}` - Property type (e.g., "Detached House")
- `{{property_age}}` - Property age (e.g., "25-50 years")
- `{{energy_usage}}` - Energy usage (e.g., "500 kWh/month")
- `{{service_details}}` - Formatted service specifications
- `{{timestamp}}` - Request timestamp
- `{{source}}` - Source (always "Website Calculator")

## **🔍 Troubleshooting**

### **Common Issues:**

**"EmailJS not loaded" error:**
- Check if EmailJS script is loading in browser console
- Verify the script tag is in your HTML

**"Template not found" error:**
- Verify your Template ID is correct
- Check if template is published in EmailJS dashboard

**"Service not found" error:**
- Verify your Service ID is correct
- Check if service is connected to your email account

**Emails not arriving:**
- Check spam folder
- Verify email service is connected in EmailJS
- Check EmailJS dashboard for delivery status

### **Debug Steps:**
1. **Open browser console** (F12)
2. **Look for error messages** when submitting form
3. **Check Network tab** for failed requests
4. **Verify all IDs** in config.js are correct

## **📊 Testing Checklist**

### **Before Going Live:**
- [ ] Public key added to config.js
- [ ] Template ID added to config.js
- [ ] Email template created and saved
- [ ] Test email sent successfully
- [ ] Email arrives at sales@margav.energy
- [ ] Email contains all customer data
- [ ] Form resets after submission
- [ ] Error handling works properly

### **Test Scenarios:**
- [ ] **All services selected** with full details
- [ ] **Single service** with minimal information
- [ ] **No energy usage** specified
- [ ] **Different property types** and ages
- [ ] **Form validation** works correctly

## **🚀 Production Deployment**

### **Before Going Live:**
1. **Test thoroughly** with different scenarios
2. **Set up email monitoring** in EmailJS dashboard
3. **Configure email service** (Gmail, Outlook, etc.)
4. **Test with real email addresses**
5. **Set up backup email** if needed

### **Security Considerations:**
- **Public key is safe** to expose (it's designed for client-side use)
- **Service ID is safe** to expose
- **Template ID is safe** to expose
- **No sensitive data** is stored in the code

## **📈 Monitoring & Analytics**

### **EmailJS Dashboard:**
- **Track email delivery** status
- **Monitor usage** and limits
- **View delivery logs**
- **Set up alerts** for failures

### **Business Metrics:**
- **Quote requests per day**
- **Most popular service combinations**
- **Response time to quote requests**
- **Conversion rate** from quote to sale

## **✅ Final Configuration**

Once you have both the Public Key and Template ID, your `config.js` should look like:

```javascript
const CONFIG = {
  GOOGLE_MAPS_API_KEY: 'AIzaSyBR6Frq9j-RQj4QAlkY9HhrYb48k8urNMo',
  EMAILJS_SERVICE_ID: 'service_p1j8xap',
  EMAILJS_TEMPLATE_ID: 'template_your_template_id_here',
  EMAILJS_PUBLIC_KEY: 'user_your_public_key_here',
};
```

Your quotation calculator will then send professional quote requests directly to `sales@margav.energy`! 🎯
