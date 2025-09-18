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
            "Precision dosing with load cells or flow meters"
          ],
          videoPlaceholder: true,
          videoSrc: "/site-images/Linear%20Filling%20(Food%20&%20Non%E2%80%91Food).mp4"
        }
      ]
    }
  },
  {
    slug: "installation-commissioning",
    title: "Installation & Commissioning",
    description: "Professional installation, commissioning, and validation of packaging and processing equipment to ensure optimal performance and compliance.",
    highlights: [
      "Factory acceptance testing (FAT) and site acceptance testing (SAT)",
      "Mechanical installation and alignment",
      "Electrical and controls integration",
      "Operational qualification (OQ) and performance qualification (PQ)",
      "Staff training and handover"
    ],
    images: [
      "/site-images/installation 1.jpg",
      "/site-images/installation 2.jpg",
      "/site-images/installation 3.jpg"
    ],
    category: "Technical Services",
    details: {
      overview: "Our expert team ensures your equipment is installed correctly, commissioned to specification, and fully validated for your production environment. We follow industry best practices and regulatory requirements to deliver turnkey solutions that meet your operational needs.",
      applications: [
        "New equipment installation and setup",
        "Equipment relocation and reconfiguration",
        "Process validation and qualification",
        "Performance testing and optimization",
        "Documentation and compliance"
      ],
      benefits: [
        "Reduced downtime during installation",
        "Faster time-to-production",
        "Optimal equipment performance",
        "Regulatory compliance",
        "Knowledge transfer to your team"
      ],
      technicalSpecs: [
        "GAMP 5 compliant validation",
        "IQ/OQ/PQ documentation",
        "3D laser alignment for precision installation",
        "Full electrical and safety testing",
        "Comprehensive training programs"
      ],
      subSections: [
        {
          title: "Our Installation Process",
          description: "Streamlined installation process to minimize disruption and ensure quality.",
          highlights: [
            "Pre-installation site assessment",
            "Equipment receiving and inspection",
            "Mechanical installation and alignment",
            "Utility connections and verifications"
          ],
          image: "/site-images/installation 1.jpg"
        },
        {
          title: "Why Choose Our Services",
          description: "Expertise and experience you can trust for your installation and commissioning needs.",
          highlights: [
            "Certified technicians with extensive experience",
            "Comprehensive documentation and reporting",
            "Minimal production disruption",
            "Ongoing support and maintenance"
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
    slug: "instrumentation-automation",
    title: "Instrumentation & Automation",
    description: "Comprehensive automation and control solutions for industrial processes, including SCADA systems, PLC programming, and smart instrumentation.",
    highlights: [
      "End-to-end automation solutions for industrial processes",
      "SCADA system design and implementation",
      "PLC and HMI programming and integration",
      "Smart instrumentation and control systems",
      "24/7 maintenance and technical support"
    ],
    images: [
      "/site-images/control-system 1.jpg",
      "/site-images/control-system 2.jpg",
      "/site-images/control-system 3.jpg"
    ],
    category: "Technical Services",
    details: {
      overview: "Our Instrumentation & Automation services provide cutting-edge solutions to optimize your industrial processes. We design, implement, and maintain automation systems that enhance efficiency, safety, and productivity across various industries.",
      applications: [
        "Process automation and control systems",
        "SCADA and HMI system implementation",
        "PLC programming and integration",
        "Instrument calibration and maintenance",
        "Industrial networking and communication systems"
      ],
      benefits: [
        "Improved process efficiency and productivity",
        "Enhanced system reliability and uptime",
        "Reduced operational costs",
        "Real-time monitoring and control",
        "Scalable and future-proof solutions"
      ],
      technicalSpecs: [
        "PLC Systems: Allen-Bradley, Siemens, Schneider Electric",
        "SCADA Platforms: Ignition, WinCC, FactoryTalk, Wonderware",
        "Communication Protocols: Modbus, Profibus, Ethernet/IP, OPC UA",
        "HMI/MMI Development: FactoryTalk View, WinCC, Ignition, Citect",
        "Safety Systems: SIL-2/3 certified solutions"
      ],
      subSections: [
        {
          title: "Process Control Systems",
          description: "Customized process control solutions tailored to your specific industrial requirements.",
          highlights: [
            "DCS and PLC-based control systems",
            "Batch process control solutions",
            "Advanced process control implementation",
            "System migration and upgrades"
          ],
          image: "/site-images/control-system 1.jpg"
        },
        {
          title: "SCADA & HMI Solutions",
          description: "State-of-the-art SCADA and HMI systems for real-time monitoring and control.",
          highlights: [
            "Custom SCADA application development",
            "Mobile HMI solutions",
            "Alarm management systems",
            "Historical data collection and reporting"
          ],
          image: "/site-images/control-system 2.jpg"
        },
        {
          title: "Industrial Networking",
          description: "Secure and reliable industrial networking solutions for seamless connectivity.",
          highlights: [
            "Industrial Ethernet networks",
            "Wireless communication solutions",
            "Network security implementation",
            "Remote monitoring and maintenance"
          ],
          image: "/site-images/control-system 3.jpg"
        },
        {
          title: "System Integration",
          description: "Seamless integration of new and existing systems for optimal performance.",
          highlights: [
            "Legacy system integration",
            "Multi-vendor system connectivity",
            "MES/ERP system integration",
            "Custom API development"
          ],
          image: "/site-images/control-system 1.jpg"
        }
      ]
    }
  },
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
