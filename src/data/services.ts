export interface Service {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  images: string[];
  category: string;
  details: {
    overview: string;
    applications: string[];
    benefits: string[];
    technicalSpecs?: string[];
  };
}

export const services: Service[] = [
  {
    slug: "solar-pv",
    title: "Solar PV",
    description: "Turning sunlight into everyday power. From rural homes to industrial plants, our Solar PV solutions deliver affordable and sustainable energy where it's needed most.",
    highlights: [
      "Design and construction of grid-tied and off-grid solar PV solutions",
      "Design and installation of solar water pumping systems",
      "Feasibility studies and engineering design for solar PV, wind, and small hydro power generation plants",
      "Installation and commissioning of roof-top/ground mounted solar PV, solar water pumping and solar water heating systems",
      "Grid integration of Variable Renewable Energy (VRE)",
      "Monitoring systems for Renewable Energy power generation projects"
    ],
    images: [
      "/services/solar pv.jpg",
      "/services/solar pv 2.jpg",
      "/services/solar pv 3.jpg"
    ],
    category: "Solar Technology",
    details: {
      overview: "From rural homes to industrial plants, our Solar PV solutions deliver affordable and sustainable energy where it's needed most. Every system is designed around the client's needs — no one-size-fits-all. With solar, you reduce costs, gain energy security, and invest in a cleaner future.",
      applications: [
        "Rural homes and communities",
        "Industrial plants and facilities",
        "Commercial buildings",
        "Agricultural operations",
        "Remote installations"
      ],
      benefits: [
        "Reduced electricity costs",
        "Energy independence",
        "Environmental sustainability",
        "Long-term investment returns",
        "Reliable power supply"
      ],
      technicalSpecs: [
        "Engineering studies and feasibility assessments",
        "Custom system sizing",
        "Grid-tied and off-grid configurations",
        "Advanced monitoring systems",
        "25+ year performance warranties"
      ]
    }
  },
  {
    slug: "electrical-power",
    title: "Electrical & Power",
    description: "Engineering the backbone of energy. Electricity relies on infrastructure that is both strong and adaptable. We design and construct systems that make power reliable, safe, and prepared for growth.",
    highlights: [
      "Design and construction of 132/66/33/11kV primary substations",
      "Design and construction of 132kV, 66kV, 33kV, and 11kV metering substations",
      "Design and construction of 33/11kV primary substation and 33/11kV/.433kV secondary substations",
      "Design and construction of high, medium and low voltage power lines and substations",
      "Power system studies - grid connection studies, dynamic and static stability analysis of Variable Renewable Energy (VRE) and other power generation technologies",
      "Installation of battery back-up systems, rectifiers, and power factor correction equipment such as capacitors",
      "Maintenance services of substation equipment like transformer oil filtration and other switchgear"
    ],
    images: [
      "/services/electrical/Electrical & Power1.jpg",
      "/services/electrical/Electrical & Power 2.jpg",
      "/services/electrical/Electrical & Power 3.jpg"
    ],
    category: "Power Systems",
    details: {
      overview: "Electricity relies on infrastructure that is both strong and adaptable. We design and construct systems that make power reliable, safe, and prepared for growth. We build power systems that last, supporting communities and industries for decades.",
      applications: [
        "High-voltage substations",
        "Power transmission and distribution",
        "Grid connection projects",
        "Industrial power systems",
        "Backup power solutions"
      ],
      benefits: [
        "Reliable power infrastructure",
        "Enhanced grid stability",
        "Reduced power outages",
        "Scalable for future growth",
        "Improved power quality"
      ],
      technicalSpecs: [
        "Grid connection and stability studies",
        "Power factor correction",
        "Substation maintenance programs",
        "Protection system design",
        "Load flow analysis"
      ]
    }
  },
  {
    slug: "water-solutions",
    title: "Water",
    description: "Reliable solutions for the world's most vital resource. Water access drives progress. Our solutions ensure communities, farms, and industries have dependable supply systems powered by efficient energy.",
    highlights: [
      "Solar-powered borehole pumping",
      "Irrigation systems for agriculture",
      "Solar and electric water heating",
      "Borehole drilling and equipping"
    ],
    images: [
      "/services/water/water 1.jpg",
      "/services/water/water 2.jpg",
      "/services/water/water 3.jpg"
    ],
    category: "Water Systems",
    details: {
      overview: "Water access drives progress. Our solutions ensure communities, farms, and industries have dependable supply systems powered by efficient energy. We combine sustainable energy with water engineering to deliver systems that improve livelihoods and cut long-term costs.",
      applications: [
        "Community water supply",
        "Agricultural irrigation",
        "Industrial water systems",
        "Water treatment facilities",
        "Remote water access"
      ],
      benefits: [
        "Reliable water access",
        "Reduced operational costs",
        "Sustainable energy integration",
        "Improved agricultural productivity",
        "Enhanced community health"
      ],
      technicalSpecs: [
        "Water purification and treatment",
        "Pump sizing and selection",
        "Solar integration design",
        "Water quality monitoring",
        "System automation"
      ]
    }
  },
  {
    slug: "controls-automation",
    title: "Controls & Automation",
    description: "Smarter systems for greater efficiency. Automation helps operations run seamlessly, safely, and at lower cost. We create systems that provide real-time control and monitoring for critical processes.",
    highlights: [
      "PLC-based controls for pumping stations",
      "Industrial process automation",
      "Remote monitoring dashboards",
      "Integration with existing systems"
    ],
    images: [
      "/services/controllsandautomation/Controls & Automation 1.jpg",
      "/services/controllsandautomation/Controls & Automation 2.jpg"
    ],
    category: "Automation",
    details: {
      overview: "Automation helps operations run seamlessly, safely, and at lower cost. We create systems that provide real-time control and monitoring for critical processes. With automation in place, downtime reduces, precision improves, and efficiency becomes standard.",
      applications: [
        "Pumping station control",
        "Industrial process automation",
        "Building management systems",
        "Remote monitoring solutions",
        "SCADA systems"
      ],
      benefits: [
        "Reduced downtime",
        "Improved precision",
        "Enhanced efficiency",
        "Real-time monitoring",
        "Lower operational costs"
      ],
      technicalSpecs: [
        "PLC programming and configuration",
        "HMI development",
        "Communication protocols",
        "Data logging and analysis",
        "Alarm and notification systems"
      ]
    }
  },
  {
    slug: "floating-solar",
    title: "Floating Solar",
    description: "Innovation on water. When land is scarce, water offers untapped potential. Floating solar systems place PV modules directly on reservoirs, hydropower dams, and near-shore waters.",
    highlights: [
      "Hydroelastic membranes that adapt to waves",
      "Natural cooling from water improves efficiency",
      "Scalable floaters (50–75 m) anchored side by side",
      "Proven durability in high wind and wave conditions"
    ],
    images: [
      "/hero/200128-Temp-Website-picture-1 (1).png",
      "/hero/WhatsApp Image 2025-08-17 at 21.33.43.jpeg",
      "/hero/image.png"
    ],
    category: "Floating Technology",
    details: {
      overview: "When land is scarce, water offers untapped potential. Floating solar systems place PV modules directly on reservoirs, hydropower dams, and near-shore waters — unlocking energy where land-based systems cannot. Floating solar increases generation, saves land, and reduces water evaporation, making it one of the most promising frontiers in renewable energy.",
      applications: [
        "Reservoirs and dams",
        "Industrial water bodies",
        "Agricultural ponds",
        "Wastewater treatment facilities",
        "Coastal installations"
      ],
      benefits: [
        "Higher energy generation efficiency",
        "Land conservation",
        "Reduced water evaporation",
        "Lower maintenance costs",
        "Scalable deployment"
      ],
      technicalSpecs: [
        "Wave-adaptive membrane technology",
        "Modular 50-75m floater sections",
        "High wind resistance design",
        "Anchoring and mooring systems",
        "Marine-grade materials"
      ]
    }
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServiceCategories = (): string[] => {
  return Array.from(new Set(services.map(service => service.category)));
};