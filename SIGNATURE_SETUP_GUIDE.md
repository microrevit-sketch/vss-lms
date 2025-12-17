# Principal Signature Setup Guide

## How to Add the Principal's Pen Signature

### Step 1: Prepare the Signature Image
1. Take the pen signature image you have (scan or photo)
2. Make sure it has a **transparent background** (no white box around it)
3. Crop it so there's minimal white space around the signature
4. Save it as PNG format for best quality

### Step 2: Save the Signature File
1. Name the file exactly: `principal-signature.png`
2. Place it in the `public` folder of your project

### File Location:
```
vss-lms/
├── public/
│   ├── index.html
│   ├── sundarstem-logo.png  ← Already added
│   └── principal-signature.png  ← Add your pen signature here
├── src/
└── ...
```

### Image Requirements:
- **Format:** PNG with transparent background
- **Recommended Size:** 400-600 pixels wide, height proportional
- **File Name:** Must be exactly `principal-signature.png`
- **Quality:** High resolution for clear PDF output

### Step 3: Verify Display
After placing the signature:
1. Go to: `http://localhost:3000/vss-lms/#/certificate`
2. Enter SSID: `SS2024001`
3. The pen signature should appear above the name
4. If the image is not found, cursive text will show as fallback

## Certificate Signature Section Layout

```
┌──────────────────────────────────────┐
│                                      │
│      [Pen Signature Image]          │
│      ─────────────────────           │
│      Muhammad Ishaq                  │
│      Principal                       │
│      SundarSTEM School               │
│                                      │
└──────────────────────────────────────┘
```

## Changes Made to Certificate

### 1. Logo Size Increased ✅
- **Before:** 96px (24mm)
- **After:** 128px (32mm)
- Logo is now more prominent at the top

### 2. Text Sizes Reduced ✅
- **Certificate Title:** 48px → 32px
- **Student Name:** 36px → 24px
- **Body Text:** 16px → 14px
- **Dates:** 18px → 14px
- All text properly scaled for landscape

### 3. Dates Stretched Horizontally ✅
- **Before:** max-width: 2xl (672px)
- **After:** max-width: 4xl (896px)
- Date boxes now use more horizontal space
- Better utilization of landscape format

### 4. Signature Section Fixed ✅
- **Pen signature image** displayed (with fallback)
- **Name:** Muhammad Ishaq
- **Designation:** Principal
- **Organization:** SundarSTEM School
- **Verification code** removed from display
- Footer text updated: "Certificate can be verified using SSID"

### 5. Principal Name Fixed ✅
- Name is now properly centered within margins
- Signature line width adjusted to 224px (14rem)
- Professional layout maintained

## Fallback Behavior

If the signature image file is not found:
- A cursive text version will display instead
- Uses "Brush Script MT" font
- Still looks professional
- Certificate remains functional

## How to Convert Signature to PNG with Transparent Background

### Method 1: Using GIMP (Free)
1. Open your signature image in GIMP
2. Go to: Layer → Transparency → Add Alpha Channel
3. Use "Select by Color" tool to select white background
4. Press Delete to remove background
5. Export as PNG

### Method 2: Using Online Tool
1. Visit: remove.bg or a similar tool
2. Upload your signature image
3. Download the PNG with transparent background
4. Save as `principal-signature.png`

### Method 3: Using PowerPoint/Word
1. Insert your signature image
2. Click on image → Format → Remove Background
3. Right-click → Save as Picture
4. Save as PNG format

## Testing Checklist

After adding the signature:
- ✅ Signature appears clearly above the name line
- ✅ No white box around signature
- ✅ Signature scales properly in PDF
- ✅ Name "Muhammad Ishaq" displays correctly
- ✅ "Principal" title shown below name
- ✅ "SundarSTEM School" shown at bottom
- ✅ No verification code text (removed)
- ✅ Footer says "Certificate can be verified using SSID"

## Summary of All Fixes

1. **Logo:** Increased from 96px to 128px ✅
2. **Text Sizes:** Reduced across certificate ✅
3. **Dates:** Stretched horizontally, smaller font ✅
4. **Signature:** Added pen signature image placeholder ✅
5. **Name:** "Muhammad Ishaq" properly formatted ✅
6. **Designation:** "Principal" shown separately ✅
7. **Verification:** Code text removed, SSID reference in footer ✅
8. **Margins:** Principal name centered properly ✅

## Next Steps

1. **Add Signature Image:**
   - Prepare PNG with transparent background
   - Name it `principal-signature.png`
   - Place in `public` folder

2. **Test Certificate:**
   - View at `/#/certificate`
   - Check signature display
   - Download PDF to verify quality

3. **Deploy (when ready):**
   ```bash
   npm run build
   npm run deploy
   ```
