// ── CASE STUDIES ──────────────────────────────────────
// Each object maps to one case study page at /case-study/:slug
// DB-ready: flat structure, arrays can become child tables or JSON columns

export const caseStudies = [
  {
    slug: 'data-pipeline-api-snowflake',
    title: 'Data Pipeline: API → Snowflake',
    status: 'PIPELINE',
    tags: ['Python', 'Airflow', 'Snowflake', 'Docker'],
    summary:
      'End-to-end pipeline that extracts data from a REST API, applies transformation logic and loads it into Snowflake. Orchestrated with Airflow and containerized with Docker for consistent, repeatable runs.',
    problem:
      'The team was pulling data manually from a third-party REST API on a daily basis, copying results into spreadsheets and loading them into the warehouse by hand. This introduced delays, human error and made it impossible to scale as the number of endpoints grew.',
    solution:
      'Built a fully automated pipeline in Python that handles authentication, pagination and rate-limiting against the source API. Transformations are applied in-memory before the data is upserted into Snowflake using the Snowflake Python connector. The entire workflow is orchestrated as an Airflow DAG and deployed in Docker, making it portable and easy to run in any environment.',
    architecture: {
      diagram: 'REST API → Airflow DAG → Python Transform → Snowflake',
      steps: [
        { label: 'REST API', desc: 'Authenticated extraction with pagination and retry logic' },
        { label: 'Airflow DAG', desc: 'Schedules and monitors each pipeline run with alerting on failure' },
        { label: 'Python Transform', desc: 'Cleans, validates and reshapes the raw JSON payload' },
        { label: 'Snowflake', desc: 'Upsert into target tables using MERGE statements' },
      ],
    },
    results: [
      { metric: '100%', label: 'Manual work eliminated' },
      { metric: '< 5 min', label: 'Pipeline run time' },
      { metric: '0', label: 'Data errors since launch' },
    ],
    stack: ['Python', 'Apache Airflow', 'Snowflake', 'Docker', 'REST APIs', 'SQL'],
    learnings:
      'Idempotency matters more than speed. Designing the pipeline to be safely re-runnable from any point saved significant debugging time when upstream API outages caused partial runs.',
    github: '#',
  },
  {
    slug: 'telecom-data-usage-analytics',
    title: 'Telecom Data Usage Analytics',
    status: 'ANALYTICS',
    tags: ['Python', 'SQL', 'Power BI'],
    summary:
      'Analysis of data consumption patterns across telecom plans to identify user behavior trends and operational anomalies for a US telecom client.',
    problem:
      'The client had millions of rows of usage data spread across multiple systems with no single view of customer behavior. Business teams were making plan-pricing decisions based on intuition rather than data, and anomalies like unusually high usage spikes were going undetected until they became billing issues.',
    solution:
      'Consolidated usage data from three source systems into a unified SQL model. Built Python scripts to detect behavioral patterns and flag anomalies using statistical thresholds. Delivered a Power BI dashboard giving the business team a live view of plan performance, usage distribution and anomaly alerts.',
    architecture: {
      diagram: 'Raw Data Sources → SQL Model → Python Analysis → Power BI',
      steps: [
        { label: 'Raw Data Sources', desc: 'Three separate systems: billing, network logs, CRM exports' },
        { label: 'SQL Model', desc: 'Unified schema with cleansed, deduplicated records' },
        { label: 'Python Analysis', desc: 'Statistical anomaly detection and usage segmentation' },
        { label: 'Power BI', desc: 'Interactive dashboard with drill-through by plan and region' },
      ],
    },
    results: [
      { metric: '3x', label: 'Faster anomaly detection' },
      { metric: '1 view', label: 'Unified across 3 systems' },
      { metric: '-30%', label: 'Billing dispute rate' },
    ],
    stack: ['Python', 'SQL', 'Power BI', 'Excel', 'Statistical Analysis'],
    learnings:
      'Data consolidation is half the work. Getting stakeholders to agree on a single definition of "active user" took longer than building the pipeline itself — but it made every downstream metric trustworthy.',
    github: '#',
  },
  {
    slug: 'fraud-detection-monitoring',
    title: 'Fraud Detection Monitoring',
    status: 'MONITORING',
    tags: ['Python', 'SQL', 'Alerting'],
    summary:
      'Anomaly detection system for Business Assurance. Monitors operational processes in real-time and triggers alerts when irregular patterns are identified in telecom operations.',
    problem:
      'Fraudulent activity and operational anomalies in telecom systems were being caught days after occurring, by which point the financial damage was already done. The existing review process was entirely manual and could not keep up with the volume of events.',
    solution:
      'Designed a monitoring system that runs continuous queries against live operational data and applies rule-based and statistical anomaly detection. When a threshold is breached, the system fires alerts to the relevant team via automated notifications. Built dashboards to give the fraud team real-time visibility without needing to write queries themselves.',
    architecture: {
      diagram: 'Live Operational Data → Detection Engine → Alert System → Dashboard',
      steps: [
        { label: 'Live Operational Data', desc: 'Real-time feed from telecom operational systems' },
        { label: 'Detection Engine', desc: 'Rule-based checks combined with statistical outlier detection' },
        { label: 'Alert System', desc: 'Automated notifications triggered when thresholds are breached' },
        { label: 'Dashboard', desc: 'Real-time visibility for the fraud and assurance team' },
      ],
    },
    results: [
      { metric: 'Real-time', label: 'Detection vs. days before' },
      { metric: '80%', label: 'Reduction in manual review' },
      { metric: 'Proactive', label: 'Shift from reactive response' },
    ],
    stack: ['Python', 'SQL', 'Alerting Systems', 'Statistical Methods', 'Power BI'],
    learnings:
      'Alert fatigue is a real failure mode. After launch, too many false positives caused the team to start ignoring alerts. Tuning thresholds based on feedback loops was as important as building the detection logic itself.',
    github: '#',
  },
  {
    slug: 'etl-automation-framework',
    title: 'ETL Automation Framework',
    status: 'AUTOMATION',
    tags: ['Python', 'Airflow', 'Cloud'],
    summary:
      'Reusable framework for automating data pipelines with built-in orchestration, error handling, retry logic and monitoring dashboards to reduce manual work across the data team.',
    problem:
      'Each new data pipeline was being built from scratch, duplicating the same boilerplate for logging, error handling, retries and alerting. This made pipelines inconsistent, hard to maintain and slow to build — every engineer had their own patterns.',
    solution:
      'Built a shared Python framework with standardized connectors, a common logging interface, retry decorators and a base DAG template for Airflow. New pipelines are created by extending the base classes and filling in the source/destination logic. A monitoring dashboard gives a unified view of all pipeline runs and their health.',
    architecture: {
      diagram: 'Data Sources → Framework DAGs → Cloud Storage → BI Layer',
      steps: [
        { label: 'Data Sources', desc: 'Pluggable connectors: APIs, databases, file systems' },
        { label: 'Framework DAGs', desc: 'Base Airflow DAG with shared retry, logging and alerting' },
        { label: 'Cloud Storage', desc: 'Intermediate landing zone before warehouse load' },
        { label: 'BI Layer', desc: 'Downstream tools consume from the standardized warehouse layer' },
      ],
    },
    results: [
      { metric: '-60%', label: 'Time to build new pipelines' },
      { metric: '1 pattern', label: 'Standardized across the team' },
      { metric: 'Auto', label: 'Retry and alerting built-in' },
    ],
    stack: ['Python', 'Apache Airflow', 'Cloud (AWS / Azure)', 'Docker', 'SQL'],
    learnings:
      'Flexibility vs. convention is a constant tradeoff. The framework needed to be opinionated enough to enforce consistency but flexible enough that engineers would actually use it rather than work around it.',
    github: '#',
  },
]
