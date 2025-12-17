// Shared news data for all programs
export const vssNews = [
  {
    id: 'vss-1',
    title: 'VSS Spring 2025 Registration Open',
    date: '2026-01-10',
    type: 'Enrollment',
    description: 'Register now for Virtual STEM School Spring 2025 admission test.',
    program: 'VSS'
  },
  {
    id: 'vss-2',
    title: 'VSS Resource Book Available',
    date: '2026-01-05',
    type: 'Resource',
    description: 'Download the official resource book for VSS Grade 6 & 7 admission preparation.',
    program: 'VSS'
  },
  {
    id: 'vss-3',
    title: 'Admission Test Schedule Announced',
    date: '2026-01-01',
    type: 'Update',
    description: 'VSS admission test scheduled for 24 Jan 2026. Registration closes 18 Jan 2026.',
    program: 'VSS'
  },
];

export const pmcNews = [
  {
    id: 'pmc-1',
    title: 'PMC-5 2026 Registration Open',
    date: '2026-01-15',
    type: 'Contest',
    description: 'Register now for Pakistan Math Contest 2026 - Grade 5 only.',
    program: 'PMC'
  },
  {
    id: 'pmc-2',
    title: 'PMC-5 Format Details',
    date: '2026-01-08',
    type: 'Update',
    description: 'Two-round format with AI-invigilated Round 1 and in-person Round 2 for Grade 5 students.',
    program: 'PMC'
  },
  {
    id: 'vss-admission',
    title: 'VSS Admission Test for Grades 6 & 7',
    date: '2026-01-10',
    type: 'Enrollment',
    description: 'Virtual STEM School admission test open for Grade 6 & 7 students. Register now!',
    program: 'VSS'
  },
  {
    id: 'pmc-3',
    title: 'PMC 2025 Winners Announced',
    date: '2025-12-20',
    type: 'Results',
    description: 'Congratulations to all PMC 2025 winners. Check results on the portal.',
    program: 'PMC'
  },
];

export const rmcNews = [
  {
    id: 'rmc-1',
    title: 'Next RMC Monthly Contest',
    date: '2026-01-20',
    type: 'Event',
    description: 'Regional Math Club monthly contest scheduled for 31st January 2026.',
    program: 'RMC'
  },
  {
    id: 'rmc-2',
    title: 'New RMC Practice Materials Available',
    date: '2026-01-12',
    type: 'Resource',
    description: 'Download fresh practice materials for Grade 5 students.',
    program: 'RMC'
  },
  {
    id: 'rmc-3',
    title: 'RMC 1st Monthly Contest Results',
    date: '2025-12-16',
    type: 'Results',
    description: 'View shining stars and top schools from our first monthly contest held on 29 Nov 2025.',
    program: 'RMC',
    link: '/rmc#leaderboard',
    pinned: true
  },
  {
    id: 'rmc-4',
    title: 'RMC Member School Registration',
    date: '2026-01-05',
    type: 'Update',
    description: 'Schools can now register to become RMC members for 2026.',
    program: 'RMC'
  },
];

// Combined news for home page
export const allNews = [...vssNews, ...pmcNews, ...rmcNews].sort(
  (a, b) => (Number(b.pinned) || 0) - (Number(a.pinned) || 0) || new Date(b.date) - new Date(a.date)
);

// Color mapping for programs
export const programColors = {
  VSS: '#C90016',
  PMC: '#01411C',
  RMC: '#000080',
  ILM: '#FFD700'
};
