// ── HERO ──────────────────────────────────────────────
export const hero = {
  name: 'Josué Salcedo',
  title: 'Data Engineer',
  subtitle: 'Data Analyst',
  tagline: 'Building Scalable Data Systems',
  description:
    'I design data pipelines, automate data workflows and transform raw data into reliable insights.',
  location: 'Barranquilla, Colombia',
  available: true,
  availableText: 'Available for opportunities',
  portraitSrc: '/images/profile_image.jpg',
}

// ── ABOUT ─────────────────────────────────────────────
export const about = {
  paragraphs: [
    'I’m a <strong>Data Analyst transitioning into Data Engineering</strong>, currently working with international clients on data-focused products. My day-to-day revolves around making sure data is reliable, well-structured and actually useful for decision-making.',
    
    'I have hands-on experience working with <strong>data ingestion, ETL pipelines, data cleaning, transformation and data quality processes</strong>. I enjoy taking messy, unstructured data and turning it into clean, reliable datasets that can be used confidently across the business.',
    
    'I’ve also worked on <strong>process automation and pipeline optimization</strong>, helping teams reduce manual work, improve data reliability and scale their data operations more efficiently.'
  ],
  evolving:
    'Currently focused on growing into a Data Engineer role — building stronger skills in data pipelines, cloud technologies and scalable data architectures.',
  stats: [
    { num: '2+',  label: 'Years of Experience' },
    { num: 'ETL', label: 'Pipeline Automation'        },
    { num: 'US',  label: 'Client Market'              },
    { num: '∞',   label: 'Data Processed'             },
  ],
}

// ── TECH STACK ────────────────────────────────────────
export const stack = [
  {
    category: 'Languages',
    items: [
      { icon: '/icons/python-original.svg', name: 'Python' },
      { icon: '/icons/azuresqldatabase-original.svg', name: 'SQL' },
      { icon: '/icons/bash-original.svg', name: 'Bash' },
      { icon: '/icons/javascript-original.svg', name: 'JavaScript' },
    ],
  },
  {
    category: 'Data Engineering',
    items: [
      { icon: '/icons/apacheairflow-original.svg', name: 'Airflow' },
      { icon: '/icons/apachekafka.svg', name: 'Kafka' },
      { icon: '/icons/apachespark-original.svg', name: 'Spark' },
      { icon: '/icons/prefect.svg', name: 'Prefect' },
    ],
  },
  {
    category: 'Cloud & Data Platforms',
    items: [
      { icon: '/icons/aws.svg', name: 'AWS' },
      { icon: '/icons/azure-original.svg', name: 'Azure' },
      { icon: '/icons/snowflake.svg', name: 'Snowflake' },
    ],
  },
  {
    category: 'BI & Analytics',
    items: [
      { icon: '/icons/powerbi.svg', name: 'Power BI' },
      { icon: '/icons/looker.svg', name: 'Looker' },
    ],
  },
  {
    category: 'Tools & Dev',
    items: [
      { icon: '/icons/git.svg', name: 'Git' },
      { icon: '/icons/linux.svg', name: 'Linux' },
      { icon: '/icons/docker.svg', name: 'Docker' },
      { icon: '/icons/excel.svg', name: 'Excel' },
    ],
  },
]

// ── PROJECTS ──────────────────────────────────────────
export const projects = [
  {
    icon: '🔄',
    status: 'PIPELINE',
    title: 'Data Pipeline: API → Snowflake',
    description:
      'Python pipeline that extracts data from a REST API, applies transformation logic and loads it into Snowflake. Orchestrated with Airflow and containerized with Docker.',
    architecture: 'API → Airflow DAG → Transform → Snowflake',
    tags: ['Python', 'Airflow', 'Snowflake', 'Docker'],
    github: '#',
    caseStudy: '/case-study/data-pipeline-api-snowflake',
  },
  {
    icon: '📡',
    status: 'ANALYTICS',
    title: 'Telecom Data Usage Analytics',
    description:
      'Analysis of data consumption patterns across telecom plans to identify user behavior trends and operational anomalies for a US telecom client.',
    architecture: 'Raw Data → SQL → Python → Power BI',
    tags: ['Python', 'SQL', 'Power BI'],
    github: '#',
    caseStudy: '/case-study/telecom-data-usage-analytics',
  },
  {
    icon: '🛡️',
    status: 'MONITORING',
    title: 'Fraud Detection Monitoring',
    description:
      'Anomaly detection system for Business Assurance. Monitors operational processes in real-time and triggers alerts when irregular patterns are identified.',
    architecture: 'Live Data → Anomaly Detection → Alerts',
    tags: ['Python', 'SQL', 'Alerting'],
    github: '#',
    caseStudy: '/case-study/fraud-detection-monitoring',
  },
  {
    icon: '⚙️',
    status: 'AUTOMATION',
    title: 'ETL Automation Framework',
    description:
      'Reusable framework for automating data pipelines with built-in orchestration, error handling, retry logic and monitoring dashboards.',
    architecture: 'Sources → Framework DAGs → Cloud → BI',
    tags: ['Python', 'Airflow', 'Cloud'],
    github: '#',
    caseStudy: '/case-study/etl-automation-framework',
  },
]

