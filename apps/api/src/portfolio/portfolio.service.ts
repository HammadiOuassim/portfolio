import { Injectable } from '@nestjs/common';
import { resolveContact } from './contact.config';
import { portfolioData, Portfolio } from './portfolio.data';

@Injectable()
export class PortfolioService {
  private withResolvedContact(): Portfolio {
    return {
      ...portfolioData,
      contact: resolveContact(portfolioData.contact),
    };
  }

  getPortfolio(): Portfolio {
    return this.withResolvedContact();
  }

  getProfile() {
    const { name, title, tagline, summary, contact } = this.withResolvedContact();
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
    return resolveContact(portfolioData.contact);
  }
}
