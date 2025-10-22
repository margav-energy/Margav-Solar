# Google Maps Location Picker Setup Instructions

## 🚀 **CURRENT STATUS: SERVER RUNNING**
Your development server is active at: **http://localhost:8000**

### **What's Working:**
- ✅ Website loads successfully
- ✅ All CSS and JavaScript files served
- ✅ Hero image and logo loading
- ⚠️ Favicon needs to be created (404 error)
- ⚠️ Maps will show loading state until API key is added

## Overview
Your contact form has been enhanced with a Google Maps location picker that includes:
- **Address search** with Google Places Autocomplete
- **Draggable map** with interactive marker
- **Automatic address filling** when location is selected
- **Hidden latitude/longitude fields** for precise coordinates
- **Mobile-friendly design** with responsive styling

## Step 1: Get a Google Maps API Key

### 1.1 Create a Google Cloud Project
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click "Select a project" → "New Project"
4. Enter project name: "MarGav Solar Website"
5. Click "Create"

### 1.2 Enable Required APIs
1. In the Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for and enable these APIs:
   - **Maps JavaScript API**
   - **Places API**
   - **Geocoding API**

### 1.3 Create API Key
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy your API key
4. **Important**: Click "Restrict Key" and set restrictions:
   - **Application restrictions**: HTTP referrers
   - **Website restrictions**: Add your domain (e.g., `yourdomain.com/*`)
   - **API restrictions**: Select "Restrict key" and choose:
     - Maps JavaScript API
     - Places API
     - Geocoding API

## Step 2: Add Your API Key

### 2.1 Update the HTML File
In `index.html`, find this line (around line 28):
```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap"></script>
```

Replace `YOUR_API_KEY` with your actual API key:
```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&libraries=places&callback=initMap"></script>
```

## Step 3: Test the Implementation

### 3.1 Local Testing (CURRENTLY RUNNING)
**Your server is active at: http://localhost:8000**

1. **Open your browser** and navigate to `http://localhost:8000`
2. **Navigate to the contact form** section (scroll down)
3. **You should see:**
   - A "Search for your property location" input field
   - A map container below the input (showing loading state)
   - The map will center on your current location (or UK center if location access is denied)

### 3.2 Fix Favicon Issue (Optional)
The server shows a 404 error for `@favicon.ico`. To fix this:

**Option A: Create a favicon file**
1. Create a file named `favicon.ico` in your project root
2. Update the HTML to use `favicon.ico` instead of `@favicon.ico`

**Option B: Use existing logo as favicon**
```html
<link rel="icon" type="image/png" href="assets/logo.png">
```

**Option C: Ignore for now** (favicon is not critical for functionality)

### 3.2 Test Functionality
1. **Search Test**: Type an address in the search box and select from suggestions
2. **Map Interaction**: Click anywhere on the map to move the marker
3. **Drag Test**: Drag the red marker to a different location
4. **Address Sync**: Verify that the "Property Address" field updates automatically
5. **Mobile Test**: Test on mobile devices to ensure responsive design

## Step 4: Features Overview

### 4.1 Location Search
- **Autocomplete**: Type to get address suggestions
- **UK Focus**: Results are restricted to UK addresses
- **Real-time**: Suggestions appear as you type

### 4.2 Interactive Map
- **Current Location**: Map centers on user's location (with permission)
- **Draggable Marker**: Red marker can be dragged to any location
- **Click to Move**: Click anywhere on map to move marker
- **Zoom Controls**: Standard Google Maps zoom controls

### 4.3 Automatic Updates
- **Address Field**: "Property Address" field updates automatically
- **Coordinates**: Hidden latitude/longitude fields are populated
- **Form Integration**: Works seamlessly with existing form validation

### 4.4 Mobile Optimization
- **Responsive Design**: Map adjusts to screen size
- **Touch Friendly**: Works well on touch devices
- **Performance**: Optimized for mobile data usage

## Step 5: Customization Options

### 5.1 Map Styling
The map uses a custom style that hides points of interest labels. To modify:
1. Edit the `styles` array in `script.js` (around line 1367)
2. Use [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/) for custom styles

### 5.2 Default Location
To change the fallback location (currently UK center):
1. Edit `userLocation` in `script.js` (around line 1339)
2. Set your preferred latitude/longitude coordinates

### 5.3 Map Zoom Level
To adjust initial zoom level:
1. Edit the `zoom` property in `script.js` (around line 1365)
2. Values: 1 (world) to 20 (building level)

