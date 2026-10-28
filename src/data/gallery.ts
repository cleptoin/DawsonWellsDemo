export interface GalleryLocation {
  id: string;
  city: string;
  neighborhood: string;
  title: string;
  address: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
  hours: {
    days: string;
    time: string;
  }[];
  appointmentNote: string;
  image: string;
  directions: string;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
}

export const GALLERY_LOCATIONS: GalleryLocation[] = [
  {
    id: 'nyc-flagship',
    city: 'New York',
    neighborhood: 'Chelsea Arts District',
    title: 'Dawson Wells Gallery — New York Flagship',
    address: '524 West 24th Street',
    postalCode: 'NY 10011',
    country: 'United States',
    phone: '+1 (000) 000-0000',
    email: 'newyork@yourgallery.com',
    hours: [
      { days: 'Tuesday – Saturday', time: '10:00 AM – 6:00 PM' },
      { days: 'Sunday – Monday', time: 'Closed (Open by private appointment)' },
    ],
    appointmentNote: 'Private viewings, curatorial walkthroughs, and collector consultations available upon advance request.',
    image: '/images/artworks/gallery-interior.jpg',
    directions: 'Located between 10th and 11th Avenues in the heart of West Chelsea, accessible via C/E subway lines to 23rd St or the High Line (23rd St exit).',
    mapCoordinates: { lat: 40.7495, lng: -74.0048 },
  },
  {
    id: 'london-mayfair',
    city: 'London',
    neighborhood: 'Mayfair',
    title: 'Dawson Wells Gallery — London',
    address: '14 Old Bond Street',
    postalCode: 'W1S 4PP',
    country: 'United Kingdom',
    phone: '+44 (0)00 0000 0000',
    email: 'london@yourgallery.com',
    hours: [
      { days: 'Tuesday – Friday', time: '10:00 AM – 6:00 PM' },
      { days: 'Saturday', time: '11:00 AM – 5:00 PM' },
      { days: 'Sunday – Monday', time: 'Closed' },
    ],
    appointmentNote: 'Curatorial research library and private viewing salons open by appointment with our London Director.',
    image: '/images/artworks/photo-02.jpg',
    directions: 'Situated on historic Old Bond Street, just off Piccadilly. Nearest Underground stations are Green Park (Piccadilly, Victoria, Jubilee lines) and Piccadilly Circus.',
    mapCoordinates: { lat: 51.5088, lng: -0.1418 },
  },
];

