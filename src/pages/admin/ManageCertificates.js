import React, { useState, useRef } from 'react';
import { Plus, Edit2, Trash2, Eye, Search, Download, Upload } from 'lucide-react';
import { certificates as initialCertificates } from '../../data/certificatesData';

const ManageCertificates = () => {
  const [certificates, setCertificates] = useState(Object.values(initialCertificates));
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCertificate, setEditingCertificate] = useState(null);
  const [formData, setFormData] = useState({
    ssid: '',
    studentName: '',
    program: 'Virtual STEM School (VSS)',
    batch: 'Batch 1',
    completionDate: '',
    issueDate: '',
    verificationCode: '',
    issuedBy: 'SundarSTEM School',
    signature: 'Muhammad Ishaq',
    laptopReturned: true
  });
  const csvInputRef = useRef(null);

  const filteredCertificates = certificates.filter(cert =>
    cert.ssid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.verificationCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddNew = () => {
    setEditingCertificate(null);
    setFormData({
      ssid: '',
      studentName: '',
      program: 'Virtual STEM School (VSS)',
      batch: 'Batch 1',
      completionDate: '',
      issueDate: '',
      verificationCode: '',
      issuedBy: 'SundarSTEM School',
      signature: 'Muhammad Ishaq',
      laptopReturned: true
    });
    setShowAddModal(true);
  };

  const handleEdit = (certificate) => {
    setEditingCertificate(certificate);
    setFormData(certificate);
    setShowAddModal(true);
  };

  const handleSave = () => {
    if (editingCertificate) {
      // Update existing certificate
      setCertificates(prev => prev.map(cert =>
        cert.ssid === editingCertificate.ssid ? formData : cert
      ));
    } else {
      // Add new certificate
      setCertificates(prev => [...prev, formData]);
    }
    setShowAddModal(false);
    // In a real app, you would save to backend/database here
    downloadCertificatesJSON();
  };

  const handleDelete = (ssid) => {
    if (window.confirm(`Are you sure you want to delete certificate ${ssid}?`)) {
      setCertificates(prev => prev.filter(cert => cert.ssid !== ssid));
      // In a real app, you would delete from backend/database here
      downloadCertificatesJSON();
    }
  };

  const downloadCertificatesJSON = () => {
    const certificatesObj = {};
    certificates.forEach(cert => {
      certificatesObj[cert.ssid] = cert;
    });

    const dataStr = JSON.stringify(certificatesObj, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'certificatesData.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const lines = text.split('\n').filter(line => line.trim());

      // Skip header row
      const dataLines = lines.slice(1);

      const newCertificates = [];
      const errors = [];

      dataLines.forEach((line, index) => {
        const columns = line.split(',').map(col => col.trim());

        if (columns.length < 3) {
          errors.push(`Line ${index + 2}: Invalid format`);
          return;
        }

        const [ssid, studentName, batch, completionDate, issueDate, laptopReturned] = columns;

        if (!ssid || !studentName) {
          errors.push(`Line ${index + 2}: Missing SSID or Student Name`);
          return;
        }

        // Generate verification code from SSID and student name
        const initials = studentName.split(' ').map(n => n[0]).join('');
        const verificationCode = `VSS-2024-${initials}-${ssid.slice(-3)}`;

        // Parse boolean values for laptop status (accepts: yes/no, true/false, 1/0)
        const parseLaptopStatus = (value) => {
          if (!value) return true; // Default to true (laptop returned)
          const normalized = value.toLowerCase();
          return normalized === 'yes' || normalized === 'true' || normalized === '1';
        };

        newCertificates.push({
          ssid: ssid.toUpperCase(),
          studentName: studentName,
          program: 'Virtual STEM School (VSS)',
          batch: batch || 'Batch 1',
          completionDate: completionDate || new Date().toISOString().split('T')[0],
          issueDate: issueDate || new Date().toISOString().split('T')[0],
          verificationCode: verificationCode,
          issuedBy: 'SundarSTEM School',
          signature: 'Muhammad Ishaq',
          laptopReturned: parseLaptopStatus(laptopReturned)
        });
      });

      if (errors.length > 0) {
        alert(`CSV Upload completed with errors:\n${errors.join('\n')}\n\n${newCertificates.length} certificates imported successfully.`);
      } else {
        alert(`Successfully imported ${newCertificates.length} certificates from CSV!`);
      }

      setCertificates(prev => [...prev, ...newCertificates]);
    };

    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  const downloadCSVTemplate = () => {
    const csvContent = `SSID,Student Name,Batch,Completion Date,Issue Date,Laptop Returned
SS2024001,Ahmed Hassan,Batch 1,2024-12-15,2024-12-20,no
SS2024002,Fatima Ali,Batch 1,2024-12-15,2024-12-20,yes
SS2024003,Usman Khan,Batch 1,2024-12-15,2024-12-20,yes`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'certificate_template.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportCode = () => {
    const certificatesObj = {};
    certificates.forEach(cert => {
      certificatesObj[cert.ssid] = cert;
    });

    const code = `// Certificate data for VSS program completers
// Each certificate has a unique SSID (SundarSTEM ID)

export const certificates = ${JSON.stringify(certificatesObj, null, 2)};

// Function to verify certificate by SSID
export const verifyCertificate = (ssid) => {
  return certificates[ssid.toUpperCase()] || null;
};

// Function to get all valid SSIDs (for testing purposes)
export const getAllSSIDs = () => {
  return Object.keys(certificates);
};
`;

    const dataBlob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'certificatesData.js';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="bg-white shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Manage Certificates</h1>
              <p className="text-gray-600 mt-1">Add, edit, or delete VSS program certificates</p>
            </div>
            <div className="flex gap-3">
              <input
                type="file"
                ref={csvInputRef}
                accept=".csv"
                onChange={handleCSVUpload}
                className="hidden"
              />
              <button
                onClick={() => csvInputRef.current.click()}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors"
              >
                <Upload size={20} />
                Upload CSV
              </button>
              <button
                onClick={exportCode}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition-colors"
              >
                <Download size={20} />
                Export Code
              </button>
              <button
                onClick={handleAddNew}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors"
              >
                <Plus size={20} />
                Add New Certificate
              </button>
            </div>
          </div>
        </div>

        {/* CSV Upload Help */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-blue-900 mb-2">Bulk Upload Certificates via CSV</h3>
              <p className="text-sm text-blue-800 mb-2">
                Upload multiple certificates at once using a CSV file. Required columns: <strong>SSID, Student Name</strong>. Optional: Batch, Completion Date, Issue Date, Laptop Returned (yes/no)
              </p>
              <p className="text-xs text-blue-700 mb-2">
                💡 For Laptop Returned column, use: <strong>yes</strong> (returned/no laptop) or <strong>no</strong> (not returned) - also accepts true/false or 1/0
              </p>
              <button
                onClick={downloadCSVTemplate}
                className="text-sm text-blue-700 underline hover:text-blue-900 font-semibold"
              >
                Download CSV Template
              </button>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white shadow-md p-4 mb-6">
          <div className="flex items-center gap-2">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by SSID, Student Name, or Verification Code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 focus:border-red-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Certificates Table */}
        <div className="bg-white shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    SSID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Batch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Laptop Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Certificate Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Completion Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCertificates.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                      No certificates found
                    </td>
                  </tr>
                ) : (
                  filteredCertificates.map((cert) => {
                    const hasUnreturnedLaptop = !cert.laptopReturned;
                    return (
                    <tr key={cert.ssid} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-mono font-semibold text-gray-900">{cert.ssid}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-gray-900">{cert.studentName}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800">
                          {cert.batch || 'Batch 1'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {cert.laptopReturned ? (
                          <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded">
                            ✓ Returned
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded">
                            ⚠ Not Returned
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {hasUnreturnedLaptop ? (
                          <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded">
                            🔒 Blocked
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded">
                            ✓ Available
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(cert.completionDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <a
                            href={`/certificate?ssid=${cert.ssid}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-900 p-1"
                            title="View Certificate"
                          >
                            <Eye size={18} />
                          </a>
                          <button
                            onClick={() => handleEdit(cert)}
                            className="text-green-600 hover:text-green-900 p-1"
                            title="Edit"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(cert.ssid)}
                            className="text-red-600 hover:text-red-900 p-1"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white shadow-md p-6">
            <div className="text-sm text-gray-600">Total Certificates</div>
            <div className="text-3xl font-bold text-gray-900">{certificates.length}</div>
          </div>
          <div className="bg-white shadow-md p-6">
            <div className="text-sm text-gray-600">Batch 1 Certificates</div>
            <div className="text-3xl font-bold text-blue-600">
              {certificates.filter(c => c.batch === 'Batch 1').length}
            </div>
          </div>
          <div className="bg-white shadow-md p-6">
            <div className="text-sm text-gray-600">Available Certificates</div>
            <div className="text-3xl font-bold text-green-600">
              {certificates.filter(c => c.laptopReturned).length}
            </div>
          </div>
          <div className="bg-white shadow-md p-6">
            <div className="text-sm text-gray-600">Blocked (Unreturned)</div>
            <div className="text-3xl font-bold text-red-600">
              {certificates.filter(c => !c.laptopReturned).length}
            </div>
          </div>
          <div className="bg-white shadow-md p-6">
            <div className="text-sm text-gray-600">Laptops Returned</div>
            <div className="text-3xl font-bold text-green-600">
              {certificates.filter(c => c.laptopReturned).length}
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingCertificate ? 'Edit Certificate' : 'Add New Certificate'}
            </h2>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    SSID *
                  </label>
                  <input
                    type="text"
                    name="ssid"
                    value={formData.ssid}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:border-red-500 focus:outline-none font-mono"
                    placeholder="SS2024001"
                    disabled={editingCertificate !== null}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:border-red-500 focus:outline-none"
                    placeholder="Ahmed Hassan"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Batch *
                  </label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:border-red-500 focus:outline-none"
                    placeholder="Batch 1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Verification Code *
                  </label>
                  <input
                    type="text"
                    name="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:border-red-500 focus:outline-none font-mono"
                    placeholder="VSS-2024-AH-001"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Completion Date *
                  </label>
                  <input
                    type="date"
                    name="completionDate"
                    value={formData.completionDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Issue Date *
                  </label>
                  <input
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Signature *
                </label>
                <input
                  type="text"
                  name="signature"
                  value={formData.signature}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:border-red-500 focus:outline-none"
                  placeholder="Muhammad Ishaq"
                />
              </div>

              {/* Laptop Status Section */}
              <div className="border-t pt-4 mt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Laptop Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="laptopReturned"
                      name="laptopReturned"
                      checked={formData.laptopReturned}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500"
                    />
                    <label htmlFor="laptopReturned" className="text-sm font-medium text-gray-700">
                      Laptop has been returned (or student has no laptop)
                    </label>
                  </div>

                  {!formData.laptopReturned && (
                    <div className="ml-8 bg-red-50 border-l-4 border-red-500 p-3">
                      <p className="text-sm text-red-800 font-semibold">
                        ⚠️ Certificate will be blocked until laptop is returned
                      </p>
                    </div>
                  )}

                  {formData.laptopReturned && (
                    <div className="ml-8 bg-green-50 border-l-4 border-green-500 p-3">
                      <p className="text-sm text-green-800 font-semibold">
                        ✓ Certificate is available for download
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                {editingCertificate ? 'Update' : 'Add'} Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCertificates;
