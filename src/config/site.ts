/**
 * Single source of truth for prices, contact details, and business facts.
 * Change a number here and every page updates. Do not hard-code prices in components.
 * Source: business plan v2 and website brief v2.
 */
export const site = {
  name: 'Barred Owl',
  legalName: 'Saratoga Digital LLC',
  descriptor: 'Websites & AI Front Desk · Hudson Valley, New York',
  headline: 'Turn your website into a sales agent.',
  url: 'https://barredowl.co',
  contactEmail: import.meta.env.PUBLIC_AUDIT_EMAIL || 'tom@barredowl.co',
  disclosure:
    import.meta.env.PUBLIC_DISCLOSURE_TEXT ||
    '[RPI-approved disclosure line, to be added before launch]',
} as const;

export const pricing = {
  audit: 'Free',
  buildFrom: 2500,
  setupFee: 499,
  setupWaivedWithBuild: true,
  foundingMonthly: 249,
  foundingSlots: 5,
  foundingLockMonths: 12,
  standardMonthly: 349,
} as const;

export const navItems = [
  { label: 'Free audit', href: '#audit' },
  { label: 'Build', href: '#build' },
  { label: 'Program', href: '#program' },
  { label: 'Our story', href: '#story' },
] as const;
