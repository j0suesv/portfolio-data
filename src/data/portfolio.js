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
    role: 'Data Analyst / Data Engineer',
    period: 'Apr 2025 – Present',
    current: true,
    description:
      'I work for a client with a product fully focused on data, as part of the Ingest team, where we ensure that the information used is accurate, reliable, and valuable for the company. On a daily basis I build, deploy, and maintain production data infrastructure, guaranteeing the quality and consistency of ingested data, which directly impacts client satisfaction, retention, and company revenue. Build and maintain scalable Python data pipelines on Snowflake and AWS, orchestrate production data workflows with Prefect and Airflow, and develop dbt models with ETL/ELT workflows integrating multiple data sources.',
    stack: ['Python', 'SQL', 'Snowflake', 'AWS', 'dbt', 'Prefect', 'Airflow', 'Jenkins', 'Docker'],
  },
  {
    icon: '📡',
    company: 'Allied Global / Quantica BPO',
    role: 'Data Analyst',
    period: 'Apr 2024 – May 2025',
    current: false,
    description:
      'Applied data analytics in the Business Assurance and Fraud Management department for a major US telecommunications client (Verizon), working under Scrum agile methodology. Used Python, SQL, Power BI, and Excel to identify patterns that impacted business processes and improved ETL workflows. Replaced manual reporting processes with automated solutions, reducing manual effort and improving consistency. Contributed to monitoring systems to ensure processes ran normally and to trigger alerts on unusual events.',
    stack: ['Python', 'SQL', 'Power BI', 'ETL', 'Business Assurance', 'Fraud Monitoring', 'Excel'],
  },
  {
    icon: '⚙️',
    company: 'Freelance Data Engineer (Independent)',
    role: 'Data Engineer',
    period: 'Aug 2023 – Feb 2024',
    current: false,
    description:
      'Delivered data engineering projects for small businesses across different industries, building pipelines, integrations, and dashboards tailored to each client\'s decision-making needs. Built and scheduled Python web scraping pipelines orchestrated with Airflow for a coworking company to benchmark event-venue pricing. Designed SQL-based dashboards for a school to make all data accessible in one place. Built and maintained ETL pipelines integrating 4 data sources to process transaction and customer-preference data for an e-commerce business.',
    stack: ['Python', 'SQL', 'Airflow', 'Web Scraping', 'ETL', 'Git', 'Dashboards'],
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
