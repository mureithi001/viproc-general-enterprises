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
    subSections?: ({
      title: string;
      description: string;
      highlights: string[];
      videoPlaceholder?: boolean;
      videoSrc?: string;
      image?: string;
      images?: string[];
    })[];
  };
}

export const services: Service[] = [
  {
    slug: "supply-of-end-of-line-packaging-machines",
    title: "Supply of End of Line Packaging Machines",
    description: "Complete end‑of‑line solutions including case erectors/packers, shrink wrappers & tunnels, conveyors, palletizers, and integrated coding & labeling.",
    highlights: [
      "Case erectors, case packers, sealers, and palletizers.",
      "Conveyors, accumulation tables, and sorting systems.",
      "Shrink wrappers, tunnels, and stretch wrapping systems.",
      "Coding, labeling, and inline inspection integration.",
      "HMI/PLC integration with safety interlocks and e‑stops.",
      "Configured for your SKUs, formats, and throughput targets."
    ],
    images: [
      "/site-images/End-of-Line Equipment 1.jpg",
      "/site-images/End-of-Line Equipment 2.jpg"
    ],
    category: "Equipment Solutions",
    details: {
      overview: "We design and deploy complete end‑of‑line systems tailored to your product mix and performance goals. From case erection and packing to wrapping and palletizing, we integrate every component — with controls, safety, and inspection — to deliver a reliable, high‑throughput finishing area.",
      applications: [
        "Carton case erection, packing, sealing, and labeling",
        "Bottle/can crate packing and tray packing",
        "Shrink wrapping (bundles and cases) with tunnels",
        "Conveying, accumulation, merging, and sorting",
        "Palletizing/depalletizing and stretch wrapping",
        "Inline coding, labeling, and vision/inspection"
      ],
      benefits: [
        "Increase line throughput and overall equipment effectiveness (OEE)",
        "Reduce manual handling and associated labor costs",
        "Improve pack quality, consistency, and product safety",
        "Scalable, modular systems that grow with your demand",
        "Seamless integration with existing upstream equipment"
      ],
      technicalSpecs: [
        "Throughput: matched to upstream (typ. 30–300+ packs/min)",
        "Carton formats: American case, RSC, wrap‑around, trays",
        "Conveyor types: modular belt, roller, chain, mat‑top",
        "Safety: interlocked guards, e‑stops, SIL‑rated devices",
        "Controls: PLC/HMI integration, recipe & format management",
        "Options: print & apply labeling, vision inspection, reject units"
      ],
      subSections: [
        {
          title: "Linear Weigh Filler (Snacks, Rice, Lentils)",
          description: "Compact linear weighers designed for granular and particulate products. Optimized hoppers and feeder control ensure consistent accuracy for snacks, cereals, rice, pulses, and lentils.",
          highlights: [
            "2–4 head linear weighers for mid‑range speeds",
            "Recipe memory for quick product changeovers",
            "Food‑grade contact parts, easy washdown",
            "Integration with VFFS/HFFS baggers and conveyors"
          ],
          videoPlaceholder: true,
          videoSrc: "/site-images/Linear Weigh Filler.mp4"
        },
        {
          title: "Case Erector Machines (Secondary Packaging)",
          description: "Automatic case erectors for forming American cases (RSC) and wrap‑around cartons. Ensures square, consistent cases ready for packing and sealing.",
          highlights: [
            "High‑reliability vacuum pick and forming",
            "Hot‑melt or tape sealing options",
            "Quick changeover between case sizes",
            "Integration with case packers and sealers"
          ],
          videoPlaceholder: true,
          videoSrc: "/site-images/Case Erector Machines.mp4"
        },
        {
          title: "CAN Filling, Seamer & Shrink Wrap",
          description: "Integrated lines for CAN filling and seaming, followed by secondary packaging with shrink wrapping for retail or bulk bundles.",
          highlights: [
            "Volumetric or flow‑meter filling options",
            "Seamers compliant with industry standards",
            "Bundle shrink wrapping with tunnels",
            "Inline date coding and label application"
          ],
          videoPlaceholder: true,
          videoSrc: "/site-images/CAN Filling.mp4"
        },
        {
          title: "Robopack Case Packing (RGB, PET, Tetra Pak)",
          description: "Robotic and mechanical case packers for returnable glass bottles (RGB), PET, and Tetra Pak formats. Gentle handling preserves product integrity.",
          highlights: [
            "Pick‑and‑place or wrap‑around configurations",
            "Format parts for multi‑SKU operations",
            "Ergonomic HMI and fault diagnostics",
            "Compatible with crate/tray/case layouts"
          ],
          videoPlaceholder: true,
          videoSrc: "/site-images/Robopack Case Packing.mp4"
        },
        {
          title: "Linear Filling (Food & Non‑Food)",
          description: "Linear piston or gear pump fillers suitable for viscous and free‑flowing products across food, personal care, and household segments.",
          highlights: [
            "Multi‑head configurations for higher throughput",
            "No‑drip/no‑bottle‑no‑fill interlocks",
            "CIP‑friendly manifolds and valves",
            "Integration with cappers, labelers, and conveyors"
          ],
          videoPlaceholder: true,
          videoSrc: "/site-images/Linear Filling (Food & Non‑Food).mp4"
        }
      ]
    }
  },
  {
    slug: "installation-commissioning",
    title: "Installation & Commissioning",
    description: "End-to-end installation and commissioning services ensuring your equipment operates at peak performance from day one.",
    highlights: [
      "Expert installation by certified technicians following manufacturer specifications",
      "Comprehensive testing and system calibration for optimal performance",
      "Minimal downtime with efficient project planning and execution",
      "Full operator training and documentation handover"
    ],
    images: [
      "/site-images/installation 1.jpg",
      "/site-images/installation 2.jpg",
      "/site-images/installation 3.jpg"
    ],
    category: "Technical Services",
    details: {
      overview: "Our professional installation and commissioning services ensure your equipment is set up correctly, calibrated precisely, and operating at peak efficiency. We manage the entire process from site preparation to final handover, minimizing disruption to your operations.",
      applications: [
        "New production line installation and commissioning",
        "Equipment upgrades and retrofits",
        "Factory relocations and line reconfigurations",
        "Control system integration and optimization"
      ],
      benefits: [
        "Reduced downtime with efficient project management",
        "Optimal equipment performance from day one",
        "Compliance with all safety and regulatory standards",
        "Comprehensive operator training and documentation",
        "Long-term reliability through proper installation"
      ],
      subSections: [
        {
          title: "Our Installation Process",
          description: "A systematic approach to ensure flawless installation and commissioning of your equipment.",
          highlights: [
            "Pre-installation site assessment and preparation",
            "Professional equipment assembly and alignment",
            "Precision calibration and performance testing",
            "Safety verification and compliance checks",
            "Comprehensive operator training and documentation"
          ],
          image: "/site-images/installation 1.jpg"
        },
        {
          title: "Why Choose Our Services",
          description: "Partner with experts who understand the critical nature of proper equipment installation.",
          highlights: [
            "Certified technicians with extensive experience",
            "Minimal disruption to your operations",
            "Comprehensive documentation and reporting",
            "Ongoing support and maintenance options"
          ],
          images: [
            "/site-images/installation 2.jpg",
            "/site-images/installation 3.jpg"
          ]
        }
      ]
    }
  },
  {
    slug: "spare-parts-support",
    title: "Spare Parts & Support",
    description: "Providing reliable aftermarket support and rapid delivery of genuine spare parts to keep your operations running smoothly.",
    highlights: [
      "Extensive inventory of genuine OEM spare parts.",
      "Fast and reliable delivery network across East Africa.",
      "Dedicated aftermarket support for troubleshooting.",
      "Preventive maintenance kits and custom schedules."
    ],
    images: [
      "/site-images/Spare Parts & Support 1.jpg",
      "/site-images/Spare Parts & Support 2.jpg"
    ],
    category: "Support Services",
    details: {
      overview: "Downtime is not an option. Our commitment to your success endures long after installation. We maintain a robust inventory of spare parts and a responsive support team to ensure your equipment's performance and longevity.",
      applications: [
        "Emergency parts replacement and dispatch",
        "Scheduled maintenance parts and kits supply",
        "Inventory management consulting for critical spares",
        "Remote diagnostics and expert technical support"
      ],
      benefits: [
        "Maximize machine uptime and operational productivity",
        "Extend the lifespan and reliability of your equipment",
        "Reduce the risk of costly, unplanned shutdowns",
        "Direct access to expert technical assistance when you need it"
      ]
    }
  },
  {
    slug: "consulting-training",
    title: "Consulting & Training",
    description: "Leverage our industry expertise to optimize your processes and empower your team with the skills needed to excel.",
    highlights: [
      "In-depth process optimization and workflow analysis.",
      "Customized operator training for new and existing equipment.",
      "Guidance on maintenance best practices and safety protocols.",
      "Feasibility studies and strategic planning for new lines."
    ],
    images: [
      "/site-images/Consulting & Training.jpg"
    ],
    category: "Advisory Services",
    details: {
      overview: "We are more than a supplier; we are your strategic partner. Our consulting services help you identify key opportunities for improvement, while our training programs empower your staff to operate machinery safely and efficiently, maximizing your ROI.",
      applications: [
        "Production line efficiency and waste reduction audits",
        "Tailored operator and maintenance training programs",
        "Workplace safety and regulatory compliance workshops",
        "Consultation for new product packaging and line design"
      ],
      benefits: [
        "Improve operational efficiency and reduce material waste",
        "Develop a skilled, confident, and empowered workforce",
        "Enhance workplace safety and ensure regulatory compliance",
        "Make informed, strategic decisions for future investments"
      ]
    }
  }
];
