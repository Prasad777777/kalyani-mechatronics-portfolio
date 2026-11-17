export const profile = {
  name: 'Kalyani Asane',
  headline: 'Mechatronics Engineer',
  subheadline: 'Robotics & Automation Enthusiast | Japanese Language Learner',
  email: 'kalyaniasane01@gmail.com',
  phone: '+91 9371600715',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/kalyani-asane-aa4936290/',
  github: 'https://github.com/kalyaniasane98',
  summary: 'Mechatronics Engineering student with hands-on experience in automation, robotics and IoT. Interested in building practical engineering solutions that connect mechanical systems, electronics and software. Also passionate about learning Japanese language and culture.',
}

export const education = [
  { degree: 'B.Tech, Mechatronics Engineering', institution: 'Sanjivani College of Engineering, Kopargaon', period: '2023 – 2027', result: 'CGPA: 8.3' },
  { degree: 'Diploma', institution: 'Sanjivani KBP Polytechnic, Kopargaon', period: '2020 – 2022', result: '87.75% (MSBTE)' },
  { degree: 'Secondary School', institution: 'Sanjivani English Medium School', period: '2019 – 2020', result: '78.80% (SSC)' },
]

export const skillGroups = [
  { title: 'Mechatronics & Automation', items: ['PLC', 'Robotics', 'Automation', 'Embedded Systems', 'Manufacturing', 'CNC Operator'] },
  { title: 'Design & Engineering Tools', items: ['Creo', 'SOLIDWORKS', 'MATLAB'] },
  { title: 'Programming & IoT', items: ['Python', 'Embedded C', 'Arduino', 'IoT', 'Sensors'] },
  { title: 'Professional Skills', items: ['Communication', 'Active Listening', 'Conflict Resolution', 'Teamwork', 'Problem Solving'] },
]

export const projects = [
  {
    number: '01',
    title: 'Automated Medicine Dispensing System — Med Buddy',
    category: 'Embedded Systems · Healthcare',
    description: 'An Arduino Nano-based automated medicine dispensing concept designed to support timely medication through reminders, alarms and alerts.',
    highlights: ['Designed to help reduce missed medication doses', 'Reported 40% increase in timely medicine intake compared with manual tracking', 'Enabled timely alerts and updates for caregivers'],
    tools: ['Arduino Nano', 'Embedded C', 'Sensors', 'Alerts'],
    image: '/images/med-buddy.jpg',
  },
  {
    number: '02',
    title: 'Theo Jansen Mechanism Based Robot',
    category: 'Robotics · Mechanical Design',
    description: 'A multi-legged walking robot concept using a Theo Jansen mechanism, with ultrasonic sensing for obstacle detection and IoT data logging.',
    highlights: ['Stable locomotion with 6+ legs', 'Reported 95% obstacle detection accuracy using an ultrasonic sensor', 'Logged real-time sensor data on ThingSpeak'],
    tools: ['Robotics', 'Ultrasonic Sensor', 'ThingSpeak', 'Mechanical Design'],
    image: '/images/theo.png',
  },
  {
    number: '03',
    title: 'Home Automation Using Arduino',
    category: 'IoT · Home Automation',
    description: 'An Arduino Uno-based home automation system that controls household appliances through a Bluetooth-connected mobile interface.',
    highlights: ['Designed to control 5+ appliances', 'Integrated HC-05 Bluetooth module', 'Mobile control within a reported 10 m range'],
    tools: ['Arduino Uno', 'HC-05', 'Embedded C', 'Bluetooth'],
    image: '/images/home-automation-placeholder.svg',
  },
]

export const experience = [
  {
    role: 'Production Intern',
    company: 'OEN India Ltd.',
    period: 'December 2023 – March 2024',
    location: 'Pune, India',
    bullets: [
      'Collaborated with a team of 5+ senior engineers on automation and embedded systems, contributing to a reported 15% improvement in system efficiency.',
      'Participated in quality checks and assembly of relays, EV/EVSE contactors and electromechanical switches.',
      'Gained hands-on exposure to PLC programming, robotics and control systems.',
      'Contributed to prototyping and debugging activities.',
    ],
  },
]

export const certifications = [
  'JLPT N4 — Japan Foundation',
  'NAT Q5 — JLPT N5 equivalent',
  'Python — Coursera',
  'CNC Operator Turning — PMKVY',
  'Python Project — Great Learning',
  'Employment Communication — NPTEL',
]

export const achievements = [
  { title: 'NBA Accredited Poster Competition', result: 'Runner-up', detail: 'Poster competition recognition listed in the supplied CV.' },
  { title: 'Autonomous Line Follower Robot Workshop', result: '2nd Position', detail: 'Workshop achievement listed in the supplied CV.' },
]

export const publications = [
  {
    title: 'Leveraging Arduino Nano for Developing a User-Friendly and Automated Medicine Dispensing System',
    publisher: 'STM Journals',
    note: '',
    url: 'https://journals.stmjournals.com/joma/article=2026/view=241679/',
  },
  {
    title: 'An Intelligent Robotic Sorting and Predictive Maintenance System Using Machine Learning',
    publisher: 'ResearchGate',
    note: '',
    url: 'https://www.researchgate.net/publication/407462865_An_Intelligent_Robotic_Sorting_and_Predictive_Maintenance_System_Using_Machine_Learning',
  },
];