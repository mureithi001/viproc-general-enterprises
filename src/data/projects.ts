export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  capacity: string;
  description: string;
  highlights: string[];
  images: string[];
  additionalDetails?: string;
}

export const projects: Project[] = [
  {
    id: 'bigtree-beverages',
    title: 'BigTree Beverages Ltd - Preform Tipper Machine',
    location: 'Lusaka, Zambia',
    year: '2025',
    capacity: 'High-Capacity Handling',
    description: 'Specialized installation of a Preform Tipper Machine from M.Tanner A.G, designed for high-efficiency handling of beverage preforms. The system was integrated with existing production lines to optimize workflow and increase throughput.',
    highlights: [
      'M.Tanner A.G Equipment',
      'High-Capacity Preform Handling',
      'Seamless Line Integration',
      'Efficiency Optimization'
    ],
    images: [
      '/site-images/BigTree Beverages Ltd 1.jpeg',
      '/site-images/BigTree Beverages Ltd 2.jpeg',
      '/site-images/BigTree Beverages Ltd 3.jpeg',
      '/site-images/BigTree Beverages Ltd 4.jpeg',
      '/site-images/BigTree Beverages Ltd 5.jpeg'
    ],
    additionalDetails: 'The Preform Tipper Machine was specifically designed to handle the high-volume requirements of BigTree Beverages Ltd, ensuring minimal downtime and maximum efficiency in their production line. Our team provided end-to-end support from installation to operator training.'
  },
  {
    id: 'botachem-limited',
    title: 'Botachem Limited - Linear Filler Equipment',
    location: 'Nairobi, Kenya',
    year: '2023',
    capacity: '6 SKU Capacity',
    description: 'Installation and commissioning of linear filler equipment for agrochemical products, designed to handle multiple SKUs with precision and efficiency.',
    highlights: [
      'Linear Filler Equipment',
      'Agrochemical Application',
      '6 SKU Configuration',
      'Precision Filling Technology',
      'End-to-End Commissioning'
    ],
    images: [
      '/site-images/Botachem Limited 1.jpeg',
      '/site-images/Botachem Limited 2.jpeg',
      '/site-images/Botachem Limited 3.jpeg',
      '/site-images/Botachem Limited 4.jpeg',
      '/site-images/Botachem Limited 5.jpeg'
    ],
    additionalDetails: 'The system was specifically configured to handle the unique requirements of agrochemical products, ensuring accurate filling and sealing while maintaining product integrity.'
  },
  {
    id: 'alpha-clean-food',
    title: 'Alpha Clean Food - Edible Oil & Tomato Paste Lines',
    location: 'Bujumbura, Burundi',
    year: '2024',
    capacity: 'Multiple Production Lines',
    description: 'Complete installation of edible oil and tomato paste production lines, including equipment setup, calibration, and operator training.',
    highlights: [
      'Edible Oil Production Line',
      'Tomato Paste Processing Line',
      'Full Installation & Commissioning',
      'Operator Training',
      'Quality Control Systems'
    ],
    images: [
      '/site-images/Alpha Clean Food 1.jpeg',
      '/site-images/Alpha Clean Food 2.jpeg',
      '/site-images/Alpha Clean Food 3.jpeg',
      '/site-images/Alpha Clean Food 4.jpeg',
      '/site-images/Alpha Clean Food 5.jpeg',
      '/site-images/Alpha Clean Food 6.jpeg',
      '/site-images/Alpha Clean Food 7.jpeg'
    ],
    additionalDetails: 'The installation included state-of-the-art processing equipment for both edible oil and tomato paste production, with a focus on food safety and production efficiency.'
  },
  {
    id: 'nyanza-bottlers',
    title: 'Nyanza Bottlers - Krones Line Electrical Audit',
    location: 'Mwanza, Tanzania',
    year: '2024',
    capacity: 'Full Production Line Audit',
    description: 'Comprehensive electrical audit of the Krones production line, including power quality analysis, equipment assessment, and efficiency optimization recommendations.',
    highlights: [
      'Krones Production Line Audit',
      'Electrical System Evaluation',
      'Power Quality Analysis',
      'Efficiency Recommendations',
      'Safety Compliance Check'
    ],
    images: [
      '/site-images/Nyanza Bottlers 1.jpeg',
      '/site-images/Nyanza Bottlers 2.jpeg',
      '/site-images/Nyanza Bottlers 3.jpeg',
      '/site-images/Nyanza Bottlers 4.jpeg',
      '/site-images/Nyanza Bottlers 5.jpeg',
      '/site-images/Nyanza Bottlers 6.jpeg',
      '/site-images/Nyanza Bottlers 7.jpeg',
      '/site-images/Nyanza Bottlers 8.jpeg'
    ],
    additionalDetails: 'The audit focused on identifying potential improvements in electrical efficiency, reducing downtime, and ensuring compliance with the latest industry standards and safety regulations.'
  },
  {
    id: 'ekaterra-uae',
    title: 'Ekaterra UAE - Central Palletizing System AMC',
    location: 'UAE',
    year: '2024',
    capacity: 'Central Palletizing System',
    description: 'Annual Maintenance Contract (AMC) intervention for the central palletizing system, ensuring optimal performance and minimal production downtime.',
    highlights: [
      'Central Palletizing System',
      'Preventive Maintenance',
      'Performance Optimization',
      'Downtime Reduction',
      'Technical Support'
    ],
    images: [
      '/site-images/Ekaterra UAE 1.jpeg',
      '/site-images/Ekaterra UAE 2.jpeg',
      '/site-images/Ekaterra UAE 3.jpeg',
      '/site-images/Ekaterra UAE 4.jpeg',
      '/site-images/Ekaterra UAE 5.jpeg',
      '/site-images/Ekaterra UAE 6.jpeg',
      '/site-images/Ekaterra UAE 7.jpeg',
      '/site-images/Ekaterra UAE 8.jpeg',
      '/site-images/Ekaterra UAE 9.jpeg'
    ],
    additionalDetails: 'Our AMC services included regular inspections, preventive maintenance, and immediate technical support to ensure the palletizing system operates at peak efficiency with minimal interruptions to production.'
  },
  {
    id: 'azania-distillers',
    title: 'Azania Distillers - Liquor Line Installation',
    location: 'Moshi, Tanzania',
    year: '2024',
    capacity: 'Full Production Line',
    description: 'Complete installation and commissioning of a state-of-the-art liquor production line, including equipment setup, process optimization, and operator training.',
    highlights: [
      'Liquor Production Line Installation',
      'Full Commissioning',
      'Process Optimization',
      'Quality Control Integration',
      'Operator Training'
    ],
    images: [
      '/site-images/Azania Distillers 1.jpeg',
      '/site-images/Azania Distillers  2.jpeg',
      '/site-images/Azania Distillers  3.jpeg',
      '/site-images/Azania Distillers 4.jpeg',
      '/site-images/Azania Distillers 5.jpeg',
      '/site-images/Azania Distillers 6.jpeg',
      '/site-images/Azania Distillers 7.jpeg'
    ],
    additionalDetails: 'The project involved the installation of a complete liquor production line, including fermentation, distillation, and bottling equipment, with a focus on efficiency, quality control, and compliance with industry standards.'
  },
  {
    id: 'eabl-nairobi',
    title: 'EABL PLC - Stacker/Destacker Electrical Installation',
    location: 'Nairobi, Kenya',
    year: '2024',
    capacity: 'Industrial Stacker/Destacker System',
    description: 'Electrical installation and commissioning of a stacker/destacker system for the production line, including control system integration and safety compliance.',
    highlights: [
      'Stacker/Destacker System',
      'Electrical Installation',
      'Control System Integration',
      'Safety Compliance',
      'Production Line Optimization'
    ],
    images: [
      '/site-images/EABL PLC 1.jpeg',
      '/site-images/EABL PLC 2.jpeg',
      '/site-images/EABL PLC 3.jpeg',
      '/site-images/EABL PLC 4.jpeg',
      '/site-images/EABL PLC 5.jpeg',
      '/site-images/EABL PLC 6.jpeg',
      '/site-images/EABL PLC 7.jpeg'
    ],
    additionalDetails: 'The installation included the complete electrical setup of the stacker/destacker system, ensuring seamless integration with existing production lines while adhering to the highest safety and efficiency standards.'
  }
];

export default projects;
