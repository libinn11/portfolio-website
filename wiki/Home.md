# Portfolio Website Wiki

## Overview

This is a modern Angular portfolio website built with Angular 18+ and Server-Side Rendering (SSR) using Angular Universal. The portfolio showcases professional experience, skills, projects, and education in a clean, responsive design.

## Architecture

### Technology Stack
- **Frontend**: Angular 18+, TypeScript, SCSS
- **Backend**: Node.js (for SSR)
- **Build Tool**: Angular CLI
- **Package Manager**: npm
- **Deployment**: Ready for static hosting

### Project Structure
```
src/
├── app/
│   ├── components/          # Angular components
│   │   ├── about/          # About section
│   │   ├── contact/        # Contact form
│   │   ├── education/       # Education timeline
│   │   ├── experience/      # Work experience
│   │   ├── footer/          # Footer component
│   │   ├── header/          # Navigation header
│   │   ├── home/           # Main layout
│   │   ├── projects/        # Projects showcase
│   │   └── skills/          # Skills display
│   ├── services/             # Data services
│   └── models/              # TypeScript interfaces
├── assets/                 # Static assets
└── styles.scss             # Global styles
```

## Features

### ✨ Core Features
- **Server-Side Rendering (SSR)** - Improved SEO and performance
- **Standalone Components** - Modern Angular architecture
- **JSON-Driven Content** - Easy data management
- **Responsive Design** - Mobile-first approach
- **Smooth Navigation** - Section-to-section scrolling
- **Professional Styling** - Modern gradient design

### 🎨 UI Components

#### Header Component
- Sticky navigation bar
- Professional gradient background
- Social media links
- Responsive menu

#### About Section
- Profile image display
- Professional summary
- Contact information grid
- Card-based layout

#### Skills Section
- Categorized skill display
- Technology tags
- Progress indicators

#### Experience Section
- Timeline-based layout
- Company details
- Technology stack per role
- Duration information

#### Projects Section
- Project cards with descriptions
- Technology stack tags
- Clean, minimal design
- No external links (as requested)

#### Education Section
- Academic timeline
- Degree information
- Institution details
- Graduation dates

#### Contact Section
- Contact form
- Social media integration
- Professional appearance

#### Footer Component
- Copyright information
- Additional links
- Consistent branding

## Data Management

### Profile Data Structure
The portfolio uses a single JSON file (`public/profile.json`) with the following structure:

```json
{
  "basicInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your Location",
    "about": "Professional summary...",
    "profileImage": "/assets/images/profile.jpg"
  },
  "socialLinks": [
    { "platform": "LinkedIn", "url": "https://linkedin.com/in/yourprofile" },
    { "platform": "GitHub", "url": "https://github.com/yourusername" },
    { "platform": "Email", "url": "mailto:your.email@example.com" }
  ],
  "skills": [
    { "category": "Frontend", "items": ["Angular", "TypeScript", "HTML", "CSS"] },
    { "category": "Backend", "items": ["Node.js", "Express", "MongoDB"] }
  ],
  "experience": [
    {
      "company": "Company Name",
      "role": "Your Role",
      "duration": "Start Date - End Date",
      "description": "Role description...",
      "technologies": ["Tech1", "Tech2", "Tech3"]
    }
  ],
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description...",
      "techStack": ["Tech1", "Tech2", "Tech3"]
    }
  ],
  "education": [
    {
      "degree": "Degree Name",
      "institution": "Institution Name",
      "duration": "Start Year - End Year",
      "description": "Program details..."
    }
  ]
}
```

## UI Flow Chart

### User Journey
```
┌─────────────────┐
│   Header Nav    │  ← Sticky navigation
├─────────────────┤
│   About Section │  ← Professional intro
├─────────────────┤
│   Skills Section │  ← Technical skills
├─────────────────┤
│  Experience     │  ← Work timeline
├─────────────────┤
│   Projects      │  ← Project showcase
├─────────────────┤
│   Education     │  ← Academic background
├─────────────────┤
│   Contact       │  ← Get in touch
├─────────────────┤
│   Footer        │  └─ Site info
└─────────────────┘
```

### Component Interaction Flow
```
App Component
    │
    ├── Header Component (Navigation)
    │   ├── Logo/Brand
    │   ├── Navigation Links
    │   └── Social Links
    │
    ├── Home Component (Layout)
    │   ├── About Component
    │   │   ├── Profile Image
    │   │   ├── Personal Info
    │   │   └── Contact Details
    │   │
    │   ├── Skills Component
    │   │   ├── Skill Categories
    │   │   └── Technology Tags
    │   │
    │   ├── Experience Component
    │   │   ├── Timeline Layout
    │   │   └── Company Cards
    │   │
    │   ├── Projects Component
    │   │   ├── Project Cards
    │   │   └── Tech Stacks
    │   │
    │   ├── Education Component
    │   │   ├── Timeline Layout
    │   │   └── Institution Cards
    │   │
    │   ├── Contact Component
    │   │   ├── Contact Form
    │   │   └── Social Integration
    │   │
    │   └── Footer Component
    │       ├── Copyright
    │       └── Links
    │
    └── Profile Service (Data Layer)
        ├── HTTP Client
        └── JSON Data Fetch
```