// ── ARCHITECTURE ──────────────────────────────────────
export const architecture = [
  {
    header: 'Data Sources',
    items: [
      { name: 'REST APIs',  desc: 'JSON · GraphQL'   },
      { name: 'Databases',  desc: 'SQL · NoSQL'       },
      { name: 'Files',      desc: 'CSV · Parquet'     },
      { name: 'Streams',    desc: 'Kafka · Events'    },
    ],
  },
  {
    header: 'ETL Pipelines',
    items: [
      { name: 'Airflow', desc: 'Orchestration'        },
      { name: 'Python',  desc: 'Transform · Validate' },
      { name: 'Spark',   desc: 'Large-scale Processing' },
      { name: 'Docker',  desc: 'Containerization'     },
    ],
  },
  {
    header: 'Data Warehouse',
    items: [
      { name: 'Snowflake', desc: 'Cloud DWH'          },
      { name: 'Azure',     desc: 'Data Lake · Synapse' },
      { name: 'AWS S3',    desc: 'Object Storage'      },
      { name: 'SQL',       desc: 'Analytics Layer'     },
    ],
  },
  {
    header: 'BI & Analytics',
    items: [
      { name: 'Power BI',   desc: 'Dashboards'        },
      { name: 'Looker',     desc: 'Exploration'        },
      { name: 'Monitoring', desc: 'Alerts · Anomalies' },
      { name: 'Reports',    desc: 'Business Insights'  },
    ],
  },
]

// ── EXPERIENCE ────────────────────────────────────────
export const experience = [
  {
    icon: '📊',
    company: 'Loopstudio',
    role: 'Data Analyst',
    period: 'Apr 2025 – Present',
    current: true,
    description:
      'Working as part of the Ingest team for a data-focused product, ensuring that the information used across the platform is accurate, reliable and valuable for the company. Responsibilities include leading the integration of new clients into the platform, building and maintaining analytical reports, automating manual data processes and supporting data-driven decision making. Optimized the new customer onboarding process by 40%, reduced report delivery times and built pipelines that allow immediate data mapping.',
    stack: ['Python', 'SQL', 'Data Ingestion', 'ETL Pipelines', 'Data Quality', 'Automation'],
  },
  {
    icon: '📡',
    company: 'Allied Global / Quantica BPO',
    role: 'Data Analyst',
    period: 'Apr 2024 – May 2025',
    current: false,
    description:
      'Worked in the Business Assurance and Fraud Management department for a major telecommunications client in the United States. Used Python, SQL, Power BI and Excel to analyze large datasets, identify patterns affecting business processes, improve ETL workflows and build monitoring systems that detect unusual events in telecom operations.',
    stack: ['Python', 'SQL', 'Power BI', 'ETL', 'Business Assurance', 'Fraud Monitoring'],
  },
  {
    icon: '💻',
    company: 'Macondo Tech',
    role: 'Frontend Development Intern',
    period: 'Feb 2024 – May 2024',
    current: false,
    description:
      'Worked on frontend development for a responsive web application using modern web technologies. Contributed to building interactive interfaces using HTML, CSS, JavaScript and React while gaining experience in collaborative software development.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Frontend Development'],
  },
]

// ── CONTACT ───────────────────────────────────────────
export const contact = {
  phrase: "Let's build data systems that make businesses smarter.",
  links: [
    { icon: '📧', label: 'Email',    value: 'salcedojosue095@gmail.com',             href: 'mailto:salcedojosue095@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/josué-salcedo-623b76230',  href: 'https://linkedin.com/in/josué-salcedo-623b76230' },
    { icon: '🐙', label: 'GitHub',   value: 'github.com/j0suesv',       href: 'https://github.com/j0suesv' },
  ],
}