export const GALLERY_OVERVIEW = {
  founded: 2018,
  founder: 'Dawson Wells',
  tagline: 'Dedicated to the solitary pursuit of material truth, architectural resonance, and archival permanence across photography, paintings, drawings, ceramics, and prints.',
  mission: 'To cultivate and steward an uncompromising digital and physical sanctuary for museum-grade contemporary art, where the autonomy of raw matter and the contemplation of architectural space take precedence over commercial noise.',
  vision: 'To establish Dawson Wells Gallery as an internationally celebrated paragon of curatorial integrity, elevating the artist’s multi-disciplinary archive into enduring global collections, museums, and architectural landmarks.',
  directors: [
    {
      name: 'Curatorial Directorate',
      role: 'Chief Curator & Director of Exhibitions (Placeholder Role)',
      location: 'New York Flagship',
      bio: 'Leading exhibition scholarship, postwar materiality research, and architectural-scale contemporary collections.',
    },
    {
      name: 'Julian Montgomery',
      role: 'Senior Director, Private Collections & Institutional Liaison (Placeholder Role)',
      location: 'London & New York',
      bio: 'Oversees client acquisitions and museum loans globally across international trusts and private collections.',
    },
    {
      name: 'Alistair Finch-Hatton',
      role: 'Director, European Operations (Placeholder Role)',
      location: 'London Mayfair',
      bio: 'A specialist in works on paper, leading gallery operations, art fair presentations, and European publications.',
    },
    {
      name: 'Claire Vance',
      role: 'Head Registrar & Collections Manager (Placeholder Role)',
      location: 'New York Flagship',
      bio: 'Oversees museum loans, Optium conservation framing, condition reports, and temperature-controlled archival storage.',
    },
  ],
  team: [
    {
      name: 'Mr. Dawson Wells',
      role: 'Artist & Founder',
      bio: 'Fine arts graduate from the University of Tennessee, Knoxville. Dawson Wells works across large-format analog photography, mineral painting, vine charcoal, wood-fired ceramics, and relief prints.',
    },
    {
      name: 'Curatorial Directorate',
      role: 'Chief Curator & Director of Exhibitions (Placeholder Role)',
      bio: 'Leading exhibition scholarship, postwar materiality research, and architectural-scale contemporary collections.',
    },
    {
      name: 'Julian Montgomery',
      role: 'Senior Director, Private Collections (Placeholder Role)',
      bio: 'Advising major international trusts and private collections with fine art collection stewardship.',
    },
    {
      name: 'Alistair Finch-Hatton',
      role: 'Director, European Operations (Placeholder Role)',
      bio: 'Leading European gallery presentations, catalog raisonné publications, and institutional partnerships from London Mayfair.',
    },
  ],
  institutionalPillars: [
    {
      number: '01',
      title: 'Material Autonomy',
      description:
        'We champion artworks where medium is not subservient to illusion. The heavy weave of Belgian linen, the volatile chemistry of wood ash in 96-hour kiln fires, and the microscopic tooth of 640gsm rag paper operate as autonomous physical protagonists.',
    },
    {
      number: '02',
      title: 'Architectural Scale',
      description:
        'Conceived for spatial environments of refined minimalism, our collections resonate in conversation with contemporary architecture, acoustic silence, and shifting daylight.',
    },
    {
      number: '03',
      title: 'Archival Permanence',
      description:
        'Every artwork adheres to strict conservation standards—Optium museum acrylic, acid-free rag mounting, hand-welded steel, and heirloom-grade pigments formulated to endure for centuries.',
    },
    {
      number: '04',
      title: 'Curatorial Rigor',
      description:
        'We operate with the intellectual integrity of a museum. Every exhibition is accompanied by critical monographs, condition reports, provenance verification, and scholarly essays.',
    },
  ],
  corePillars: [
    {
      number: '01',
      title: 'Material Autonomy',
      description:
        'We champion artworks where medium is not subservient to illusion. The heavy weave of Belgian linen, the volatile chemistry of wood ash in 96-hour kiln fires, and the microscopic tooth of 640gsm rag paper operate as autonomous physical protagonists.',
    },
    {
      number: '02',
      title: 'Architectural Scale',
      description:
        'Conceived for spatial environments of refined minimalism, our collections resonate in conversation with contemporary architecture, acoustic silence, and shifting daylight.',
    },
    {
      number: '03',
      title: 'Archival Permanence',
      description:
        'Every artwork adheres to strict conservation standards—Optium museum acrylic, acid-free rag mounting, hand-welded steel, and heirloom-grade pigments formulated to endure for centuries.',
    },
    {
      number: '04',
      title: 'Curatorial Rigor',
      description:
        'We operate with the intellectual integrity of a museum. Every exhibition is accompanied by critical monographs, condition reports, provenance verification, and scholarly essays.',
    },
  ],
  services: [
    {
      title: 'Curatorial Advisory & Private Acquisition',
      description: 'Bespoke consultation for distinguished private collectors, family offices, and architectural studios seeking site-specific acquisitions.'
    },
    {
      title: 'Museum Loans & Institutional Placement',
      description: 'Coordinating formal museum loans, retrospectives, and public institutional acquisitions with verified provenance documentation.'
    },
    {
      title: 'Conservation Framing & Archival Stewardship',
      description: 'Museum-grade Optium acrylic framing, climate-controlled transport, and lifelong condition record stewardship.'
    },
    {
      title: 'Architectural Commissions & Bespoke Scaling',
      description: 'Collaborating directly with architects and interior visionaries to commission monumental site-responsive works.'
    }
  ]
};
