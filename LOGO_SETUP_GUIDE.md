# Logo Setup Guide

## How to Add the SundarSTEM Logo to Certificates

### Step 1: Save the Logo Image
1. Save your SundarSTEM School logo image (the circular one with the torch and book)
2. Name it exactly: `sundarstem-logo.png`
3. Place it in the `public` folder of your project

### File Location:
```
vss-lms/
├── public/
│   ├── index.html
│   └── sundarstem-logo.png  ← Save your logo here
├── src/
└── ...
```

### Step 2: Verify Logo Display
1. After placing the logo in the public folder
2. The development server will automatically pick it up
3. Go to: `http://localhost:3000/vss-lms/#/certificate`
4. Enter SSID: `SS2024001`
5. You should see the logo at the top of the certificate

### Image Requirements:
- **Format:** PNG (with transparent background recommended)
- **Recommended Size:** 500x500 pixels or similar square ratio
- **File Name:** Must be exactly `sundarstem-logo.png`

## Certificate Updates Summary

### ✅ Changes Made:
1. **Removed watermark** - The medal/award watermark in the center is now removed
2. **Added logo space** - SundarSTEM logo will display at the top of certificate
3. **A4 Landscape format** - Certificate is now properly sized for A4 landscape (297mm x 210mm)
4. **Optimized spacing** - All text sizes and spacing adjusted to fit landscape format
5. **Maintained elegant design** - Kept the modern borders, gradients, and professional layout

### Certificate Layout (Top to Bottom):
1. SundarSTEM Logo (circular, at top)
2. School name with gradient text
3. Decorative separator line with diamond
4. Program subtitle
5. "Certificate of Completion" title
6. Student name in highlighted box
7. Program completion text with batch
8. Completion and Issue dates (side by side)
9. Signature and verification code (side by side)
10. Footer with verification URL

### Note:
- If the logo file is not found, the certificate will still display correctly (logo space will be hidden)
- The logo will appear in both the on-screen display and the PDF download
