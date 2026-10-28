export interface NewsItem {
  id: string;
  slug: string;
  type: 'Exhibition' | 'Dispatch' | 'Art Fair' | 'Press' | 'Publication';
  title: string;
  subtitle: string;
  date: string;
  displayDate: string;
  location: string;
  status?: 'Current' | 'Upcoming' | 'Past';
  coverImage: string;
  excerpt: string;
  body: string[];
  curator?: string;
  publicationSource?: string;
  featured?: boolean;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-ex-01',
    slug: 'the-material-of-light-exhibition',
    type: 'Exhibition',
    title: 'The Material of Light: Large Format Inscriptions & Monoliths',
    subtitle: 'A major presentation spanning monumental paintings and platinum photography',
    date: '2026-10-15',
    displayDate: 'October 15, 2026 – January 18, 2027',
    location: 'Dawson Wells Gallery, New York Flagship (Chelsea)',
    status: 'Current',
    coverImage: '/images/artworks/photo-02.jpg',
    featured: true,
    curator: 'Senior Curatorial Directorate',
    excerpt: 'Dawson Wells Gallery inaugurates the season with The Material of Light, a comprehensive exhibition exploring the architectural and optical weight of monochrome surfaces.',
    body: [
      'Dawson Wells Gallery presents The Material of Light, a monumental exhibition occupying the entirety of the Chelsea flagship space. Bringing together sixteen newly completed large-scale paintings and unprecedented 8×10 platinum photographic contact prints, the exhibition demonstrates an investigation into sensory perception and material presence.',
      'Anchored by the newly unveiled Strata Monochrome in Limestone & Bone (measuring over six feet tall), the exhibition invites visitors into an architectural environment specifically designed to modulate natural daylight across raw marble dust impasto and velvety platinum-palladium emulsions.',
      '“The works orchestrate light as a structural, spatial element,” notes the gallery curatorial text. “Visitors are encouraged to observe how the gallery skylights animate the surface topography throughout the day, creating an ever-evolving encounter with silence and form.”',
      'The exhibition is accompanied by a fully illustrated hardbound monograph published by Dawson Wells Editions, featuring curatorial essays by contributing scholars.'
    ]
  },
  {
    id: 'news-fair-02',
    slug: 'frieze-london-focus-2026',
    type: 'Art Fair',
    title: 'Frieze London: The Solitary Line [Optional Future Feature]',
    subtitle: 'A bespoke installation of silverpoint drawings and woodblock counterforms (Prototype Concept)',
    date: '2026-10-09',
    displayDate: 'October 9 – 13, 2026 (Optional Future Feature)',
    location: 'Regent’s Park, London',
    status: 'Upcoming',
    coverImage: '/images/artworks/print-02.jpg',
    excerpt: 'Concept proposal for international art fair presentation, focusing exclusively on works on paper, fine silverpoint drawings, and multi-block relief prints.',
    body: [
      'This entry illustrates how international art fair presentations, booth floorplans, and VIP previews can be organized and integrated within the digital gallery platform.',
      'Designed to showcase works on paper, uniting 15th-century silverpoint techniques with contemporary architectural relief impressions.'
    ]
  },
  {
    id: 'news-pub-01',
    slug: 'monograph-material-and-silence-publication',
    type: 'Publication',
    title: 'Publication Announcement: "Material & Silence: Complete Catalog"',
    subtitle: 'Cloth-bound 240-page monograph concept published by Dawson Wells Editions',
    date: '2026-11-01',
    displayDate: 'November 2026',
    location: 'New York & London',
    status: 'Upcoming',
    coverImage: '/images/artworks/drawing-02.jpg',
    excerpt: 'A comprehensive hardcover monograph surveying works across photography, painting, ceramics, drawings, and master prints.',
    body: [
      'Dawson Wells Editions announces the concept release of Material and Silence, a major scholarly catalog raisonné prototype.',
      'Featuring color plates with tritone reproductions of silver gelatin and platinum prints, alongside critical texts and catalog entries.'
    ]
  }
];
