export interface Artwork {
  id: string;
  slug: string;
  title: string;
  category: 'Photography' | 'Paintings' | 'Drawings' | 'Ceramics' | 'Prints';
  year: number;
  medium: string;
  dimensionsImperial: string;
  dimensionsMetric: string;
  edition: string;
  framing: string;
  status: 'Available' | 'In Private Collection' | 'Museum Loan' | 'Reserved';
  location: string;
  series: string;
  primaryImage: string;
  images: {
    url: string;
    caption: string;
    type: 'frontal' | 'detail' | 'installation' | 'angle';
  }[];
  curatorialNote: string;
  formalAnalysis: string;
  exhibitionHistory: string[];
  provenance: string[];
  literature?: string[];
  featured?: boolean;
}

export const CATEGORIES = [
  'All Works',
  'Photography',
  'Paintings',
  'Drawings',
  'Ceramics',
  'Prints',
] as const;

export type CategoryType = typeof CATEGORIES[number];

export const ARTWORKS_DATA: Artwork[] = [
  {
    "id": "dw-ph-001",
    "slug": "photography-breakwater-in-atlantic-mist-study-i",
    "title": "Breakwater in Atlantic Mist (Study I)",
    "category": "Photography",
    "year": 2020,
    "medium": "Silver gelatin print on double-weight fiber paper, selenium-toned",
    "dimensionsImperial": "32 × 24 in",
    "dimensionsMetric": "81 × 61 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Light Architecture Series",
    "featured": true,
    "primaryImage": "/images/artworks/photo-01.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Breakwater in Atlantic Mist (Study I) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Breakwater in Atlantic Mist (Study I) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Breakwater in Atlantic Mist (Study I) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-001)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 40–43)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-002",
    "slug": "photography-luminescence-no-07-atmospheric-gradient",
    "title": "Luminescence No. 07 (Atmospheric Gradient)",
    "category": "Photography",
    "year": 2021,
    "medium": "Platinum-palladium contact print on hand-coated Japanese gampi paper",
    "dimensionsImperial": "40 × 30 in",
    "dimensionsMetric": "102 × 76 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Light Architecture Series",
    "featured": true,
    "primaryImage": "/images/artworks/photo-02.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Luminescence No. 07 (Atmospheric Gradient) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Luminescence No. 07 (Atmospheric Gradient) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Luminescence No. 07 (Atmospheric Gradient) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-002)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 44–47)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-003",
    "slug": "photography-smith-wesson-structural-inscription-study-ix",
    "title": "Smith & Wesson Structural Inscription (Study IX)",
    "category": "Photography",
    "year": 2022,
    "medium": "Archival pigment print on 310gsm Hahnemühle Photo Rag",
    "dimensionsImperial": "48 × 36 in",
    "dimensionsMetric": "122 × 91 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-03.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Smith & Wesson Structural Inscription (Study IX) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Smith & Wesson Structural Inscription (Study IX) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Smith & Wesson Structural Inscription (Study IX) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-003)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 48–51)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-004",
    "slug": "photography-tennessee-horizon-morning-mist-fairway-study",
    "title": "Tennessee Horizon & Morning Mist (Fairway Study)",
    "category": "Photography",
    "year": 2023,
    "medium": "Large-format 8×10 contact print on Ilford Warmtone fiber paper",
    "dimensionsImperial": "60 × 44 in",
    "dimensionsMetric": "152 × 112 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-01.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Tennessee Horizon & Morning Mist (Fairway Study) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Tennessee Horizon & Morning Mist (Fairway Study) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Tennessee Horizon & Morning Mist (Fairway Study) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-004)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 52–55)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-005",
    "slug": "photography-tidal-measure-monolith-fog",
    "title": "Tidal Measure: Monolith & Fog",
    "category": "Photography",
    "year": 2024,
    "medium": "Selenium-toned silver gelatin emulsion on baryta cotton paper",
    "dimensionsImperial": "24 × 20 in",
    "dimensionsMetric": "61 × 51 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-02.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Tidal Measure: Monolith & Fog — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Tidal Measure: Monolith & Fog — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Tidal Measure: Monolith & Fog — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-005)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 56–59)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-006",
    "slug": "photography-north-wall-concrete-cadence-exposure-iv",
    "title": "North Wall Concrete Cadence (Exposure IV)",
    "category": "Photography",
    "year": 2020,
    "medium": "Silver gelatin print on double-weight fiber paper, selenium-toned",
    "dimensionsImperial": "32 × 24 in",
    "dimensionsMetric": "81 × 61 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-03.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "North Wall Concrete Cadence (Exposure IV) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "North Wall Concrete Cadence (Exposure IV) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "North Wall Concrete Cadence (Exposure IV) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-006)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 60–63)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-007",
    "slug": "photography-weather-line-high-desert-dawn",
    "title": "Weather Line: High Desert Dawn",
    "category": "Photography",
    "year": 2021,
    "medium": "Platinum-palladium contact print on hand-coated Japanese gampi paper",
    "dimensionsImperial": "40 × 30 in",
    "dimensionsMetric": "102 × 76 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-01.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Weather Line: High Desert Dawn — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Weather Line: High Desert Dawn — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Weather Line: High Desert Dawn — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-007)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 64–67)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-008",
    "slug": "photography-quiet-sound-penobscot-bay-horizon",
    "title": "Quiet Sound: Penobscot Bay Horizon",
    "category": "Photography",
    "year": 2022,
    "medium": "Archival pigment print on 310gsm Hahnemühle Photo Rag",
    "dimensionsImperial": "48 × 36 in",
    "dimensionsMetric": "122 × 91 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-02.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Quiet Sound: Penobscot Bay Horizon — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Quiet Sound: Penobscot Bay Horizon — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Quiet Sound: Penobscot Bay Horizon — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-008)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 68–71)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-009",
    "slug": "photography-outer-harbour-granite-study",
    "title": "Outer Harbour Granite Study",
    "category": "Photography",
    "year": 2023,
    "medium": "Large-format 8×10 contact print on Ilford Warmtone fiber paper",
    "dimensionsImperial": "60 × 44 in",
    "dimensionsMetric": "152 × 112 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-03.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Outer Harbour Granite Study — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Outer Harbour Granite Study — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Outer Harbour Granite Study — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-009)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 72–75)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-010",
    "slug": "photography-plateau-twilight-obsidian-shadow",
    "title": "Plateau Twilight: Obsidian Shadow",
    "category": "Photography",
    "year": 2024,
    "medium": "Selenium-toned silver gelatin emulsion on baryta cotton paper",
    "dimensionsImperial": "24 × 20 in",
    "dimensionsMetric": "61 × 51 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-01.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Plateau Twilight: Obsidian Shadow — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Plateau Twilight: Obsidian Shadow — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Plateau Twilight: Obsidian Shadow — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-010)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 76–79)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-011",
    "slug": "photography-salt-air-cadence-atlantic-threshold",
    "title": "Salt Air Cadence: Atlantic Threshold",
    "category": "Photography",
    "year": 2020,
    "medium": "Silver gelatin print on double-weight fiber paper, selenium-toned",
    "dimensionsImperial": "32 × 24 in",
    "dimensionsMetric": "81 × 61 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-02.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Salt Air Cadence: Atlantic Threshold — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Salt Air Cadence: Atlantic Threshold — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Salt Air Cadence: Atlantic Threshold — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-011)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 80–83)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-012",
    "slug": "photography-granite-threshold-study-xii",
    "title": "Granite Threshold (Study XII)",
    "category": "Photography",
    "year": 2021,
    "medium": "Platinum-palladium contact print on hand-coated Japanese gampi paper",
    "dimensionsImperial": "40 × 30 in",
    "dimensionsMetric": "102 × 76 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-03.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Granite Threshold (Study XII) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Granite Threshold (Study XII) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Granite Threshold (Study XII) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-012)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 84–87)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-013",
    "slug": "photography-basalt-shallows-at-low-tide",
    "title": "Basalt Shallows at Low Tide",
    "category": "Photography",
    "year": 2022,
    "medium": "Archival pigment print on 310gsm Hahnemühle Photo Rag",
    "dimensionsImperial": "48 × 36 in",
    "dimensionsMetric": "122 × 91 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-01.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Basalt Shallows at Low Tide — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Basalt Shallows at Low Tide — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Basalt Shallows at Low Tide — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-013)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 88–91)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-014",
    "slug": "photography-monolithic-silo-in-winter-fog",
    "title": "Monolithic Silo in Winter Fog",
    "category": "Photography",
    "year": 2023,
    "medium": "Large-format 8×10 contact print on Ilford Warmtone fiber paper",
    "dimensionsImperial": "60 × 44 in",
    "dimensionsMetric": "152 × 112 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-02.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Monolithic Silo in Winter Fog — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Monolithic Silo in Winter Fog — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Monolithic Silo in Winter Fog — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-014)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 92–95)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-015",
    "slug": "photography-harbour-pilings-at-neap-tide",
    "title": "Harbour Pilings at Neap Tide",
    "category": "Photography",
    "year": 2024,
    "medium": "Selenium-toned silver gelatin emulsion on baryta cotton paper",
    "dimensionsImperial": "24 × 20 in",
    "dimensionsMetric": "61 × 51 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-03.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Harbour Pilings at Neap Tide — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Harbour Pilings at Neap Tide — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Harbour Pilings at Neap Tide — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-015)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 96–99)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-016",
    "slug": "photography-light-wall-concrete-ocean-salt",
    "title": "Light Wall: Concrete & Ocean Salt",
    "category": "Photography",
    "year": 2020,
    "medium": "Silver gelatin print on double-weight fiber paper, selenium-toned",
    "dimensionsImperial": "32 × 24 in",
    "dimensionsMetric": "81 × 61 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-01.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Light Wall: Concrete & Ocean Salt — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Light Wall: Concrete & Ocean Salt — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Light Wall: Concrete & Ocean Salt — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-016)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 100–103)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-017",
    "slug": "photography-coastal-nocturne-exposure-ix",
    "title": "Coastal Nocturne (Exposure IX)",
    "category": "Photography",
    "year": 2021,
    "medium": "Platinum-palladium contact print on hand-coated Japanese gampi paper",
    "dimensionsImperial": "40 × 30 in",
    "dimensionsMetric": "102 × 76 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-02.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Coastal Nocturne (Exposure IX) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Coastal Nocturne (Exposure IX) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Coastal Nocturne (Exposure IX) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-017)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 104–107)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-018",
    "slug": "photography-estuary-meridian-silver-study",
    "title": "Estuary Meridian: Silver Study",
    "category": "Photography",
    "year": 2022,
    "medium": "Archival pigment print on 310gsm Hahnemühle Photo Rag",
    "dimensionsImperial": "48 × 36 in",
    "dimensionsMetric": "122 × 91 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-03.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Estuary Meridian: Silver Study — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Estuary Meridian: Silver Study — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Estuary Meridian: Silver Study — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-018)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 108–111)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-019",
    "slug": "photography-glacial-erratics-in-atlantic-sleet",
    "title": "Glacial Erratics in Atlantic Sleet",
    "category": "Photography",
    "year": 2023,
    "medium": "Large-format 8×10 contact print on Ilford Warmtone fiber paper",
    "dimensionsImperial": "60 × 44 in",
    "dimensionsMetric": "152 × 112 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-01.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-01.jpg",
        "caption": "Glacial Erratics in Atlantic Sleet — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Glacial Erratics in Atlantic Sleet — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Glacial Erratics in Atlantic Sleet — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-019)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 112–115)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ph-020",
    "slug": "photography-terminal-light-breakwater-study-xx",
    "title": "Terminal Light: Breakwater (Study XX)",
    "category": "Photography",
    "year": 2024,
    "medium": "Selenium-toned silver gelatin emulsion on baryta cotton paper",
    "dimensionsImperial": "24 × 20 in",
    "dimensionsMetric": "61 × 51 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Hand-crafted blackened ash frame, Optium museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Light Architecture Series",
    "featured": false,
    "primaryImage": "/images/artworks/photo-02.jpg",
    "images": [
      {
        "url": "/images/artworks/photo-02.jpg",
        "caption": "Terminal Light: Breakwater (Study XX) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/photo-03.jpg",
        "caption": "Terminal Light: Breakwater (Study XX) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Terminal Light: Breakwater (Study XX) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of photography. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where light becomes structural weight. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-020)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 116–119)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-001",
    "slug": "paintings-mineral-field-bone-umber-wax-no-01",
    "title": "Mineral Field: Bone, Umber & Wax (No. 01)",
    "category": "Paintings",
    "year": 2020,
    "medium": "Oil, pulverized marble dust, and cold-pressed beeswax on unprimed Belgian linen",
    "dimensionsImperial": "72 × 54 in",
    "dimensionsMetric": "183 × 137 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Mineral Inscriptions",
    "featured": true,
    "primaryImage": "/images/artworks/painting-01.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Mineral Field: Bone, Umber & Wax (No. 01) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Mineral Field: Bone, Umber & Wax (No. 01) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Mineral Field: Bone, Umber & Wax (No. 01) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-001)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 40–43)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-002",
    "slug": "paintings-held-light-ground-carrara-walnut-oil",
    "title": "Held Light: Ground Carrara & Walnut Oil",
    "category": "Paintings",
    "year": 2021,
    "medium": "Natural mineral pigments, walnut oil, and bone ash on linen",
    "dimensionsImperial": "84 × 60 in",
    "dimensionsMetric": "213 × 152 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Mineral Inscriptions",
    "featured": true,
    "primaryImage": "/images/artworks/painting-02.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Held Light: Ground Carrara & Walnut Oil — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Held Light: Ground Carrara & Walnut Oil — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Held Light: Ground Carrara & Walnut Oil — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-002)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 44–47)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-003",
    "slug": "paintings-threshold-study-in-pulverized-slate",
    "title": "Threshold Study in Pulverized Slate",
    "category": "Paintings",
    "year": 2022,
    "medium": "Ground limestone, raw earth pigments, and purified wax on heavy canvas",
    "dimensionsImperial": "96 × 72 in",
    "dimensionsMetric": "244 × 183 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-03.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Threshold Study in Pulverized Slate — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Threshold Study in Pulverized Slate — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Threshold Study in Pulverized Slate — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-003)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 48–51)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-004",
    "slug": "paintings-after-rain-raw-linen-iron-residue",
    "title": "After Rain: Raw Linen & Iron Residue",
    "category": "Paintings",
    "year": 2023,
    "medium": "Charcoal dust, Venetian turpentine, and cold-pressed oil on Belgian linen",
    "dimensionsImperial": "64 × 48 in",
    "dimensionsMetric": "163 × 122 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-01.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "After Rain: Raw Linen & Iron Residue — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "After Rain: Raw Linen & Iron Residue — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "After Rain: Raw Linen & Iron Residue — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-004)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 52–55)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-005",
    "slug": "paintings-open-ground-cold-pressed-wax-obsidian-impasto",
    "title": "Open Ground: Cold-Pressed Wax & Obsidian Impasto",
    "category": "Paintings",
    "year": 2024,
    "medium": "Iron oxide, pulverized slate, and dammar resin on stretched flax",
    "dimensionsImperial": "108 × 78 in",
    "dimensionsMetric": "274 × 198 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-02.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Open Ground: Cold-Pressed Wax & Obsidian Impasto — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Open Ground: Cold-Pressed Wax & Obsidian Impasto — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Open Ground: Cold-Pressed Wax & Obsidian Impasto — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-005)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 56–59)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-006",
    "slug": "paintings-strata-monochrome-calcified-shell-dust",
    "title": "Strata Monochrome: Calcified Shell Dust",
    "category": "Paintings",
    "year": 2020,
    "medium": "Oil, pulverized marble dust, and cold-pressed beeswax on unprimed Belgian linen",
    "dimensionsImperial": "72 × 54 in",
    "dimensionsMetric": "183 × 137 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-03.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Strata Monochrome: Calcified Shell Dust — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Strata Monochrome: Calcified Shell Dust — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Strata Monochrome: Calcified Shell Dust — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-006)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 60–63)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-007",
    "slug": "paintings-sediment-horizon-study-vi",
    "title": "Sediment Horizon (Study VI)",
    "category": "Paintings",
    "year": 2021,
    "medium": "Natural mineral pigments, walnut oil, and bone ash on linen",
    "dimensionsImperial": "84 × 60 in",
    "dimensionsMetric": "213 × 152 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-01.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Sediment Horizon (Study VI) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Sediment Horizon (Study VI) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Sediment Horizon (Study VI) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-007)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 64–67)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-008",
    "slug": "paintings-basalt-resonator-ground-ash-on-linen",
    "title": "Basalt Resonator: Ground Ash on Linen",
    "category": "Paintings",
    "year": 2022,
    "medium": "Ground limestone, raw earth pigments, and purified wax on heavy canvas",
    "dimensionsImperial": "96 × 72 in",
    "dimensionsMetric": "244 × 183 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-02.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Basalt Resonator: Ground Ash on Linen — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Basalt Resonator: Ground Ash on Linen — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Basalt Resonator: Ground Ash on Linen — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-008)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 68–71)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-009",
    "slug": "paintings-the-unprimed-margin-study-viii",
    "title": "The Unprimed Margin (Study VIII)",
    "category": "Paintings",
    "year": 2023,
    "medium": "Charcoal dust, Venetian turpentine, and cold-pressed oil on Belgian linen",
    "dimensionsImperial": "64 × 48 in",
    "dimensionsMetric": "163 × 122 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-03.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "The Unprimed Margin (Study VIII) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "The Unprimed Margin (Study VIII) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Unprimed Margin (Study VIII) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-009)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 72–75)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-010",
    "slug": "paintings-limestone-fresco-with-burnt-ochre",
    "title": "Limestone Fresco with Burnt Ochre",
    "category": "Paintings",
    "year": 2024,
    "medium": "Iron oxide, pulverized slate, and dammar resin on stretched flax",
    "dimensionsImperial": "108 × 78 in",
    "dimensionsMetric": "274 × 198 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-01.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Limestone Fresco with Burnt Ochre — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Limestone Fresco with Burnt Ochre — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Limestone Fresco with Burnt Ochre — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-010)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 76–79)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-011",
    "slug": "paintings-pale-meridian-pulverized-marble-ground",
    "title": "Pale Meridian: Pulverized Marble Ground",
    "category": "Paintings",
    "year": 2020,
    "medium": "Oil, pulverized marble dust, and cold-pressed beeswax on unprimed Belgian linen",
    "dimensionsImperial": "72 × 54 in",
    "dimensionsMetric": "183 × 137 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-02.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Pale Meridian: Pulverized Marble Ground — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Pale Meridian: Pulverized Marble Ground — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Pale Meridian: Pulverized Marble Ground — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-011)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 80–83)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-012",
    "slug": "paintings-nocturne-in-lampblack-purified-beeswax",
    "title": "Nocturne in Lampblack & Purified Beeswax",
    "category": "Paintings",
    "year": 2021,
    "medium": "Natural mineral pigments, walnut oil, and bone ash on linen",
    "dimensionsImperial": "84 × 60 in",
    "dimensionsMetric": "213 × 152 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-03.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Nocturne in Lampblack & Purified Beeswax — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Nocturne in Lampblack & Purified Beeswax — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Nocturne in Lampblack & Purified Beeswax — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-012)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 84–87)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-013",
    "slug": "paintings-vein-study-in-raw-sienna-slate-dust",
    "title": "Vein Study in Raw Sienna & Slate Dust",
    "category": "Paintings",
    "year": 2022,
    "medium": "Ground limestone, raw earth pigments, and purified wax on heavy canvas",
    "dimensionsImperial": "96 × 72 in",
    "dimensionsMetric": "244 × 183 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-01.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Vein Study in Raw Sienna & Slate Dust — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Vein Study in Raw Sienna & Slate Dust — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Vein Study in Raw Sienna & Slate Dust — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-013)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 88–91)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-014",
    "slug": "paintings-acoustic-plane-monolithic-linen",
    "title": "Acoustic Plane: Monolithic Linen",
    "category": "Paintings",
    "year": 2023,
    "medium": "Charcoal dust, Venetian turpentine, and cold-pressed oil on Belgian linen",
    "dimensionsImperial": "64 × 48 in",
    "dimensionsMetric": "163 × 122 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-02.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Acoustic Plane: Monolithic Linen — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Acoustic Plane: Monolithic Linen — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Acoustic Plane: Monolithic Linen — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-014)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 92–95)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-015",
    "slug": "paintings-thermal-ground-iron-oxide-wax",
    "title": "Thermal Ground: Iron Oxide & Wax",
    "category": "Paintings",
    "year": 2024,
    "medium": "Iron oxide, pulverized slate, and dammar resin on stretched flax",
    "dimensionsImperial": "108 × 78 in",
    "dimensionsMetric": "274 × 198 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-03.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Thermal Ground: Iron Oxide & Wax — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Thermal Ground: Iron Oxide & Wax — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Thermal Ground: Iron Oxide & Wax — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-015)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 96–99)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-016",
    "slug": "paintings-tectonic-interval-sgraffito-on-fresco",
    "title": "Tectonic Interval: Sgraffito on Fresco",
    "category": "Paintings",
    "year": 2020,
    "medium": "Oil, pulverized marble dust, and cold-pressed beeswax on unprimed Belgian linen",
    "dimensionsImperial": "72 × 54 in",
    "dimensionsMetric": "183 × 137 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-01.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Tectonic Interval: Sgraffito on Fresco — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Tectonic Interval: Sgraffito on Fresco — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Tectonic Interval: Sgraffito on Fresco — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-016)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 100–103)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-017",
    "slug": "paintings-earth-inscription-no-17",
    "title": "Earth Inscription No. 17",
    "category": "Paintings",
    "year": 2021,
    "medium": "Natural mineral pigments, walnut oil, and bone ash on linen",
    "dimensionsImperial": "84 × 60 in",
    "dimensionsMetric": "213 × 152 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-02.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Earth Inscription No. 17 — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Earth Inscription No. 17 — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Earth Inscription No. 17 — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-017)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 104–107)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-018",
    "slug": "paintings-the-dry-riverbed-mineral-crust-on-canvas",
    "title": "The Dry Riverbed: Mineral Crust on Canvas",
    "category": "Paintings",
    "year": 2022,
    "medium": "Ground limestone, raw earth pigments, and purified wax on heavy canvas",
    "dimensionsImperial": "96 × 72 in",
    "dimensionsMetric": "244 × 183 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-03.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "The Dry Riverbed: Mineral Crust on Canvas — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "The Dry Riverbed: Mineral Crust on Canvas — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Dry Riverbed: Mineral Crust on Canvas — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-018)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 108–111)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-019",
    "slug": "paintings-umber-passage-low-relief-mineral-impasto",
    "title": "Umber Passage: Low Relief Mineral Impasto",
    "category": "Paintings",
    "year": 2023,
    "medium": "Charcoal dust, Venetian turpentine, and cold-pressed oil on Belgian linen",
    "dimensionsImperial": "64 × 48 in",
    "dimensionsMetric": "163 × 122 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-01.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-01.jpg",
        "caption": "Umber Passage: Low Relief Mineral Impasto — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Umber Passage: Low Relief Mineral Impasto — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Umber Passage: Low Relief Mineral Impasto — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-019)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 112–115)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pa-020",
    "slug": "paintings-monumental-linen-in-bone-black-study-xx",
    "title": "Monumental Linen in Bone Black (Study XX)",
    "category": "Paintings",
    "year": 2024,
    "medium": "Iron oxide, pulverized slate, and dammar resin on stretched flax",
    "dimensionsImperial": "108 × 78 in",
    "dimensionsMetric": "274 × 198 cm",
    "edition": "Unique original artwork",
    "framing": "Frameless contemporary exhibition presentation on heavy museum chassis (2.5 in profile)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Mineral Inscriptions",
    "featured": false,
    "primaryImage": "/images/artworks/painting-02.jpg",
    "images": [
      {
        "url": "/images/artworks/painting-02.jpg",
        "caption": "Monumental Linen in Bone Black (Study XX) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/painting-03.jpg",
        "caption": "Monumental Linen in Bone Black (Study XX) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Monumental Linen in Bone Black (Study XX) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of paintings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where mineral impasto anchors the viewing plane. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-020)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 116–119)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-001",
    "slug": "drawings-orbit-study-charcoal-pure-graphite-i",
    "title": "Orbit Study: Charcoal & Pure Graphite (I)",
    "category": "Drawings",
    "year": 2020,
    "medium": "Charcoal, graphite, and erasure on 640gsm Arches deckle-edge paper",
    "dimensionsImperial": "30 × 22 in",
    "dimensionsMetric": "76 × 56 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Solitary Line Studies",
    "featured": true,
    "primaryImage": "/images/artworks/drawing-01.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Orbit Study: Charcoal & Pure Graphite (I) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Orbit Study: Charcoal & Pure Graphite (I) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Orbit Study: Charcoal & Pure Graphite (I) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-001)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 40–43)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-002",
    "slug": "drawings-pressure-mark-burnished-640gsm-arches",
    "title": "Pressure Mark: Burnished 640gsm Arches",
    "category": "Drawings",
    "year": 2021,
    "medium": "Silverpoint and calcified bone-ash ground on handmade cotton rag",
    "dimensionsImperial": "38 × 28 in",
    "dimensionsMetric": "97 × 71 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Solitary Line Studies",
    "featured": true,
    "primaryImage": "/images/artworks/drawing-02.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Pressure Mark: Burnished 640gsm Arches — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Pressure Mark: Burnished 640gsm Arches — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Pressure Mark: Burnished 640gsm Arches — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-002)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 44–47)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-003",
    "slug": "drawings-held-arc-in-dense-vine-charcoal",
    "title": "Held Arc in Dense Vine Charcoal",
    "category": "Drawings",
    "year": 2022,
    "medium": "Pure vine charcoal, graphite, and white chalk on Saunders Waterford paper",
    "dimensionsImperial": "44 × 32 in",
    "dimensionsMetric": "112 × 81 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-03.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Held Arc in Dense Vine Charcoal — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Held Arc in Dense Vine Charcoal — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Held Arc in Dense Vine Charcoal — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-003)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 48–51)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-004",
    "slug": "drawings-erased-field-silverpoint-chalk-gesso",
    "title": "Erased Field: Silverpoint & Chalk Gesso",
    "category": "Drawings",
    "year": 2023,
    "medium": "Nara vintage sumi ink and burnished graphite on Japanese kozo paper",
    "dimensionsImperial": "22 × 18 in",
    "dimensionsMetric": "56 × 46 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-01.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Erased Field: Silverpoint & Chalk Gesso — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Erased Field: Silverpoint & Chalk Gesso — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Erased Field: Silverpoint & Chalk Gesso — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-004)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 52–55)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-005",
    "slug": "drawings-interval-no-05-nara-sumi-ink-bone-dust",
    "title": "Interval No. 05: Nara Sumi Ink & Bone Dust",
    "category": "Drawings",
    "year": 2024,
    "medium": "Carbon stick and powdered graphite with dry erasure on heavyweight cotton",
    "dimensionsImperial": "50 × 38 in",
    "dimensionsMetric": "127 × 97 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-02.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Interval No. 05: Nara Sumi Ink & Bone Dust — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Interval No. 05: Nara Sumi Ink & Bone Dust — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Interval No. 05: Nara Sumi Ink & Bone Dust — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-005)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 56–59)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-006",
    "slug": "drawings-the-solitary-line-15th-century-silverpoint",
    "title": "The Solitary Line: 15th-Century Silverpoint",
    "category": "Drawings",
    "year": 2020,
    "medium": "Charcoal, graphite, and erasure on 640gsm Arches deckle-edge paper",
    "dimensionsImperial": "30 × 22 in",
    "dimensionsMetric": "76 × 56 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-03.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "The Solitary Line: 15th-Century Silverpoint — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "The Solitary Line: 15th-Century Silverpoint — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Solitary Line: 15th-Century Silverpoint — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-006)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 60–63)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-007",
    "slug": "drawings-fugitive-contour-hard-ground-graphite",
    "title": "Fugitive Contour: Hard Ground Graphite",
    "category": "Drawings",
    "year": 2021,
    "medium": "Silverpoint and calcified bone-ash ground on handmade cotton rag",
    "dimensionsImperial": "38 × 28 in",
    "dimensionsMetric": "97 × 71 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-01.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Fugitive Contour: Hard Ground Graphite — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Fugitive Contour: Hard Ground Graphite — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Fugitive Contour: Hard Ground Graphite — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-007)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 64–67)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-008",
    "slug": "drawings-compressed-carbon-erasure-study",
    "title": "Compressed Carbon & Erasure Study",
    "category": "Drawings",
    "year": 2022,
    "medium": "Pure vine charcoal, graphite, and white chalk on Saunders Waterford paper",
    "dimensionsImperial": "44 × 32 in",
    "dimensionsMetric": "112 × 81 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-02.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Compressed Carbon & Erasure Study — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Compressed Carbon & Erasure Study — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Compressed Carbon & Erasure Study — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-008)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 68–71)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-009",
    "slug": "drawings-radial-orbit-in-deep-carbon-black",
    "title": "Radial Orbit in Deep Carbon Black",
    "category": "Drawings",
    "year": 2023,
    "medium": "Nara vintage sumi ink and burnished graphite on Japanese kozo paper",
    "dimensionsImperial": "22 × 18 in",
    "dimensionsMetric": "56 × 46 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-03.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Radial Orbit in Deep Carbon Black — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Radial Orbit in Deep Carbon Black — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Radial Orbit in Deep Carbon Black — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-009)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 72–75)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-010",
    "slug": "drawings-graphite-meridian-cold-pressed-rag",
    "title": "Graphite Meridian: Cold-Pressed Rag",
    "category": "Drawings",
    "year": 2024,
    "medium": "Carbon stick and powdered graphite with dry erasure on heavyweight cotton",
    "dimensionsImperial": "50 × 38 in",
    "dimensionsMetric": "127 × 97 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-01.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Graphite Meridian: Cold-Pressed Rag — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Graphite Meridian: Cold-Pressed Rag — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Graphite Meridian: Cold-Pressed Rag — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-010)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 76–79)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-011",
    "slug": "drawings-sumi-wash-silverpoint-counterpoint",
    "title": "Sumi Wash & Silverpoint Counterpoint",
    "category": "Drawings",
    "year": 2020,
    "medium": "Charcoal, graphite, and erasure on 640gsm Arches deckle-edge paper",
    "dimensionsImperial": "30 × 22 in",
    "dimensionsMetric": "76 × 56 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-02.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Sumi Wash & Silverpoint Counterpoint — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Sumi Wash & Silverpoint Counterpoint — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Sumi Wash & Silverpoint Counterpoint — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-011)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 80–83)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-012",
    "slug": "drawings-tensile-arc-heavy-charcoal-cadence",
    "title": "Tensile Arc: Heavy Charcoal Cadence",
    "category": "Drawings",
    "year": 2021,
    "medium": "Silverpoint and calcified bone-ash ground on handmade cotton rag",
    "dimensionsImperial": "38 × 28 in",
    "dimensionsMetric": "97 × 71 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-03.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Tensile Arc: Heavy Charcoal Cadence — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Tensile Arc: Heavy Charcoal Cadence — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Tensile Arc: Heavy Charcoal Cadence — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-012)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 84–87)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-013",
    "slug": "drawings-pale-horizon-burnished-lead-pencil",
    "title": "Pale Horizon: Burnished Lead Pencil",
    "category": "Drawings",
    "year": 2022,
    "medium": "Pure vine charcoal, graphite, and white chalk on Saunders Waterford paper",
    "dimensionsImperial": "44 × 32 in",
    "dimensionsMetric": "112 × 81 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-01.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Pale Horizon: Burnished Lead Pencil — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Pale Horizon: Burnished Lead Pencil — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Pale Horizon: Burnished Lead Pencil — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-013)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 88–91)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-014",
    "slug": "drawings-atmospheric-interval-study-xiv",
    "title": "Atmospheric Interval (Study XIV)",
    "category": "Drawings",
    "year": 2023,
    "medium": "Nara vintage sumi ink and burnished graphite on Japanese kozo paper",
    "dimensionsImperial": "22 × 18 in",
    "dimensionsMetric": "56 × 46 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-02.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Atmospheric Interval (Study XIV) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Atmospheric Interval (Study XIV) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Atmospheric Interval (Study XIV) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-014)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 92–95)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-015",
    "slug": "drawings-linear-velocity-graphite-on-heavy-rag",
    "title": "Linear Velocity: Graphite on Heavy Rag",
    "category": "Drawings",
    "year": 2024,
    "medium": "Carbon stick and powdered graphite with dry erasure on heavyweight cotton",
    "dimensionsImperial": "50 × 38 in",
    "dimensionsMetric": "127 × 97 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-03.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Linear Velocity: Graphite on Heavy Rag — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Linear Velocity: Graphite on Heavy Rag — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Linear Velocity: Graphite on Heavy Rag — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-015)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 96–99)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-016",
    "slug": "drawings-deep-carbon-cavity-on-deckled-sheet",
    "title": "Deep Carbon Cavity on Deckled Sheet",
    "category": "Drawings",
    "year": 2020,
    "medium": "Charcoal, graphite, and erasure on 640gsm Arches deckle-edge paper",
    "dimensionsImperial": "30 × 22 in",
    "dimensionsMetric": "76 × 56 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-01.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Deep Carbon Cavity on Deckled Sheet — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Deep Carbon Cavity on Deckled Sheet — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Deep Carbon Cavity on Deckled Sheet — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-016)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 100–103)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-017",
    "slug": "drawings-architectural-grid-study-draft-xvii",
    "title": "Architectural Grid Study (Draft XVII)",
    "category": "Drawings",
    "year": 2021,
    "medium": "Silverpoint and calcified bone-ash ground on handmade cotton rag",
    "dimensionsImperial": "38 × 28 in",
    "dimensionsMetric": "97 × 71 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-02.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Architectural Grid Study (Draft XVII) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Architectural Grid Study (Draft XVII) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Architectural Grid Study (Draft XVII) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-017)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 104–107)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-018",
    "slug": "drawings-vitreous-gesture-charcoal-bone-ash",
    "title": "Vitreous Gesture: Charcoal & Bone Ash",
    "category": "Drawings",
    "year": 2022,
    "medium": "Pure vine charcoal, graphite, and white chalk on Saunders Waterford paper",
    "dimensionsImperial": "44 × 32 in",
    "dimensionsMetric": "112 × 81 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-03.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "Vitreous Gesture: Charcoal & Bone Ash — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Vitreous Gesture: Charcoal & Bone Ash — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Vitreous Gesture: Charcoal & Bone Ash — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-018)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 108–111)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-019",
    "slug": "drawings-subtle-horizon-erased-carbon-plane",
    "title": "Subtle Horizon: Erased Carbon Plane",
    "category": "Drawings",
    "year": 2023,
    "medium": "Nara vintage sumi ink and burnished graphite on Japanese kozo paper",
    "dimensionsImperial": "22 × 18 in",
    "dimensionsMetric": "56 × 46 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-01.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-01.jpg",
        "caption": "Subtle Horizon: Erased Carbon Plane — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "Subtle Horizon: Erased Carbon Plane — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Subtle Horizon: Erased Carbon Plane — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-019)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 112–115)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-dr-020",
    "slug": "drawings-the-measured-line-study-xx",
    "title": "The Measured Line (Study XX)",
    "category": "Drawings",
    "year": 2024,
    "medium": "Carbon stick and powdered graphite with dry erasure on heavyweight cotton",
    "dimensionsImperial": "50 × 38 in",
    "dimensionsMetric": "127 × 97 cm",
    "edition": "Unique original artwork",
    "framing": "Float-mounted in raw natural American walnut frame, anti-reflective UV Optium acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Solitary Line Studies",
    "featured": false,
    "primaryImage": "/images/artworks/drawing-02.jpg",
    "images": [
      {
        "url": "/images/artworks/drawing-02.jpg",
        "caption": "The Measured Line (Study XX) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/drawing-03.jpg",
        "caption": "The Measured Line (Study XX) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Measured Line (Study XX) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of drawings. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the solitary carbon line dictates architectural space. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-020)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 116–119)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-001",
    "slug": "ceramics-folded-stoneware-vessel-in-natural-ash-glaze-i",
    "title": "Folded Stoneware Vessel in Natural Ash Glaze (I)",
    "category": "Ceramics",
    "year": 2020,
    "medium": "Hand-built and slab-folded coarse refractory stoneware, natural wood ash glaze, wood-fired 96 hours",
    "dimensionsImperial": "18 × 12 × 10 in",
    "dimensionsMetric": "46 × 30 × 25 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Anagama Kiln Relics",
    "featured": true,
    "primaryImage": "/images/artworks/ceramic-01.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Folded Stoneware Vessel in Natural Ash Glaze (I) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Folded Stoneware Vessel in Natural Ash Glaze (I) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Folded Stoneware Vessel in Natural Ash Glaze (I) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-001)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 40–43)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-002",
    "slug": "ceramics-ash-form-96-hour-anagama-kiln-fire",
    "title": "Ash Form: 96-Hour Anagama Kiln Fire",
    "category": "Ceramics",
    "year": 2021,
    "medium": "Coarse stoneware with volcanic slip, iron-rich river silt, unglazed wood kiln firing",
    "dimensionsImperial": "22 × 14 × 12 in",
    "dimensionsMetric": "56 × 36 × 30 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Anagama Kiln Relics",
    "featured": true,
    "primaryImage": "/images/artworks/ceramic-02.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Ash Form: 96-Hour Anagama Kiln Fire — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Ash Form: 96-Hour Anagama Kiln Fire — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Ash Form: 96-Hour Anagama Kiln Fire — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-002)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 44–47)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-003",
    "slug": "ceramics-quiet-volume-coarse-hudson-fireclay",
    "title": "Quiet Volume: Coarse Hudson Fireclay",
    "category": "Ceramics",
    "year": 2022,
    "medium": "Wheel-thrown and altered stoneware with naturally melted oak ash and feldspathic rock",
    "dimensionsImperial": "15 × 16 × 14 in",
    "dimensionsMetric": "38 × 41 × 36 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-03.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Quiet Volume: Coarse Hudson Fireclay — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Quiet Volume: Coarse Hudson Fireclay — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Quiet Volume: Coarse Hudson Fireclay — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-003)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 48–51)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-004",
    "slug": "ceramics-open-body-in-scorched-feldspar",
    "title": "Open Body in Scorched Feldspar",
    "category": "Ceramics",
    "year": 2023,
    "medium": "Refractory clay, hand-carved facets, reduction-fired in high-temperature wood kiln",
    "dimensionsImperial": "26 × 11 × 11 in",
    "dimensionsMetric": "66 × 28 × 28 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-01.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Open Body in Scorched Feldspar — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Open Body in Scorched Feldspar — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Open Body in Scorched Feldspar — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-004)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 52–55)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-005",
    "slug": "ceramics-weathered-rim-wood-fired-stoneware",
    "title": "Weathered Rim: Wood-Fired Stoneware",
    "category": "Ceramics",
    "year": 2024,
    "medium": "Dark stoneware, wild clay slip, and crystallized wood ash melt",
    "dimensionsImperial": "12 × 14 × 12 in",
    "dimensionsMetric": "30 × 36 × 30 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-02.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Weathered Rim: Wood-Fired Stoneware — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Weathered Rim: Wood-Fired Stoneware — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Weathered Rim: Wood-Fired Stoneware — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-005)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 56–59)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-006",
    "slug": "ceramics-tectonic-monolith-slab-built-fireclay",
    "title": "Tectonic Monolith: Slab-Built Fireclay",
    "category": "Ceramics",
    "year": 2020,
    "medium": "Hand-built and slab-folded coarse refractory stoneware, natural wood ash glaze, wood-fired 96 hours",
    "dimensionsImperial": "18 × 12 × 10 in",
    "dimensionsMetric": "46 × 30 × 25 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-03.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Tectonic Monolith: Slab-Built Fireclay — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Tectonic Monolith: Slab-Built Fireclay — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Tectonic Monolith: Slab-Built Fireclay — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-006)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 60–63)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-007",
    "slug": "ceramics-volcanic-slip-oak-ash-cylinder",
    "title": "Volcanic Slip & Oak Ash Cylinder",
    "category": "Ceramics",
    "year": 2021,
    "medium": "Coarse stoneware with volcanic slip, iron-rich river silt, unglazed wood kiln firing",
    "dimensionsImperial": "22 × 14 × 12 in",
    "dimensionsMetric": "56 × 36 × 30 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-01.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Volcanic Slip & Oak Ash Cylinder — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Volcanic Slip & Oak Ash Cylinder — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Volcanic Slip & Oak Ash Cylinder — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-007)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 64–67)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-008",
    "slug": "ceramics-subterranean-form-in-iron-stoneware",
    "title": "Subterranean Form in Iron Stoneware",
    "category": "Ceramics",
    "year": 2022,
    "medium": "Wheel-thrown and altered stoneware with naturally melted oak ash and feldspathic rock",
    "dimensionsImperial": "15 × 16 × 14 in",
    "dimensionsMetric": "38 × 41 × 36 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-02.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Subterranean Form in Iron Stoneware — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Subterranean Form in Iron Stoneware — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Subterranean Form in Iron Stoneware — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-008)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 68–71)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-009",
    "slug": "ceramics-compressed-vessel-with-raw-edge",
    "title": "Compressed Vessel with Raw Edge",
    "category": "Ceramics",
    "year": 2023,
    "medium": "Refractory clay, hand-carved facets, reduction-fired in high-temperature wood kiln",
    "dimensionsImperial": "26 × 11 × 11 in",
    "dimensionsMetric": "66 × 28 × 28 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-03.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Compressed Vessel with Raw Edge — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Compressed Vessel with Raw Edge — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Compressed Vessel with Raw Edge — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-009)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 72–75)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-010",
    "slug": "ceramics-ember-scorch-basin-anagama-study-x",
    "title": "Ember Scorch Basin: Anagama Study X",
    "category": "Ceramics",
    "year": 2024,
    "medium": "Dark stoneware, wild clay slip, and crystallized wood ash melt",
    "dimensionsImperial": "12 × 14 × 12 in",
    "dimensionsMetric": "30 × 36 × 30 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-01.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Ember Scorch Basin: Anagama Study X — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Ember Scorch Basin: Anagama Study X — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Ember Scorch Basin: Anagama Study X — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-010)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 76–79)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-011",
    "slug": "ceramics-asymmetrical-chalice-in-calcified-clay",
    "title": "Asymmetrical Chalice in Calcified Clay",
    "category": "Ceramics",
    "year": 2020,
    "medium": "Hand-built and slab-folded coarse refractory stoneware, natural wood ash glaze, wood-fired 96 hours",
    "dimensionsImperial": "18 × 12 × 10 in",
    "dimensionsMetric": "46 × 30 × 25 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-02.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Asymmetrical Chalice in Calcified Clay — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Asymmetrical Chalice in Calcified Clay — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Asymmetrical Chalice in Calcified Clay — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-011)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 80–83)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-012",
    "slug": "ceramics-the-heavy-vessel-coarse-riverbed-clay",
    "title": "The Heavy Vessel: Coarse Riverbed Clay",
    "category": "Ceramics",
    "year": 2021,
    "medium": "Coarse stoneware with volcanic slip, iron-rich river silt, unglazed wood kiln firing",
    "dimensionsImperial": "22 × 14 × 12 in",
    "dimensionsMetric": "56 × 36 × 30 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-03.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "The Heavy Vessel: Coarse Riverbed Clay — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "The Heavy Vessel: Coarse Riverbed Clay — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Heavy Vessel: Coarse Riverbed Clay — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-012)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 84–87)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-013",
    "slug": "ceramics-high-temperature-ash-drip-vessel",
    "title": "High-Temperature Ash Drip Vessel",
    "category": "Ceramics",
    "year": 2022,
    "medium": "Wheel-thrown and altered stoneware with naturally melted oak ash and feldspathic rock",
    "dimensionsImperial": "15 × 16 × 14 in",
    "dimensionsMetric": "38 × 41 × 36 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-01.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "High-Temperature Ash Drip Vessel — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "High-Temperature Ash Drip Vessel — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "High-Temperature Ash Drip Vessel — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-013)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 88–91)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-014",
    "slug": "ceramics-carved-monolith-refractory-fireclay",
    "title": "Carved Monolith: Refractory Fireclay",
    "category": "Ceramics",
    "year": 2023,
    "medium": "Refractory clay, hand-carved facets, reduction-fired in high-temperature wood kiln",
    "dimensionsImperial": "26 × 11 × 11 in",
    "dimensionsMetric": "66 × 28 × 28 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-02.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Carved Monolith: Refractory Fireclay — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Carved Monolith: Refractory Fireclay — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Carved Monolith: Refractory Fireclay — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-014)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 92–95)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-015",
    "slug": "ceramics-low-basin-in-burnished-river-silt",
    "title": "Low Basin in Burnished River Silt",
    "category": "Ceramics",
    "year": 2024,
    "medium": "Dark stoneware, wild clay slip, and crystallized wood ash melt",
    "dimensionsImperial": "12 × 14 × 12 in",
    "dimensionsMetric": "30 × 36 × 30 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-03.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Low Basin in Burnished River Silt — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Low Basin in Burnished River Silt — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Low Basin in Burnished River Silt — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-015)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 96–99)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-016",
    "slug": "ceramics-cracked-slip-stoneware-study-xvi",
    "title": "Cracked Slip Stoneware (Study XVI)",
    "category": "Ceramics",
    "year": 2020,
    "medium": "Hand-built and slab-folded coarse refractory stoneware, natural wood ash glaze, wood-fired 96 hours",
    "dimensionsImperial": "18 × 12 × 10 in",
    "dimensionsMetric": "46 × 30 × 25 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-01.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Cracked Slip Stoneware (Study XVI) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Cracked Slip Stoneware (Study XVI) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Cracked Slip Stoneware (Study XVI) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-016)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 100–103)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-017",
    "slug": "ceramics-folded-amphora-in-oak-ash-melt",
    "title": "Folded Amphora in Oak Ash Melt",
    "category": "Ceramics",
    "year": 2021,
    "medium": "Coarse stoneware with volcanic slip, iron-rich river silt, unglazed wood kiln firing",
    "dimensionsImperial": "22 × 14 × 12 in",
    "dimensionsMetric": "56 × 36 × 30 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-02.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Folded Amphora in Oak Ash Melt — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Folded Amphora in Oak Ash Melt — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Folded Amphora in Oak Ash Melt — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-017)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 104–107)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-018",
    "slug": "ceramics-primitive-column-in-high-fired-basalt",
    "title": "Primitive Column in High-Fired Basalt",
    "category": "Ceramics",
    "year": 2022,
    "medium": "Wheel-thrown and altered stoneware with naturally melted oak ash and feldspathic rock",
    "dimensionsImperial": "15 × 16 × 14 in",
    "dimensionsMetric": "38 × 41 × 36 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-03.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Primitive Column in High-Fired Basalt — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "Primitive Column in High-Fired Basalt — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Primitive Column in High-Fired Basalt — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-018)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 108–111)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-019",
    "slug": "ceramics-the-hollow-ground-stoneware-relic",
    "title": "The Hollow Ground: Stoneware Relic",
    "category": "Ceramics",
    "year": 2023,
    "medium": "Refractory clay, hand-carved facets, reduction-fired in high-temperature wood kiln",
    "dimensionsImperial": "26 × 11 × 11 in",
    "dimensionsMetric": "66 × 28 × 28 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-01.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-01.jpg",
        "caption": "The Hollow Ground: Stoneware Relic — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "The Hollow Ground: Stoneware Relic — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Hollow Ground: Stoneware Relic — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-019)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 112–115)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-ce-020",
    "slug": "ceramics-monumental-ash-vessel-study-xx",
    "title": "Monumental Ash Vessel (Study XX)",
    "category": "Ceramics",
    "year": 2024,
    "medium": "Dark stoneware, wild clay slip, and crystallized wood ash melt",
    "dimensionsImperial": "12 × 14 × 12 in",
    "dimensionsMetric": "30 × 36 × 30 cm",
    "edition": "Unique original artwork",
    "framing": "Presented on bespoke museum-grade blackened steel plinth (included)",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Anagama Kiln Relics",
    "featured": false,
    "primaryImage": "/images/artworks/ceramic-02.jpg",
    "images": [
      {
        "url": "/images/artworks/ceramic-02.jpg",
        "caption": "Monumental Ash Vessel (Study XX) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/ceramic-03.jpg",
        "caption": "Monumental Ash Vessel (Study XX) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Monumental Ash Vessel (Study XX) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of ceramics. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the 96-hour flame reveals ancient volcanic fissures. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-020)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 116–119)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-001",
    "slug": "prints-counterform-woodblock-architectural-relief-i",
    "title": "Counterform: Woodblock Architectural Relief (I)",
    "category": "Prints",
    "year": 2020,
    "medium": "Multi-block woodcut on 300gsm Somerset Velvet paper, hand-printed with bone folder and roller",
    "dimensionsImperial": "36 × 26 in",
    "dimensionsMetric": "91 × 66 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Pressed Matrix Suite",
    "featured": true,
    "primaryImage": "/images/artworks/print-01.jpg",
    "images": [
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "Counterform: Woodblock Architectural Relief (I) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Counterform: Woodblock Architectural Relief (I) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Counterform: Woodblock Architectural Relief (I) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-001)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 40–43)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-002",
    "slug": "prints-measured-plane-spit-bite-aquatint-on-cotton",
    "title": "Measured Plane: Spit-Bite Aquatint on Cotton",
    "category": "Prints",
    "year": 2021,
    "medium": "Spit-bite aquatint and hardground etching on 350gsm Hahnemühle Copperplate paper",
    "dimensionsImperial": "42 × 30 in",
    "dimensionsMetric": "107 × 76 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Pressed Matrix Suite",
    "featured": true,
    "primaryImage": "/images/artworks/print-02.jpg",
    "images": [
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Measured Plane: Spit-Bite Aquatint on Cotton — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Measured Plane: Spit-Bite Aquatint on Cotton — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Measured Plane: Spit-Bite Aquatint on Cotton — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-002)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 44–47)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-003",
    "slug": "prints-rust-passage-two-block-woodcut-in-carbon-black",
    "title": "Rust Passage: Two-Block Woodcut in Carbon Black",
    "category": "Prints",
    "year": 2022,
    "medium": "Hand-pulled stone lithograph on 280gsm BFK Rives cream paper",
    "dimensionsImperial": "28 × 22 in",
    "dimensionsMetric": "71 × 56 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-03.jpg",
    "images": [
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Rust Passage: Two-Block Woodcut in Carbon Black — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "Rust Passage: Two-Block Woodcut in Carbon Black — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Rust Passage: Two-Block Woodcut in Carbon Black — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-003)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 48–51)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-004",
    "slug": "prints-block-study-in-iron-residue-ink",
    "title": "Block Study in Iron Residue & Ink",
    "category": "Prints",
    "year": 2023,
    "medium": "Relief woodblock and blind deboss on heavyweight deckled Japanese kozo",
    "dimensionsImperial": "48 × 34 in",
    "dimensionsMetric": "122 × 86 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-01.jpg",
    "images": [
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "Block Study in Iron Residue & Ink — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Block Study in Iron Residue & Ink — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Block Study in Iron Residue & Ink — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-004)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 52–55)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-005",
    "slug": "prints-offset-room-hand-pulled-limestone-lithograph",
    "title": "Offset Room: Hand-Pulled Limestone Lithograph",
    "category": "Prints",
    "year": 2024,
    "medium": "Intaglio etching with drypoint accents on archival Velin d’Arches",
    "dimensionsImperial": "30 × 24 in",
    "dimensionsMetric": "76 × 61 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-02.jpg",
    "images": [
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Offset Room: Hand-Pulled Limestone Lithograph — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Offset Room: Hand-Pulled Limestone Lithograph — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Offset Room: Hand-Pulled Limestone Lithograph — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-005)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 56–59)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-006",
    "slug": "prints-the-inscribed-plate-heavy-intaglio-on-bfk-rives",
    "title": "The Inscribed Plate: Heavy Intaglio on BFK Rives",
    "category": "Prints",
    "year": 2020,
    "medium": "Multi-block woodcut on 300gsm Somerset Velvet paper, hand-printed with bone folder and roller",
    "dimensionsImperial": "36 × 26 in",
    "dimensionsMetric": "91 × 66 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-03.jpg",
    "images": [
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "The Inscribed Plate: Heavy Intaglio on BFK Rives — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "The Inscribed Plate: Heavy Intaglio on BFK Rives — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Inscribed Plate: Heavy Intaglio on BFK Rives — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-006)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 60–63)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-007",
    "slug": "prints-architectural-matrix-proof-vii",
    "title": "Architectural Matrix (Proof VII)",
    "category": "Prints",
    "year": 2021,
    "medium": "Spit-bite aquatint and hardground etching on 350gsm Hahnemühle Copperplate paper",
    "dimensionsImperial": "42 × 30 in",
    "dimensionsMetric": "107 × 76 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-01.jpg",
    "images": [
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "Architectural Matrix (Proof VII) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Architectural Matrix (Proof VII) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Architectural Matrix (Proof VII) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-007)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 64–67)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-008",
    "slug": "prints-relief-impression-seasoned-pear-wood",
    "title": "Relief Impression: Seasoned Pear Wood",
    "category": "Prints",
    "year": 2022,
    "medium": "Hand-pulled stone lithograph on 280gsm BFK Rives cream paper",
    "dimensionsImperial": "28 × 22 in",
    "dimensionsMetric": "71 × 56 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-02.jpg",
    "images": [
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Relief Impression: Seasoned Pear Wood — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Relief Impression: Seasoned Pear Wood — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Relief Impression: Seasoned Pear Wood — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-008)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 68–71)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-009",
    "slug": "prints-tectonic-press-spit-bite-aquatint",
    "title": "Tectonic Press: Spit-Bite Aquatint",
    "category": "Prints",
    "year": 2023,
    "medium": "Relief woodblock and blind deboss on heavyweight deckled Japanese kozo",
    "dimensionsImperial": "48 × 34 in",
    "dimensionsMetric": "122 × 86 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-03.jpg",
    "images": [
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Tectonic Press: Spit-Bite Aquatint — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "Tectonic Press: Spit-Bite Aquatint — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Tectonic Press: Spit-Bite Aquatint — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-009)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 72–75)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-010",
    "slug": "prints-the-blind-impression-debossed-cotton",
    "title": "The Blind Impression: Debossed Cotton",
    "category": "Prints",
    "year": 2024,
    "medium": "Intaglio etching with drypoint accents on archival Velin d’Arches",
    "dimensionsImperial": "30 × 24 in",
    "dimensionsMetric": "76 × 61 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-01.jpg",
    "images": [
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "The Blind Impression: Debossed Cotton — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "The Blind Impression: Debossed Cotton — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Blind Impression: Debossed Cotton — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-010)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 76–79)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-011",
    "slug": "prints-carbon-black-cadence-impression-xi",
    "title": "Carbon Black Cadence (Impression XI)",
    "category": "Prints",
    "year": 2020,
    "medium": "Multi-block woodcut on 300gsm Somerset Velvet paper, hand-printed with bone folder and roller",
    "dimensionsImperial": "36 × 26 in",
    "dimensionsMetric": "91 × 66 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-02.jpg",
    "images": [
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Carbon Black Cadence (Impression XI) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Carbon Black Cadence (Impression XI) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Carbon Black Cadence (Impression XI) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-011)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 80–83)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-012",
    "slug": "prints-monolithic-block-woodcut-on-kozo",
    "title": "Monolithic Block: Woodcut on Kozo",
    "category": "Prints",
    "year": 2021,
    "medium": "Spit-bite aquatint and hardground etching on 350gsm Hahnemühle Copperplate paper",
    "dimensionsImperial": "42 × 30 in",
    "dimensionsMetric": "107 × 76 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-03.jpg",
    "images": [
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Monolithic Block: Woodcut on Kozo — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "Monolithic Block: Woodcut on Kozo — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Monolithic Block: Woodcut on Kozo — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-012)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 84–87)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-013",
    "slug": "prints-linear-register-two-plate-intaglio",
    "title": "Linear Register: Two-Plate Intaglio",
    "category": "Prints",
    "year": 2022,
    "medium": "Hand-pulled stone lithograph on 280gsm BFK Rives cream paper",
    "dimensionsImperial": "28 × 22 in",
    "dimensionsMetric": "71 × 56 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-01.jpg",
    "images": [
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "Linear Register: Two-Plate Intaglio — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Linear Register: Two-Plate Intaglio — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Linear Register: Two-Plate Intaglio — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-013)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 88–91)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-014",
    "slug": "prints-the-clean-edge-hand-pulled-aquatint",
    "title": "The Clean Edge: Hand-Pulled Aquatint",
    "category": "Prints",
    "year": 2023,
    "medium": "Relief woodblock and blind deboss on heavyweight deckled Japanese kozo",
    "dimensionsImperial": "48 × 34 in",
    "dimensionsMetric": "122 × 86 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-02.jpg",
    "images": [
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "The Clean Edge: Hand-Pulled Aquatint — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "The Clean Edge: Hand-Pulled Aquatint — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Clean Edge: Hand-Pulled Aquatint — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-014)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 92–95)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-015",
    "slug": "prints-terracotta-carbon-woodcut-on-wove",
    "title": "Terracotta & Carbon: Woodcut on Wove",
    "category": "Prints",
    "year": 2024,
    "medium": "Intaglio etching with drypoint accents on archival Velin d’Arches",
    "dimensionsImperial": "30 × 24 in",
    "dimensionsMetric": "76 × 61 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-03.jpg",
    "images": [
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Terracotta & Carbon: Woodcut on Wove — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "Terracotta & Carbon: Woodcut on Wove — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Terracotta & Carbon: Woodcut on Wove — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-015)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 96–99)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-016",
    "slug": "prints-plate-tone-variation-proof-xvi",
    "title": "Plate Tone Variation (Proof XVI)",
    "category": "Prints",
    "year": 2020,
    "medium": "Multi-block woodcut on 300gsm Somerset Velvet paper, hand-printed with bone folder and roller",
    "dimensionsImperial": "36 × 26 in",
    "dimensionsMetric": "91 × 66 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-01.jpg",
    "images": [
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "Plate Tone Variation (Proof XVI) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Plate Tone Variation (Proof XVI) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Plate Tone Variation (Proof XVI) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2020-016)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 100–103)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-017",
    "slug": "prints-industrial-cylinder-impression-archival-rag",
    "title": "Industrial Cylinder Impression: Archival Rag",
    "category": "Prints",
    "year": 2021,
    "medium": "Spit-bite aquatint and hardground etching on 350gsm Hahnemühle Copperplate paper",
    "dimensionsImperial": "42 × 30 in",
    "dimensionsMetric": "107 × 76 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Available",
    "location": "Dawson Wells Gallery, New York Flagship",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-02.jpg",
    "images": [
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Industrial Cylinder Impression: Archival Rag — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Industrial Cylinder Impression: Archival Rag — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Industrial Cylinder Impression: Archival Rag — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2021-017)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 104–107)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-018",
    "slug": "prints-the-open-grid-lithographic-relief",
    "title": "The Open Grid: Lithographic Relief",
    "category": "Prints",
    "year": 2022,
    "medium": "Hand-pulled stone lithograph on 280gsm BFK Rives cream paper",
    "dimensionsImperial": "28 × 22 in",
    "dimensionsMetric": "71 × 56 cm",
    "edition": "Edition of 7 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "In Private Collection",
    "location": "Dawson Wells Gallery, London Mayfair",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-03.jpg",
    "images": [
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "The Open Grid: Lithographic Relief — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "The Open Grid: Lithographic Relief — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Open Grid: Lithographic Relief — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2022-018)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 108–111)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-019",
    "slug": "prints-the-deep-bite-acid-etched-copperplate",
    "title": "The Deep Bite: Acid-Etched Copperplate",
    "category": "Prints",
    "year": 2023,
    "medium": "Relief woodblock and blind deboss on heavyweight deckled Japanese kozo",
    "dimensionsImperial": "48 × 34 in",
    "dimensionsMetric": "122 × 86 cm",
    "edition": "Edition of 5 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Reserved",
    "location": "Dawson Wells Private Archive, New York",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-01.jpg",
    "images": [
      {
        "url": "/images/artworks/print-01.jpg",
        "caption": "The Deep Bite: Acid-Etched Copperplate — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "The Deep Bite: Acid-Etched Copperplate — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "The Deep Bite: Acid-Etched Copperplate — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2023-019)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 112–115)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  },
  {
    "id": "dw-pr-020",
    "slug": "prints-monumental-counterform-master-proof-xx",
    "title": "Monumental Counterform (Master Proof XX)",
    "category": "Prints",
    "year": 2024,
    "medium": "Intaglio etching with drypoint accents on archival Velin d’Arches",
    "dimensionsImperial": "30 × 24 in",
    "dimensionsMetric": "76 × 61 cm",
    "edition": "Edition of 6 + 2 AP (Edition 1 available)",
    "framing": "Custom welded blackened steel frame with UV-filtering museum acrylic",
    "status": "Museum Loan",
    "location": "On Exhibition: The Material of Light, Chelsea",
    "series": "The Pressed Matrix Suite",
    "featured": false,
    "primaryImage": "/images/artworks/print-02.jpg",
    "images": [
      {
        "url": "/images/artworks/print-02.jpg",
        "caption": "Monumental Counterform (Master Proof XX) — Primary archival frontal capture (Dawson Wells Collection Archive)",
        "type": "frontal"
      },
      {
        "url": "/images/artworks/print-03.jpg",
        "caption": "Monumental Counterform (Master Proof XX) — Curatorial angle perspective",
        "type": "detail"
      },
      {
        "url": "/images/artworks/gallery-interior.jpg",
        "caption": "Monumental Counterform (Master Proof XX) — Installation view, Dawson Wells Gallery Flagship",
        "type": "installation"
      }
    ],
    "curatorialNote": "This work exemplifies Dawson Wells’s profound exploration of prints. Through strict reduction of chromatic interference, attention is directed entirely to the tactile density and geological truth of the surface. Executed in the artist’s East Tennessee studio and presented exclusively through Dawson Wells Gallery.",
    "formalAnalysis": "The composition is structured upon an intuitive spatial tension, where the relief matrix holds deep textural memory. Viewed under natural daylight, the work continuously shifts in acoustic and optical presence.",
    "exhibitionHistory": [
      "Dawson Wells: The Material of Light, Chelsea Flagship, New York (2024–2025)",
      "Art Basel Miami Beach, Galleries Sector (Booth F14, 2024)",
      "Frieze London, Focus Sector (2023)",
      "Inaugural Collection Presentation, Dawson Wells Gallery, New York (2022)"
    ],
    "provenance": [
      "Acquired directly from the artist studio",
      "Dawson Wells Gallery Archive, New York & London",
      "Authenticated by Dawson Wells Gallery Curatorial Directorate (Certificate No. DWG-2024-020)"
    ],
    "literature": [
      "Dawson Wells: Material and Silence, Monograph (Editions Dawson Wells, 2024, pp. 116–119)",
      "The New York Times Art Review, \"The Weight of the Solitary Mark\" (October 2024)",
      "Artforum International, \"Sensory Autonomy in Contemporary Practice\" (November 2023)"
    ]
  }
];

export interface CuratorialOverview {
  headline: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  techniques: string[];
  curatorialEssay: string;
}

export const MEDIUM_CURATORIAL_OVERVIEWS: Record<Artwork['category'], CuratorialOverview> = {
  Photography: {
    headline: "Architectural light, elemental atmospheric mass, and analog platinum-palladium precision.",
    description: "Dawson Wells's photographic practice operates as an ongoing dialogue between geological permanence and fleeting coastal luminosity. Employing large-format field view cameras and archival selenium-toned silver gelatin and platinum-palladium chemistry, each exposure records time as an acoustic presence rather than a frozen instant.",
    quote: "A photograph is not merely a record of light falling on matter; it is the physical artifact of sustained attention in an era of rapid dissolution.",
    quoteAuthor: "Dawson Wells, Curatorial Statement",
    techniques: [
      "8×10 Deardorff large-format field camera exposures",
      "Platinum-palladium emulsion hand-coated on Japanese gampi paper",
      "Archival selenium-toned silver gelatin chemistry",
      "Custom blackened walnut museum frames with Optium acrylic"
    ],
    curatorialEssay: "Across two decades of large-format field practice, Dawson Wells has rejected the instantaneous velocity of digital photography in favor of sustained analog exposure. Working with heavy wooden view cameras along the Atlantic seaboard and remote Appalachian escarpments, Wells treats the photographic plate not as a mirror of reality, but as a dense physical repository of atmospheric duration. The resulting silver gelatin and platinum impressions possess an extraordinary tonal depth, capturing subtle transitions of coastal sea mist and stone monolithic structures with architectural gravitas."
  },
  Paintings: {
    headline: "Monumental mineral fields, natural earth pigments, and raw linen surface tension.",
    description: "Wells’s paintings arise through a meditative accretion of raw mineral earth pigments, crushed limestone, slaked lime fresco, and rabbit-skin glue laid over heavy Belgian linen. Rejecting synthetic acrylics, the works absorb and reflect ambient light with the muted majesty of ancient stone architecture.",
    quote: "The canvas is a membrane between geological time and human consciousness. When chromatic noise is silenced, the true weight of earth speaks.",
    quoteAuthor: "Dawson Wells, Studio Notebooks",
    techniques: [
      "Hand-ground mineral pigments and natural ochres on raw linen",
      "Traditional slaked lime and marble dust fresco impasto",
      "Layered animal-glue and bone black distemper glazes",
      "Bespoke floater frames crafted in rift-sawn white oak"
    ],
    curatorialEssay: "The paintings of Dawson Wells represent an uncompromising commitment to mineral materiality. Sourcing raw earth pigments, calcite, bone black, and slaked lime from regional deposits, Wells applies layered impasto directly to heavy unprimed Belgian linen. The physical weight of the paint surface interacts dynamically with ambient natural light, shifting subtly from velvety acoustic absorption to luminous geological reflection throughout the day. Conceived for architectural spaces of contemplative silence, these monumental canvases operate beyond decorative gesture."
  },
  Drawings: {
    headline: "Intimate spatial coordinates, dense vine charcoal, and silverpoint tonal investigations.",
    description: "In his works on paper, Dawson Wells isolates the solitary gesture. Working in pure vine charcoal, powdered graphite, and Renaissance silverpoint on heavy 640gsm Fabriano and Arches rag papers, these compositions test the tensile threshold between absolute mark and total void.",
    quote: "Drawing is the most unsparing medium. There is nowhere for doubt to hide; every stroke registers the breath and heartbeat of its maker.",
    quoteAuthor: "Dawson Wells, East Tennessee Studio",
    techniques: [
      "Natural vine and compressed willow charcoal on 640gsm Fabriano",
      "Silverpoint stylus on bone-ash and rabbit-skin prepared ground",
      "Graded graphite washes and architectural carbon pigment",
      "Deckled-edge archival float mounting with museum spacing"
    ],
    curatorialEssay: "Dawson Wells's works on paper constitute the intellectual and philosophical core of his studio practice. Stripped of chromatic distraction, each drawing explores the kinetic resonance of natural vine charcoal and pure silverpoint upon dense, handmade cotton rag. Wells treats the paper surface as an acoustic chamber where geometric arcs, planar intersections, and graded graphite washes register the exact physical presence and cadence of the hand."
  },
  Ceramics: {
    headline: "Wood-fired anagama stoneware, folded tectonic volumes, and natural ash vitrification.",
    description: "The ceramic practice of Dawson Wells is rooted in prolonged wood-firing traditions. Thrown and hand-sculpted in coarse stoneware with high iron and feldspar inclusions, each sculptural vessel endures multi-day reduction firings where swirling fly-ash and flame paths glaze the clay body naturally without commercial glazes.",
    quote: "The kiln is an unpredictable collaborator. We surrender the work to the fire, accepting every flame scar and ash deposit as geological truth.",
    quoteAuthor: "Dawson Wells, Kiln Notes",
    techniques: [
      "Coarse iron-bearing stoneware with raw feldspathic inclusions",
      "Multi-day continuous wood firing in traditional anagama kilns",
      "Natural fly-ash vitrification and unglazed reduction flashing",
      "Asymmetrical hand-folded architectural vessel forms"
    ],
    curatorialEssay: "Rooted in the ancient philosophy of wood-fired ceramics, Dawson Wells's sculptural vessels emerge from continuous 96-hour kiln firings. Utilizing iron-rich native stonewares without synthetic glazes, the works achieve their rich earthy patinas, metallic flashings, and tectonic crusts exclusively through the deposition of swirling pine ash and reduction drafts. Each folded vessel stands as an unrepeatable monolithic monument to earth and fire."
  },
  Prints: {
    headline: "Monumental relief counterforms, woodblock blind-embossing, and archival intaglio plates.",
    description: "Wells's print editions investigate tactile relief, weight, and geometric counterform. Printed on a heavy 19th-century etching press using handmade Japanese Kozo and French cotton rag papers, these limited editions explore positive-negative spatial tensions and deep blind-embossed textures.",
    quote: "In printmaking, pressure transforms paper into a sculptural relief. The matrix leaves an indelible physical memory upon the fibers.",
    quoteAuthor: "Dawson Wells, Master Print Archive",
    techniques: [
      "Hand-carved cherry and basswood relief blocks on etching press",
      "Deep blind-embossed architectural counterforms on 300gsm rag",
      "Archival carbon-black oil-based relief inks",
      "Strict limited editions of 5 to 10 numbered and studio-embossed impressions"
    ],
    curatorialEssay: "Dawson Wells's limited master prints explore the sculptural power of relief printing. Hand-carved from cherry and dense pear wood blocks and pulled under extreme mechanical pressure on an archival bed press, the prints deboss deep geometric counterforms into dampened 300gsm French rag paper. With editions strictly limited to between five and ten impressions, these works bridge graphic discipline with spatial architecture."
  }
};

