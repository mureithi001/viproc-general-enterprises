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
  }
];

export default projects;
