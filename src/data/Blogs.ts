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
    reasons?: string[];
    grades?: {
      title: string;
      useFor: string;
      features: string[];
      coverage: string;
    }[];
    factors?: string[];
    tips?: string[];
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
  },
  {
    title: "5 Common Tile Installation Mistakes and How to Avoid Them",
    url: "https://www.epitailo.com/blogs/tile-installation-mistakes",
    metaDescription:
      "Learn the top mistakes contractors make when installing tiles—like wrong adhesive choice or poor surface prep—and how to fix them.",
    coverImage: "https://www.epitailo.com/assets/blogs/installation-mistakes.jpg",
    author: "Team Epitailo",
    date: "2025-06-07",
    readTime: "4 min read",
    content: {
      introduction:
        "Installing tiles may seem simple, but even experienced professionals can fall prey to common mistakes. At Epitailo, we educate and support the people who use our products.",
      tips: [
        "❌ Skipping Surface Preparation – Always clean, level, and dry the substrate. Remove oil, debris, or old paint. Use primer if needed.",
        "❌ Using the Wrong Adhesive – Match ET 1 to ET 4 based on tile type and surface. Refer to product guides.",
        "❌ Incorrect Mixing Ratios – Mix exactly as per label using a mechanical mixer. Slake and remix.",
        "❌ Ignoring Pot Life – Use adhesive within 1.5–2 hours. Discard expired mix.",
        "❌ Rushing the Process – Allow adequate curing before grouting. Patience saves rework."
      ],
      conclusion:
        "Tiling is both an art and a science. Avoid common pitfalls by using the right Epitailo adhesives and techniques. Build with pride—only with Epitailo."
    }
  },
  {
    title: "Block Jointing Mortar vs Traditional Cement Mortar – Which is Better?",
    url: "https://www.epitailo.com/blogs/block-jointing-vs-cement",
    metaDescription:
      "Compare traditional cement mortar with Epitailo’s block jointing mortar. Learn how thin-layer application, better bonding, and crack resistance save time and cost.",
    coverImage: "https://www.epitailo.com/assets/blogs/block-mortar-vs-cement.jpg",
    author: "Team Epitailo",
    date: "2025-06-14",
    readTime: "5 min read",
    content: {
      introduction:
        "In modern construction, speed, strength, and efficiency are key. While traditional cement mortar has been around for ages, Epitailo’s Block Jointing Mortar is revolutionizing AAC blockwork.",
      reasons: [
        "✅ Thin Layer (2–3 mm) – Less material, lighter structure, lower shrinkage.",
        "✅ Pre-Mixed Formula – Just add water. No on-site measurement hassle.",
        "✅ Excellent Adhesion – Polymer-enhanced grip on AAC blocks.",
        "✅ Crack Resistant – Resists shrinkage with advanced additives.",
        "✅ Cost Efficient – Faster work, less material, fewer errors."
      ],
      conclusion:
        "Traditional mortar is outpaced by Epitailo’s Block Jointing Mortar in every category—from strength to savings. Upgrade your masonry with confidence."
    }
  },
  {
    title: "Understanding Epitailo Waterproofing Range",
    url: "https://www.epitailo.com/blogs/waterproofing-range",
    metaDescription:
      "Explore Epitailo’s waterproofing solutions and learn which product is best suited for terrace, bathroom, water tanks, and more.",
    coverImage: "https://www.epitailo.com/assets/blogs/waterproofing.jpg",
    author: "Team Epitailo",
    date: "2025-06-21",
    readTime: "6 min read",
    content: {
      introduction:
        "Waterproofing is a critical step in ensuring the long-term durability of any structure. Epitailo offers a comprehensive range of waterproofing products designed for specific applications.",
      grades: [
        {
          title: "✅ Epitailo PU Coat",
          useFor: "Terraces and roofs",
          features: ["UV-resistant", "Flexible membrane", "Long-lasting"],
          coverage: "25–30 sq. ft per liter in 2 coats"
        },
        {
          title: "✅ Epitailo AquaSeal",
          useFor: "Bathrooms and kitchens",
          features: ["2K cementitious", "Breathable", "Crack-bridging"],
          coverage: "35–40 sq. ft per 20 kg"
        },
        {
          title: "✅ Epitailo TankGuard",
          useFor: "Water tanks (potable and non-potable)",
          features: ["Non-toxic", "Seals micro-cracks", "Durable under pressure"],
          coverage: "20–25 sq. ft per kg in 2 coats"
        }
      ],
      tips: [
        "Ensure surface is clean, free from oil and dust.",
        "Apply primer if required before waterproofing.",
        "Allow each coat to dry properly before the next."
      ],
      conclusion:
        "With the Epitailo Waterproofing range, protect your spaces from leakage, seepage, and water damage—efficiently and economically."
    }
  },
  {
    title: "How to Repair Cracks in Walls Using Epitailo Crack Fillers",
    url: "https://www.epitailo.com/blogs/wall-crack-repair",
    metaDescription:
      "Discover a step-by-step guide to repairing wall cracks using Epitailo Crack Filler products for long-lasting results.",
    coverImage: "https://www.epitailo.com/assets/blogs/crack-filler.jpg",
    author: "Team Epitailo",
    date: "2025-06-28",
    readTime: "4 min read",
    content: {
      introduction:
        "Wall cracks are a common issue, but they don't have to be permanent. With Epitailo Crack Fillers, you can restore strength and appearance easily.",
      reasons: [
        "Shrinkage cracks due to poor plastering",
        "Thermal movement in concrete",
        "Aging or weather-related expansion/contraction"
      ],
      tips: [
        "Open the crack slightly using a chisel and clean it thoroughly.",
        "Apply Epitailo Crack Filler paste smoothly using a putty knife.",
        "Allow proper curing before painting."
      ],
      conclusion:
        "Say goodbye to unsightly wall cracks. With Epitailo’s crack fillers, restoration is quick, easy, and long-lasting."
    }
  }
];