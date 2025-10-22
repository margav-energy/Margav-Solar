# 🔒 Secure API Key Setup Guide

## **Why This Matters**
- **API keys in client-side code are visible to everyone**
- **Exposed keys can be stolen and misused**
- **This can lead to unexpected charges and security breaches**

## **✅ Secure Setup (Current Implementation)**

### **Step 1: Configure Your API Key**
1. **Edit `config.js`** and replace `YOUR_ACTUAL_API_KEY_HERE` with your real API key:
```javascript
const CONFIG = {
  GOOGLE_MAPS_API_KEY: 'AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
};
```

### **Step 2: Test Locally**
1. **Your server is running** at `http://localhost:8000`
2. **Open browser** and check console (F12) for any errors
3. **Navigate to contact form** to test the maps

### **Step 3: Protect Your Keys**
- ✅ **`config.js` is in `.gitignore`** - won't be committed to version control
- ✅ **API key is loaded dynamically** - not hardcoded in HTML
- ✅ **Easy to manage** - all keys in one place

## **🚀 Production Deployment Options**

### **Option A: Server-Side Proxy (Most Secure)**
```javascript
// Instead of loading Maps directly, use your server
fetch('/api/maps-config')
  .then(response => response.json())
  .then(config => {
    // Load maps with server-provided key
  });
```

### **Option B: Environment Variables**
```bash
# Set environment variable
export GOOGLE_MAPS_API_KEY="your_key_here"

# Use in your build process
```

### **Option C: Build-Time Injection**
```javascript
// Use build tools to inject keys at build time
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
```

## **🛡️ Security Best Practices**

### **API Key Restrictions (CRITICAL)**
1. **Go to Google Cloud Console**
2. **Edit your API key**
3. **Set Application restrictions:**
   - **HTTP referrers (web sites)**
   - **Add your domains:**
     ```
     http://localhost:8000/*
     https://yourdomain.com/*
     https://www.yourdomain.com/*
     ```
4. **Set API restrictions:**
   - **Restrict key**
   - **Select only needed APIs:**
     - Maps JavaScript API
     - Places API
     - Geocoding API

### **Additional Security Measures**
- **Monitor usage** in Google Cloud Console
- **Set billing alerts** to avoid unexpected charges
- **Rotate keys regularly** (every 3-6 months)
- **Use different keys** for development and production

## **📁 File Structure (Secure)**
```
your-project/
├── index.html          # Main HTML (no API keys)
├── config.js          # API keys (gitignored)
├── .gitignore         # Protects config.js
├── script.js          # Maps functionality
└── styles.css         # Styling
```

## **🔧 Development Workflow**

### **For Local Development:**
1. **Edit `config.js`** with your API key
2. **Test at `http://localhost:8000`**
3. **Never commit `config.js`** to version control

### **For Team Development:**
1. **Create `config.example.js`:**
```javascript
const CONFIG = {
  GOOGLE_MAPS_API_KEY: 'YOUR_API_KEY_HERE',
};
```
2. **Team members copy to `config.js`** and add their keys
3. **Document the setup** in README

### **For Production:**
1. **Use server-side proxy** or environment variables
2. **Never expose API keys** in client-side code
3. **Use build-time injection** for static sites

## **⚠️ Common Mistakes to Avoid**

### **❌ DON'T:**
- Put API keys directly in HTML
- Commit `config.js` to version control
- Use the same key for development and production
- Share API keys in chat/email
- Leave keys unrestricted

### **✅ DO:**
- Use environment variables or config files
- Restrict API keys to specific domains
- Monitor usage and set billing alerts
- Rotate keys regularly
- Use different keys for different environments

## **🚨 Emergency Response**

### **If Your Key is Compromised:**
1. **Immediately disable** the compromised key in Google Cloud Console
2. **Create a new API key** with proper restrictions
3. **Update your application** with the new key
4. **Review usage logs** for any unauthorized access
5. **Set up monitoring** to prevent future incidents

## **📊 Cost Monitoring**

### **Set Up Billing Alerts:**
1. **Go to Google Cloud Console** → Billing
2. **Set up budget alerts:**
   - Daily budget: $5-10
   - Monthly budget: $50-100
3. **Monitor usage** in the APIs & Services section

### **Usage Optimization:**
- **Cache map tiles** when possible
- **Limit API calls** to necessary operations only
- **Use appropriate zoom levels** to reduce tile requests

---

## **🎯 Quick Start (Secure)**

1. **✅ Edit `config.js`** with your API key
2. **✅ Test at `http://localhost:8000`**
3. **✅ Verify maps load** in contact form
4. **✅ Check browser console** for errors
5. **✅ Set up API key restrictions** in Google Cloud Console

Your API keys are now secure and protected! 🔒
