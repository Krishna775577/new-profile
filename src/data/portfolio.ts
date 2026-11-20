/** Krishna Bajaj portfolio data. Personal facts are based on the supplied resume and links. */
export type Palette = { from: string; via: string; to: string; accent: string };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Krishna Bajaj', displayName: 'Krishna Bajaj', firstName: 'KRISHNA',
  seriesTag: 'THE SERIES', originalLabel: 'A KRISHNA ORIGINAL',
  role: 'Billing Executive',
  tagline: ['Billing Executive', 'Sales & Distribution', 'Web App Development Learner'],
  intro: 'Billing Executive with experience in sales and distribution operations across pharmaceutical companies including Comed Chemicals, Corona Remedies, and Medisales (Mankind). Skilled in billing management, invoicing, stock handling, order processing, reporting, and distributor coordination. Currently learning web app development and building technical skills.',
  location: 'Raipur, Chhattisgarh, India', email: 'krishnabajaj643@gmail.com', phone: '09399767057',
  links: { instagram: 'https://www.instagram.com/krishna_inframe/', github: 'https://github.com/Krishna775577' },
  resumePdf: '/assets/Krishna_Bajaj_Resume.pdf',
  portrait: { src: '/assets/krishna-profile.jpg', srcSet: '/assets/krishna-profile.jpg 720w', alt: 'Krishna Bajaj profile avatar' },
  interests: ['Distribution Logistics', 'Sales Operations', 'Web App Development', 'Gaming'],
};

export const education = [{ school: 'Sachdeva International School', place: 'India', degree: '10th Pass', period: '2020', score: 'Passed' }];

export const experience = [
  { company: 'Comed Chemicals Ltd.', role: 'Billing Executive – Sales & Distribution', place: 'Raipur, Chhattisgarh, India', period: 'March 2026 – Present', points: ['Managing billing and invoicing processes', 'Handling sales and distribution entries', 'Maintaining stock and order records', 'Coordinating with clients and sales team', 'Ensuring accurate data and timely documentation'] },
  { company: 'Corona Remedies Limited', role: 'Billing Executive – Sales & Distribution', place: 'Raipur, Chhattisgarh, India', period: 'August 2024 – May 2026', points: ['Managing daily billing and invoicing operations', 'Handling sales and distribution documentation', 'Maintaining stock and order records accurately', 'Coordinating with distributors and sales team', 'Preparing reports and ensuring timely data entry'] },
  { company: 'Medisales (India) Private Limited (Mankind)', role: 'Billing Executive – Sales & Distribution', place: 'Raipur, Chhattisgarh, India', period: 'April 2019 – October 2025', points: ['Handling billing and invoicing processes', 'Managing sales and distribution entries', 'Maintaining stock and order records', 'Coordinating with distributors and sales representatives', 'Ensuring accurate documentation and timely reporting'] },
  { company: 'AI Central', role: 'Web App Developer', place: 'Raipur, Chhattisgarh, India', period: 'January 2025 – May 2025', points: ['Developing and managing web applications', 'Working on responsive and user-friendly interfaces', 'Handling website functionality and performance', 'Learning and improving modern web technologies', 'Problem-solving and debugging web applications'] },
];