## UI Page Screenshots

### Desktop View
```
┌─────────────────────────────────────────────────────────────────┐
│  Header (Gradient Blue)                                 │
│  [Logo] [About] [Skills] [Exp] [Proj] [Edu] [Contact] │
├─────────────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ About Section                                        │ │
│  │ [Profile Image]  Professional Summary                 │ │
│  │ Contact: 📧 📱 📍                               │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                         │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Skills Section                                       │ │
│  │ Frontend: [Angular] [TypeScript] [HTML] [CSS]      │ │
│  │ Backend:  [Node.js] [Express] [MongoDB]           │ │
│  │ DevOps:   [Docker] [CI/CD] [AWS]                │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                         │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Experience Timeline                                   │ │
│  │ ┌─────────────────────────────────────────────────────┐   │ │
│  │ │ Company 1 - Role (Duration)                   │   │ │
│  │ │ Description and Technologies                      │   │ │
│  │ └─────────────────────────────────────────────────────┘   │ │
│  │ ┌─────────────────────────────────────────────────────┐   │ │
│  │ │ Company 2 - Role (Duration)                   │   │ │
│  │ │ Description and Technologies                      │   │ │
│  │ └─────────────────────────────────────────────────────┘   │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                         │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Projects Grid                                        │ │
│  │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │ │
│  │ │ Project 1    │ │ Project 2    │ │ Project 3    │ │ │
│  │ │ Description   │ │ Description   │ │ Description   │ │ │
│  │ │ [Tech Stack] │ │ [Tech Stack] │ │ [Tech Stack] │ │ │
│  │ └─────────────┘ └─────────────┘ └─────────────┘ │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                         │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Contact Form                                         │ │
│  │ ┌─────────────────────────────────────────────────────┐   │ │
│  │ │ Name: [____________]                         │   │ │
│  │ │ Email: [____________]                         │   │ │
│  │ │ Message: [_________________________]          │   │ │
│  │ │                                     [Send] │   │ │
│  │ └─────────────────────────────────────────────────────┘   │ │
│  │ Social Links: [LinkedIn] [GitHub] [Email]        │ │
│  └─────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│  Footer (Copyright Info)                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile View
```
┌─────────────────────────┐
│ Header              │
│ [☰] [Your Name]   │
├─────────────────────────┤
│                     │
│ About Section        │
│ [Profile Image]     │
│ Professional Summary │
│ Contact Info        │
├─────────────────────────┤
│                     │
│ Skills Section      │
│ Frontend Skills    │
│ Backend Skills     │
│ DevOps Skills      │
├─────────────────────────┤
│                     │
│ Experience         │
│ ┌─────────────────┐ │
│ │ Company 1      │ │
│ │ Role & Duration│ │
│ │ Technologies    │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Company 2      │ │
│ │ Role & Duration│ │
│ │ Technologies    │ │
│ └─────────────────┘ │
├─────────────────────────┤
│                     │
│ Projects           │
│ ┌─────────────────┐ │
│ │ Project 1      │ │
│ │ Description    │ │
│ │ Tech Stack     │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Project 2      │ │
│ │ Description    │ │
│ │ Tech Stack     │ │
│ └─────────────────┘ │
├─────────────────────────┤
│                     │
│ Contact            │
│ ┌─────────────────┐ │
│ │ Contact Form    │ │
│ │ Name           │ │
│ │ Email          │ │
│ │ Message        │ │
│ │ [Send Button]  │ │
│ └─────────────────┘ │
│ Social Links       │
├─────────────────────────┤
│ Footer             │
│ Copyright © 2024   │
└─────────────────────────┘
```

## Development Workflow

### Getting Started
1. **Clone the repository**
   ```bash
   git clone https://github.com/libinn11/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### Code Style Guidelines
- Use TypeScript for all components
- Follow Angular best practices
- Implement responsive design
- Use SCSS for styling
- Maintain clean component structure

### Branch Strategy
- `main` - Production-ready code
- `feature/*` - New features and enhancements
- `bugfix/*` - Bug fixes and patches

## Deployment

### Build Process
```bash
# Development build
npm run build

# Production build (SSR)
npm run build:ssr

# Preview build
npm run preview
```

### Deployment Options
- **Static Hosting**: Vercel, Netlify, GitHub Pages
- **Cloud Hosting**: AWS S3 + CloudFront, Azure Static
- **Traditional Hosting**: Any web server with static file support

## Contributing

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
6. Wait for review and merge

### Issue Reporting
- Use GitHub Issues for bug reports
- Provide detailed reproduction steps
- Include browser and environment information
- Add screenshots for UI issues

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support:
- **GitHub Issues**: Create an issue in the repository
- **Email**: libinn11@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/libin-c-jacob-81738439

---

*Last updated: February 2026*
