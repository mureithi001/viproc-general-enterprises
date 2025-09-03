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
    slug: "end-of-line-equipment",
    title: "End-of-Line Equipment",
    description: "Supplying world-class packaging and processing machinery from leading global manufacturers to optimize your production line.",
    highlights: [
      "Sourced from top-tier manufacturers in Italy, India, & China.",
      "Custom solutions for food & beverage, pharmaceuticals, and more.",
      "Advanced machinery to boost productivity and ensure quality.",
      "Equipment tailored to meet your specific operational needs."
    ],
    images: [
      "/site-images/End-of-Line Equipment 1.jpg",
      "/site-images/End-of-Line Equipment 2.jpg"
    ],
    category: "Equipment Solutions",
    details: {
      overview: "Our core mission is to equip your business with high-performance end-of-line machinery. We partner with global leaders to provide the latest in packaging technology, ensuring your production is efficient, safe, and delivers market-ready products.",
      applications: [
        "Case Packers & Erectors",
        "Palletizers & Depalletizers",
        "Shrink Wrappers & Tunnels",
        "Conveyor & Sorting Systems",
        "Industrial Labeling & Coding"
      ],
      benefits: [
        "Accelerate production speed and throughput",
        "Reduce labor costs and manual handling errors",
        "Enhance product safety and packaging consistency",
        "Gain a competitive edge with the latest global technology"
      ]
    }
  },
  {
    slug: "installation-commissioning",
    title: "Installation & Commissioning",
    description: "Our expert technicians ensure your equipment is installed, calibrated, and commissioned for peak performance from day one.",
    highlights: [
      "Professional installation by certified and experienced engineers.",
      "Seamless integration with your existing production lines.",
      "Comprehensive testing and performance calibration.",
      "Includes on-site handover and initial operator training."
    ],
    images: [
      "/site-images/Installation & Commissioning 1.jpg",
      "/site-images/Installation & Commissioning 2.jpg"
    ],
    category: "Technical Services",
    details: {
      overview: "A successful project extends beyond delivery. Our team manages the complete installation and commissioning process, ensuring your new machinery integrates smoothly into your workflow and operates at maximum efficiency from the start.",
      applications: [
        "New production line setup",
        "Single machine or modular system installation",
        "Factory relocation and equipment re-commissioning",
        "Control system upgrades and integration"
      ],
      benefits: [
        "Minimize downtime during the setup phase",
        "Guarantee performance that meets manufacturer specifications",
        "Adherence to the highest safety and compliance standards",
        "Achieve a faster return on your investment"
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
