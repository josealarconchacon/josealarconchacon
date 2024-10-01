export interface Environment {
  production: boolean;
  resume: string;
  apiUrl: string;
}

export const environment: Environment = {
  production: false,
  resume: '../assets/resume/Jose Carlos Alarcon Chacon Resume.pdf',
  apiUrl: 'http://localhost:3000',
};
