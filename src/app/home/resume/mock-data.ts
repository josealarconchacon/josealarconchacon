// mock-data.ts

export const personalInfo = {
  name: 'Jose Alarcon Chacon',
  email: 'jose.alarcon.chacon@gmail.com',
  phone: '510-820-4400',
  github: 'Github',
  linkedin: 'LinkedIn',
};

export const skills = [
  'HTML',
  'CSS',
  'AngularJS',
  'JavaScript',
  'TypeScript',
  'Swift',
  'Git',
  'GitHub',
  'Cloud Firestore',
  'Unix OS',
  'Data Structures',
  'Restful APIs',
  'CI/CD',
  'Jenkins',
  'SQL',
  'Azure Fundamentals',
];

export const experience = [
  {
    company: 'Wells Fargo',
    location: 'New York, NY',
    position: 'Software Engineering Apprentice',
    period: 'July, 2023 - June, 2024',
    responsibilities: [
      'Helped build a Single Order Entry application to be used by advisors to manage client holdings',
      'Used Angular, TypeScript, APIs, CI/CD, and Jenkins Pipeline',
    ],
  },
  {
    company: 'Power Consulting IT Services Company',
    location: 'New York, NY',
    position: 'Information Technology Intern',
    period: 'March, 2023 - June, 2023',
    responsibilities: [
      'Managed customer information via site configuration tool',
      'Provided technical support to customers using Autotask',
    ],
  },
  {
    company: 'Adam Holzrichter Charity Sale',
    location: 'Remote',
    position: 'Developer (Contract)',
    period: 'March, 2020 - July, 2020',
    responsibilities: [
      'Built a web portfolio displaying the art of Adam Holzrichter using HTML, CSS, Bootstrap, and JQuery',
      'Integrated domain name for deployment via Heroku',
    ],
  },
];

export const education = [
  {
    school: 'LaGuardia Community College',
    location: 'New York, NY',
    degree:
      'Associates of Applied Science (AAS) - Programming and Software Development',
    graduation: 'Graduated June, 2024',
    courses: [
      'Intro to Computer Science',
      'Web Development I & II',
      'Intro to Programming with Python',
      'Advanced C/C++',
      'Object-Oriented Programming',
      'Database Concepts',
      'Intro to Visual Programming',
      'UNIX Network Operating Systems',
      'Android App Development',
      'iOS Development',
      'Systems Analysis and Design',
    ],
  },
  {
    school: 'Pursuit (pursuit.org)',
    location: 'New York, NY',
    degree: 'iOS Development Fellow',
    period: 'September, 2018 - August, 2019',
    description:
      'Google-funded software engineering fellowship: Gained hands-on experience with Swift, Git, Data Structures, Algorithms, APIs, and tech principles and culture via team/individual projects, code reviews, and pair programming.',
  },
];

export const projects = [
  {
    name: 'Immigrant Reunification',
    github: 'GitHub',
    description:
      'Built a mobile application to reunite immigrants and refugees with their families after being separated while traveling',
    highlights: [
      'Allowed refugees or representatives the ability to enter contact information and upload photos via the app',
      'Utilized Firebase to store photos and match details',
      'Implemented Microsoft Cognitive Services APIs to compare photos and check for matches',
    ],
  },
];
