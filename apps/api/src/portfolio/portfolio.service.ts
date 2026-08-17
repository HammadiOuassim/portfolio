import { Injectable } from '@nestjs/common';
import { portfolioData, Portfolio } from './portfolio.data';

@Injectable()
export class PortfolioService {
  getPortfolio(): Portfolio {
    return portfolioData;
  }

  getProfile() {
    const { name, title, tagline, summary, contact } = portfolioData;
    return { name, title, tagline, summary, contact };
  }

  getSkills() {
    return portfolioData.skills;
  }

  getExperience() {
    return portfolioData.experience;
  }

  getProjects() {
    const standalone = portfolioData.projects;
    const fromExperience = portfolioData.experience.flatMap(
      (exp) => exp.projects ?? [],
    );
    return [...fromExperience, ...standalone];
  }

  getEducation() {
    return {
      education: portfolioData.education,
      training: portfolioData.training,
    };
  }

  getContact() {
    return portfolioData.contact;
  }
}
