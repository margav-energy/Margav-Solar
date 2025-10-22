# 🚨 EmailJS 400 Error Troubleshooting

## **Current Issue: 400 Error**
The EmailJS is returning a 400 error, which means there's a problem with the request parameters.

## **🔍 Debug Steps:**

### **Step 1: Check Browser Console**
1. **Open browser console** (F12)
2. **Look for these debug messages:**
   - `EmailJS Service ID: service_p1j8xap`
   - `EmailJS Template ID: template_00uncww`
   - `Template Parameters: {...}`
   - `Error details: ...`

### **Step 2: Verify EmailJS Template**
1. **Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)**
2. **Click "Email Templates"**
3. **Find your template** `template_00uncww`
4. **Check if it's published** (should show "Published" status)
5. **Verify the template content** matches the variables we're sending

### **Step 3: Check Email Service Connection**
1. **Go to "Email Services"** in EmailJS dashboard
2. **Verify your email service** is connected and working
3. **Test sending a simple email** from the dashboard

## **🔧 Common Fixes:**

### **Fix 1: Update Template Variables**
Your template should use these exact variable names:
```
{{services}}
{{house_type}}
{{property_age}}
{{energy_usage}}
{{message}}
{{timestamp}}
{{source}}
```

### **Fix 2: Simple Template (Recommended)**
Create a new template with this simple content:

**Subject:**
```
New Quote Request - {{services}} - Website Calculator
```

**Content:**
```
New quote request from MarGav Solar website:

Services: {{services}}
Property Type: {{house_type}}
Property Age: {{property_age}}
Energy Usage: {{energy_usage}}

{{message}}

Requested at: {{timestamp}}
Source: {{source}}
```

### **Fix 3: Test with Minimal Parameters**
If the above doesn't work, try this minimal version:

```javascript
const templateParams = {
  to_email: 'sales@margav.energy',
  message: 'Test quote request from website',
  services: 'Solar Panels',
  house_type: 'Detached',
  property_age: '25-50 years',
  energy_usage: '500 kWh',
  timestamp: new Date().toLocaleString('en-GB'),
  source: 'Website Calculator'
};
```

## **📋 Step-by-Step Debugging:**

### **1. Check Template ID**
- Verify `template_00uncww` exists in your EmailJS dashboard
- Make sure it's published
- Copy the exact template ID from the dashboard

### **2. Check Service ID**
- Verify `service_p1j8xap` is correct
- Make sure the email service is connected

### **3. Check Public Key**
- Verify `ux9Oo2Pc2NKWpl4rq` is your correct public key
- Get it from EmailJS dashboard → Account

### **4. Test Template Variables**
- Make sure your template uses the exact variable names we're sending
- No extra spaces or different casing

## **🚀 Quick Test:**

### **Create a Simple Test Template:**
1. **Go to EmailJS Templates**
2. **Create new template** called "Test Template"
3. **Use this simple content:**

**Subject:** `Test Email`

**Content:** `This is a test email. Services: {{services}}`

4. **Update your config.js:**
```javascript
EMAILJS_TEMPLATE_ID: 'template_your_new_test_template_id',
```

5. **Test the quotation calculator**

## **📞 If Still Not Working:**

### **Check These:**
1. **EmailJS account** is active and not suspended
2. **Email service** is properly connected
3. **Template** is published and not draft
4. **Public key** is correct and active
5. **Service ID** matches your email service

### **Alternative: Use Different Template**
If the current template isn't working, create a completely new one with minimal content and test that first.

## **✅ Success Indicators:**
- Console shows: `Quote request email sent successfully`
- Email arrives at `sales@margav.energy`
- No 400 errors in console
- Success message shows on website

Let me know what the console shows after these changes, and we can pinpoint the exact issue! 🔍
