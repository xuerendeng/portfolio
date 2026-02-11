
export interface Experience {
  title: string;
  role: string;
  period: string;
  description: string[];
  type: 'AI' | 'Data' | 'Internship';
}

export interface Education {
  school: string;
  major: string;
  period: string;
  gpa?: string;
  details: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
