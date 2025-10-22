# 🚨 Google Maps Troubleshooting Guide

## **Current Issue: "This page can't load Google Maps correctly"**

This error means your API key has restrictions that are blocking localhost:3000.

## **🔧 IMMEDIATE FIX:**

### **Step 1: Update API Key Restrictions**
1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Navigate to:** APIs & Services → Credentials
3. **Click on your API key** to edit it
4. **Under "Application restrictions":**
   - Select **"HTTP referrers (web sites)"**
   - **Add these referrers:**
     ```
     http://localhost:3000/*
     http://127.0.0.1:3000/*
     http://localhost:8000/*
     http://127.0.0.1:8000/*
     ```
5. **Under "API restrictions":**
   - Select **"Restrict key"**
   - **Enable these APIs:**
     - ✅ Maps JavaScript API
     - ✅ Places API
     - ✅ Geocoding API
6. **Click "Save"**

### **Step 2: Test the Fix**
1. **Wait 1-2 minutes** for changes to propagate
2. **Refresh your browser** at `http://localhost:3000`
3. **Check browser console** (F12) for any errors
4. **Navigate to contact form** and test the map

## **🔍 Debug Steps:**

### **Check Browser Console (F12):**
Look for these messages:
- ✅ `"Config loaded, initializing maps..."`
- ✅ `"Google Maps API loaded successfully"`
- ❌ `"Failed to load Google Maps API"` (API key issue)
- ❌ `"CONFIG not found"` (config.js not loading)

### **Check Network Tab:**
1. **Open F12 → Network tab**
2. **Refresh the page**
3. **Look for requests to `maps.googleapis.com`**
4. **Check if they return 403 Forbidden** (API key restricted)

## **🛠️ Alternative Solutions:**

### **Option A: Temporarily Remove Restrictions**
1. **Edit your API key**
2. **Set "Application restrictions" to "None"**
3. **Test the map**
4. **Add restrictions back** once it works

### **Option B: Use a Different Port**
If localhost:3000 is blocked, try:
```bash
python -m http.server 8080
```
Then add `http://localhost:8080/*` to your API key restrictions.

### **Option C: Test with a Real Domain**
Use ngrok to get a real domain:
```bash
# Install ngrok first
npm install -g ngrok

# Expose your local server
ngrok http 3000
```
Then use the ngrok URL in your API key restrictions.

## **📋 Common API Key Issues:**

### **❌ Wrong Restrictions:**
- **Missing localhost** in referrer list
- **Wrong port** (3000 vs 8000)
- **Missing protocols** (http vs https)

### **❌ API Not Enabled:**
- **Maps JavaScript API** not enabled
- **Places API** not enabled
- **Geocoding API** not enabled

### **❌ Billing Issues:**
- **No billing account** set up
- **API quotas exceeded**
- **Payment method** not added

## **✅ Success Indicators:**

When working correctly, you should see:
- **Map loads** without error overlay
- **Search box** shows address suggestions
- **Marker** is draggable
- **Address field** updates automatically

## **🚀 Quick Test:**

1. **Open `http://localhost:3000`**
2. **Press F12** to open console
3. **Look for error messages**
4. **Scroll to contact form**
5. **Check if map loads**

## **📞 Need Help?**

If the issue persists:
1. **Check Google Cloud Console** billing
2. **Verify API key** is correct
3. **Try a different browser**
4. **Clear browser cache**
5. **Check if other Google services work**

The most common fix is updating the API key restrictions to include `http://localhost:3000/*`! 🎯