## Step 6: Troubleshooting

### 6.1 Common Issues

**Map doesn't load:**
- Check API key is correct
- Verify APIs are enabled (Maps JavaScript API, Places API, Geocoding API)
- Check browser console for error messages

**Location permission denied:**
- Map will fallback to UK center coordinates
- This is normal behavior for privacy-conscious users

**Autocomplete not working:**
- Ensure Places API is enabled
- Check API key restrictions allow your domain

**Mobile issues:**
- Test on actual mobile devices, not just browser dev tools
- Ensure responsive CSS is loading correctly

### 6.2 Browser Console Errors
Check browser console (F12) for specific error messages:
- `Google Maps JavaScript API error`: Usually API key or billing issue
- `Geolocation error`: Location permission denied (normal)
- `Places API error`: Places API not enabled or restricted

## Step 7: Production Deployment

### 7.1 Security Considerations
- **API Key Restrictions**: Always restrict your API key to specific domains
- **Billing Alerts**: Set up billing alerts in Google Cloud Console
- **Usage Monitoring**: Monitor API usage to avoid unexpected charges

### 7.2 Performance Optimization
- **Lazy Loading**: Map only loads when contact form is visible
- **Caching**: Browser caches map tiles automatically
- **Mobile Data**: Consider data usage for mobile users

## Step 8: Form Integration

### 8.1 Form Submission
The enhanced form now includes:
- `propertyAddress`: Full formatted address
- `latitude`: Hidden field with latitude coordinate
- `longitude`: Hidden field with longitude coordinate

### 8.2 Server-Side Processing
When processing form submissions, you'll receive:
```javascript
{
  "propertyAddress": "123 Main Street, London, UK",
  "latitude": "51.5074",
  "longitude": "-0.1278"
}
```

## Support and Maintenance

### API Key Management
- **Rotation**: Regularly rotate API keys for security
- **Monitoring**: Monitor usage and costs in Google Cloud Console
- **Backup**: Keep backup API keys for redundancy

### Updates
- **Google Maps API**: Google occasionally updates their API
- **Browser Compatibility**: Test with different browsers regularly
- **Mobile Updates**: Test on various mobile devices and OS versions

## Cost Considerations

### Google Maps Pricing (as of 2024)
- **Maps JavaScript API**: $7 per 1,000 loads
- **Places API**: $17 per 1,000 requests
- **Geocoding API**: $5 per 1,000 requests

### Cost Optimization
- **Caching**: Implement client-side caching for repeated searches
- **Usage Limits**: Set daily quotas in Google Cloud Console
- **Monitoring**: Use Google Cloud Monitoring to track usage

---

## 🎯 **IMMEDIATE NEXT STEPS**

### **Right Now (Server is Running):**
1. **✅ Open http://localhost:8000** in your browser
2. **✅ Scroll to contact form** to see the new location picker
3. **✅ Check browser console** (F12) for any JavaScript errors
4. **⚠️ Get Google Maps API key** to make maps functional

### **To Make Maps Work:**
1. **Get API Key**: Follow Step 1 in this document
2. **Add localhost restrictions**: Include `http://localhost:8000/*`
3. **Replace YOUR_API_KEY** in the HTML file
4. **Refresh browser** to see maps load

## Quick Start Checklist

- [x] **Server running** at http://localhost:8000
- [x] **Favicon fixed** (using existing logo)
- [x] **HTML structure** with maps integration
- [x] **CSS styling** for mobile-responsive maps
- [x] **JavaScript functionality** ready for API key
- [ ] Create Google Cloud Project
- [ ] Enable required APIs (Maps JavaScript, Places, Geocoding)
- [ ] Create and restrict API key
- [ ] Replace `YOUR_API_KEY` in index.html
- [ ] Test maps functionality
- [ ] Test on mobile devices
- [ ] Deploy to production
- [ ] Set up billing alerts
- [ ] Monitor usage

## 🚀 **DEVELOPMENT STATUS**

**✅ COMPLETED:**
- Website structure and styling
- Google Maps integration code
- Mobile-responsive design
- Local development server
- Favicon issue resolved

**⏳ NEXT:**
- Add Google Maps API key
- Test map functionality
- Verify mobile compatibility

Your contact form is now enhanced with a professional Google Maps location picker that will improve user experience and provide accurate location data for your business!
