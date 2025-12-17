import React, { useState, useRef } from 'react';
import { Search, Download, CheckCircle, FileText, Shield } from 'lucide-react';
import { verifyCertificate } from '../../data/certificatesData';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CertificateVerification = () => {
  const [ssid, setSsid] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const certificateRef = useRef(null);

  const handleVerify = (e) => {
    e.preventDefault();
    setError('');
    setCertificate(null);

    if (!ssid.trim()) {
      setError('Please enter a valid SSID');
      return;
    }

    const verified = verifyCertificate(ssid.trim());

    if (verified) {
      setCertificate(verified);
    } else {
      setError('Certificate not found. Please check your SSID and try again.');
    }
  };

  const handleDownload = async () => {
    if (!certificateRef.current) return;

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 297; // A4 landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`VSS_Certificate_${certificate.ssid}.pdf`);
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Failed to download certificate. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 mb-4">
            <Shield size={20} />
            <span className="font-semibold">Certificate Verification</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            VSS Program Certificate
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your SSID (SundarSTEM ID) to verify and download your VSS completion certificate
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white shadow-xl p-8 mb-8 max-w-2xl mx-auto border-2 border-gray-100">
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label htmlFor="ssid" className="block text-sm font-semibold text-gray-700 mb-2">
                Enter Your SSID
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="ssid"
                  value={ssid}
                  onChange={(e) => setSsid(e.target.value.toUpperCase())}
                  placeholder="e.g., SS2024001"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 focus:border-red-500 focus:outline-none text-lg font-mono"
                  style={{ textTransform: 'uppercase' }}
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <Search size={20} />
                  Verify
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Your SSID can be found in your VSS enrollment confirmation email or student portal.
            </p>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              <p className="font-semibold">{error}</p>
            </div>
          )}
        </div>

        {/* Certificate Display */}
        {certificate && (() => {
          const hasUnreturnedLaptop = !certificate.laptopReturned;

          return (
            <div className="space-y-6">
              {/* Verification Success Message */}
              <div className="bg-green-50 border-2 border-green-500 p-6 text-center max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="text-green-600" size={32} />
                  <h3 className="text-2xl font-bold text-green-800">Certificate Verified!</h3>
                </div>
                <p className="text-green-700">
                  This certificate is valid and has been issued by SundarSTEM School.
                </p>
              </div>

              {/* Laptop Return Warning - Only show if laptop not returned */}
              {hasUnreturnedLaptop && (
                <div className="bg-red-50 border-l-4 border-red-500 p-6 max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-red-900 mb-3 text-xl">⚠️ Laptop Return Required</h4>
                      <p className="text-base text-red-800 mb-4 font-semibold">
                        Please return the laptop to get your certificate.
                      </p>
                      <div className="bg-white border-2 border-red-300 p-4 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Already returned your laptop?</p>
                        <p className="text-sm text-gray-700 mb-2">Send your proof (courier slip or return receipt) to:</p>
                        <p className="font-bold text-red-700 text-lg">WhatsApp: +92-321-7276806</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Certificate Blocked Message - Show if laptop not returned */}
              {hasUnreturnedLaptop && (
                <div className="bg-red-100 border-2 border-red-500 p-12 text-center max-w-2xl mx-auto">
                  <div className="mb-4">
                    <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-red-800 mb-4">Certificate Not Available</h3>
                  <p className="text-lg text-red-700 mb-2">
                    Your certificate cannot be downloaded until you return the laptop.
                  </p>
                  <p className="text-base text-red-600">
                    Please contact us on WhatsApp: <strong>+92-321-7276806</strong>
                  </p>
                </div>
              )}

              {/* Certificate Preview - Only show if no unreturned laptop */}
              {!hasUnreturnedLaptop && (
                <>


            {/* Certificate Preview - Modern Elegant Design - A4 Landscape */}
            <div
              ref={certificateRef}
              className="bg-gradient-to-br from-white to-gray-50 shadow-2xl relative overflow-hidden"
              style={{
                minHeight: '210mm',
                width: '297mm',
                maxWidth: '100%',
                margin: '0 auto',
                aspectRatio: '297/210'
              }}
            >
              {/* Elegant Border Frame */}
              <div className="absolute inset-4 border-4 border-red-700"></div>
              <div className="absolute inset-6 border border-red-400"></div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-red-600"></div>
              <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-red-600"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-red-600"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-red-600"></div>

              <div className="relative z-10 px-16 py-10">
                {/* Header with Logo */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/sundarstem-logo.png`}
                      alt="SundarSTEM School Logo"
                      className="h-32 w-32 object-contain"
                      onError={(e) => {
                        // Hide image if not found
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    SundarSTEM School
                  </h2>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
                    <div className="w-3 h-3 bg-red-600 rotate-45"></div>
                    <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
                  </div>
                  <p className="text-base text-gray-700 font-semibold tracking-wide">Virtual STEM School Program</p>
                </div>

                {/* Certificate Title */}
                <div className="text-center mb-5">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                    Certificate of Completion
                  </h3>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-3"></div>

                  <p className="text-sm text-gray-600 mb-2 italic">This is proudly presented to</p>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-r-4 border-red-600 py-2 px-6 mb-2 inline-block">
                    <p className="text-3xl font-bold text-gray-900 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                      {certificate.studentName}
                    </p>
                  </div>

                  <p className="text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    for successfully completing the <strong className="text-red-700">{certificate.program}</strong> program
                    {certificate.batch && <span className="block mt-1 text-gray-600 font-semibold text-xs">({certificate.batch})</span>}
                  </p>
                </div>

                {/* Certificate Details */}
                <div className="grid grid-cols-2 gap-8 mb-5 max-w-4xl mx-auto">
                  <div className="text-center p-2 bg-white rounded shadow-sm border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Completion Date</p>
                    <p className="text-sm font-bold text-gray-900">
                      {new Date(certificate.completionDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="text-center p-2 bg-white rounded shadow-sm border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Issue Date</p>
                    <p className="text-sm font-bold text-gray-900">
                      {new Date(certificate.issueDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                {/* Signature Section */}
                <div className="border-t-2 border-gray-300 pt-3 mt-3">
                  <div className="flex justify-center">
                    {/* Principal Signature */}
                    <div className="text-center">
                      <div className="mb-1 flex flex-col items-center">
                        {/* Digital Pen Signature Image */}
                        <img
                          src={`${process.env.PUBLIC_URL}/principal-signature.png`}
                          alt="Signature"
                          className="h-16 w-auto max-w-xs object-contain mb-1"
                          onError={(e) => {
                            // If signature image not found, show cursive text as fallback
                            e.target.style.display = 'none';
                            const cursiveText = document.createElement('p');
                            cursiveText.style.fontFamily = 'Brush Script MT, cursive';
                            cursiveText.style.fontSize = '24px';
                            cursiveText.style.fontWeight = 'bold';
                            cursiveText.style.color = '#1a1a1a';
                            cursiveText.style.marginBottom = '4px';
                            cursiveText.textContent = 'Muhammad Ishaq';
                            e.target.parentNode.insertBefore(cursiveText, e.target);
                          }}
                        />
                        <div className="border-b-2 border-gray-800 w-64"></div>
                      </div>
                      <p className="text-sm text-gray-900 font-bold mt-0.5">{certificate.signature}</p>
                      <p className="text-xs text-gray-600 font-semibold">Principal</p>
                      <p className="text-xs text-gray-500">SundarSTEM School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <Download size={20} />
                {isDownloading ? 'Generating PDF...' : 'Download Certificate (PDF)'}
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Click the button above to download your certificate as a PDF file
              </p>
            </div>

            {/* Certificate Info */}
            <div className="bg-blue-50 border-2 border-blue-200 p-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <FileText className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">About This Certificate</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• This is an official certificate from SundarSTEM School</li>
                    <li>• Each certificate has a unique SSID</li>
                    <li>• Certificates can be verified online at any time</li>
                    <li>• For queries, contact: info@virtual.sundarstem.edu.pk</li>
                  </ul>
                </div>
              </div>
            </div>
                </>
              )}
            </div>
          );
        })()}

        {/* Help Section */}
        {!certificate && !error && (
          <div className="bg-white shadow-lg p-8 max-w-2xl mx-auto border-2 border-gray-100 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How to Use</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</span>
                <span>Enter your SSID (SundarSTEM ID) in the search box above</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</span>
                <span>Click "Verify" to validate your certificate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</span>
                <span>Once verified, you can download your certificate as a PDF</span>
              </li>
            </ol>
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
              <p className="text-sm text-gray-700">
                <strong>Don't have your SSID?</strong> Contact us at info@virtual.sundarstem.edu.pk
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateVerification;
