# VSS LMS Developer Guide

## Project Overview
**VSS LMS (Virtual STEM School Learning Management System)** is a React-based web application for SundarSTEM School's educational programs including VSS, PMC-5, RMC, and ILM.

**Live Site**: https://microrevit-sketch.github.io/vss-lms/

---

## Technology Stack

### Core Technologies
- **React 18** - Frontend framework
- **React Router v6** - Client-side routing with HashRouter
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **html2canvas + jsPDF** - PDF certificate generation

### Development Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **Create React App** - Build tooling

---

## Project Structure

```
vss-lms/
├── public/                      # Static assets
│   ├── index.html              # HTML entry point
│   ├── sundarstem-logo.png     # School logo
│   └── principal-signature.png # Principal's signature
│
├── src/
│   ├── components/             # Reusable components
│   │   └── shared/
│   │       └── Navbar.js       # Navigation bar
│   │
│   ├── contexts/               # React Context providers
│   │   └── AuthContext.js     # Authentication state
│   │
│   ├── data/                   # Static data files
│   │   ├── certificatesData.js # Certificate database
│   │   └── newsData.js         # News & announcements
│   │
│   ├── pages/                  # Page components
│   │   ├── public/             # Public pages
│   │   │   ├── Home.js         # Landing page
│   │   │   ├── VSS.js          # VSS program page
│   │   │   ├── PMC5.js         # PMC-5 program page
│   │   │   ├── RMC.js          # RMC program page
│   │   │   ├── ILM.js          # ILM platform page
│   │   │   ├── Registration.js # Registration form
│   │   │   └── CertificateVerification.js # Certificate lookup
│   │   │
│   │   └── admin/              # Admin pages (local only)
│   │       ├── AdminDashboard.js
│   │       └── ManageCertificates.js # Certificate CRUD
│   │
│   ├── App.js                  # Main app component with routes
│   ├── App.css                 # Custom styles
│   └── index.js                # React entry point
│
├── package.json                # Dependencies
└── tailwind.config.js          # Tailwind configuration
```

---

## Key Components

### 1. **Certificate System**
A digitally verifiable certificate system for VSS program graduates.

**Files:**
- `src/data/certificatesData.js` - Certificate database
- `src/pages/public/CertificateVerification.js` - Public verification page
- `src/pages/admin/ManageCertificates.js` - Admin management panel

**Features:**
- Certificate lookup by SSID (SundarSTEM ID)
- A4 landscape certificate design with logo and signature
- PDF download functionality
- Laptop return tracking (blocks certificate if laptop not returned)
- Bulk CSV upload for batch certificate management

**Certificate Data Structure:**
```javascript
{
  ssid: 'SS2024001',                    // Unique student ID
  studentName: 'Ahmed Hassan',
  program: 'Virtual STEM School (VSS)',
  batch: 'Batch 1',
  completionDate: '2024-12-15',
  issueDate: '2024-12-20',
  verificationCode: 'VSS-2024-AH-001',
  issuedBy: 'SundarSTEM School',
  signature: 'Muhammad Ishaq',
  laptopReturned: false                 // Laptop tracking
}
```

**How It Works:**
1. **Student Side**: Enter SSID → Verify → Download PDF
2. **Admin Side**: Add certificates manually or via CSV → Export code → Replace `certificatesData.js`
3. **Laptop Tracking**: If `laptopReturned: false`, certificate is blocked

---

### 2. **Program Pages**
Each program (VSS, PMC-5, RMC, ILM) has a dedicated page with:
- Program overview
- Eligibility criteria
- Registration links
- Program-specific news
- Pathways and benefits

**Key Pages:**
- `VSS.js` - Virtual STEM School (Grades 6 & 7)
- `PMC5.js` - Pakistan Math Contest (Grade 5 only)
- `RMC.js` - Regional Math Club (Grade 5)
- `ILM.js` - ILM Platform (Online question bank)

---

### 3. **Registration System**
Universal registration form for VSS Admission and PMC-5.

