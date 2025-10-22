# 🚨 Google Maps Quick Fix Guide

## **IMMEDIATE SOLUTIONS**

### **Option 1: Remove All Restrictions (Quickest Fix)**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **Credentials**
3. Click on your API key
4. Under **Application restrictions**: Select **"None"**
5. Under **API restrictions**: Select **"Don't restrict key"**
6. Click **Save**
7. Wait 5-10 minutes for changes to propagate
8. Refresh your website

### **Option 2: Add Localhost to Restrictions**
1. In Google Cloud Console → Credentials → Your API Key
2. Under **Application restrictions**: Select **"HTTP referrers"**
3. Add these referrers:
   - `http://localhost:4000/*`
   - `http://127.0.0.1:4000/*`
   - `http://localhost:8000/*`
   - `http://127.0.0.1:8000/*`
4. Click **Save**

### **Option 3: Enable Billing (Required)**
1. Go to **Billing** in Google Cloud Console
2. Link a payment method
3. Note: You get $200 free credit per month

### **Option 4: Enable Required APIs**
1. Go to **APIs & Services** → **Library**
2. Search for and enable:
   - **Maps JavaScript API**
   - **Places API**
   - **Geocoding API**

## **TEST YOUR API KEY**

Open this URL in your browser (replace with your actual API key):
```
https://maps.googleapis.com/maps/api/js?key=AIzaSyBR6Frq9j-RQj4QAlkY9HhrYb48k8urNMo&libraries=places
```

- ✅ **If you see JavaScript code**: API key works
- ❌ **If you see an error page**: API key has issues

## **ALTERNATIVE: Use a New API Key**

If the current key has issues, create a new one:
1. Go to Google Cloud Console
2. Create a new API key
3. Update `config.js` with the new key
4. Test immediately

## **DEBUGGING STEPS**

1. **Check Console Errors**: Look for specific error messages
2. **Test API Key Directly**: Use the test URL above
3. **Check Billing**: Ensure billing is enabled
4. **Verify APIs**: Make sure all required APIs are enabled
5. **Check Restrictions**: Ensure localhost is allowed

## **COMMON ERROR MESSAGES**

- **"RefererNotAllowedMapError"**: Add localhost to referrer restrictions
- **"This API project is not authorized"**: Enable required APIs
- **"BillingNotEnabled"**: Enable billing in Google Cloud Console
- **"This API is not enabled"**: Enable Maps JavaScript API, Places API, Geocoding API

