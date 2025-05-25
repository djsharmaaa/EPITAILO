export interface BlogItem {
  title: string;
  url: string;
  metaDescription: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  content: {
    introduction: string;
    reasons: string[];
    grades: {
      title: string;
      useFor: string;
      features: string[];
      coverage: string;
    }[];
    factors: string[];
    tips: string[];
    conclusion: string;
  };
}

export const blogs: BlogItem[] = [
  {
    title: "How to Choose the Right Tile Adhesive for Your Flooring Project",
    url: "https://www.trubuild.in/wp-content/uploads/2024/11/OCT-Trubuild-Tile-Adhes-blog-banner.png",
    metaDescription:
      "Discover how to select the best tile adhesive for floor or wall installations based on tile size, surface, and location.",
    coverImage: "https://www.trubuild.in/wp-content/uploads/2024/11/OCT-Trubuild-Tile-Adhes-blog-banner.png",
    author: "Team Epitailo",
    date: "2025-06-01",
    readTime: "5 min read",
    content: {
      introduction:
        "Choosing the right tile adhesive isn’t just a technical decision—it’s a commitment to durability and peace of mind.",
      reasons: [
        "Tile de-bonding",
        "Hollow sounds under flooring",
        "Increased maintenance and repair costs"
      ],
      grades: [
        {
          title: "✅ ET 1 – Small Sized Floor Tile Adhesive",
          useFor: "Small-format tiles on floors",
          features: ["Ready to use", "Excellent bonding", "Saves labor"],
          coverage: "30–40 sq. ft per 20 kg @ 6mm"
        },
        {
          title: "✅ ET 2 – Medium Sized Wall Tile Adhesive",
          useFor: "Wall installations in kitchens, bathrooms",
          features: ["Self-curing", "Rapid setting", "Crack-resistant"],
          coverage: "30–40 sq. ft per 20 kg @ 6mm"
        },
        {
          title: "✅ ET 3 – Large Format & 4x8 Wall Tile Adhesive",
          useFor: "Large vitrified tiles, commercial projects",
          features: ["Slip-resistant", "Multipurpose bonding"],
          coverage: "30–40 sq. ft per 20 kg @ 6mm"
        },
        {
          title: "✅ ET 4 – Heavy Duty Stone Adhesive",
          useFor: "Indoor & outdoor stone or heavy tile installations",
          features: ["High compressive strength", "Water resistance", "Durable in all climates"],
          coverage: "30–40 sq. ft per 20 kg @ 6mm"
        }
      ],
      factors: [
        "Tile Size & Weight – Use ET 3 or ET 4 for heavier/larger tiles.",
        "Surface Type – Vertical walls need sag-resistant adhesives.",
        "Location – Wet/outdoor areas require flexible adhesives like ET 4."
      ],
      tips: [
        "Follow the mixing ratio on packaging.",
        "Ensure the substrate is clean and level.",
        "Use a notch trowel to spread adhesive.",
        "Do not exceed the pot life (1.5–2 hrs)."
      ],
      conclusion:
        "With Epitailo, choosing the right tile adhesive becomes simple. Fix it. Forget it. Choose Epitailo."
    }
  }
];