# Google Maps Troubleshooting Guide

## 🔍 **Debugging Steps**

### **Step 1: Check Browser Console**
1. Open your website at `http://localhost:4000`
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Look for any error messages related to Google Maps

### **Step 2: Common Issues & Solutions**

#### **Issue 1: API Key Restrictions**
**Error:** `This API project is not authorized to use this API`
**Solution:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to "APIs & Services" → "Credentials"
4. Click on your API key
5. Under "Application restrictions", select "None" (for testing)
6. Under "API restrictions", make sure these are enabled:
   - Maps JavaScript API
   - Places API
   - Geocoding API

#### **Issue 2: HTTP Referrer Restrictions**
**Error:** `RefererNotAllowedMapError`
**Solution:**
1. In Google Cloud Console → Credentials → Your API Key
2. Under "Application restrictions", select "HTTP referrers"
3. Add these referrers:
   - `http://localhost:4000/*`
   - `http://127.0.0.1:4000/*`
   - `http://localhost:8000/*` (if you switch ports)
   - `http://127.0.0.1:8000/*`

#### **Issue 3: APIs Not Enabled**
**Error:** `This API is not enabled`
**Solution:**
1. Go to "APIs & Services" → "Library"
2. Search for and enable:
   - **Maps JavaScript API**
   - **Places API**
   - **Geocoding API**

#### **Issue 4: Billing Not Enabled**
**Error:** `BillingNotEnabled`
**Solution:**
1. Go to "Billing" in Google Cloud Console
2. Link a payment method (Google Maps requires billing)
3. Note: You get $200 free credit per month

### **Step 3: Test API Key Directly**
Open this URL in your browser (replace YOUR_API_KEY):
```
https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places
```

If you see JavaScript code, the API key works.
If you see an error page, the API key has issues.

### **Step 4: Check Console Logs**
Look for these messages in the console:
- ✅ "Config loaded, initializing maps..."
- ✅ "Google Maps API loaded successfully"
- ✅ "initMap callback triggered"
- ✅ "initializeMap called"

If any of these are missing, there's an issue with the loading process.

### **Step 5: Network Tab Check**
1. In Developer Tools, go to **Network** tab
2. Refresh the page
3. Look for requests to `maps.googleapis.com`
4. Check if they return status 200 (success) or an error

## 🚨 **Quick Fixes**

### **Fix 1: Remove All Restrictions (Testing Only)**
1. Go to Google Cloud Console → Credentials
2. Click your API key
3. Set "Application restrictions" to "None"
4. Set "API restrictions" to "Don't restrict key"
5. Save and test

### **Fix 2: Check API Key Format**
Make sure your API key in `config.js` looks like:
```javascript
GOOGLE_MAPS_API_KEY: 'AIzaSyBR6Frq9j-RQj4QAlkY9HhrYb48k8urNMo'
```
- Should start with "AIza"
- Should be about 39 characters long
- No spaces or quotes around it

### **Fix 3: Test with a Simple Map**
Replace the complex map code with this simple test:
```javascript
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 54.7024, lng: -3.2766 },
    zoom: 8,
  });
}
```

## 📞 **Still Not Working?**

1. **Check the exact error message** in the console
2. **Verify your API key** is correct in `config.js`
3. **Test the API key** directly in a browser
4. **Check your Google Cloud Console** billing and API settings
5. **Try a different browser** to rule out browser-specific issues

## 🔧 **Alternative: Use a Different API Key**
If the current key has issues, create a new one:
1. Go to Google Cloud Console
2. Create a new API key
3. Update `config.js` with the new key
4. Test immediately

