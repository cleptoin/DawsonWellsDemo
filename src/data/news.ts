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
    subtitle: 'A major solo presentation spanning monumental paintings and platinum photography',
    date: '2024-10-15',
    displayDate: 'October 15, 2024 – January 18, 2025',
    location: 'Dawson Wells Gallery, New York Flagship (Chelsea)',
    status: 'Current',
    coverImage: '/images/artworks/photo-02.jpg',
    featured: true,
    curator: 'Dr. Evelyn Sterling, Chief Curator',
    excerpt: 'Dawson Wells Gallery is pleased to inaugurate the autumn season with The Material of Light, a comprehensive exhibition exploring the architectural and optical weight of monochrome surfaces.',
    body: [
      'Dawson Wells Gallery is proud to present The Material of Light, a monumental exhibition occupying the entirety of the Chelsea flagship space. Bringing together sixteen newly completed large-scale paintings and unprecedented 8×10 platinum photographic contact prints, the exhibition demonstrates Dawson Wells’s relentless investigation into sensory perception and material presence.',
      'Anchored by the newly unveiled Strata Monochrome in Limestone & Bone (measuring over six feet tall), the exhibition invites visitors into an architectural environment specifically designed to modulate natural Hudson River daylight across raw marble dust impasto and velvety platinum-palladium emulsions.',
      '“Wells does not paint objects; he orchestrates light as a structural load-bearing material,” writes Chief Curator Dr. Evelyn Sterling. “Visitors are encouraged to observe how the gallery’s skylights animate the surface topography throughout the day, creating an ever-evolving encounter with silence and form.”',
      'The exhibition is accompanied by a fully illustrated 180-page hardbound monograph published by Dawson Wells Editions, featuring curatorial essays by Dr. Sterling and architectural theorist Marcus H. Vance.'
    ]
  },
  {
    id: 'news-fair-01',
    slug: 'art-basel-miami-beach-2024',
    type: 'Art Fair',
    title: 'Art Basel Miami Beach 2024: Galleries Sector',
    subtitle: 'Booth F14 featuring monumental ceramics and raw pigment works on linen',
    date: '2024-12-04',
    displayDate: 'December 4 – 8, 2024',
    location: 'Miami Beach Convention Center, Booth F14',
    status: 'Upcoming',
    coverImage: '/images/artworks/ceramic-02.jpg',
    featured: true,
    curator: 'Dawson Wells Curatorial Board',
    excerpt: 'Dawson Wells Gallery returns to Art Basel Miami Beach with an architecturally austere booth presentation highlighting tectonic ceramics and monumental linen paintings.',
    body: [
      'For the 2024 edition of Art Basel Miami Beach, Dawson Wells Gallery presents a focused, museum-caliber installation in the main Galleries Sector (Booth F14). Designed in collaboration with minimalist architectural practice Studio Forma, the booth features hand-poured plaster wall finishes creating an acoustic haven within the bustling fair.',
      'The centerpiece of the presentation is Monolithic Vessel in Volcanic Ash & Black Basalt, alongside three companion paintings from the Mineral Inscriptions series. Private VIP viewings and collector walk-throughs will be hosted daily by appointment.'
    ]
  },
  {
    id: 'news-press-01',
    slug: 'new-york-times-review-the-weight-of-silence',
    type: 'Press',
    title: 'The New York Times: "In Chelsea, Dawson Wells Commands the Room with Silence"',
    subtitle: 'A critical review of the gallery autumn program by Roberta Smith',
    date: '2024-10-28',
    displayDate: 'October 28, 2024',
    location: 'New York Times Arts & Leisure Section',
    coverImage: '/images/artworks/painting-02.jpg',
    publicationSource: 'The New York Times',
    featured: true,
    excerpt: 'Chief art critic Roberta Smith reviews The Material of Light at Dawson Wells Gallery, examining how the artist’s large-format photographs and linen canvases push back against the speed of contemporary digital media.',
    body: [
      '“In an art world currently fascinated by frenetic digital spectacle, the monumental exhibition by Dawson Wells at his eponymous Chelsea gallery feels like a cool, resonant cathedral of stone and quietude,” writes Roberta Smith for The New York Times.',
      'The review pays particular attention to Wells’s uncompromising draftsmanship on 640gsm Arches paper and the tectonic weight of his wood-fired stoneware vessels, noting that “the artist reminds us of what painting, sculpture, and photography can achieve when an artist commits wholly to the physical discipline of matter.”'
    ]
  },
  {
    id: 'news-fair-02',
    slug: 'frieze-london-focus-2024',
    type: 'Art Fair',
    title: 'Frieze London: The Solitary Line in Regent’s Park',
    subtitle: 'A bespoke installation of silverpoint drawings and woodblock counterforms',
    date: '2024-10-09',
    displayDate: 'October 9 – 13, 2024',
    location: 'Regent’s Park, London',
    status: 'Past',
    coverImage: '/images/artworks/print-02.jpg',
    excerpt: 'Presented alongside our Mayfair salon, Dawson Wells Gallery showcased an intimate suite of drawings and rare relief prints at Frieze London 2024.',
    body: [
      'Dawson Wells Gallery’s presentation at Frieze London focused exclusively on works on paper, uniting intimate 15th-century silverpoint drawings with monumental multi-block woodcut impressions.',
      'Acquisitions were concluded with prominent foundation collections from Zurich, London, and New York during the VIP preview days.'
    ]
  },
  {
    id: 'news-pub-01',
    slug: 'monograph-material-and-silence-publication',
    type: 'Publication',
    title: 'Publication Announcement: "Dawson Wells: Material and Silence"',
    subtitle: 'Cloth-bound 240-page monograph published by Dawson Wells Editions & Hatje Cantz',
    date: '2024-11-01',
    displayDate: 'November 2024',
    location: 'New York & Berlin',
    status: 'Upcoming',
    coverImage: '/images/artworks/drawing-02.jpg',
    excerpt: 'A comprehensive hardcover monograph surveying Dawson Wells’s works across photography, painting, ceramics, drawings, and master prints over the past decade.',
    body: [
      'Dawson Wells Editions is pleased to announce the international release of Material and Silence, a major scholarly monograph co-published with Hatje Cantz.',
      'Featuring over 160 color plates with tritone reproductions of the artist’s silver gelatin and platinum prints, the monograph includes critical texts by Dr. Evelyn Sterling, architectural historian Marcus H. Vance, and an extensive in-studio interview with the artist Dawson Wells.'
    ]
  }
];