**File:** `src/pages/public/Registration.js`

**Features:**
- Grade-specific eligibility (Grade 5 for PMC-5, Grades 6-7 for VSS)
- Age validation based on DOB
- Form validation
- Submit to Google Forms backend

---

### 4. **News System**
Centralized news management for all programs.

**File:** `src/data/newsData.js`

**Structure:**
```javascript
export const vssNews = [...];  // VSS-specific news
export const pmcNews = [...];  // PMC-specific news
export const rmcNews = [...];  // RMC-specific news
export const allNews = [...];  // Combined & sorted
```

**Display:** News appears on home page and program pages

---

### 5. **Admin Panel** (Local Only)
Certificate management dashboard for administrators.

**File:** `src/pages/admin/ManageCertificates.js`

**Features:**
- Add/Edit/Delete certificates
- Bulk CSV upload
- Search and filter
- Laptop status tracking
- Export updated `certificatesData.js`

**⚠️ Important:** Admin panel runs locally only. Never deploy to production!

---

## Routing Configuration

Uses **HashRouter** for GitHub Pages compatibility:

```javascript
// App.js
<HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/vss" element={<VSS />} />
    <Route path="/pmc-5" element={<PMC5 />} />
    <Route path="/rmc" element={<RMC />} />
    <Route path="/ilm" element={<ILM />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/certificate" element={<CertificateVerification />} />
    <Route path="/admin/*" element={<AdminDashboard />} />
  </Routes>
</HashRouter>
```

**URLs:**
- Home: `/#/`
- VSS: `/#/vss`
- Certificates: `/#/certificate`
- Admin: `/#/admin` (local only)

---

## Deployment Guide

### Prerequisites
```bash
node -v  # v14+ required
npm -v   # v6+ required
```

### Local Development

1. **Clone Repository:**
```bash
cd /home/muhammad-saffi-ullah/Downloads/Alchemy/vss-lms
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Start Development Server:**
```bash
npm start
```
Opens at: `http://localhost:3000/vss-lms`

4. **Build for Production:**
```bash
npm run build
```
Creates optimized build in `build/` folder

---

### GitHub Pages Deployment

**Current Setup:**
- Repository: `microrevit-sketch/vss-lms`
- Branch: `main`
- URL: https://microrevit-sketch.github.io/vss-lms/

**Deploy Steps:**

1. **Update `package.json`:**
```json
{
  "homepage": "https://microrevit-sketch.github.io/vss-lms"
}
```

2. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

3. **Add Deploy Scripts:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. **Deploy:**
```bash
npm run deploy
```

5. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Path: `/` (root)

**⚠️ Important:** Always test locally before deploying!

---

## Certificate Management Workflow

### Adding Certificates (Bulk)

1. **Open Admin Panel:**
```
http://localhost:3000/vss-lms/#/admin/certificates
```

2. **Download CSV Template:**
   - Click "Download CSV Template" button
   - Template includes: SSID, Student Name, Batch, Dates, Laptop Status

3. **Fill CSV with Student Data:**
```csv
SSID,Student Name,Batch,Completion Date,Issue Date,Laptop Returned
SS2024001,Ahmed Hassan,Batch 1,2024-12-15,2024-12-20,no
SS2024002,Fatima Ali,Batch 1,2024-12-15,2024-12-20,yes
```

4. **Upload CSV:**
   - Click "Upload CSV" button
   - Select your filled CSV file
   - Verify certificates appear in table

5. **Export Code:**
   - Click "Export Code" button
   - Downloads `certificatesData.js`

6. **Replace Database File:**
```bash
mv ~/Downloads/certificatesData.js src/data/certificatesData.js
```

7. **Restart Server:**
```bash
# Stop with Ctrl+C
npm start
```

8. **Test Certificates:**
   - Go to `/#/certificate`
   - Enter SSID to verify

9. **Deploy to Production:**
```bash
npm run deploy
```

---

