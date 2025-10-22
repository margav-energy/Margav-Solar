# 📧 Updated EmailJS Templates for MarGav Solar

## **🎯 Current Status**
- ✅ Quote Calculator: Now includes customer name and email
- ✅ Contact Form: Already working with customer details
- ⏳ Need to update EmailJS templates to match new fields

## **📋 Template 1: Quote Request (Updated)**

### **Template ID:** `template_00uncww`
### **Subject Line:**
```
New Quote Request - {{services}} - {{customer_name}}
```

### **Email Content:**
```
New quote request from MarGav Solar website:

CUSTOMER CONTACT DETAILS:
========================
Name: {{customer_name}}
Email: {{customer_email}}

SERVICE REQUIREMENTS:
====================
Services: {{services}}
Property Type: {{house_type}}
Property Age: {{property_age}}
Energy Usage: {{energy_usage}}

SERVICE SPECIFICATIONS:
======================
{{message}}

REQUEST DETAILS:
===============
Requested at: {{timestamp}}
Source: {{source}}

NEXT STEPS:
===========
1. Review customer requirements above
2. Prepare personalized quote for {{customer_name}}
3. Contact {{customer_name}} at {{customer_email}} within 24 hours
4. Schedule property assessment if needed

---
This email was automatically generated from the MarGav Solar website quote calculator.
```

### **Template Variables Used:**
- `{{customer_name}}` - Customer's full name
- `{{customer_email}}` - Customer's email address
- `{{services}}` - Selected services (Solar Panels, Battery Storage, etc.)
- `{{house_type}}` - Property type (Detached, Semi-detached, etc.)
- `{{property_age}}` - Age range of property
- `{{energy_usage}}` - Monthly energy usage in kWh
- `{{message}}` - Detailed service specifications
- `{{timestamp}}` - Request timestamp
- `{{source}}` - Source identifier

---

## **📋 Template 2: Contact Form (Current)**

### **Template ID:** `template_00uncww` (Same template, different content)
### **Subject Line:**
```
New Contact Form Message - {{first_name}} {{last_name}}
```

### **Email Content:**
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

### **Template Variables Used:**
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

## **🔧 How to Update Your EmailJS Templates**

### **Step 1: Access EmailJS Dashboard**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in to your account
3. Click on "Email Templates"

### **Step 2: Update Quote Request Template**
1. **Find template:** `template_00uncww`
2. **Click "Edit"**
3. **Update Subject:** `New Quote Request - {{services}} - {{customer_name}}`
4. **Replace Content** with the Quote Request template above
5. **Click "Save"**
6. **Click "Publish"** to make it live

### **Step 3: Create Separate Contact Form Template (Optional)**
If you want separate templates for quote requests and contact forms:

1. **Click "Create New Template"**
2. **Template Name:** "Contact Form Template"
3. **Template ID:** Copy the new ID (e.g., `template_xxxxxxx`)
4. **Use Contact Form template** content above
5. **Update `config.js`** with new template ID for contact form

### **Step 4: Update Config.js (If Using Separate Templates)**
```javascript
const CONFIG = {
  // EmailJS Configuration
  EMAILJS_SERVICE_ID: 'service_xpxec2s',
  EMAILJS_TEMPLATE_ID: 'template_00uncww', // Quote requests
  EMAILJS_CONTACT_TEMPLATE_ID: 'template_xxxxxxx', // Contact form (new)
  EMAILJS_PUBLIC_KEY: 'ux9Oo2Pc2NKWpl4rq',
};
```

---

## **📊 Template Comparison**

| Field | Quote Calculator | Contact Form |
|-------|------------------|--------------|
| Customer Name | ✅ `{{customer_name}}` | ✅ `{{first_name}} {{last_name}}` |
| Email | ✅ `{{customer_email}}` | ✅ `{{email}}` |
| Phone | ❌ Not collected | ✅ `{{phone}}` |
| Services | ✅ `{{services}}` | ❌ Not applicable |
| Property Details | ✅ `{{house_type}}`, `{{property_age}}` | ✅ `{{property_address}}`, `{{property_type}}` |
| Message | ✅ Service specifications | ✅ Customer inquiry |

---

## **🎯 Benefits of Updated Templates**

### **For Quote Requests:**
- ✅ **Clear customer contact info** at the top
- ✅ **Detailed service requirements** for accurate quotes
- ✅ **Professional formatting** for sales team
- ✅ **Action items** for follow-up

### **For Contact Forms:**
- ✅ **Complete customer profile** with contact details
- ✅ **Property information** from map integration
- ✅ **Customer inquiry** for personalized response
- ✅ **Newsletter preferences** for marketing

---

## **🚀 Testing Your Templates**

### **Test Quote Calculator:**
1. Go to `http://localhost:4000`
2. Scroll to "Request Quote"
3. Fill out form with your name and email
4. Submit quote request
5. Check `sales@margav.energy` for email

### **Test Contact Form:**
1. Go to Contact section
2. Fill out contact form
3. Use map to select location
4. Submit form
5. Check `sales@margav.energy` for email

### **Expected Results:**
- ✅ **Professional email formatting**
- ✅ **All customer details included**
- ✅ **Clear action items for sales team**
- ✅ **Proper timestamp and source tracking**

---

## **📞 Support**

If you need help updating the templates:
1. **Check EmailJS documentation:** [EmailJS Docs](https://www.emailjs.com/docs/)
2. **Test with simple template first** to ensure basic functionality
3. **Use browser console** to debug any template variable issues
4. **Verify template is published** in EmailJS dashboard

Your EmailJS templates are now ready to handle both quote requests and contact form submissions with complete customer information! 🎉
