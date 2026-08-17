import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('api/portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getPortfolio() {
    return this.portfolioService.getPortfolio();
  }

  @Get('profile')
  getProfile() {
    return this.portfolioService.getProfile();
  }

  @Get('skills')
  getSkills() {
    return this.portfolioService.getSkills();
  }

  @Get('experience')
  getExperience() {
    return this.portfolioService.getExperience();
  }

  @Get('projects')
  getProjects() {
    return this.portfolioService.getProjects();
  }

  @Get('education')
  getEducation() {
    return this.portfolioService.getEducation();
  }

  @Get('contact')
  getContact() {
    return this.portfolioService.getContact();
  }
}
