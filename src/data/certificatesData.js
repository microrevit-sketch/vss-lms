// Certificate data for VSS program completers
// Each certificate has a unique SSID (SundarSTEM ID)

export const certificates = {
  'SS2024001': {
    ssid: 'SS2024001',
    studentName: 'Ahmed Hassan',
    program: 'Virtual STEM School (VSS)',
    batch: 'Batch 1',
    completionDate: '2024-12-15',
    issueDate: '2024-12-20',
    verificationCode: 'VSS-2024-AH-001',
    issuedBy: 'SundarSTEM School',
    signature: 'Muhammad Ishaq',
    laptopReturned: false
  },
  'SS2024002': {
    ssid: 'SS2024002',
    studentName: 'Fatima Ali',
    program: 'Virtual STEM School (VSS)',
    batch: 'Batch 1',
    completionDate: '2024-12-15',
    issueDate: '2024-12-20',
    verificationCode: 'VSS-2024-FA-002',
    issuedBy: 'SundarSTEM School',
    signature: 'Muhammad Ishaq',
    laptopReturned: true
  },
  'SS2024003': {
    ssid: 'SS2024003',
    studentName: 'Usman Khan',
    program: 'Virtual STEM School (VSS)',
    batch: 'Batch 1',
    completionDate: '2024-12-15',
    issueDate: '2024-12-20',
    verificationCode: 'VSS-2024-UK-003',
    issuedBy: 'SundarSTEM School',
    signature: 'Muhammad Ishaq',
    laptopReturned: true
  }
};

// Function to verify certificate by SSID
export const verifyCertificate = (ssid) => {
  return certificates[ssid.toUpperCase()] || null;
};

// Function to get all valid SSIDs (for testing purposes)
export const getAllSSIDs = () => {
  return Object.keys(certificates);
};