export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
export const projects: Project[] = [{
  id: 'instagram-inframe', title: 'Krishna InFrame', year: 'Instagram', genre: 'Instagram • Creative Page',
  logline: 'Visit Krishna Bajaj’s Instagram page: @krishna_inframe.', stack: ['Instagram', 'Creative Content'],
  build: ['Instagram profile shared by Krishna Bajaj.'],
  features: ['Open the Instagram profile'], metrics: [{ value: '@krishna_inframe', label: 'Instagram handle' }],
  github: 'https://www.instagram.com/krishna_inframe/', palette: crimson, motif: 'flow'
}];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [{ id: 'operations', title: 'Sales & Distribution Operations', org: 'Pharmaceutical Industry', detail: 'Professional experience in billing, invoicing, stock and order records, reporting, and distributor coordination.', laurel: 'Professional Experience' }];
export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
 { id: 'operations', title: 'Sales & Operations', subtitle: 'Professional experience', skills: [{ name: 'Billing & Invoicing', mono: 'Bi' }, { name: 'Sales & Distribution', mono: 'Sd' }, { name: 'Distribution Logistics', mono: 'Dl' }, { name: 'Stock & Order Records', mono: 'So' }, { name: 'Reporting', mono: 'Rp' }, { name: 'Distributor Coordination', mono: 'Dc' }, { name: 'Sales Trainings', mono: 'St' }] },
 { id: 'development', title: 'Web Development', subtitle: 'Currently learning', skills: [{ name: 'Web App Development', mono: 'Wd' }, { name: 'Responsive Interfaces', mono: 'Ri' }, { name: 'Website Functionality', mono: 'Wf' }, { name: 'Debugging', mono: 'Db' }] },
 { id: 'interests', title: 'Interests', subtitle: 'Personal interests', skills: [{ name: 'Gaming', mono: 'Gm' }, { name: 'Instagram', mono: 'Ig' }] },
];
export const skillEvidence: Record<string, string[]> = {
 'Billing & Invoicing': ['Comed Chemicals Ltd.', 'Corona Remedies Limited', 'Medisales (India) Private Limited'],
 'Sales & Distribution': ['Comed Chemicals Ltd.', 'Corona Remedies Limited', 'Medisales (India) Private Limited'],
 'Distribution Logistics': ['Top skills listed on supplied resume'],
 'Stock & Order Records': ['Billing Executive experience'],
 'Reporting': ['Corona Remedies Limited', 'Medisales (India) Private Limited'],
 'Distributor Coordination': ['Corona Remedies Limited', 'Medisales (India) Private Limited'],
 'Sales Trainings': ['Top skills listed on supplied resume'],
 'Web App Development': ['AI Central · Web App Developer'],
 'Responsive Interfaces': ['AI Central · Web App Developer'],
 'Website Functionality': ['AI Central · Web App Developer'],
 'Debugging': ['AI Central · Web App Developer'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
 { number: 1, title: 'Pharma Operations', period: '2019 – Present', synopsis: 'Billing, sales and distribution experience across pharmaceutical businesses.', episodes: [
  { code: 'S01 E01', title: 'Medisales (Mankind)', description: 'Billing Executive – Sales & Distribution. Raipur, Chhattisgarh.', tags: ['Billing', 'Invoicing', 'Stock Records'], runtime: 'Apr 2019 – Oct 2025', palette: amber },
  { code: 'S01 E02', title: 'Corona Remedies', description: 'Billing Executive – Sales & Distribution.', tags: ['Distribution', 'Reporting', 'Order Records'], runtime: 'Aug 2024 – May 2026', palette: crimson },
  { code: 'S01 E03', title: 'Comed Chemicals', description: 'Billing Executive – Sales & Distribution.', tags: ['Billing', 'Client Coordination', 'Documentation'], runtime: 'Mar 2026 – Present', palette: jade },
 ]},
 { number: 2, title: 'Digital Learning', period: '2025', synopsis: 'Web application development learning and hands-on work.', episodes: [
  { code: 'S02 E01', title: 'AI Central', description: 'Web App Developer: developing and managing web applications, responsive interfaces, functionality and debugging.', tags: ['Web Apps', 'Responsive UI', 'Debugging'], runtime: 'Jan 2025 – May 2025', palette: ocean },
 ]},
 { number: 3, title: 'The Foundation', period: '2020', synopsis: 'School education.', episodes: [
  { code: 'S03 E01', title: '10th Pass', description: 'Sachdeva International School.', tags: ['Education', '10th'], runtime: '2020', palette: violet },
 ]},
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
 { label: 'Current role', title: 'Billing Executive', detail: 'Comed Chemicals Ltd. · Sales & Distribution', palette: crimson },
 { label: 'Core experience', title: 'Pharma Operations', detail: 'Billing, invoicing and distribution logistics', palette: amber },
 { label: 'Previous company', title: 'Corona Remedies', detail: 'August 2024 – May 2026', palette: ocean },
 { label: 'Previous company', title: 'Medisales (Mankind)', detail: 'April 2019 – October 2025', palette: violet },
 { label: 'Digital experience', title: 'Web App Developer', detail: 'AI Central · January – May 2025', palette: jade },
 { label: 'Education', title: '10th Pass', detail: 'Sachdeva International School · 2020', palette: amber },
 { label: 'Creative page', title: 'Krishna InFrame', detail: '@krishna_inframe on Instagram', palette: crimson },
];
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
 { kicker: 'Profile', title: 'Krishna Bajaj', lines: ['Billing Executive · Sales & Distribution', 'Raipur, Chhattisgarh, India'], chips: ['Pharma Operations'] },
 { kicker: 'Experience', title: 'Billing & Distribution', lines: ['Comed Chemicals · March 2026 – Present', 'Corona Remedies · August 2024 – May 2026', 'Medisales (Mankind) · April 2019 – October 2025'] },
 { kicker: 'Digital', title: 'Web App Development', lines: ['AI Central · January 2025 – May 2025', 'Currently learning and improving web technologies'] },
 { kicker: 'Education', title: '10th Pass', lines: ['Sachdeva International School', '2020'] },
 { kicker: 'Interests', title: 'Beyond Work', lines: ['Gaming', 'Instagram · @krishna_inframe'] },
];
export type ProfileId = 'krishna' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
 { id: 'krishna', name: 'Krishna', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
 { id: 'recruiter', name: 'Recruiter', blurb: 'Experience & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
 { id: 'developer', name: 'Developer', blurb: 'Digital learning & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
 { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
 about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Profile & background', palette: violet },
 journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Chapters • Work & education`, palette: amber },
 originals: { nav: 'Instagram', card: 'My Instagram', meta: 'Krishna InFrame • Instagram profile', palette: crimson },
 picks: { nav: 'Highlights', card: 'Highlights', meta: 'Career & personal highlights', palette: jade },
 skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
 moments: { nav: 'Highlights', card: 'Professional Highlights', meta: 'Experience & interests', palette: crimson },
 story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