## Laptop Tracking System

### How It Works

**Database Field:**
```javascript
laptopReturned: false  // Certificate blocked
laptopReturned: true   // Certificate available
```

**Student Experience:**
- `laptopReturned: false` → Shows warning + blocks download
- `laptopReturned: true` → Full certificate access

**Admin Actions:**
1. Check "Laptop has been returned" checkbox when editing certificate
2. CSV upload: Use `yes` (returned) or `no` (not returned)

---

## Configuration Files

### 1. `package.json`
```json
{
  "name": "vss-lms",
  "version": "0.1.0",
  "homepage": "https://microrevit-sketch.github.io/vss-lms",
  "dependencies": {
    "react": "^18.2.0",
    "react-router-dom": "^6.x",
    "lucide-react": "^0.x",
    "html2canvas": "^1.x",
    "jspdf": "^2.x"
  }
}
```

### 2. `tailwind.config.js`
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sundar-red': '#C90016',
        'pmc': '#01411C',
        'rmc': '#000080'
      }
    }
  }
}
```

---

## Important Notes

### ⚠️ Admin Panel
- **Never deploy admin panel to production**
- Admin routes are for local development only
- Use admin panel to manage certificates locally
- Export and deploy updated data files only

### 📝 Certificate Updates
- Changes in admin panel are temporary (React state)
- Must export and replace `certificatesData.js` for persistence
- Always test locally before deploying

### 🎨 Styling
- Uses Tailwind CSS for styling
- Custom colors: `sundar-red`, `pmc`, `rmc`
- Responsive design for mobile/tablet/desktop

### 🔗 Routing
- Uses HashRouter for GitHub Pages
- All URLs have `#` prefix (e.g., `/#/vss`)
- Supports direct URL access and browser back button

---

## Common Issues & Solutions

### Issue 1: 404 on GitHub Pages
**Problem:** Page shows 404 error
**Solution:** Ensure `homepage` in `package.json` matches GitHub Pages URL

### Issue 2: Certificates Not Showing
**Problem:** Added certificates in admin but not visible on verification page
**Solution:**
1. Export code from admin panel
2. Replace `src/data/certificatesData.js`
3. Restart server

### Issue 3: Images Not Loading
**Problem:** Logo or signature not displaying
**Solution:** Check files exist in `public/` folder:
- `public/sundarstem-logo.png`
- `public/principal-signature.png`

### Issue 4: Routing Issues
**Problem:** Routes not working after page refresh
**Solution:** Using HashRouter - URLs must have `#` (e.g., `/#/vss`)

---

## Development Tips

### Hot Reload
Changes to code auto-refresh in development mode

### Console Errors
Check browser console (F12) for errors

### React DevTools
Install React DevTools browser extension for debugging

### Testing Certificates Locally
Use SSIDs: SS2024001, SS2024002, SS2024003

---

## Program Structure

### Program Hierarchy
- **RMC** (Regional Math Club) - Grade 5, Monthly contests
- **PMC-5** (Pakistan Math Contest) - Grade 5 only, Annual contest
- **VSS** (Virtual STEM School) - Grades 6 & 7, Admission test
- **ILM** - Online platform for all programs

### Grade Distribution
- **Grade 5:** RMC + PMC-5 + ILM
- **Grades 6 & 7:** VSS Admission Test + ILM

---

## Contact & Support

**Organization:** SundarSTEM School
**Website:** https://microrevit-sketch.github.io/vss-lms/
**Repository:** github.com/microrevit-sketch/vss-lms

For technical issues, check:
1. Browser console for errors
2. Network tab for failed requests
3. React DevTools for component state

---

## Quick Reference

**Start Dev Server:** `npm start`
**Build Production:** `npm run build`
**Deploy to GitHub:** `npm run deploy`
**Admin Panel:** `http://localhost:3000/vss-lms/#/admin`
**Certificate Page:** `/#/certificate`

---

**Last Updated:** December 2024
**Version:** 1.0.0
