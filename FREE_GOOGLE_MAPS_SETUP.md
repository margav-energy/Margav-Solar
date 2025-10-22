# 🆓 Free Google Maps Setup (No Billing Required)

## **Step 1: Create a New Google Cloud Project**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **"Select a project"** → **"New Project"**
3. Name it: "MarGav Solar Maps"
4. Click **"Create"**

## **Step 2: Enable Required APIs (Free)**
1. Go to **"APIs & Services"** → **"Library"**
2. Search for and enable these APIs (all free):
   - **Maps JavaScript API**
   - **Places API**
   - **Geocoding API**

## **Step 3: Create API Key (Free)**
1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** → **"API Key"**
3. Copy your new API key

## **Step 4: Configure API Key (No Restrictions)**
1. Click on your new API key
2. Under **"Application restrictions"**: Select **"None"**
3. Under **"API restrictions"**: Select **"Don't restrict key"**
4. Click **"Save"**

## **Step 5: Update Your Config**
Replace the API key in `config.js`:
```javascript
const CONFIG = {
  GOOGLE_MAPS_API_KEY: 'YOUR_NEW_API_KEY_HERE',
  // ... rest of your config
};
```

## **Step 6: Test**
1. Refresh your website
2. The map should load without any billing requirements

## **💰 Free Tier Limits (More Than Enough)**
- **28,000 map loads per month** (free)
- **40,000 geocoding requests per month** (free)
- **$200 credit per month** (free)

## **🚨 Common Issues:**
- **"API not enabled"**: Enable the required APIs in step 2
- **"RefererNotAllowedMapError"**: Set restrictions to "None" in step 4
- **"This API project is not authorized"**: Make sure you're in the right project

## **✅ No Credit Card Required!**
You can use Google Maps API completely free within the generous limits. The billing setup is only required if you exceed the free tier limits (which is very unlikely for a small website).

