# Admin Panel Guide

## Certificate Management System

This admin panel has been created to manage VSS (Virtual STEM School) certificates for students who complete the 4-semester program.

### Features

#### 1. Certificate Verification Page (Public)
- **URL:** `http://localhost:3000/#/certificate`
- Students can enter their SSID to verify and download certificates
- Beautiful certificate design with PDF download
- Sample SSIDs for testing:
  - `SS2024001` - Ahmed Hassan (Excellent)
  - `SS2024002` - Fatima Ali (Outstanding)
  - `SS2024003` - Usman Khan (Excellent)

#### 2. Admin Certificate Management (Admin Only)
- **URL:** `http://localhost:3000/#/admin/certificates`
- **Requires:** Admin login credentials

**Admin Access:**
- Username: `admin@virtualstem.edu.pk`
- Password: `admin123`

### Admin Panel Features

1. **View All Certificates**
   - Search by SSID, student name, or verification code
   - View performance levels and completion dates
   - Statistics dashboard showing total certificates

2. **Add New Certificates**
   - Click "Add New Certificate" button
   - Fill in student details:
     - SSID (unique ID like SS2024004)
     - Student Name
     - Performance Level (Outstanding/Excellent/Good)
     - Completion Date
     - Issue Date
     - 4 Semesters completed
     - Verification Code
     - Signature

3. **Edit Certificates**
   - Click edit icon on any certificate
   - Modify any field except SSID
   - Save changes

4. **Delete Certificates**
   - Click delete icon
   - Confirm deletion

5. **Export Certificates**
   - Click "Export Code" button
   - Downloads `certificatesData.js` file
   - **IMPORTANT:** Replace `/src/data/certificatesData.js` with this file
   - This updates the certificate database with all changes

### How to Use

1. **Access Admin Panel:**
   ```
   http://localhost:3000/#/login
   ```
   Login with admin credentials

2. **Navigate to Certificates:**
   - Click on "Certificates" card in Admin Dashboard
   - Or go directly to: `http://localhost:3000/#/admin/certificates`

3. **Manage Certificates:**
   - Add, edit, or delete certificates as needed
   - Use search to find specific certificates

4. **Export Changes:**
   - After making changes, click "Export Code"
   - Save the downloaded `certificatesData.js` file
   - Replace the file at: `src/data/certificatesData.js`
   - Restart dev server or rebuild

5. **Test Certificate Verification:**
   - Go to: `http://localhost:3000/#/certificate`
   - Enter any SSID you created
   - Click "Verify"
   - Download PDF certificate

### File Structure

```
src/
├── data/
│   └── certificatesData.js          # Certificate database
├── pages/
│   ├── admin/
│   │   ├── AdminDashboard.js        # Admin home (updated with Certificates card)
│   │   └── ManageCertificates.js    # NEW: Certificate management page
│   └── public/
│       └── CertificateVerification.js # NEW: Public certificate verification
└── App.js                            # Updated with new routes
```

### Important Notes

⚠️ **Do NOT push these changes to GitHub yet!**

The admin panel is for local testing only. When you're ready to deploy:

1. Make all certificate changes in admin panel
2. Export the certificates
3. Replace `certificatesData.js` with exported version
4. Test locally
5. Then I'll help you build and deploy to GitHub Pages

### Sample Certificate Fields

```javascript
{
  ssid: 'SS2024001',
  studentName: 'Ahmed Hassan',
  program: 'Virtual STEM School (VSS)',
  grade: 'Grade 6 & 7',
  completionDate: '2024-12-15',
  issueDate: '2024-12-20',
  semesters: ['Spring 2024', 'Summer 2024', 'Fall 2024', 'Spring 2025'],
  performance: 'Excellent',
  verificationCode: 'VSS-2024-AH-001',
  issuedBy: 'SundarSTEM School',
  signature: 'Dr. Muhammad Samar'
}
```

### Certificate Verification URL Format

For sharing with students:
```
https://microrevit-sketch.github.io/vss-lms/#/certificate
```

Students enter their SSID to view and download their certificate.

---

**Created:** December 16, 2024
**Last Updated:** December 16, 2024
